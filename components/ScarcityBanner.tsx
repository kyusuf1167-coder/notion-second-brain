"use client";

import { useState } from "react";
import { X, Zap } from "lucide-react";

export function ScarcityBanner() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;

  return (
    <div className="relative z-50 bg-gradient-to-r from-brand-blue-700 via-brand-blue-600 to-brand-green-600 text-white">
      <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-center gap-3 text-sm font-medium">
        <Zap className="w-4 h-4 text-yellow-300 flex-shrink-0 animate-pulse" />
        <span>
          <span className="font-bold">2026 Launch Price:</span> Get The Ultimate
          Second Brain for only{" "}
          <span className="font-black text-yellow-300">$49</span> — price
          increases to $97 after launch week.
        </span>
        <button
          onClick={() => setVisible(false)}
          className="ml-4 p-1 rounded hover:bg-white/20 transition-colors flex-shrink-0"
          aria-label="Dismiss banner"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
