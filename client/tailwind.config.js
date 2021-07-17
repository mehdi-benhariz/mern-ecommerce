module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        green: {
          450: "#07fc03",
        },
      },
      screens: {
        "3xl": "1600px",
        "2sm": "700px",
        xsm: "480px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
