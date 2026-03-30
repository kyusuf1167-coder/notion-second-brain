import Stripe from "stripe";

// ─────────────────────────────────────────────────────────────────────────────
// Stripe client — server-side only
//
// TO GO LIVE: replace STRIPE_SECRET_KEY in .env.local with your live key
//   sk_test_... → sk_live_...
// ─────────────────────────────────────────────────────────────────────────────

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error("Missing STRIPE_SECRET_KEY environment variable");
}

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2025-01-27.acacia",
  typescript: true,
});

/** The product price ID — set STRIPE_PRICE_ID in .env.local */
export const PRICE_ID = process.env.STRIPE_PRICE_ID ?? "";

/** Absolute URL for redirects — set NEXT_PUBLIC_SITE_URL in .env.local */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
