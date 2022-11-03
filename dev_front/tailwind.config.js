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
        'ppGiorno': "url(https://yt3.ggpht.com/ErkCTFR662z_qtSuExHndLjQKMa8hyjdFJj7o8NM5GtElDTTYGPKo6teV8xyMJcvQEIVX89Trpk=s176-c-k-c0x00ffffff-no-rj)",
        'ppFondationMagister': "url(https://yt3.ggpht.com/ytc/AMLnZu9sO6JQAdl3Hf-CpbuxZA_1QfJ6yLcr16OL_9ru=s176-c-k-c0x00ffffff-no-rj)",
      },
      height: {
        'page': 'calc(100vh - 178px)',
        'logo': '450px',
        'logoTablet': '280px',
        'logoMobile': '180px',
      },
      width: {
        'quote': '430px',
      },
      borderWidth: {
        '6': '6px',
      },
      fontSize: {
        'quote': '34px',
        'text': '12px',
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'aclo': ['Aclonica', 'sans-serif'],
        'script': ['Aguafina Script', 'cursive'],
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
