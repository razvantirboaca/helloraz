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
      'neutral-weakest': 'var(--color-neutral-weakest)',
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
        'xl': ['1.25rem', '1.6'],
        '2xl': ['1.5rem', '1.35'],
        '3xl': ['1.75rem', '1.2'],
        '4xl': ['2.25rem', '1.2'],
        '5xl': ['2.5rem', '1.15'],
      },
    },
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        ':root': {
          '--color-neutral': 'rgb(247 247 247)',
          '--color-neutral-weakest': 'rgb(26 30 32 / 16%)',
          '--color-neutral-weak': 'rgb(26 30 32 / 32%)',
          '--color-neutral-medium': 'rgb(26 30 32 / 82%)',
          '--color-neutral-strong': 'rgb(26 30 32)',
          '--color-primary': 'rgb(52 168 71)',
          '--gradient-primary-start': 'rgb(-149 187 206)',
          '--gradient-primary-end': 'rgb(-236 219 165)',
        },
        '@media (prefers-color-scheme: dark)': {
          ':root': {
            '--color-neutral': 'rgb(1 9 32)',
            '--color-neutral-weakest': 'rgb(255 255 255 / 16%)',
            '--color-neutral-weak': 'rgb(255 255 255 / 24%)',
            '--color-neutral-medium': 'rgb(255 255 255 / 80%)',
            '--color-neutral-strong': 'rgb(255 255 255 / 94%)',
          }
        }
      })
    })
  ]
}