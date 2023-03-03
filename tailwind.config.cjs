/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#002A68",
        sec: "#01B1EB",
        shade: "#01519C",
        vio: "#5B3289",
        pinko: "#D72A80",
        greeno: "#4DB757",
        orangi: "#F48120",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
