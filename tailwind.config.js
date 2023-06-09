/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['"Work Sans"', 'sans-serif'],
    },
    extend: {
      colors: {
        bg_white: '#FDFDFB',
        purple: '#ECE3F6',
        light_purple: '#E9EEFA',
        green: '#6B8C85',
        gray: '#777777',
        light_gray: '#DFDFDF',
        hover_gray: '#eeeeee',
        light_pink: '#F5D1D1',
        black: '#000000',
        timer_green: '#E7F5EC',
      },
    },
  },
  plugins: [],
})
