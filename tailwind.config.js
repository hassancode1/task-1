/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        active: '#00635B', 
        card:"#D0F7FA",
        textColor:"#979797",

        button:"#087B2F"
      },
    },
  },
  plugins: [],
}

