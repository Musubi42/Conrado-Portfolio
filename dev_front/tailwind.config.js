/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html", "./src/**/*.vue", "./src/**/*.jsx"],
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
        'test': "url(Assets/BGFormContact.webp)",
        // 'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  plugins: [],
}
