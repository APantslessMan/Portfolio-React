/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        se: "370px",
      },
      colors: {
        greel: "#35423e",
        github: "#1f883d",
      },
    },
  },
  plugins: [daisyui],
};
