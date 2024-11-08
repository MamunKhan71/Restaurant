/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, rgba(189, 31, 23, 0) 32.88%, rgba(189, 31, 23, 0.7) 100%)'
      },
      fontFamily: {
        "primary": ["Raleway", "sans-serif"],
        "secondary": ["Roboto", "sans-serif"],
        "bebas": ["Bebas Neue", "sans-serif"],
        "sans": ["Open Sans", "sans-serif"],
        "inter": ["Inter", "sans-serif"],
        "montserat": ["Montserrat", "sans-serif"]
      },
      colors: {
        "primary": "#FEBF00"
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
}