/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'primary': {
        950: '#EE7D00',
        900: '#FF8B0A',
        800: '#FF9724',
        700: '#FFA33D',
        600: '#FFAF57',
        500: '#FFBB70',
        400: '#FFC78A',
        300: '#FFD3A3',
        200: '#FFDFBD',
        100: '#FFEBD6',
        50: '#FFF8F0',
      },
      'grayscale': {
        950: '#030303',
        900: '#1a1a1a',
        800: '#333333',
        700: '#4d4d4d',
        600: '#666666',
        500: '#808080',
        400: '#999999',
        300: '#b3b3b3',
        200: '#cccccc',
        100: '#e6e6e6',
        50: '#f3f3f3',
      },
      'meaning': '#ef4565',
    },
    fontFamily: {
      'basic': 'Pretendard',
    }
  },
  plugins: [],
}

