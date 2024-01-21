/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["inter", "sans"],
      },
      screens: {
        xs: "475px",
      }
    },
   
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
