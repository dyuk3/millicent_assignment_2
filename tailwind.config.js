/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        7: '1fr 1fr 1fr 2fr 2fr 2fr 1fr',
        4: '1fr repeat(3,minmax(0,2fr))',
      },
    },
  },
  plugins: [],
};
