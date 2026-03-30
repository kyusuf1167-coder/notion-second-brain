import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import Stripe from "stripe";

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

      // ── TODO: Add email delivery here ────────────────────────────────────
      // Option A — Resend:
      //   import { Resend } from 'resend';
      //   const resend = new Resend(process.env.RESEND_API_KEY);
      //   await resend.emails.send({
      //     from:    'noreply@secondbrain.so',
      //     to:      customerEmail!,
      //     subject: 'Your Second Brain is ready! 🚀',
      //     html:    `<p>Here's your duplicate link: ${process.env.NEXT_PUBLIC_NOTION_TEMPLATE_URL}</p>`,
      //   });
      //
      // Option B — Mailchimp (add customer to list):
      //   await fetch(`https://us1.api.mailchimp.com/3.0/lists/${process.env.MAILCHIMP_AUDIENCE_ID}/members`, {
      //     method: 'POST',
      //     headers: { Authorization: `Basic ${Buffer.from(`anystring:${process.env.MAILCHIMP_API_KEY}`).toString('base64')}` },
      //     body: JSON.stringify({ email_address: customerEmail, status: 'subscribed', tags: ['purchaser'] }),
      //   });

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
