/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
            "./index.html", 
            ".js"],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        montSerrat: ['Montserrat', 'sans-serif']
      },
    },
  },
  plugins: [],
}

