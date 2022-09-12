/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#2D2D2D',
        foreBackground: '#414141',
        textColor: '#',
      },
    },
  },
  plugins: [],
}
