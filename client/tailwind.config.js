module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        green:{
          '450':'#07fc03'
        }
      }
    },
    
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
