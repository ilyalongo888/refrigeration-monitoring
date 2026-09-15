import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./context/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "24px",
      screens: {
        DEFAULT: "100%",
        xl: "1280px",
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        bg: {
          DEFAULT: "#07111F",
          secondary: "#0B1728",
          light: "#F5F7FA",
        },
        card: "#101D30",
        text: {
          primary: "#F8FAFC",
          secondary: "#94A3B8",
        },
        accent: {
          cyan: "#22D3EE",
          blue: "#3B82F6",
        },
        status: {
          normal: "#22C55E",
          alert: "#EF4444",
        },
        line: "rgba(148,163,184,0.15)",
      },
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
        mono: [
          "var(--font-mono)",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "monospace",
        ],
      },
      borderRadius: {
        card: "20px",
        btn: "11px",
        panel: "18px",
      },
      boxShadow: {
        glow: "0 0 60px -12px rgba(34, 211, 238, 0.35)",
        "glow-sm": "0 0 24px -6px rgba(34, 211, 238, 0.3)",
        "card-lift": "0 12px 32px -12px rgba(2, 6, 23, 0.45)",
      },
      keyframes: {
        "pulse-ring": {
          "0%": { transform: "scale(0.9)", opacity: "0.6" },
          "70%": { transform: "scale(1.6)", opacity: "0" },
          "100%": { transform: "scale(1.6)", opacity: "0" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "blink-dot": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.35" },
        },
      },
      animation: {
        "pulse-ring": "pulse-ring 2.2s cubic-bezier(0.2,0.6,0.4,1) infinite",
        "fade-up": "fade-up 0.6s ease-out both",
        "blink-dot": "blink-dot 1.8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
