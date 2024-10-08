/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["poppins"],
    },
    extend: {},
  },
  plugins: [],
  darkMode: "selector",
};
