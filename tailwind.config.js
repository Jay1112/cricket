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
        '200': '200px',
        '250': '250px',
      },
      maxWidth: {
        '250': '250px',
      },
      scale : {
        '102' : '1.02',
      }
    },
    screens: {
      'sm': { 'min' : '640px'},
      'md': { 'min' : '768px'},
      'lg': { 'min' : '1024px'},
      'xl': { 'min' : '1280px'},
    }
  },
  plugins: [],
}

