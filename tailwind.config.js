/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/**/*.{njk, md, html}'
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', defaultTheme.fontFamily.sans],
        'handwriting': 'Caveat, cursive',
      }
    }
  }
}
