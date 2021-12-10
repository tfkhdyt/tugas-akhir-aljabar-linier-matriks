const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}", 
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  // darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
