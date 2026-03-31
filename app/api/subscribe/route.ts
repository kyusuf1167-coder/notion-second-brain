import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// POST /api/subscribe  — Lead magnet email delivery
// Body: { email: string }

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  if (!email || !email.includes("@")) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json({ error: "Email service not configured" }, { status: 500 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://secondbrainvault.com";
  const templateUrl = process.env.NEXT_PUBLIC_NOTION_TEMPLATE_URL ?? "";

  try {
    await resend.emails.send({
      from: "Second Brain Vault <onboarding@resend.dev>",
      to: email,
      subject: "🎁 Your Free 7-Day Focus Sprint Template is here!",
      html: `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#0a0b0f;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;color:#e5e7eb;">
  <div style="max-width:600px;margin:0 auto;padding:40px 24px;">

    <div style="text-align:center;margin-bottom:32px;">
      <div style="font-size:48px;margin-bottom:8px;">🎁</div>
      <h1 style="margin:0;font-size:26px;font-weight:800;color:#fff;">Your Free Template is Ready!</h1>
      <p style="margin:12px 0 0;color:#9ca3af;font-size:16px;">The 7-Day Focus Sprint — ship your most important project this week.</p>
    </div>

    <div style="background:#111827;border:1px solid #1f2937;border-radius:16px;padding:32px;text-align:center;margin-bottom:24px;">
      <p style="color:#9ca3af;font-size:14px;margin:0 0 16px;">Click below to duplicate the template into your Notion workspace:</p>
      <a href="${templateUrl}" style="display:inline-block;background:linear-gradient(135deg,#10b981,#059669);color:#fff;font-weight:700;font-size:16px;padding:16px 32px;border-radius:12px;text-decoration:none;">
        Open Free Template in Notion →
      </a>
    </div>

    <div style="background:#111827;border:1px solid #1f2937;border-radius:16px;padding:24px;margin-bottom:24px;">
      <h2 style="margin:0 0 16px;font-size:16px;font-weight:700;color:#fff;">What's inside the 7-Day Focus Sprint:</h2>
      <ul style="margin:0;padding-left:20px;color:#9ca3af;font-size:14px;line-height:2;">
        <li>📌 One clear goal for the week</li>
        <li>📅 Daily task breakdown (Morning / Afternoon / Evening)</li>
        <li>✅ End-of-day check-in prompts</li>
        <li>🔄 Daily habits tracker (7-day streak view)</li>
        <li>🏁 Sunday review template to lock in your progress</li>
      </ul>
    </div>

    <div style="background:#0f1d12;border:1px solid #14532d;border-radius:12px;padding:16px 20px;margin-bottom:32px;">
      <p style="margin:0;font-size:14px;color:#86efac;"><strong>💡 Want the full system?</strong> The Ultimate 2026 Second Brain has 12 dashboards, pre-loaded sample data, and built-in how-to guides — everything connected. <a href="${siteUrl}/#pricing" style="color:#34d399;">Get it for $49 →</a></p>
    </div>

    <p style="text-align:center;color:#6b7280;font-size:13px;">
      Questions? Reply to this email · <a href="${siteUrl}" style="color:#60a5fa;">secondbrainvault.com</a>
    </p>

  </div>
</body>
</html>`,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[subscribe] Email error:", err);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
