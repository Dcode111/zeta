/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        barlow: ["Barlow", "sans-serif"],
      },
      backgroundImage: {
        company_1: "url('/company_img.png')",
      },
    },
  },
  plugins: [],
};
