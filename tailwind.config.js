const defaultColors = require('tailwindcss/colors')

const myColors = {
  primary: '#1d9bf0',
}

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
        logo: {
          light: myColors.primary,
          dark: '#eff3f4',
          hover: { light: '#e8f5fe', dark: '#181818' },
          // #e7e9ea
        },
        typo: {
          primary: { light: '#0f1419', dark: '#e7e9ea' },
          secondary: { light: '#536471', dark: '#71767b' },
        },
        hover: {
          light: defaultColors.gray[100],
        },
      },
      transitionProperty: {
        display: 'display,',
        spacing: 'margin, padding',
      },
    },
  },
  plugins: [],
}
