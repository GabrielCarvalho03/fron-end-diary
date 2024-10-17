/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        "3xl": "60rem",
      },
      fontSize: {
        "2xs": "0.5rem",
        "1xs": "0.60rem",
      },
      borderWidth: {
        "0.5px": "0.5px",
      },
    },
  },
  plugins: [],
};
