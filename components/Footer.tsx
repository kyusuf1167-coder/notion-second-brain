"use client";

import { Twitter, Youtube, Instagram, Heart } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-dark-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 font-bold text-lg mb-3">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-blue-600 to-brand-green-500 flex items-center justify-center text-white text-sm font-black">
                N
              </span>
              <span className="text-white">
                Second<span className="text-brand-blue-400">Brain</span>
              </span>
            </a>
            <p className="text-dark-muted text-sm max-w-sm leading-relaxed">
              The Ultimate 2026 Notion productivity bundle — 12 dashboards, 50+
              templates, one workspace. Built for people who want to think clearly
              and ship consistently.
            </p>
            <div className="flex gap-3 mt-4">
              {[
                { icon: Twitter,   href: "#", label: "Twitter / X" },
                { icon: Youtube,   href: "#", label: "YouTube" },
                { icon: Instagram, href: "#", label: "Instagram" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg border border-dark-border flex items-center justify-center text-dark-muted hover:text-white hover:border-white/20 transition-colors"
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Product */}
          <div>
            <p className="text-white font-semibold text-sm mb-4">Product</p>
            <ul className="space-y-2.5">
              {[
                { label: "Features",     href: "#features" },
                { label: "Pricing",      href: "#pricing" },
                { label: "Testimonials", href: "#testimonials" },
                { label: "FAQ",          href: "#faq" },
                { label: "Free Template", href: "#lead-magnet" },
              ].map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-dark-muted hover:text-white text-sm transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="text-white font-semibold text-sm mb-4">Legal</p>
            <ul className="space-y-2.5">
              {[
                { label: "Privacy Policy",  href: "/privacy" },
                { label: "Terms of Use",    href: "/terms" },
                { label: "Refund Policy",   href: "/refund" },
                { label: "Contact",         href: "mailto:hello@secondbrain.so" },
              ].map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-dark-muted hover:text-white text-sm transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-dark-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-dark-muted">
          <p>
            © {year} SecondBrain.so · All rights reserved ·{" "}
            <span className="text-dark-muted/60">
              Not affiliated with Notion Labs Inc.
            </span>
          </p>
          <p className="flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-red-400 fill-red-400 mx-1" /> by a
            productivity nerd
          </p>
        </div>
      </div>
    </footer>
  );
}
