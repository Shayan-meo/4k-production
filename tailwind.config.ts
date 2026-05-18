import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/constants/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#F9F9F9",
        charcoal: "#111111",
        gold: "#D4AF37",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Playfair Display", "serif"],
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        "luxury": "0.32em",
      },
      keyframes: {
        kenburns: {
          "0%": { transform: "scale(1.05)" },
          "100%": { transform: "scale(1.18)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        bounceSoft: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(8px)" },
        },
      },
      animation: {
        kenburns: "kenburns 18s ease-out forwards",
        "fade-up": "fadeUp 1s ease-out forwards",
        "fade-in": "fadeIn 1.2s ease-out forwards",
        "bounce-soft": "bounceSoft 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
