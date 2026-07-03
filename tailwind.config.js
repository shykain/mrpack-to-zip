/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        lg: "2rem",
      },
      screens: {
        "2xl": "1200px",
      },
    },
    extend: {
      colors: {
        // Minecraft-inspired palette
        grass: {
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#4CAF50",
          600: "#3d8b40",
          700: "#2f6b32",
          800: "#1B3A2F",
          900: "#0f1f17",
        },
        ember: {
          400: "#FFA552",
          500: "#FF8C42",
          600: "#e07432",
        },
        cream: {
          50: "#FBFAF3",
          100: "#F5F3E7",
          200: "#EBE8D5",
          300: "#DDD8BE",
        },
        ink: {
          900: "#1a1a1a",
          800: "#2C2C2C",
          700: "#3d3d3d",
          600: "#525252",
        },
      },
      fontFamily: {
        pixel: ['"Press Start 2P"', "monospace"],
        mono: ['"JetBrains Mono"', "monospace"],
        sans: ["Manrope", "system-ui", "sans-serif"],
      },
      boxShadow: {
        block: "0 4px 0 0 rgba(0,0,0,0.25), 0 6px 16px rgba(0,0,0,0.15)",
        "block-sm": "0 3px 0 0 rgba(0,0,0,0.25)",
        glow: "0 0 32px rgba(76, 175, 80, 0.35)",
        inset: "inset 0 2px 4px rgba(0,0,0,0.15)",
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(76,175,80,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(76,175,80,0.07) 1px, transparent 1px)",
        "pixel-noise":
          "radial-gradient(circle at 20% 30%, rgba(76,175,80,0.12), transparent 40%), radial-gradient(circle at 80% 70%, rgba(255,140,66,0.10), transparent 45%)",
      },
      animation: {
        "float-slow": "float 6s ease-in-out infinite",
        "pulse-glow": "pulseGlow 2.4s ease-in-out infinite",
        "drop-bounce": "dropBounce 0.5s ease-out",
        "scan-line": "scanLine 2s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 24px rgba(76,175,80,0.3)" },
          "50%": { boxShadow: "0 0 48px rgba(76,175,80,0.55)" },
        },
        dropBounce: {
          "0%": { transform: "scale(0.8)", opacity: "0" },
          "60%": { transform: "scale(1.05)", opacity: "1" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        scanLine: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
      },
    },
  },
  plugins: [],
};
