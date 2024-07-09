/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["poppins"],
    },

    extend: {
      colors: {
        glass: { 100: "#ffffff1a", 200: "#ffffff30", 300: "#ffffff50" },
      },
    },
  },
  plugins: [],
  darkMode: "selector",
};
