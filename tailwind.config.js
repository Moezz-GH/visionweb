module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    './node_modules/preline/preline.js',
  ],
  theme: {
    fontFamily: {
      'costum': ['Almarai', 'serif'],
      
      },
      
    colors: {
    'maincolor': '#5E1212',
    'secondarycolor': '#6B193F',
    'secondarycolor/2': '#6b193f9c',
    'Headingcolor': '#6b193f',
    'LDN': '#ffda25',
    
    },
    extend: {
      backgroundImage: {
        'hero': "url('/src/assets/img-background-hero.jpeg')",
        'sec2': "url('/src/assets/sect-2-bg.png')",
        'sec3': "url('/src/assets/Screenshot_2024-12-13_222119-removebg-preview.png')",
        'sec4': "url('/src/assets/pexels-pixabay-50987.jpg')",
        'weare': "url('/src/assets/who-we-are.png')",

      }}
  },
  plugins: [ require('flowbite/plugin'),  require('preline/plugin') ],

};