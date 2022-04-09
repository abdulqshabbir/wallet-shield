module.exports = {
  content: [
    "./src/**/*.{js, jsx, ts, tsx}"
  ],
  theme: {
    colors: {
      primaryBlue: 'rgb(46, 152, 212)',
      primaryGray: {
        100: "rgb(242, 242, 246)", 
        200: "rgb(228, 228, 233)",
        300: "rgb(162, 162, 162)",
      },
      primaryGreen: "rgb(205, 232, 163)",
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
