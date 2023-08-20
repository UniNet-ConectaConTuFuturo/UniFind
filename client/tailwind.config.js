const colors = require("tailwindcss/colors");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
      "50%": "50%",
      "10%": "10%",
    },

    extend: {
      backgroundImage: {
        shape: "url('/images/shape.svg')",
        home1: "url('/images/hero-section-centroinformacion.png')",
        gorro: "url('/images/graduation.png')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
      margin: {
        100: "-70rem",
      },
      colors: {
        "bg-sb_bg": "#27272a",
      },
      boxShadow: {
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
};
