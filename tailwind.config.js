/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/**/*.{html,js,css}",
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

