/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          primary: '#096FFA',
          secondary: '#5478e4'
        },
        grey: {
          surface: '#121212',
        },
        yellow: {
          sunny: '#FFE600'
        },
        pink: {
          primary: '#d23669',
          secondary: '#ffa7c4'
        }
      }
    },
  },
  plugins: [],
}
