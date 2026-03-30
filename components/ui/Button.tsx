"use client";

import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg" | "xl";
  loading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "primary", size = "md", loading, children, disabled, ...props },
    ref
  ) => {
    const base =
      "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none select-none";

    const variants = {
      primary:
        "bg-gradient-to-r from-brand-blue-600 to-brand-blue-700 text-white shadow-lg shadow-brand-blue-700/30 hover:from-brand-blue-500 hover:to-brand-blue-600 hover:shadow-xl hover:shadow-brand-blue-600/40 active:scale-[0.98]",
      secondary:
        "bg-gradient-to-r from-brand-green-500 to-brand-green-600 text-white shadow-lg shadow-brand-green-600/30 hover:from-brand-green-400 hover:to-brand-green-500 hover:shadow-xl active:scale-[0.98]",
      outline:
        "border-2 border-brand-blue-500 text-brand-blue-500 hover:bg-brand-blue-500 hover:text-white active:scale-[0.98]",
      ghost:
        "text-dark-muted hover:text-white hover:bg-white/5 active:scale-[0.98]",
    };

    const sizes = {
      sm:  "h-9  px-4  text-sm",
      md:  "h-11 px-6  text-sm",
      lg:  "h-13 px-8  text-base",
      xl:  "h-16 px-10 text-lg gap-2",
    };

    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={cn(base, variants[variant], sizes[size], className)}
        {...props}
      >
        {loading && (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            />
          </svg>
        )}
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button };
