/** @type {import('tailwindcss').Config} */
module.exports = {
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
        light_purple: '#E9EEFA',
        green: '#6B8C85',
      },
    },
  },
  plugins: [],
}
