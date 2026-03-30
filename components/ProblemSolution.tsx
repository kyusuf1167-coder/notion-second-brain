"use client";

import { motion } from "framer-motion";
import { XCircle, CheckCircle2 } from "lucide-react";

const problems = [
  "Scattered notes across 5 different apps",
  "Forgetting tasks, meetings, and follow-ups",
  "No system for capturing ideas before they vanish",
  "Projects stall because nothing is tracked in one place",
  "Spending 30 min/day just hunting for information",
  "New Year goals abandoned by February",
];

const solutions = [
  "One Notion workspace — everything linked, nothing lost",
  "Automated task system with reminders and priorities",
  "Instant capture → auto-filed in the right database",
  "Project dashboards with statuses, timelines & owners",
  "Powerful filtered views find anything in seconds",
  "Goal tracker with weekly check-ins baked in",
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show:   (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" },
  }),
};

export function ProblemSolution() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-brand-blue-400 font-semibold text-sm tracking-widest uppercase mb-3">
            Sound familiar?
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Your Brain Wasn&apos;t Built to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
              Hold Everything
            </span>
          </h2>
          <p className="text-dark-muted text-lg max-w-2xl mx-auto">
            The average knowledge worker loses{" "}
            <span className="text-white font-semibold">2.5 hours per day</span>{" "}
            to disorganisation. That&apos;s 625+ hours a year you could reclaim.
          </p>
        </motion.div>

        {/* Before / After grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* BEFORE */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-red-500/20 bg-red-500/5 p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-red-500/20 flex items-center justify-center">
                <XCircle className="w-5 h-5 text-red-400" />
              </div>
              <div>
                <p className="text-red-400 font-bold text-sm uppercase tracking-wider">Before</p>
                <p className="text-white font-semibold">Without a Second Brain</p>
              </div>
            </div>
            <ul className="space-y-3">
              {problems.map((p, i) => (
                <motion.li
                  key={i}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="flex items-start gap-3 text-dark-muted"
                >
                  <XCircle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{p}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* AFTER */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-brand-green-600/30 bg-brand-green-500/5 p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-brand-green-500/20 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-brand-green-400" />
              </div>
              <div>
                <p className="text-brand-green-400 font-bold text-sm uppercase tracking-wider">After</p>
                <p className="text-white font-semibold">With Your Second Brain</p>
              </div>
            </div>
            <ul className="space-y-3">
              {solutions.map((s, i) => (
                <motion.li
                  key={i}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-4 h-4 text-brand-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-white/90">{s}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
