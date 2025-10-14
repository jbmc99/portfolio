/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Space Grotesk"', 'Roboto', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        grotesk: ['"Space Grotesk"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
