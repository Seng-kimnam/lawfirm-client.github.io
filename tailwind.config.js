/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"], // ← this is required
        Battambang: ["Battambang", "system-ui"], // ← this is required
      },
      colors: {
        DarkBlue: "oklch(0.2208 0.0721 254.77)",
      },
      
    },
  },
  plugins: [require("tailwindcss-animate")],
};
