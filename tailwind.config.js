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
    },
  },
  plugins: [],
};

// .nanum-gothic-regular {
//   font-family: "Nanum Gothic", sans-serif;
//   font-weight: 400;
//   font-style: normal;
// }
