/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        container: "1440px"
      },
      fontFamily: {
        bodyFont: "Poppins"
      },
      colors: {
        amazonBlue: "#131921",
        amazonLight: "#232F3E",
        amazonYellow: "#f0c14b",
        whiteText: "#ffffff",
        lightText: "#ccc",
        quantityBox: "#f0f2f2",
        footerBottom: "#131a22",
      }
    },
  },
  plugins: [],
}

