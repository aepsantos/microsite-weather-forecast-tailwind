/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,css}",
           ],
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

