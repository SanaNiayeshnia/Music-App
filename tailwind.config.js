/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["poppins"],
    },
    extend: {
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [],
  darkMode: "selector",
};
