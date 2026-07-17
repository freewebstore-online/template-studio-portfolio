/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#b8ff00',
          orange: '#ff5b22',
          dark: '#080808',
          surface: '#101010',
          card: '#151515',
          border: '#2a2a2a',
        },
      },
      fontFamily: {
        anton: ['Anton', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
