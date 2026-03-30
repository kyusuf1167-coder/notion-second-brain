"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ShoppingCart } from "lucide-react";

export function FloatingCTA() {
  const [visible,  setVisible]  = useState(false);
  const [loading,  setLoading]  = useState(false);

  // Show after scrolling past hero (~600px)
  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const res  = await fetch("/api/checkout", { method: "POST" });
      const data = await res.json() as { url?: string; error?: string };
      if (data.url) window.location.href = data.url;
      else alert(data.error ?? "Something went wrong.");
    } catch {
      alert("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 28 }}
          // Visible only on mobile — desktop has inline CTAs
          className="fixed bottom-5 left-4 right-4 z-50 sm:hidden"
        >
          <Button
            size="lg"
            onClick={handleCheckout}
            loading={loading}
            className="w-full rounded-2xl shadow-2xl shadow-brand-blue-700/50 flex items-center gap-2"
          >
            <ShoppingCart className="w-4 h-4" />
            Buy Now — $49 · Instant Access
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
