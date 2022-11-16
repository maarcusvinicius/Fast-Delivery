/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif']
    },
    extend: {
      backgroundImage : {
        galaxy: "url('/background-fundo.png')",
        'word-gradient': "linear-gradient(270deg, rgba(255,0,0,1) 0%, rgba(245,160,11,1) 100%, rgba(255,255,255,1) 100%);",
        'game-gradient': "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%)"
      },
    },
  },
  plugins: [],
}
