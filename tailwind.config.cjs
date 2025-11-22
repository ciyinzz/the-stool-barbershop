module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          900: "#0f1012",
          800: "#1a1b1e",
          accent: "#e6c27a"
        }
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"]
      }
    }
  },
  plugins: []
};
