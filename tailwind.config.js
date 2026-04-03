/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./layouts/**/*.{js,jsx}",
  ],
  plugins: [
    require("@tailwindcss/forms"),
  ],
};
