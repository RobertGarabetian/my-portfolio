/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust this line if you use TypeScript
  ],  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}

