"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Gift, Mail } from "lucide-react";
import { useState } from "react";

export function LeadMagnet() {
  const [email,     setEmail]     = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading,   setLoading]   = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);

    // ─────────────────────────────────────────────────────────────────────────
    // TO WIRE UP EMAIL DELIVERY:
    //   Option A — Resend:    POST /api/subscribe with { email }
    //   Option B — Mailchimp: POST /api/subscribe with { email }
    //   Add the corresponding API route that calls the provider SDK.
    // ─────────────────────────────────────────────────────────────────────────
    await new Promise((r) => setTimeout(r, 800)); // placeholder delay

    setSubmitted(true);
    setLoading(false);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-brand-green-600/30 bg-gradient-to-br from-brand-green-900/20 to-dark-card p-8 sm:p-10 text-center relative overflow-hidden"
        >
          {/* Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[150px] bg-brand-green-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative">
            <div className="w-14 h-14 rounded-2xl bg-brand-green-500/20 flex items-center justify-center mx-auto mb-5">
              <Gift className="w-7 h-7 text-brand-green-400" />
            </div>

            <p className="text-brand-green-400 font-semibold text-sm tracking-widest uppercase mb-3">
              Free mini template
            </p>
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">
              Get the &ldquo;7-Day Focus Sprint&rdquo; Template Free
            </h2>
            <p className="text-dark-muted text-sm max-w-xl mx-auto mb-8 leading-relaxed">
              A lightweight Notion planner that helps you ship your most important
              project in 7 days — no overwhelm, no decision fatigue. Delivered
              instantly to your inbox. No credit card required.
            </p>

            {submitted ? (
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-brand-green-500/20 flex items-center justify-center">
                  <span className="text-2xl">✓</span>
                </div>
                <p className="text-white font-semibold">
                  Check your inbox! 🎉
                </p>
                <p className="text-dark-muted text-sm">
                  Your free template is on its way.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              >
                <div className="flex-1 relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-dark-muted" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full bg-dark-bg border border-dark-border rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder:text-dark-muted focus:outline-none focus:ring-2 focus:ring-brand-green-500/50 focus:border-brand-green-500/50 transition"
                  />
                </div>
                <Button
                  type="submit"
                  variant="secondary"
                  size="md"
                  loading={loading}
                  className="flex-shrink-0"
                >
                  Send It Free
                </Button>
              </form>
            )}

            <p className="text-dark-muted text-xs mt-4">
              No spam, ever. Unsubscribe in one click.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
