import colors from "tailwindcss/colors";
/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  important: true,
  theme: {
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
      "50%": "50%",
      "10%": "10%",
    },

    extend: {
      /* // that is animation class
      animation: {
        fade: 'fadeOut 5s ease-in-out',
      },

      // that is actual animation
      keyframes: theme => ({
        fadeOut: {
          '0%': { backgroundColor: theme('colors.red.300') },
          '100%': { backgroundColor: theme('colors.transparent') },
        },
      }), */
      backgroundImage: {
        maps: "url('/images/GoogleMapsIcon.png')",
        shape: "url('/images/formbg-2.png')",
        home1: "url('/images/hero-section-centroinformacion.png')",
        gorro: "url('/images/graduation.png')",
        wave: "url('/images/wave.png')",
        // "footer-texture": "url('/img/footer-texture.png')",
        fondo: "url('/images/unlam.mp4')",
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
      dropShadow: {
        logo: ["0 0 1rem rgba(100, 150, 200, 1)"],
      },
    },
  },
  plugins: [],
};
