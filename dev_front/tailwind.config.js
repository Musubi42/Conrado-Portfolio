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
        'formContact': "url(Assets/BGFormContact.webp)",
        // 'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
