module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    './node_modules/preline/preline.js',
  ],
  theme: {
    fontFamily: {
      'serif': ['Almarai', 'serif'],
      
      },
      
    colors: {
    'maincolor': '#5E1212',
    'secondarycolor': '#6B193F'
    
    },
    extend: {
      backgroundImage: {
        'hero': "url('/src/assets/ion-fet-QRawWgV6gmo-unsplash.jpg')",
        'sec2': "url('/src/assets/sect-2-bg.png')",
      }}
  },
  plugins: [ require('flowbite/plugin'),  require('preline/plugin') ],

};