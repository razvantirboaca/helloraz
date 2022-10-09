/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/**/*.{njk, md, html}'
  ],
  theme: {
    fontFamily: {
      'sans': ['Figtree', defaultTheme.fontFamily.sans],
      'handwriting': 'Caveat, cursive',
    },
    colors: {
      'transparent': 'transparent',
      'primary-strong': '#090c07',
      'primary': '#ffffff',
      'primary-medium': 'rgb(255 255 255 / 60%)',
      'primary-weak': 'rgb(255 255 255 / 36%)',
      'secondary': '#b1d255',
    },
    backgroundImage: {
      'primary': 'linear-gradient(315deg, #00CDAC 0%, #02AAB0 74%)',
    },
  },
}