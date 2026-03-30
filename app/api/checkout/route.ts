import { NextResponse } from "next/server";
import { stripe, PRICE_ID, SITE_URL } from "@/lib/stripe";

// ─────────────────────────────────────────────────────────────────────────────
// POST /api/checkout
//
// Creates a Stripe Checkout Session for the $49 one-time product.
//
// TO GO LIVE:
//   1. Swap STRIPE_SECRET_KEY in .env.local: sk_test_... → sk_live_...
//   2. Swap NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: pk_test_... → pk_live_...
//   3. Create the product in Stripe Dashboard (live mode) and update STRIPE_PRICE_ID.
// ─────────────────────────────────────────────────────────────────────────────

export async function POST() {
  // Validate env
  if (!PRICE_ID) {
    return NextResponse.json(
      { error: "STRIPE_PRICE_ID is not set. Add it to .env.local." },
      { status: 500 }
    );
  }

  try {
    const session = await stripe.checkout.sessions.create({
      mode:                "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          price:    PRICE_ID,
          quantity: 1,
        },
      ],
      // Redirect to the protected thank-you page on success
      success_url: `${SITE_URL}/thank-you?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url:  `${SITE_URL}/#pricing`,

      // Collect billing address for tax purposes (optional — remove if not needed)
      // billing_address_collection: "required",

      // Collect customer email for follow-up delivery
      customer_creation: "always",

      // Metadata for your records & webhook handler
      metadata: {
        product: "notion-second-brain-2026",
      },

      // Allow promotion codes (create them in Stripe Dashboard)
      allow_promotion_codes: true,
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("[/api/checkout] Stripe error:", err);
    return NextResponse.json(
      { error: "Failed to create checkout session. Please try again." },
      { status: 500 }
    );
  }
}
