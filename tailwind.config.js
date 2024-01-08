/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        space: ["Space Grotesk", "sans-serif"],
      },
      colors: {
        primary: "#5c8984",
        hover: "#38736c",
        text: "#14d9c2",
        foreground: "#2c403d",
        background: "#2d3332",
      },
    },
  },
  variants: {},
  plugins: [],
};
