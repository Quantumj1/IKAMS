/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        umat: {
          gold: '#D4A70A',
          blue: '#003087',
        }
      }
    },
  },
  plugins: [],
};
