/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        primary: {
          light: "#2dd4bf",
          bold: "#14b8a6",
        },
      },
    },
  },
  plugins: [],
};