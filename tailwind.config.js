/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      text: "#ecf1f3",
      background: "#1d1e2b",
      primary: "#126e60",
      secondary: "#136F63",
      accent: "#7ac94f",
      section1: "#284b63"

    },

    extend: {
      fontSize: {
        sm: "0.750rem",
        base: "1rem",
        xl: "1.333rem",
        "2xl": "1.777rem",
        "3xl": "2.369rem",
        "4xl": "3.158rem",
        "5xl": "4.210rem",
      },
      fontFamily: {
        body: ["Roboto Mono", "sans-serif"],
        heading: ["Inter", "sans-serif"],
      },
      fontWeight: {
        normal: "400",
        bold: "700",
      },
    },
  },
  plugins: [],
};
