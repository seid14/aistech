/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'aistech-blue': '#0ea5e9', // Sky blue
        'aistech-light-blue': '#e0f2fe',
        'aistech-dark-blue': '#0284c7',
      },
    },
  },
  plugins: [],
}
