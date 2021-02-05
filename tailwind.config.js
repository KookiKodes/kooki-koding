module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    minHeight: {
      "px-600": "600px",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
