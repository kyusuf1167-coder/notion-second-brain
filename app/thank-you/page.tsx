import { Metadata } from "next";
import { stripe }   from "@/lib/stripe";
import { redirect }  from "next/navigation";
import { CheckCircle2, Copy, ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thank You — Your Second Brain is Ready!",
  description: "Access your Notion Second Brain template instantly.",
  robots: { index: false, follow: false }, // Keep this page private
};

// ─────────────────────────────────────────────────────────────────────────────
// /thank-you?session_id=cs_test_...
//
// This page is shown after successful Stripe payment.
// It verifies the session server-side before showing the template link.
// ─────────────────────────────────────────────────────────────────────────────

async function getSession(sessionId: string) {
  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    return session.payment_status === "paid" ? session : null;
  } catch {
    return null;
  }
}

export default async function ThankYouPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>;
}) {
  const params    = await searchParams;
  const sessionId = params.session_id;

  // Redirect to home if no session_id (someone navigated here directly)
  if (!sessionId) redirect("/");

  const session = await getSession(sessionId);
  if (!session) redirect("/");

  const customerEmail  = session.customer_details?.email ?? "";
  const notionLink     = process.env.NEXT_PUBLIC_NOTION_TEMPLATE_URL ?? "#";

  return (
    <main className="min-h-screen bg-dark-bg flex items-center justify-center px-4 py-16">
      <div className="max-w-2xl w-full">
        {/* Success card */}
        <div className="rounded-2xl border border-brand-green-600/40 bg-dark-card p-8 sm:p-12 text-center">
          {/* Success icon */}
          <div className="w-16 h-16 rounded-full bg-brand-green-500/20 flex items-center justify-center mx-auto mb-6 ring-4 ring-brand-green-500/10">
            <CheckCircle2 className="w-8 h-8 text-brand-green-400" />
          </div>

          <h1 className="text-2xl sm:text-3xl font-black text-white mb-3">
            🎉 Your Second Brain is Ready!
          </h1>
          <p className="text-dark-muted mb-8">
            {customerEmail && (
              <>
                A confirmation has been sent to{" "}
                <span className="text-white font-medium">{customerEmail}</span>.{" "}
              </>
            )}
            Click the button below to duplicate your Notion workspace instantly.
          </p>

          {/* Primary CTA */}
          <a
            href={notionLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-brand-blue-600 to-brand-blue-700 text-white font-bold text-base hover:from-brand-blue-500 hover:to-brand-blue-600 transition-all shadow-lg shadow-brand-blue-700/30 mb-6"
          >
            Open & Duplicate in Notion
            <ExternalLink className="w-4 h-4" />
          </a>

          {/* Copy link */}
          {notionLink !== "#" && (
            <div className="mt-4 flex items-center gap-2 bg-dark-bg rounded-xl px-4 py-3 text-sm text-dark-muted border border-dark-border">
              <span className="flex-1 truncate text-left">{notionLink}</span>
              <CopyButton text={notionLink} />
            </div>
          )}

          {/* Step-by-step instructions */}
          <div className="mt-10 text-left">
            <h2 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">
              Getting started in 3 steps
            </h2>
            <ol className="space-y-3">
              {[
                "Click \"Open & Duplicate in Notion\" above.",
                "In Notion, click the blue \"Duplicate\" button in the top right.",
                "The workspace is now in your Notion — start with the Home Dashboard!",
              ].map((step, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-dark-muted">
                  <span className="w-6 h-6 rounded-full bg-brand-blue-500/20 text-brand-blue-400 font-bold text-xs flex-shrink-0 flex items-center justify-center mt-0.5">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </div>

          {/* Bonus reminder */}
          <div className="mt-8 p-4 rounded-xl bg-dark-bg border border-dark-border text-left">
            <p className="text-white font-semibold text-sm mb-1">
              🎁 Don&apos;t forget your bonus!
            </p>
            <p className="text-dark-muted text-xs">
              The 25-page Quick-Start PDF is inside the Notion workspace under{" "}
              <code className="text-brand-blue-300 bg-brand-blue-900/30 px-1.5 py-0.5 rounded">
                📚 Resources → Quick Start Guide
              </code>
              .
            </p>
          </div>

          {/* Support & back home */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-dark-muted">
            <a
              href="mailto:hello@secondbrain.so"
              className="text-brand-blue-400 hover:underline"
            >
              Need help? Email us
            </a>
            <span className="hidden sm:block">·</span>
            <Link href="/" className="flex items-center gap-1 hover:text-white transition-colors">
              Back to homepage <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Share card */}
        <div className="mt-6 rounded-2xl border border-dark-border bg-dark-card p-6 text-center">
          <p className="text-white font-semibold mb-1">
            Loving it? Share with a friend 🙏
          </p>
          <p className="text-dark-muted text-xs mb-4">
            Every share helps us keep the price low and ship more templates.
          </p>
          <a
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent("Just set up my 2026 Notion Second Brain — 12 dashboards, 50+ templates, one workspace. Highly recommend:")}&url=${encodeURIComponent(process.env.NEXT_PUBLIC_SITE_URL ?? "https://secondbrain.so")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-black border border-white/10 text-white text-sm font-semibold hover:bg-white/5 transition-colors"
          >
            Share on X / Twitter
          </a>
        </div>
      </div>
    </main>
  );
}

// Client component for copy-to-clipboard (inlined to keep page as server component)
function CopyButton({ text }: { text: string }) {
  // This is rendered server-side — the actual click handler is added via
  // a small inline script so we stay a server component for caching benefits.
  return (
    <button
      data-copy={text}
      aria-label="Copy link"
      className="text-dark-muted hover:text-white transition-colors flex-shrink-0"
      onClick={undefined}
    >
      <Copy className="w-4 h-4" />
    </button>
  );
}
