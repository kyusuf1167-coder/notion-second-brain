"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ArrowRight, Star, Users, Zap } from "lucide-react";
import { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.12 } },
};

export function Hero() {
  const [loading, setLoading] = useState(false);

  const handleBuy = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Background glow */}
      <div className="absolute inset-0 bg-hero-gradient pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-blue-700/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto w-full py-20 lg:py-32">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div variants={fadeUp} className="mb-6 flex justify-center">
            <Badge variant="blue">
              <Zap className="w-3 h-3" /> New for 2026 — Lifetime Access
            </Badge>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-[1.08] tracking-tight mb-6"
          >
            Stop Drowning in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue-400 to-brand-green-400">
              Tabs, Notes &amp; To-Dos.
            </span>{" "}
            Run Your Whole Life From One Notion Workspace.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeUp}
            className="text-lg sm:text-xl text-dark-muted max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            The Ultimate 2026 Notion Second Brain bundles{" "}
            <span className="text-white font-semibold">12 pre-built dashboards</span>,
            50+ templates, and a full GTD system — so you can capture everything,
            forget nothing, and ship what matters.
          </motion.p>

          {/* CTA */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Button
              size="xl"
              onClick={handleBuy}
              loading={loading}
              className="w-full sm:w-auto text-lg px-10 py-5 rounded-2xl shadow-2xl shadow-brand-blue-700/40"
            >
              Get Instant Access — $49{" "}
              <ArrowRight className="w-5 h-5 ml-1" />
            </Button>
            <p className="text-dark-muted text-sm">
              30-day money-back guarantee · No subscription
            </p>
          </motion.div>

          {/* Social proof strip */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10"
          >
            <SocialProofStat icon={<Users className="w-5 h-5 text-brand-blue-400" />} value="2,400+" label="Creators using it" />
            <div className="hidden sm:block w-px h-8 bg-dark-border" />
            <SocialProofStat
              icon={
                <span className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </span>
              }
              value="4.9 / 5"
              label="Average rating"
            />
            <div className="hidden sm:block w-px h-8 bg-dark-border" />
            <SocialProofStat icon={<Zap className="w-5 h-5 text-brand-green-400" />} value="< 5 min" label="Setup time" />
          </motion.div>
        </motion.div>

        {/* Dashboard preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          className="mt-16 relative max-w-5xl mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden border border-dark-border shadow-2xl shadow-black/50">
            {/* Fake browser chrome */}
            <div className="bg-dark-card px-4 py-3 flex items-center gap-2 border-b border-dark-border">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
              </div>
              <div className="ml-4 flex-1 bg-dark-bg rounded-md px-3 py-1 text-xs text-dark-muted max-w-xs">
                notion.so/your-second-brain
              </div>
            </div>
            {/* Dashboard preview image placeholder */}
            <div className="bg-dark-card aspect-[16/9] flex items-center justify-center relative overflow-hidden">
              {/* Grid lines background */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    "linear-gradient(#3b82f620 1px, transparent 1px), linear-gradient(90deg, #3b82f620 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />
              {/* Fake dashboard widgets */}
              <div className="absolute inset-4 grid grid-cols-3 gap-3">
                {[
                  { title: "Daily Dashboard",  color: "blue",  h: "row-span-2" },
                  { title: "Project Tracker",  color: "green", h: "" },
                  { title: "Goals 2026",       color: "blue",  h: "" },
                  { title: "Habit Tracker",    color: "green", h: "" },
                  { title: "Knowledge Base",   color: "blue",  h: "" },
                  { title: "Finance Hub",      color: "green", h: "" },
                ].map((w, i) => (
                  <div
                    key={i}
                    className={`rounded-xl bg-dark-bg border border-dark-border p-3 flex flex-col gap-2 ${w.h}`}
                  >
                    <div
                      className={`w-full h-1.5 rounded-full bg-gradient-to-r ${
                        w.color === "blue"
                          ? "from-brand-blue-600 to-brand-blue-400"
                          : "from-brand-green-600 to-brand-green-400"
                      }`}
                    />
                    <p className="text-xs text-white font-semibold">{w.title}</p>
                    <div className="flex-1 flex flex-col gap-1">
                      {[...Array(3)].map((_, j) => (
                        <div key={j} className="h-1 rounded bg-dark-border w-full" style={{ width: `${60 + j * 15}%` }} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="relative z-10 flex flex-col items-center gap-2 opacity-0">
                <p className="text-dark-muted text-sm">Dashboard Preview</p>
              </div>
            </div>
          </div>
          {/* Glow under the preview */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-2/3 h-20 bg-brand-blue-600/20 blur-2xl rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}

function SocialProofStat({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div className="flex items-center gap-2.5">
      {icon}
      <div className="text-left">
        <p className="text-white font-bold text-lg leading-none">{value}</p>
        <p className="text-dark-muted text-xs">{label}</p>
      </div>
    </div>
  );
}
