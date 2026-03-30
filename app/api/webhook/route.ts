import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import Stripe from "stripe";
import { Resend } from "resend";

// ─────────────────────────────────────────────────────────────────────────────
// POST /api/webhook  — Stripe webhook handler
//
// This endpoint receives events from Stripe (e.g. successful payments) and
// can trigger post-purchase actions like sending delivery emails.
//
// SETUP:
//   1. Install Stripe CLI:     brew install stripe/stripe-cli/stripe
//   2. Login:                  stripe login
//   3. Forward to local:       stripe listen --forward-to localhost:3000/api/webhook
//   4. Copy the webhook secret shown by the CLI → STRIPE_WEBHOOK_SECRET in .env.local
//
//   In Production:
//   - Add your deployed URL as a webhook endpoint in Stripe Dashboard → Developers → Webhooks
//   - Add these events: checkout.session.completed, payment_intent.succeeded
//   - Copy the signing secret → add to Vercel environment variables
// ─────────────────────────────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  const body      = await req.text();
  const signature = req.headers.get("stripe-signature");

  if (!signature) {
    return NextResponse.json({ error: "Missing stripe-signature header" }, { status: 400 });
  }

  if (!process.env.STRIPE_WEBHOOK_SECRET) {
    console.error("[webhook] STRIPE_WEBHOOK_SECRET is not set");
    return NextResponse.json({ error: "Webhook secret not configured" }, { status: 500 });
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error("[webhook] Signature verification failed:", err);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  // ── Handle events ────────────────────────────────────────────────────────
  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object as Stripe.Checkout.Session;

      const customerEmail = session.customer_details?.email;
      const customerId    = session.customer as string | null;
      const sessionId     = session.id;

      console.log(`[webhook] checkout.session.completed — session: ${sessionId}, email: ${customerEmail}`);

      if (customerEmail) {
        const resend = new Resend(process.env.RESEND_API_KEY);
        const notionLink = process.env.NEXT_PUBLIC_NOTION_TEMPLATE_URL ?? "";
        const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://secondbrainvault.com";

        await resend.emails.send({
          from: "Second Brain Vault <onboarding@resend.dev>",
          to: customerEmail,
          subject: "🧠 Your Second Brain is ready — here's your access link!",
          html: `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#0a0b0f;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;color:#e5e7eb;">
  <div style="max-width:600px;margin:0 auto;padding:40px 24px;">

    <div style="text-align:center;margin-bottom:32px;">
      <div style="font-size:48px;margin-bottom:8px;">🧠</div>
      <h1 style="margin:0;font-size:28px;font-weight:800;color:#fff;">Your Second Brain is Ready!</h1>
      <p style="margin:12px 0 0;color:#9ca3af;font-size:16px;">Thanks for your purchase. Click below to duplicate your workspace.</p>
    </div>

    <div style="background:#111827;border:1px solid #1f2937;border-radius:16px;padding:32px;text-align:center;margin-bottom:24px;">
      <a href="${notionLink}" style="display:inline-block;background:linear-gradient(135deg,#3b82f6,#2563eb);color:#fff;font-weight:700;font-size:16px;padding:16px 32px;border-radius:12px;text-decoration:none;">
        Open &amp; Duplicate in Notion →
      </a>
      <p style="margin:20px 0 0;color:#6b7280;font-size:13px;">Or copy this link: <a href="${notionLink}" style="color:#60a5fa;">${notionLink}</a></p>
    </div>

    <div style="background:#111827;border:1px solid #1f2937;border-radius:16px;padding:24px;margin-bottom:24px;">
      <h2 style="margin:0 0 16px;font-size:16px;font-weight:700;color:#fff;text-transform:uppercase;letter-spacing:0.05em;">Getting started in 3 steps</h2>
      <ol style="margin:0;padding-left:20px;color:#9ca3af;font-size:14px;line-height:1.8;">
        <li>Click <strong style="color:#e5e7eb;">"Open &amp; Duplicate in Notion"</strong> above</li>
        <li>In Notion, click the blue <strong style="color:#e5e7eb;">"Duplicate"</strong> button in the top right</li>
        <li>Start with the <strong style="color:#e5e7eb;">🏠 Master Home Dashboard</strong> — it links everything together</li>
      </ol>
    </div>

    <div style="background:#0f1d12;border:1px solid #14532d;border-radius:12px;padding:16px 20px;margin-bottom:32px;">
      <p style="margin:0;font-size:14px;color:#86efac;"><strong>🎁 Bonus:</strong> Your 25-page Quick-Start PDF is inside the workspace under <code style="background:#14532d;padding:2px 6px;border-radius:4px;">📚 Resources → Quick Start Guide</code></p>
    </div>

    <p style="text-align:center;color:#6b7280;font-size:13px;">
      Questions? Reply to this email or reach us at <a href="mailto:hello@secondbrainvault.com" style="color:#60a5fa;">hello@secondbrainvault.com</a>
    </p>

  </div>
</body>
</html>`,
        });

        console.log(`[webhook] Delivery email sent to ${customerEmail}`);
      }

      break;
    }

    case "payment_intent.succeeded": {
      const paymentIntent = event.data.object as Stripe.PaymentIntent;
      console.log(`[webhook] payment_intent.succeeded — id: ${paymentIntent.id}, amount: ${paymentIntent.amount}`);
      break;
    }

    default:
      // Unhandled event — log and ignore
      console.log(`[webhook] Unhandled event type: ${event.type}`);
  }

  return NextResponse.json({ received: true });
}
