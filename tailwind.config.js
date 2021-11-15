module.exports = {
  future: {},
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    fontFamily: {
      sans: ["Fira Sans", "Arial", "Helvetica", "sans-serif"],
      serif: ["Merriweather", "Times New Roman", "Times", "serif"],
      mono: [
        "Fira Mono",
        "Courier New",
        "Courier",
        "Consolas",
        "Menlo",
        "Liberation Mono",
        "ui-monospace",
        "SFMono-Regular",
        "monospace",
      ],
    },
  },
  variants: {
    extend: {
      opacity: ["disabled"],
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
