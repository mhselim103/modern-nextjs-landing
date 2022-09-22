/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "sans ": ["Poppins", "sans-serif"],
      },
      colors: {
        custom: "#EA3A60",
        heading: "#0F2137",
      },
    },
  },
  plugins: [],
};
