/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
       colors: {
        primary: "#d7d7d7",
        dark: "#1f1f1f",
        muted: "#b5b5b5",
      },
    },
  },
  plugins: [],
};
