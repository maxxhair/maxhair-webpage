/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".display-large": {
          fontSize: "90px",
        },
        ".display-medium": {
          fontSize: "61px",
        },
        ".display-small": {
          fontSize: "44px",
        },
        ".headline-large": {
          fontSize: "44px",
          fontWeight: "700",
        },
        ".headline-medium": {
          fontSize: "32px",
          fontWeight: "700",
        },
        ".headline-small": {
          fontSize: "24px",
          fontWeight: "700",
        },
        ".title-large": {
          fontSize: "34px",
          fontWeight: "600",
        },
        ".title-medium": {
          fontSize: "24px",
          fontWeight: "600",
        },
        ".title-small": {
          fontSize: "20px",
          fontWeight: "600",
        },
        ".label-large": {
          fontSize: "20px",
          fontWeight: "500",
        },
        ".label-medium": {
          fontSize: "16px",
          fontWeight: "500",
        },
        ".label-small": {
          fontSize: "14px",
          fontWeight: "500",
        },
        ".body-large": {
          fontSize: "16px",
          fontWeight: "400",
        },
        ".body-medium": {
          fontSize: "14px",
          fontWeight: "400",
        },
        ".body-small": {
          fontSize: "12px",
          fontWeight: "400",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
