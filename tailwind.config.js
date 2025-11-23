/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        azulPrimary: '#1c3c95', // Cor extraída do seu design
      }
    },
  },
  plugins: [],
}