/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      'space_grotesk': ['"Space Grotesk"',"sans-serif"],
    },
    extend: {
      colors: {
        border: {
          light: "#E8DECF",
          dark: "#918C73",
        },
        text: {
          h1: "#B39D7580",
        },
      },
    },
  },
  plugins: [],
};
