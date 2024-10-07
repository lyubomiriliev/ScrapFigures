// tailwind.config.js
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        beige: '#f5f2e8',
        darkBrown: '#3e2c26',
        rust: '#b7410e',
      },
      fontFamily: {
        vintage: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Open Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
