/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      'fontFamily':{
        'title': ['Passion One', 'cursive']
      },
      colors: {
        'background': '#CF4949'
      }
    },
  },
  plugins: [],
}
