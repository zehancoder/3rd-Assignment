/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["{index.html, script.js}"],
  theme: {
    extend: {
      fontFamily : {
        "plus": [
          "Plus Jakarta Sans", "sans-serif"
        ]
      }
    },
  },
  plugins: [],
}

