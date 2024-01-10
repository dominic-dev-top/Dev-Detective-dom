/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'frostWhite' : '#F6F8FF', 
        'pureWhite' : '#FEFEFE',
        'softBlue' : '#4B6A9B',
        'darkBlue' : '#141D2F',
        'cardBlue' : '#1E2A47',
      },
      fontFamily:{
        spaceMono : ['Space Mono', 'monospace'],
      }
    },
  },
  plugins: [],
}