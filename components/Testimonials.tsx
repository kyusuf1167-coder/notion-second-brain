"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name:   "Ava Chen",
    role:   "Freelance UX Designer",
    avatar: "AC",
    color:  "blue",
    stars:  5,
    result: "Saved 2+ hours per day",
    body:   "I was using 6 different apps to manage my work and personal life. After duplicating this template I consolidated everything in one afternoon. My clients have noticed I'm way more on top of deliverables. Genuinely life-changing.",
  },
  {
    name:   "Marcus Reid",
    role:   "SaaS Founder",
    avatar: "MR",
    color:  "green",
    stars:  5,
    result: "Closed 3 deals tracked in the CRM",
    body:   "The Project Hub + CRM combo alone is worth 10× the price. I used to lose track of warm leads constantly. Now every conversation is logged and I get prompted to follow up. Three closed deals in the first month I attribute directly to this.",
  },
  {
    name:   "Priya Sharma",
    role:   "PhD Student & Content Creator",
    avatar: "PS",
    color:  "blue",
    stars:  5,
    result: "Published 30 posts in 30 days",
    body:   "The Content Creation HQ changed how I batch content. I did a 30-day challenge and hit every single day. The pipeline view makes it impossible to forget what stage things are at. If you create anything online — just buy it.",
  },
  {
    name:   "Jordan Williams",
    role:   "Product Manager at a Series B startup",
    avatar: "JW",
    color:  "green",
    stars:  5,
    result: "Promoted in 6 months",
    body:   "I used the Goals & OKR tracker to align my personal goals with my company's Q1 objectives. My manager was shocked I could articulate exactly what I was working on and why. I'll never use spreadsheets for this again.",
  },
  {
    name:   "Lena Hoffmann",
    role:   "Productivity Coach",
    avatar: "LH",
    color:  "blue",
    stars:  5,
    result: "Now recommends it to all clients",
    body:   "I've reviewed 40+ Notion templates professionally. This is in the top 3 I've ever seen for depth and usability. The instructions are clear, the design is clean, and the system actually works if you follow the GTD workflow.",
  },
  {
    name:   "Tariq Osman",
    role:   "Real Estate Investor",
    avatar: "TO",
    color:  "green",
    stars:  5,
    result: "Tracks 7 active deals effortlessly",
    body:   "I manage 7 deals at once and was drowning in spreadsheets. The Project Hub + Finance Dashboard combo now does everything in one place. Worth every dollar. Setup was genuinely under 10 minutes.",
  },
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* bg glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-green-600/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-brand-green-400 font-semibold text-sm tracking-widest uppercase mb-3">
            2,400+ happy users
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Real People.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green-400 to-brand-blue-400">
              Real Results.
            </span>
          </h2>
        </motion.div>

        {/* Masonry-style grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} {...t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({
  name,
  role,
  avatar,
  color,
  stars,
  result,
  body,
  index,
}: (typeof testimonials)[0] & { index: number }) {
  const isBlue = color === "blue";
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="break-inside-avoid rounded-2xl bg-dark-card border border-dark-border p-6 hover:border-white/10 transition-colors"
    >
      {/* Result badge */}
      <div
        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border mb-4 ${
          isBlue
            ? "bg-brand-blue-500/10 text-brand-blue-400 border-brand-blue-500/20"
            : "bg-brand-green-500/10 text-brand-green-400 border-brand-green-600/20"
        }`}
      >
        ✦ {result}
      </div>

      {/* Stars */}
      <div className="flex gap-0.5 mb-3">
        {[...Array(stars)].map((_, i) => (
          <Star key={i} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
        ))}
      </div>

      {/* Quote */}
      <Quote className="w-5 h-5 text-dark-border mb-2" />
      <p className="text-white/80 text-sm leading-relaxed mb-5">{body}</p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t border-dark-border">
        <div
          className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-black text-white ${
            isBlue
              ? "bg-gradient-to-br from-brand-blue-600 to-brand-blue-800"
              : "bg-gradient-to-br from-brand-green-600 to-brand-green-800"
          }`}
        >
          {avatar}
        </div>
        <div>
          <p className="text-white font-semibold text-sm">{name}</p>
          <p className="text-dark-muted text-xs">{role}</p>
        </div>
      </div>
    </motion.div>
  );
}
