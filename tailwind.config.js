/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.{html,js}",
  ],
  theme: {
    extend: {
      fontFamily:{
        opensans: ["Open sans", "sans-serif"],
        oswald: ["Oswald", "sans-serif"],
      }
    },
  },
  plugins: [],
}
