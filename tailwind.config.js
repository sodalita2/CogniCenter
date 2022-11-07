/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "orange-rgba": 'rgba(255, 219, 174, 0.41)',
        "orange-rgba-lighter": 'rgba(255, 219, 174, 0.20)',
      },
      animation: {
        'NavHoverShow': 'NavHoverShow 0.4s',
        'NavHoverHide': 'NavHoverHide 0.4s',
      },
    },
    screens: {
      "W400":'400px',
      "W710":'710px',
      "W1060":'1060px',
    },
  },
  plugins: [],
}
