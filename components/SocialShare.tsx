"use client";

import { motion } from "framer-motion";
import { Twitter, Link2, Check } from "lucide-react";
import { useState } from "react";

const SITE_URL   = process.env.NEXT_PUBLIC_SITE_URL ?? "https://secondbrain.so";
const SHARE_TEXT = "I just set up the Ultimate 2026 Notion Second Brain — 12 dashboards, 50+ templates. Game changer for productivity. Check it out:";

export function SocialShare() {
  const [copied, setCopied] = useState(false);

  const shareX = () => {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(SHARE_TEXT)}&url=${encodeURIComponent(SITE_URL)}`;
    window.open(url, "_blank", "width=600,height=400");
  };

  const copyLink = async () => {
    await navigator.clipboard.writeText(SITE_URL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="py-12 px-4 sm:px-6 lg:px-8 border-t border-dark-border"
    >
      <div className="max-w-xl mx-auto text-center">
        <p className="text-white font-semibold mb-2">
          Know someone who needs this?
        </p>
        <p className="text-dark-muted text-sm mb-5">
          Share with a friend and help them get organised too.
        </p>
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={shareX}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-black border border-white/10 text-white text-sm font-semibold hover:bg-white/5 transition-colors"
          >
            <Twitter className="w-4 h-4" />
            Share on X
          </button>
          <button
            onClick={copyLink}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-dark-card border border-dark-border text-white text-sm font-semibold hover:border-white/20 transition-colors"
          >
            {copied ? (
              <Check className="w-4 h-4 text-brand-green-400" />
            ) : (
              <Link2 className="w-4 h-4" />
            )}
            {copied ? "Copied!" : "Copy Link"}
          </button>
        </div>
      </div>
    </motion.div>
  );
}
