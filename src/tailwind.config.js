"use strict";
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      white: "#fff",
      primary100: "#3CB597",
      primary200: "#58F7D5",
      dark100: "#111",
      dark200: "#2C2C2C",
      light100: "#D1D3D4",
      light200: "#FCFCFC",
      neutral900: "#171717",
    },
    fontFamily: {
      body: ["Lexend, sans-serif"],
      section: ["Vista Nordic"],
      JosefinSans: ["JosefinSans"],
    },
    screens: {
      xsm: "450px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      h_lg: { raw: "(max-height: 580px)" },
    },
    extend: {
      width: {
        25: "6.25rem",
      },
      maxWidth: {
        container: "1404px",
      },
      flex: {
        20: "0 0 20%",
        25: "0 0 25%",
        33.333: "0 0 33.333%",
        50: "0 0 50%",
      },
      blur: {
        100: "100px",
      },
      transitionProperty: {
        width: "width",
        margin: "margin",
      },
      linearBorderGradients: ({ theme }) => ({
        colors: {
          "light-blue": ["#58F7D5", "FFFFFF"],
        },
        background: theme("colors"),
      }),
    },
  },
  plugins: [require("tailwindcss-border-gradient-radius")],
};
