/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    fontFamily:{
      'playfair':['Playfair Display']
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}

