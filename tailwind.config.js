/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        popup: "animePopup 0.77s 1",
      },
      keyframes: {
        animePopup: {
          "0%": {
            transform: "scale(0)",
          },
          "50%": {
            transform: "scale(1.2)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".primary-button": {
          height: "2.5rem",
          width: "9rem",
          borderRadius: "1.5rem",
          backgroundColor: "hsla(0, 0%, 100%, .2)",
          textAlign: "center",
          fontWeight: "600",
          lineHeight: "2.5rem",
          color: "rgb(255 255 255 / var(--tw-text-opacity))",
          backdropBlur: "blur(4px)",
          transitionProperty:
            "color, background-color, border-color, text-decoration-color, fill, stroke",
          transitionDuration: ".3s",
          transitionTimingFunction: "cubic-bezier(.4,0,.2,1)",
          animationDuration: ".3s",
          animationTimingFunction: "cubic-bezier(.4,0,.2,1)",
        },
      });
    },
  ],
};
