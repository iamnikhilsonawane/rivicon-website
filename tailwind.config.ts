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
          orange:      "#E8521A",
          "orange-dark": "#C4411A",
          "orange-light": "#F47044",
          "orange-muted": "#FBE9E3",
          navy:        "#1E3A5F",
          "navy-light": "#2A5080",
          slate:       "#2D3748",
        },
      },
      fontFamily: {
        display: ["var(--font-plus-jakarta)", "system-ui", "sans-serif"],
        body:    ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-up":    "fadeUp 0.6s ease-out forwards",
        "fade-in":    "fadeIn 0.5s ease-out forwards",
        "count-up":   "countUp 1s ease-out forwards",
        "float":      "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s ease-in-out infinite",
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
          "50%":      { transform: "translateY(-12px)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-pattern":    "radial-gradient(circle at 20% 50%, rgba(232,82,26,0.08) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(30,58,95,0.08) 0%, transparent 50%)",
        "hero-pattern-dark": "radial-gradient(circle at 20% 50%, rgba(232,82,26,0.12) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(30,58,95,0.15) 0%, transparent 50%)",
      },
      boxShadow: {
        "card":      "0 4px 24px rgba(0,0,0,0.07)",
        "card-hover":"0 16px 48px rgba(0,0,0,0.12)",
        "orange":    "0 8px 32px rgba(232,82,26,0.25)",
      },
    },
  },
  plugins: [],
};
export default config;
