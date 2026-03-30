import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: {
            50:  "#eff6ff",
            100: "#dbeafe",
            200: "#bfdbfe",
            300: "#93c5fd",
            400: "#60a5fa",
            500: "#3b82f6",
            600: "#2563eb",
            700: "#1d4ed8",
            800: "#1e40af",
            900: "#1e3a8a",
          },
          green: {
            50:  "#ecfdf5",
            100: "#d1fae5",
            400: "#34d399",
            500: "#10b981",
            600: "#059669",
            700: "#047857",
          },
        },
        dark: {
          bg:      "#0d0f14",
          card:    "#141720",
          border:  "#1f2330",
          muted:   "#8b92a8",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      animation: {
        "fade-up":    "fadeUp 0.6s ease forwards",
        "fade-in":    "fadeIn 0.4s ease forwards",
        "pulse-slow": "pulse 3s ease-in-out infinite",
        "float":      "float 3s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-8px)" },
        },
      },
      backgroundImage: {
        "hero-gradient":  "radial-gradient(ellipse at top, #1d4ed820 0%, transparent 60%)",
        "card-gradient":  "linear-gradient(135deg, #1e2030 0%, #141720 100%)",
        "glow-blue":      "radial-gradient(circle at center, #3b82f630 0%, transparent 70%)",
        "glow-green":     "radial-gradient(circle at center, #10b98120 0%, transparent 70%)",
      },
    },
  },
  plugins: [],
};

export default config;
