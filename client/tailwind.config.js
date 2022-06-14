const colors = require("tailwindcss/colors")
module.exports = {
  content: [
    "./src/**/*.{js, jsx, ts, tsx}"
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      red: colors.red,
      green: colors.green,
      blue: colors.blue,
      primaryRed: "rgb(188, 81, 45)",
      buttonBlue: "rgb(89, 147, 210)",
      primaryBlue: 'rgb(46, 152, 212)',
      primaryGray: {
        100: "rgb(242, 242, 246)", 
        200: "rgb(228, 228, 233)",
        300: "rgb(162, 162, 162)",
      },
      primaryGreen: "rgb(205, 232, 163)",
      darkGreen:"rgb(141, 183, 80)"
    },
    screens: {
      'sm': '530px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {},
  },
  plugins: [],
}
