const defaultTheme = require('tailwindcss/defaultTheme')

const myColors = {
  mono: {
    100: '#e7e9ea',
    200: '#eff3f4',
    400: '#e6e7e7',
    600: '#536471',
    800: '#1e2328',
    900: '#0f1419',
  },
  primary: {
    100: '#e8f5fe',
    400: '#1d9bf0',
  },
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  darkMode: 'class',
  theme: {
    colors: {
      black: myColors.mono['900'],
      ...defaultTheme.colors,
    },
    screens: {
      xs: '31.25rem',
      sm: '37.5rem',
      md: '62.875rem',
      lg: '79rem',
    },
    extend: {
      colors: {
        ...myColors,
        lightLogo: myColors.primary['100'],
        darkLogo: myColors.primary['400'],
      },
    },
  },
  plugins: [],
}
