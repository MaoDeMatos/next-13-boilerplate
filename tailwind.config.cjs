const defaultTheme = require('tailwindcss/defaultTheme')
const daysiuiThemes = require('daisyui/src/theming/themes')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: { 'main-bg': 'var(--main-bg)' },
      fontFamily: {
        sans: ['var(--font-work-sans)', ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'main-bg': 'rotate 30s cubic-bezier(0.8, 0.2, 0.2, 0.8) infinite',
      },
      backgroundImage: {
        'primary-glow':
          'conic-gradient(from 90deg at 50% 50%, hsl(var(--p) / 80%) 0%, hsl(var(--s) / 80%) 33%, hsl(var(--a) / 80%) 66%, hsl(var(--p) / 80%) 100%)',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        light: {
          ...daysiuiThemes['[data-theme=light]'],
          '--main-bg': '#FCFCFC',
        },
        dark: {
          ...daysiuiThemes['[data-theme=dark]'],
          '--main-bg': '#121217',
        },
      },
    ],
    // darkTheme: 'dark',
  },
}
