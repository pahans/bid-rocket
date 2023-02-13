/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [
    // Initialize with default values (see options below)
    require('tailwindcss-radix')(),
  ],
  content: ['./src/**/*.{html,js,tsx}'],
};
