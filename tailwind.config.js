/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        1200: '1200px'
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif']
      },
      animation: {
        logo: 'spin 2s linear infinite'
      },
      screens: {
        990: '990px'
      }
    },
  },
  plugins: [],
}

