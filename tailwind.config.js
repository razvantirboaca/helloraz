/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    './src/**/*.{njk, md, html}'
  ],
  theme: {
    borderRadius: {
      'none': '0',
      DEFAULT: '.9rem',
      'full': '9999px',
    },
    extend: {
      fontFamily: {
        'sans': ['Figtree', defaultTheme.fontFamily.sans],
        'cursive': 'Caveat, cursive',
      },
      fontSize: {
        'lg': ['1.135rem', '1.4'],
        'xl': ['1.25rem', '1.5'],
        '2xl': ['1.515rem', '1.35'],
        '3xl': ['2rem', '1.35'],
        '4xl': ['2.5rem', '1.2'],
        '5xl': ['2.75rem', '1.15'],
        '6xl': ['3rem', '1.05'],
      },
    },
  }
}
