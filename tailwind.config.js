/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

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
      'neutral': 'var(--color-neutral)',
      'neutral-weak': 'var(--color-neutral-weak)',
      'neutral-medium': 'var(--color-neutral-medium)',
      'neutral-strong': 'var(--color-neutral-strong)',
      'primary': 'var(--color-primary)',
    },
    backgroundImage: {
      'primary-gradient': 'linear-gradient(315deg, var(--gradient-primary-start) 0%, var(--gradient-primary-end) 86%)',
    },
    extend: {
      fontSize: {
        '3xl': ['1.7rem', '2rem'],
      },
    },
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        ':root': {
          '--color-neutral': 'rgb(255, 255, 255)',
          '--color-neutral-weak': 'rgb(255 255 255 / 36%)',
          '--color-neutral-medium': 'rgb(255 255 255 / 60%)',
          '--color-neutral-strong': 'rgb(9, 12, 7)',
          '--color-primary': 'rgb(-511, 230, 89)',
          '--gradient-primary-start': 'rgb(-149, 187, 206)',
          '--gradient-primary-end': 'rgb(-236, 219, 165)',
        },
        '@supports (color: color(display-p3 1 1 1))': {
          ':root': {
            '--color-primary': 'color(display-p3 0.115 0.885 0.418)',
            '--gradient-primary-start': 'color(display-p3 0.25 0.721 0.795)',
            '--gradient-primary-end': 'color(display-p3 0.287 0.845 0.659)',
          }
        }
      })
    })
  ]
}