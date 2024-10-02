/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{html,js,njk, svg}", "./_site/**/*.{html,js,njk, svg}"],
  theme: {
    extend: {
      fontFamily: {
        instrument_sans: ["Instrument Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
