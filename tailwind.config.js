const myColors = {}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  darkMode: 'class',
  theme: {
    screens: {
      xs: '31.25rem',
      sm: '37.5rem',
      md: '62.875rem',
      lg: '79rem',
    },
    extend: {
      colors: {
        ...myColors,
        logoLight: '#1d9bf0',
        logoDark: '#eff3f4',
        logoBgLight: '#e7e9ea',
        logoBgDark: '#181818',
        textLight: {
          primary: '#0f1419',
          secondary: '#536471',
        },
        textDark: {
          primary: '#71767b',
          secondary: '#e7e9ea',
        },
      },
    },
  },
  plugins: [],
}
