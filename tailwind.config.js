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
          yellow: '#F59E0B', 
          white: '#FFFFFF',
        }
      }
    },
  },
  plugins: [],
};

