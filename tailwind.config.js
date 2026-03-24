/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        umatGreen: '#10B981',
        umatGold: '#D4A70A',
        umatYellow: '#F59E0B',
        umatLight: '#6EE7B7',
        umatWhite: '#FFFFFF',
        umatError: '#F87171',
      }
    },
  },
  plugins: [],
};

