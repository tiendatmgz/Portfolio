/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'Jura': ['Jura', 'sans-serif'],
    },
    extend: {
      colors: {
        'bg-gradient-1': 'rgba(19,128,134,1) ',
        'bg-gradient-2': 'rgba(83,70,102,1)',
      },
    },
  },
  plugins: [],
}