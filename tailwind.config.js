const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    container: {
      center: true,
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        brightRed: "hsl(12, 88%, 59%)",
        brightRedLight: "hsl(12, 88%, 69%)",
        brightRedSupLight: "hsl(12, 88%, 95%)",
        darkBlue: "hsl(228, 39%, 23%)",
        darkGrayishBlue: "hsl(227, 12%, 61%)",
        veryDarkBlue: "hsl(223, 12%, 13%)",
        veryPaleRed: "hsl(13, 100%, 96%)",
        veryLightGray: "hsl(0, 0%, 98%)",
      },
      backgroundImage: {
        "simplify-section-desktop":
          "url('/imgs/bg-simplify-section-desktop.svg')",
        "simplify-section-mobile":
          "url('/imgs/bg-simplify-section-mobile.svg')",
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("is-active", "&.is-active");
    }),
  ],
};
