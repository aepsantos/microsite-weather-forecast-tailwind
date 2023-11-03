/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js, css}",
            "./index.html", 
            ".js", 
            "./dist.{css}"],
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

