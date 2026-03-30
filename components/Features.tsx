"use client";

import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Target,
  CheckSquare,
  BookOpen,
  TrendingUp,
  Calendar,
  Brain,
  Repeat,
  Database,
  Link2,
  Lightbulb,
  DollarSign,
} from "lucide-react";

const templates = [
  {
    icon: LayoutDashboard,
    color: "blue",
    title: "Master Home Dashboard",
    desc: "Your mission control. Every important metric, task, and project at a glance the moment you open Notion.",
  },
  {
    icon: Target,
    color: "green",
    title: "Goals & OKR Tracker",
    desc: "Annual → quarterly → weekly goal breakdown with progress bars and weekly review prompts built in.",
  },
  {
    icon: CheckSquare,
    color: "blue",
    title: "GTD Task Manager",
    desc: "Capture → clarify → organise → review → engage. Full Getting Things Done workflow with priority views.",
  },
  {
    icon: BookOpen,
    color: "green",
    title: "Knowledge Base",
    desc: "Tag, link, and resurface everything you read, watch, or learn. Bi-directional linking included.",
  },
  {
    icon: TrendingUp,
    color: "blue",
    title: "Project Hub",
    desc: "Track every active project with status, deadlines, owners, and linked tasks — board + list + timeline views.",
  },
  {
    icon: Calendar,
    color: "green",
    title: "Weekly Planner",
    desc: "Sunday → Sunday planning system with time-blocking, energy zones, and deep-work blocks.",
  },
  {
    icon: Repeat,
    color: "blue",
    title: "Habit Tracker",
    desc: "Daily, weekly, and monthly habit streaks with visual momentum charts to keep you on track.",
  },
  {
    icon: Brain,
    color: "green",
    title: "Idea Incubator",
    desc: "Capture shower thoughts, business ideas, and creative sparks. Rate, filter, and revisit on schedule.",
  },
  {
    icon: Database,
    color: "blue",
    title: "CRM / People Database",
    desc: "Track relationships, conversations, and follow-ups. Never forget a name, detail, or promise again.",
  },
  {
    icon: DollarSign,
    color: "green",
    title: "Finance Dashboard",
    desc: "Income, expenses, savings goals, and net worth tracker. No formulas needed — just fill in the tables.",
  },
  {
    icon: Lightbulb,
    color: "blue",
    title: "Content Creation HQ",
    desc: "Plan, draft, and publish content across platforms. From idea to published in one linear pipeline.",
  },
  {
    icon: Link2,
    color: "green",
    title: "Resource Library",
    desc: "Bookmarks, courses, tools, and links — all tagged and searchable. Your personal internet, curated.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-brand-blue-400 font-semibold text-sm tracking-widest uppercase mb-3">
            What&apos;s inside
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            12 Dashboards.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue-400 to-brand-green-400">
              50+ Templates.
            </span>{" "}
            One Workspace.
          </h2>
          <p className="text-dark-muted text-lg max-w-2xl mx-auto">
            Every template is pre-wired with formulas, filters, and automations.
            Duplicate to Notion and start using in under 5 minutes.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {templates.map((t, i) => (
            <FeatureCard key={i} {...t} index={i} />
          ))}
        </div>

        {/* Bonus callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 rounded-2xl border border-brand-blue-500/30 bg-gradient-to-r from-brand-blue-900/30 to-brand-green-900/20 p-6 sm:p-8 text-center"
        >
          <p className="text-brand-blue-300 font-semibold text-sm uppercase tracking-wider mb-2">
            🎁 Free Bonus
          </p>
          <h3 className="text-xl sm:text-2xl font-black text-white mb-2">
            +25-Page Quick-Start PDF Guide
          </h3>
          <p className="text-dark-muted max-w-xl mx-auto text-sm">
            Step-by-step Notion setup walkthrough, personalisation recipes, and a
            30-day Second Brain challenge calendar — included free with every purchase.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function FeatureCard({
  icon: Icon,
  color,
  title,
  desc,
  index,
}: {
  icon: React.ElementType;
  color: "blue" | "green";
  title: string;
  desc: string;
  index: number;
}) {
  const isBlue = color === "blue";
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      className="group rounded-xl bg-dark-card border border-dark-border p-5 hover:border-brand-blue-500/40 hover:bg-dark-card/80 transition-all duration-300 cursor-default"
    >
      {/* Image placeholder */}
      <div
        className={`w-full aspect-video rounded-lg mb-4 flex items-center justify-center relative overflow-hidden ${
          isBlue
            ? "bg-brand-blue-900/30 border border-brand-blue-700/20"
            : "bg-brand-green-900/30 border border-brand-green-700/20"
        }`}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(#3b82f620 1px, transparent 1px), linear-gradient(90deg, #3b82f620 1px, transparent 1px)",
            backgroundSize: "16px 16px",
          }}
        />
        <Icon
          className={`w-8 h-8 relative z-10 ${
            isBlue ? "text-brand-blue-400" : "text-brand-green-400"
          }`}
        />
        {/* Fake screenshot lines */}
        <div className="absolute bottom-3 left-3 right-3 space-y-1 opacity-30">
          <div className="h-1 bg-dark-border rounded" />
          <div className="h-1 bg-dark-border rounded w-3/4" />
          <div className="h-1 bg-dark-border rounded w-1/2" />
        </div>
      </div>

      <h3 className="text-white font-bold text-sm mb-1.5">{title}</h3>
      <p className="text-dark-muted text-xs leading-relaxed">{desc}</p>
    </motion.div>
  );
}
