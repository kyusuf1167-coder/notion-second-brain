"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Database, FileText, Zap, Gift } from "lucide-react";

const deliverables = [
  {
    category: "12 Pre-Built Dashboards",
    icon: Database,
    color: "blue",
    value: "$197",
    items: [
      "🏠 Master Home Dashboard — live KPIs, today's tasks, active projects, habits at a glance",
      "🎯 Goals & OKR Tracker — annual → quarterly → weekly goal cascade with progress %",
      "✅ GTD Task Manager — full inbox → next actions → waiting → someday system",
      "📚 Knowledge Base — bi-directional linked notes, tags, search, and resurfacing",
      "🚀 Project Hub — board + list + timeline views, linked tasks, owners, status",
      "📅 Weekly & Daily Planner — time-blocked template with energy zones & deep work",
      "💪 Habit Tracker — 66-day streaks, completion rates, monthly momentum chart",
      "💰 Finance Dashboard — income, expenses, savings goals, net worth over time",
      "📓 Daily Journal — gratitude, wins, reflections, linked to habits and goals",
      "💡 Idea Incubator — capture, rate, develop, and revisit ideas on a schedule",
      "📖 Reading List — books + articles with notes, ratings, and key takeaways",
      "🔗 Resource Library — tagged bookmarks, tools, courses — all searchable",
    ],
  },
  {
    category: "50+ Templates & Databases",
    icon: FileText,
    color: "green",
    value: "$79",
    items: [
      "Meeting notes template (linked to projects + action items)",
      "Weekly review template with built-in prompts",
      "Quarterly planning template",
      "SOP / process documentation template",
      "Content calendar with multi-platform status tracking",
      "Book summary template with key concepts + quotes",
      "Daily standup template for remote teams",
      "Personal CRM — track people, conversations & follow-ups",
      "Decision log — capture context behind key decisions",
      "20+ more page templates for every area of life",
    ],
  },
  {
    category: "Pre-Wired Formulas & Automations",
    icon: Zap,
    color: "blue",
    value: "$97",
    items: [
      "Auto-calculated goal completion % across time periods",
      "Habit streak counter that resets automatically",
      "Net worth formula updating from income/expense entries",
      "Priority score formula (urgency × importance)",
      "DSCR & ROI formulas in the finance tracker",
      "Days-since-last-contact formula in the CRM",
      "Project health score based on tasks and deadlines",
      "Content readiness score across pipeline stages",
    ],
  },
  {
    category: "Bonuses Included Free",
    icon: Gift,
    color: "green",
    value: "$47",
    items: [
      "25-page Quick-Start PDF Guide — zero to fully set up in one afternoon",
      "30-day Second Brain challenge calendar",
      "Notion keyboard shortcuts cheat sheet",
      "Personalisation recipes for 5 common use cases",
      "Lifetime updates — all future templates and improvements included",
      "Priority email support within 24 hours",
    ],
  },
];

const totalValue = "$420";
const yourPrice = "$49";

export function WhatYouGet() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-dark-card/30">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-brand-blue-400 font-semibold text-sm tracking-widest uppercase mb-3">
            Everything included
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Here&apos;s Exactly{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue-400 to-brand-green-400">
              What You&apos;re Getting
            </span>
          </h2>
          <p className="text-dark-muted text-lg max-w-2xl mx-auto">
            No vague promises. Here&apos;s the complete inventory of every template,
            formula, and resource inside the bundle.
          </p>
        </motion.div>

        {/* Deliverable blocks */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {deliverables.map((d, i) => {
            const Icon = d.icon;
            const isBlue = d.color === "blue";
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`rounded-2xl border p-6 ${
                  isBlue
                    ? "border-brand-blue-500/30 bg-brand-blue-900/10"
                    : "border-brand-green-600/30 bg-brand-green-900/10"
                }`}
              >
                {/* Category header */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                        isBlue
                          ? "bg-brand-blue-500/20"
                          : "bg-brand-green-500/20"
                      }`}
                    >
                      <Icon
                        className={`w-4 h-4 ${
                          isBlue ? "text-brand-blue-400" : "text-brand-green-400"
                        }`}
                      />
                    </div>
                    <h3 className="text-white font-bold text-sm">{d.category}</h3>
                  </div>
                  <div className="text-right">
                    <p className="text-dark-muted text-xs line-through">{d.value} value</p>
                  </div>
                </div>

                {/* Item list */}
                <ul className="space-y-2">
                  {d.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-xs text-dark-muted leading-relaxed">
                      <CheckCircle2
                        className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${
                          isBlue ? "text-brand-blue-400" : "text-brand-green-400"
                        }`}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Value stack total */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="rounded-2xl border-2 border-brand-blue-500/50 bg-gradient-to-br from-brand-blue-900/30 to-brand-green-900/20 p-8"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-brand-blue-300 font-semibold text-sm uppercase tracking-wider mb-2">
                Total Value
              </p>
              <div className="flex items-baseline gap-4">
                <span className="text-dark-muted text-2xl line-through">{totalValue}</span>
                <span className="text-5xl font-black text-white">{yourPrice}</span>
              </div>
              <p className="text-dark-muted text-sm mt-2">
                One-time · Instant delivery · Lifetime updates
              </p>
            </div>
            <div className="text-center sm:text-right">
              <div className="inline-flex flex-col gap-2 text-sm text-white/80">
                {deliverables.map((d, i) => (
                  <div key={i} className="flex items-center justify-between gap-8">
                    <span className="text-dark-muted text-xs">{d.category}</span>
                    <span className="font-bold text-xs text-dark-muted line-through">{d.value}</span>
                  </div>
                ))}
                <div className="border-t border-dark-border pt-2 flex items-center justify-between gap-8 mt-1">
                  <span className="text-white font-bold text-xs">You pay today</span>
                  <span className="font-black text-brand-green-400">{yourPrice}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
