/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#002A68",
        sec: "#01B1EB",
        shade: "#01519C",
      },
    },
  },
  plugins: [],
};
