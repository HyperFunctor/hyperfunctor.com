const colors = require("tailwindcss/colors");
const brand = colors.pink[400];

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
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

    extend: {
      typography: {
        brand: {
          css: {
            color: "#333",
            a: {
              color: colors.gray[600],
              "font-weight": "bold",
              "text-decoration": "none",
              "border-bottom-width": "2px",
              "border-color": brand,
              "&:hover": {
                color: colors.black,
                "background-color": colors.pink[100],
              },
            },
          },
        },
      },
    },
  },
  variants: {
    extend: {
      opacity: ["disabled"],
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
