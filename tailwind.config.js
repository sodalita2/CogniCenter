/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      "MaxW-400px":{'max':'400px'},
      "MaxW-700px":{'max':'700px'},
      "MaxW-1000px":{'max':'1000px'},
    },
  },
  plugins: [],
}
