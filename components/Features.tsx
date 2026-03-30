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

const templates: { icon: React.ElementType; color: "blue" | "green"; title: string; desc: string; tags: string[] }[] = [
  {
    icon: LayoutDashboard,
    color: "blue",
    title: "Master Home Dashboard",
    desc: "Your mission control. Live KPIs, today's tasks, active projects, habit rings, and weekly goals — all on one screen the moment you open Notion.",
    tags: ["Linked databases", "Filtered views", "Quick capture"],
  },
  {
    icon: Target,
    color: "green",
    title: "Goals & OKR Tracker",
    desc: "Annual → quarterly → weekly goal cascade. Auto-calculated completion % rolls up from tasks to key results to objectives. Weekly review prompts built in.",
    tags: ["Progress formula", "Rollup properties", "Weekly review"],
  },
  {
    icon: CheckSquare,
    color: "blue",
    title: "GTD Task Manager",
    desc: "Full Getting Things Done workflow: Inbox → Next Actions → Waiting → Someday/Maybe. Priority score formula (urgency × importance) ranks your day automatically.",
    tags: ["Priority formula", "5 views", "Project linking"],
  },
  {
    icon: BookOpen,
    color: "green",
    title: "Knowledge Base",
    desc: "Tag, link, and resurface everything you read, watch, or learn. Bi-directional linking connects ideas across your entire workspace. Search that actually works.",
    tags: ["Bi-directional links", "Tag taxonomy", "Source tracking"],
  },
  {
    icon: TrendingUp,
    color: "blue",
    title: "Project Hub",
    desc: "Every active project tracked with status, deadlines, owners, linked tasks, and health score. Switch between Board, List, and Timeline views instantly.",
    tags: ["Health score", "Timeline view", "Task rollup"],
  },
  {
    icon: Calendar,
    color: "green",
    title: "Weekly & Daily Planner",
    desc: "Sunday → Sunday planning template with time-blocking, energy zones (high/low focus), deep-work blocks, and an end-of-week review built in.",
    tags: ["Energy zones", "Time blocking", "Weekly review"],
  },
  {
    icon: Repeat,
    color: "blue",
    title: "Habit Tracker",
    desc: "Track daily, weekly, and monthly habits with auto-calculated streak counters and completion rate %. Designed for the 66-day habit formation window.",
    tags: ["Streak formula", "Completion %", "66-day system"],
  },
  {
    icon: Brain,
    color: "green",
    title: "Idea Incubator",
    desc: "Capture shower thoughts, business ideas, and creative sparks in seconds. Rate by potential and effort. Filter to revisit your best ideas on a weekly schedule.",
    tags: ["Effort/impact matrix", "Status pipeline", "Revisit schedule"],
  },
  {
    icon: Database,
    color: "blue",
    title: "CRM / People Database",
    desc: "Track every relationship: when you last spoke, what was discussed, what you promised, and what they need. Days-since-contact formula flags who needs follow-up.",
    tags: ["Days-since formula", "Relationship tags", "Follow-up queue"],
  },
  {
    icon: DollarSign,
    color: "green",
    title: "Finance Dashboard",
    desc: "Log income and expenses by category, track savings goals with % complete, and watch your net worth update automatically. No spreadsheet skills required.",
    tags: ["Net worth formula", "Category rollups", "Savings goals"],
  },
  {
    icon: Lightbulb,
    color: "blue",
    title: "Content Creation HQ",
    desc: "Full content pipeline from idea to published. Platform-specific statuses, linked resource library, repurposing tracker, and a publishing calendar all connected.",
    tags: ["Multi-platform", "Pipeline stages", "Publishing calendar"],
  },
  {
    icon: Link2,
    color: "green",
    title: "Resource Library",
    desc: "Save bookmarks, courses, tools, and links with tags, source, and category. Searchable, filterable, and linked to your knowledge base and projects.",
    tags: ["Tag filtering", "Source tracking", "KB linking"],
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
            <FeatureCard key={i} {...t} index={i} tags={t.tags} />
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
  tags,
}: {
  icon: React.ElementType;
  color: "blue" | "green";
  title: string;
  desc: string;
  index: number;
  tags: string[];
}) {
  const isBlue = color === "blue";
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      className="group rounded-xl bg-dark-card border border-dark-border p-5 hover:border-brand-blue-500/40 hover:bg-dark-card/80 transition-all duration-300 cursor-default flex flex-col"
    >
      {/* Icon row */}
      <div className="flex items-center gap-3 mb-3">
        <div
          className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
            isBlue ? "bg-brand-blue-500/20" : "bg-brand-green-500/20"
          }`}
        >
          <Icon
            className={`w-4 h-4 ${
              isBlue ? "text-brand-blue-400" : "text-brand-green-400"
            }`}
          />
        </div>
        <h3 className="text-white font-bold text-sm">{title}</h3>
      </div>

      <p className="text-dark-muted text-xs leading-relaxed mb-4 flex-1">{desc}</p>

      {/* Feature tags */}
      <div className="flex flex-wrap gap-1.5">
        {tags.map((tag, i) => (
          <span
            key={i}
            className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
              isBlue
                ? "bg-brand-blue-900/50 text-brand-blue-300 border border-brand-blue-700/30"
                : "bg-brand-green-900/50 text-brand-green-300 border border-brand-green-700/30"
            }`}
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
