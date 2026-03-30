import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "blue" | "green" | "yellow" | "red" | "gray";
  className?: string;
}

export function Badge({ children, variant = "blue", className }: BadgeProps) {
  const variants = {
    blue:   "bg-brand-blue-500/15 text-brand-blue-400 border-brand-blue-500/30",
    green:  "bg-brand-green-500/15 text-brand-green-400 border-brand-green-600/30",
    yellow: "bg-yellow-500/15 text-yellow-400 border-yellow-500/30",
    red:    "bg-red-500/15 text-red-400 border-red-500/30",
    gray:   "bg-white/5 text-dark-muted border-white/10",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
