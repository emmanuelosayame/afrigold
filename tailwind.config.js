/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['var(--font-roboto)'],
      },
      backgroundImage: {
        'food-3': "url('/food-2.jpg')",
      },
      colors: {
        'custom-red': '#D50606',
      },
    },
  },
  plugins: [],
};
