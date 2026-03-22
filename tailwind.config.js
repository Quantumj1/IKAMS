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
          green: '#10B981',
          gold: '#D4A70A',
          yellow: '#F59E0B',
          light: '#6EE7B7',
          white: '#FFFFFF',
          error: '#F87171',  // muted for errors
        }
      }
    },
  },
  plugins: [],
};

