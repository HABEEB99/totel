/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightBg: "#FEFFFE",
        darkBg: "#0B3954",
        sidebar: "#FFE66D",
        modal: "#BFD7EA",
        header: "#BFD7EA",
        btn: "#FF6663",
        btnHov: "#E0FF4F",
        icon: "#4ECDC4",
      },
    },
  },
  plugins: [require("tailwind-scrollbar"), require("tailwind-scrollbar-hide")],
};
