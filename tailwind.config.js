/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        permry: "#264653",
        secondary: "#2a9d8f",
        therd: "#e9c46a",
        fourth: "#f4a261",
      },
    },
  },
  plugins: [],
};
