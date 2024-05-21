/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content()
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
      }
    }
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".display-large": {
          fontSize: "90px"
        },
        ".display-medium": {
          fontSize: "61px"
        },
        ".display-small": {
          fontSize: "44px"
        },
        ".headline-large": {
          fontSize: "44px",
          fontWeight: 600
        },
        ".headline-medium": {
          fontSize: "32px",
          fontWeight: 600
        },
        ".headline-small": {
          fontSize: "24px",
          fontWeight: 600
        },
        ".title-large": {
          fontSize: "34px"
        },
        ".title-medium": {
          fontSize: "24px"
        },
        ".title-small": {
          fontSize: "20px"
        },
        ".label-large": {
          fontSize: "20px"
        },
        ".label-medium": {
          fontSize: "16px"
        },
        ".label-small": {
          fontSize: "14px"
        },
        ".body-large": {
          fontSize: "16px"
        },
        ".body-medium": {
          fontSize: "14px"
        },
        ".body-small": {
          fontSize: "12px"
        }
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
    flowbite.plugin()
  ]
};
