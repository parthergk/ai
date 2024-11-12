/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue1: '#5276b8',
        customBlue2: '#92b3c0',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #5276b8, #92b3c0)',
      },
    },
  },
  plugins: [],
};
