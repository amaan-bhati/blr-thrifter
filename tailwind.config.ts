import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#0d1117",
        subtle: "#161b22",
        border: "#30363d",
        primary: "#c9d1d9",
        secondary: "#8b949e",
        "accent-green": "#238636",
        "accent-green-hover": "#2ea043",
        "accent-blue": "#58a6ff",
        "accent-orange": "#f78166",
        "btn-bg": "#21262d",
        "btn-hover": "#30363d",
      },
      animation: {
        fadeIn: "fadeIn 0.3s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(5px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;