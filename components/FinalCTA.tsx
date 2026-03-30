"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Shield, Zap, RefreshCw, ArrowRight } from "lucide-react";
import { useState } from "react";

const guarantees = [
  {
    icon:  Shield,
    title: "30-Day Money-Back",
    desc:  "Not happy? Email us within 30 days for a full refund — zero questions asked.",
    color: "blue",
  },
  {
    icon:  Zap,
    title: "Instant Access",
    desc:  "Your duplicate link appears on the thank-you page the second payment clears.",
    color: "green",
  },
  {
    icon:  RefreshCw,
    title: "Lifetime Updates",
    desc:  "Every new template we ship — forever. You'll never pay for an upgrade.",
    color: "blue",
  },
];

export function FinalCTA() {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const res  = await fetch("/api/checkout", { method: "POST" });
      const data = await res.json() as { url?: string; error?: string };
      if (data.url) window.location.href = data.url;
      else alert(data.error ?? "Something went wrong.");
    } catch {
      alert("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-blue-900/10 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-brand-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-brand-blue-400 font-semibold text-sm tracking-widest uppercase mb-4">
            Ready to get organised?
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-white mb-6 leading-tight">
            Build Your Second Brain.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue-400 to-brand-green-400">
              Start Today.
            </span>
          </h2>
          <p className="text-dark-muted text-lg mb-10 max-w-2xl mx-auto">
            Join 2,400+ people who replaced chaos with clarity. One
            Notion workspace. 12 dashboards. 50+ templates. Yours forever for $49.
          </p>

          {/* Guarantees */}
          <div className="grid sm:grid-cols-3 gap-4 mb-12">
            {guarantees.map((g, i) => {
              const Icon = g.icon;
              const isBlue = g.color === "blue";
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="rounded-xl bg-dark-card border border-dark-border p-5 text-center"
                >
                  <div
                    className={`w-10 h-10 rounded-xl mx-auto mb-3 flex items-center justify-center ${
                      isBlue ? "bg-brand-blue-500/15" : "bg-brand-green-500/15"
                    }`}
                  >
                    <Icon
                      className={`w-5 h-5 ${
                        isBlue ? "text-brand-blue-400" : "text-brand-green-400"
                      }`}
                    />
                  </div>
                  <p className="text-white font-bold text-sm mb-1">{g.title}</p>
                  <p className="text-dark-muted text-xs leading-relaxed">{g.desc}</p>
                </motion.div>
              );
            })}
          </div>

          {/* CTA button */}
          <Button
            size="xl"
            onClick={handleCheckout}
            loading={loading}
            className="text-lg px-12 py-5 rounded-2xl shadow-2xl shadow-brand-blue-700/40 mb-4"
          >
            Get Instant Access — $49{" "}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>

          <p className="text-dark-muted text-sm">
            🔒 Secure checkout · Instant delivery · 30-day refund guarantee
          </p>
        </motion.div>
      </div>
    </section>
  );
}
