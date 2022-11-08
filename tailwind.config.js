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
      'secondary': 'var(--color-secondary)',
    },
    borderRadius: {
      'none': '0',
      DEFAULT: '1.5rem',
      'full': '9999px',
    },
    boxShadow: {
      'sm': '0.2px 0.3px 0.4px hsl(var(--shadow-color) / 0.24), 0.2px 0.5px 0.6px -1.2px hsl(var(--shadow-color) / 0.24), 0.5px 1.2px 1.5px -2.5px hsl(var(--shadow-color) / 0.24)',
      'md': '0.2px 0.3px 0.4px hsl(var(--shadow-color) / 0.25), 0.5px 1px 1.3px -0.8px hsl(var(--shadow-color) / 0.25), 1.1px 2.4px 3px -1.7px hsl(var(--shadow-color) / 0.25), 2.7px 5.8px 7.2px -2.5px hsl(var(--shadow-color) / 0.25)',
      'lg': '0.2px 0.3px 0.4px hsl(var(--shadow-color) / 0.21), 0.6px 1.3px 1.6px -0.3px hsl(var(--shadow-color) / 0.21), 1.1px 2.3px 2.9px -0.6px hsl(var(--shadow-color) / 0.21), 1.7px 3.6px 4.5px -0.9px hsl(var(--shadow-color) / 0.21), 2.5px 5.4px 6.7px -1.2px hsl(var(--shadow-color) / 0.21), 3.8px 8.1px 10.1px -1.6px hsl(var(--shadow-color) / 0.21), 5.5px 11.8px 14.6px -1.9px hsl(var(--shadow-color) / 0.21), 7.9px 16.9px 21px -2.2px hsl(var(--shadow-color) / 0.21), 11px 23.7px 29.4px -2.5px hsl(var(--shadow-color) / 0.21)',
    },
    extend: {
      fontSize: {
        'lg': ['1.05rem', '1.65'],
        'xl': ['1.25rem', '1.65'],
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
          '--color-neutral': 'rgb(252 252 252)',
          '--color-neutral-weakest': 'rgb(26 30 32 / 4%)',
          '--color-neutral-weak': 'rgb(26 30 32 / 16%)',
          '--color-neutral-medium': 'rgb(26 30 32 / 72%)',
          '--color-neutral-strong': 'rgb(26 30 32)',
          '--color-primary': 'rgb(52 168 71)',
          '--color-secondary': 'rgb(251 126 168)',
          '--shadow-color': '0deg 0% 72%',
        },
        '@media (prefers-color-scheme: dark)': {
          ':root': {
            '--color-neutral': 'rgb(1 9 32)',
            '--color-neutral-weakest': 'rgb(255 255 255 / 6%)',
            '--color-neutral-weak': 'rgb(255 255 255 / 16%)',
            '--color-neutral-medium': 'rgb(255 255 255 / 72%)',
            '--color-neutral-strong': 'rgb(255 255 255 / 94%)',
            '--shadow-color': '225deg 94% 6%',
          }
        }
      })
    })
  ]
}