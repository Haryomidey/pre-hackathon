/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'small': '250px',

      'mobile': '350px',

      'tablet': '740px',

      'laptop': '1024px',

      'desktop': '1280px',
    },
    extend: {},
  },
  plugins: [],
}