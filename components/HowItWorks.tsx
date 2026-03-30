"use client";

import { motion } from "framer-motion";
import { ShoppingCart, Copy, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: ShoppingCart,
    title: "Purchase Once",
    desc: "Complete checkout in under 60 seconds via Stripe. Your card is charged $49 exactly once — no subscription, no hidden fees, ever.",
    detail: "You'll receive an instant confirmation email with your access link.",
    color: "blue",
  },
  {
    number: "02",
    icon: Copy,
    title: "Duplicate to Notion",
    desc: "Click the private link on your thank-you page. In Notion, hit the blue \"Duplicate\" button. The entire 12-dashboard workspace copies to your account in seconds.",
    detail: "Works on Notion free tier. No paid Notion plan required.",
    color: "green",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Start Using Today",
    desc: "Open the Master Home Dashboard and follow the Quick-Start Guide. Most users have their tasks, goals, and projects fully loaded within one afternoon.",
    detail: "The 25-page PDF walks you through every dashboard step by step.",
    color: "blue",
  },
];

const whoFor = [
  { emoji: "👩‍💻", title: "Entrepreneurs & Founders", desc: "Manage multiple projects, track revenue goals, and keep your team aligned — all in one place." },
  { emoji: "🎓", title: "Students & Academics", desc: "Capture lectures, track deadlines, build a personal knowledge base, and never miss an assignment." },
  { emoji: "✍️", title: "Content Creators", desc: "Plan, draft, and publish across platforms with a full content pipeline and idea capture system." },
  { emoji: "💼", title: "Professionals & Managers", desc: "Stay on top of meetings, projects, and relationships. Never drop a ball again." },
  { emoji: "🏠", title: "Anyone Overwhelmed by Life Admin", desc: "If you have too many tabs open and too many things to track — this was built for you." },
];

export function HowItWorks() {
  return (
    <>
      {/* How It Works */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <p className="text-brand-blue-400 font-semibold text-sm tracking-widest uppercase mb-3">
              Simple setup
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
              Up and Running in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue-400 to-brand-green-400">
                Under 5 Minutes
              </span>
            </h2>
            <p className="text-dark-muted text-lg max-w-xl mx-auto">
              No setup guides to watch. No developer required. Three clicks and you&apos;re in.
            </p>
          </motion.div>

          <div className="relative">
            {/* Connector line */}
            <div className="hidden md:block absolute top-14 left-[calc(16.67%+24px)] right-[calc(16.67%+24px)] h-px bg-gradient-to-r from-brand-blue-500/40 via-brand-green-500/40 to-brand-blue-500/40" />

            <div className="grid md:grid-cols-3 gap-8">
              {steps.map((step, i) => {
                const Icon = step.icon;
                const isBlue = step.color === "blue";
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.15 }}
                    className="flex flex-col items-center text-center"
                  >
                    {/* Icon circle */}
                    <div
                      className={`relative w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ring-4 ${
                        isBlue
                          ? "bg-brand-blue-500/20 ring-brand-blue-500/20"
                          : "bg-brand-green-500/20 ring-brand-green-500/20"
                      }`}
                    >
                      <Icon
                        className={`w-6 h-6 ${
                          isBlue ? "text-brand-blue-400" : "text-brand-green-400"
                        }`}
                      />
                      <span
                        className={`absolute -top-2 -right-2 w-5 h-5 rounded-full text-[10px] font-black flex items-center justify-center ${
                          isBlue
                            ? "bg-brand-blue-600 text-white"
                            : "bg-brand-green-600 text-white"
                        }`}
                      >
                        {i + 1}
                      </span>
                    </div>

                    <h3 className="text-white font-bold text-lg mb-3">{step.title}</h3>
                    <p className="text-dark-muted text-sm leading-relaxed mb-3">{step.desc}</p>
                    <p
                      className={`text-xs font-semibold ${
                        isBlue ? "text-brand-blue-400" : "text-brand-green-400"
                      }`}
                    >
                      {step.detail}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Who Is This For */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-card/30">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <p className="text-brand-blue-400 font-semibold text-sm tracking-widest uppercase mb-3">
              Who it&apos;s for
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
              Built for Anyone Who{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue-400 to-brand-green-400">
                Has Too Much Going On
              </span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {whoFor.map((w, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="rounded-xl border border-dark-border bg-dark-card p-5 hover:border-brand-blue-500/40 transition-colors"
              >
                <div className="text-2xl mb-3">{w.emoji}</div>
                <h3 className="text-white font-bold text-sm mb-2">{w.title}</h3>
                <p className="text-dark-muted text-xs leading-relaxed">{w.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Not for */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="mt-6 rounded-xl border border-dark-border bg-dark-card p-5"
          >
            <p className="text-dark-muted text-sm">
              <span className="text-white font-semibold">Not the right fit if:</span>{" "}
              You prefer fully automated tools that do everything for you with zero input.
              This is a Notion workspace — it gives you the structure, but you fill it.
              Most people find that 10 minutes a day is enough to keep it running.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
