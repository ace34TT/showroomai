/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: {
          50: "#eafeff",
          100: "#cbfbff",
          200: "#9ef4ff",
          300: "#5be9ff",
          400: "#00d1ff",
          500: "#00b7e5",
          600: "#0091c0",
          700: "#03739b",
          800: "#0d5d7d",
          900: "#104d69",
          950: "#033249",
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
