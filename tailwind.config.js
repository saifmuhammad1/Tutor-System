/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class', 
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors:{
        primaryBlue:'#009ba7',
        lightBlue:'#eafafb'
      }
  },
},
  plugins: [],
};
