module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Orbitron', 'sans-serif']
      },
      backgroundColor: {
        customWhite: '#ffffff',
        customGreen: '#55AE95',
        customYellow: '#F7DB6A',
        customBlack: '#3F4D71',
        customOrange: '#FF7C7C',
        customGray: '#F4F4F4',
        customPink: '#F266AB',
        customMainWhite: '#FFF9EE'
      },
      textColor: {
        customWhite: '#ffffff',
        customGreen: '#55AE95',
        customYellow: '#F7DB6A',
        customBlack: '#3F4D71',
        customOrange: '#FF7C7C',
        customGray: '#F4F4F4',
        customPink: '#F266AB',
      },
      borderColor: {
        customDarkGray: '#B6BBC4',
        customBlack: '#072541'
      }
    },
    plugins: [],
  }
}