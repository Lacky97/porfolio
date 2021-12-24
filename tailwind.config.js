module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    fontFamily:{
      'kaushan': ['Kaushan Script'],
    },
    boxShadow:{
      'custom-light':'0 0 10px #e0e0e0',
      'custom-dark':'5px 5px 10px #0a0c0e, -5px -5px 10px #14161c',
    },
    extend: {
      colors:{
        green: {
          DEFAULT: '#3066BE',
        },
        dark: {
          DEFAULT: '#010101',
          100: '#0a0b0e',
          200: '#16181d',
          300: '#16181d',
          500: '#0f1115',
          600: '#15161A',
          700: '#202125'
        },
        white:{
          DEFAULT: '#ffffff',
          100: '#fafafa',
          200: '#f5f5f5',
          300: '#eeeeee',
          500: '#e0e0e0',
          600: '#bdbdbd',
          700: '#9e9e9e',
        },
        colorInsta:{
          DEFAULT: '#ff5a5f',
          100: '#feda75',
          200: '#fa7e1e',
          300: '#d62976',
          400: '#962fbf',
          500: '#4f5bd5',
        }
      },
    },
  },
  variants: {
    extend: {
      boxShadow: ['dark']
    },
  },
  plugins: [],
};
 