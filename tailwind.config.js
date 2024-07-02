/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // container: {
    //   center: true,
    // },
    extend: {
      colors: {
        amber: "#FFBE0B",
        orange: "#FB5607",
        rose: "#FF006E",
        violet: "#8338EC",
        azure: "#3A86FF",
      },
    },
  },
  plugins: [],
};
