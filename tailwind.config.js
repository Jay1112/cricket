/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width : {
        '250' : '250px'
      },
      minWidth: {
        '250': '250px',
      },
      flex : {
        '20' : 0.2
      }
    },
    screens: {
      'sm': { 'max' : '640px'},
      'md': { 'max' : '768px'},
      'lg': { 'max' : '1024px'},
      'xl': { 'max' : '1280px'},
    }
  },
  plugins: [],
}

