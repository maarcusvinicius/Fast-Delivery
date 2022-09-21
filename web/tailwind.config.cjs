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
        'word-gradient': "linear-gradient(90deg, rgba(69,58,255,1) 0%, rgba(131,51,143,1) 61%, rgba(0,72,170,1) 100%)",
        'game-gradient': "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%)"
      },
    },
  },
  plugins: [],
}
