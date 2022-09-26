/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html", "./src/**/*.vue", "./src/**/*.jsx", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
      'primary': '#11203A',
      'secondary': '#FFCA0C'
      },
      padding: {
        '1/2': '50%',
        'full': '100%'
      },
      backgroundImage: {
        'logoWhite': "url(Assets/Icons/logoWhite.svg)",
        'formContact': "url(Assets/BGFormContact.webp)",
        'AlfonZoAcademyMockup': "url(Assets/AlfonZoAcademyMockup.webp)",
        'RoswellMockup': "url(Assets/RoswellMockup.webp)",
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
