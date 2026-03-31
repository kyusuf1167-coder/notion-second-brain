"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, XCircle, Zap } from "lucide-react";
import { useState } from "react";

const included = [
  "12 fully-built Notion dashboards (not empty shells)",
  "Pre-loaded sample data so you see exactly how to use each dashboard",
  "How-to guide inside every dashboard — no YouTube tutorials needed",
  "GTD task system with 5 statuses + daily workflow built-in",
  "Goals & OKR tracker with annual → quarterly → weekly cascade",
  "Habit tracker with streak counters (66-day system)",
  "Finance dashboard — income, expenses, savings goals & net worth",
  "Knowledge base with tags, ratings & key takeaway fields",
  "Project Hub with health scores, board & list views",
  "Idea Incubator with potential vs. effort rating matrix",
  "Daily journal with mood, energy & gratitude tracking",
  "Reading list with author, notes & rating (5-star system)",
  "Resource library — tools, courses & links, all searchable",
  "Weekly planner with theme, Top 3 goals & review prompts",
  "25-page Quick-Start PDF guide included",
  "30-Day Second Brain Challenge calendar",
  "Lifetime access + all future updates — free forever",
  "30-day money-back guarantee, no questions asked",
];

const notIncluded = [
  "Notion subscription (free tier works fine)",
  "Monthly or yearly fees of any kind",
];

const competitors = [
  { name: "Hiring a VA to organise your systems", price: "$500+/mo", included: false },
  { name: "Productivity coaching sessions",        price: "$200+",   included: false },
  { name: "Other Notion template bundles",         price: "$79–$199",included: false },
  { name: "The Ultimate 2026 Second Brain",        price: "$49",     included: true  },
];

export function Pricing() {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", { method: "POST" });
      const data = await res.json() as { url?: string; error?: string };
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert(data.error ?? "Something went wrong. Please try again.");
      }
    } catch {
      alert("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-brand-blue-700/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-brand-blue-400 font-semibold text-sm tracking-widest uppercase mb-3">
            Simple pricing
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            One Price.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue-400 to-brand-green-400">
              Everything. Forever.
            </span>
          </h2>
          <p className="text-dark-muted text-lg max-w-xl mx-auto">
            No subscription. No upsells. One payment and it&apos;s yours for life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Pricing card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 rounded-2xl border-2 border-brand-blue-500/60 bg-dark-card relative overflow-hidden"
          >
            {/* Popular badge */}
            <div className="absolute top-0 right-6 bg-gradient-to-r from-brand-blue-600 to-brand-green-600 text-white text-xs font-black px-4 py-1.5 rounded-b-xl">
              BEST VALUE
            </div>

            <div className="p-8">
              {/* Price */}
              <div className="mb-8">
                <div className="flex items-start gap-2 mb-1">
                  <span className="text-dark-muted line-through text-lg mt-3">$147</span>
                  <span className="text-6xl font-black text-white">$49</span>
                </div>
                <p className="text-dark-muted text-sm">
                  One-time payment · Instant delivery · Lifetime updates
                </p>
                <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-xs font-semibold">
                  <Zap className="w-3 h-3" /> Launch week pricing — expires soon
                </div>
              </div>

              {/* CTA */}
              <Button
                size="xl"
                onClick={handleCheckout}
                loading={loading}
                className="w-full mb-6 text-base"
              >
                Get Instant Access — $49
              </Button>

              <p className="text-center text-dark-muted text-xs mb-8">
                🔒 Secure checkout via Stripe · 30-day money-back guarantee
              </p>

              {/* Included list */}
              <ul className="space-y-2.5">
                {included.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-white/80">
                    <CheckCircle2 className="w-4 h-4 text-brand-green-400 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Not included */}
              <div className="mt-6 pt-6 border-t border-dark-border">
                {notIncluded.map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-sm text-dark-muted mb-2">
                    <XCircle className="w-4 h-4 text-dark-muted/50 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Comparison table */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <h3 className="text-white font-bold text-lg mb-4">
              How does it compare?
            </h3>
            <div className="space-y-3">
              {competitors.map((c, i) => (
                <div
                  key={i}
                  className={`rounded-xl p-4 border ${
                    c.included
                      ? "border-brand-blue-500/50 bg-brand-blue-900/20"
                      : "border-dark-border bg-dark-card"
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <p className={`text-sm font-medium ${c.included ? "text-white" : "text-dark-muted"}`}>
                      {c.name}
                    </p>
                    <span
                      className={`text-sm font-black flex-shrink-0 ${
                        c.included ? "text-brand-blue-300" : "text-dark-muted"
                      }`}
                    >
                      {c.price}
                    </span>
                  </div>
                  {c.included && (
                    <p className="text-xs text-brand-green-400 mt-1 font-semibold">
                      ✓ Best value
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Trust badges */}
            <div className="mt-8 space-y-3">
              {[
                { emoji: "🔒", label: "256-bit SSL encryption" },
                { emoji: "💳", label: "Secure payment via Stripe" },
                { emoji: "↩️", label: "30-day no-questions refund" },
                { emoji: "⚡", label: "Instant delivery after purchase" },
              ].map((b, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-dark-muted">
                  <span className="text-base">{b.emoji}</span>
                  {b.label}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
