/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        amber: "#FFBE0B",
        orange: "#FB5607",
        rose: "#FF006E",
        violet: "#8338EC",
        azure: "#3A86FF",
      },
      fontFamily: { nanum: ["Nanum Gothic", "sans-serif"] },
      keyframes: {
        typing: {
          "0%": { width: "0", "padding-left":"100%" },
          "100%": { width: "100%" },
        },
      },
      animation: { typing: "typing 1s steps(20, end) 0s 1 normal forwards" },
    },
  },
  plugins: [],
};

