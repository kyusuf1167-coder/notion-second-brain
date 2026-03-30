"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Do I need a paid Notion account?",
    a: "No. The free tier of Notion is enough to use everything in this bundle. You only need a paid Notion account if you want to add members to a shared workspace — which is optional.",
  },
  {
    q: "How do I access the templates after purchase?",
    a: "After payment you'll be redirected to the thank-you page which contains a private Notion duplicate link. Click it, choose 'Duplicate', and the entire workspace is copied to your Notion account in seconds.",
  },
  {
    q: "I'm a Notion beginner. Will this work for me?",
    a: "Absolutely. Every template ships with a Quick Start guide and explanatory comments inside each database. The 25-page PDF walkthrough takes you from zero to fully set up in an afternoon — no prior Notion experience required.",
  },
  {
    q: "What if I already have a Notion setup?",
    a: "You can duplicate individual dashboards from the bundle rather than the whole workspace. Everything is modular — use what fits and ignore what doesn't. Most users keep their existing pages and just pull in the modules they need.",
  },
  {
    q: "Will I receive updates?",
    a: "Yes. Lifetime updates are included. When we ship new templates (we release at least two major updates a year), you'll receive an email with the new duplicate link. You'll never pay again.",
  },
  {
    q: "What is your refund policy?",
    a: "If you're not satisfied within 30 days of purchase, email us and we'll issue a full refund — no questions asked, no hoops to jump through. We stand behind the product completely.",
  },
  {
    q: "Can I share this with my team?",
    a: "The licence covers one personal Notion workspace. If you want to deploy it for a team or organisation, please reach out for a team licence — we offer flat-fee team pricing.",
  },
  {
    q: "Is this compatible with Notion on mobile?",
    a: "Yes. Notion's mobile app supports all of the features used — databases, views, linked databases, and filters. We've tested the layouts on both iOS and Android and they work great.",
  },
  {
    q: "How is this different from free Notion templates I find online?",
    a: "Free templates are typically single-page and disconnected. This bundle is a fully integrated system where every dashboard talks to each other — tasks linked to projects, projects linked to goals, goals linked to your weekly planner. It took 200+ hours to build and test.",
  },
  {
    q: "I purchased but didn't receive the link — what do I do?",
    a: "The link is on the thank-you page immediately after checkout. If you accidentally closed it, email us with your purchase email address and we'll resend it within a few hours.",
  },
  {
    q: "Does this work with Notion AI?",
    a: "Yes. All databases and pages are fully compatible with Notion AI (requires a Notion AI add-on in your account). We've even included suggested AI prompts for each dashboard in the guide.",
  },
  {
    q: "Can I customise the templates to fit my own workflow?",
    a: "That's the whole point. Every template is fully editable — rename properties, change colours, add or remove columns, swap icons. We encourage you to make it yours. The system is designed to be a starting point, not a constraint.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-brand-blue-400 font-semibold text-sm tracking-widest uppercase mb-3">
            FAQ
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-dark-muted">
            Still have a question?{" "}
            <a href="mailto:hello@secondbrain.so" className="text-brand-blue-400 hover:underline">
              Email us
            </a>{" "}
            and we reply within 24 hours.
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="rounded-xl border border-dark-border bg-dark-card overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-white/3 transition-colors"
              >
                <span className="text-white font-semibold text-sm pr-4">{faq.q}</span>
                <ChevronDown
                  className={`w-4 h-4 text-dark-muted flex-shrink-0 transition-transform duration-300 ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-5 text-dark-muted text-sm leading-relaxed border-t border-dark-border pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
