/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html", "./src/**/*.vue", "./src/**/*.jsx"],
  theme: {
    extend: {
      colors: {
      'primary': '#11203A',
      'primary-hover': '#FFCA0C',
      'secondary': '#FFCA0C'
      },
      padding: {
        '1/2': '50%',
        'full': '100%'
      }
    },
  },
  plugins: [],
}
