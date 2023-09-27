/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      meri: ["Merriweather"],
      roboto: ["Roboto"],
    },
    extend: {
      colors: {
        primary: {
          50: "#DCEEFF",
          100: "#B9DCFF",
          200: "#97CBFF",
          300: "#74BAFF",
          400: "#51A8FF",
          500: "#2E97FF",
          600: "#1C80E5",
          700: "#006ACB",
          800: "#0155B2",
          900: "#004099",
        },
        secondary: {
          50: "#FFFFFF",
          100: "#F7F7F7",
          200: "#E1E5E7",
          300: "#CCD4D8",
          400: "#A5B3BC",
          500: "#8295A1",
          600: "#677D8B",
          700: "#345164",
          800: "#1C3B50",
          900: "#01263D",
        },
        red: {
          50: "#FFEFEF",
          100: "#FEE2E2",
          200: "#FECACA",
          300: "#FCA5A5",
          400: "#FF7672",
          500: "#FF3B3B",
          600: "#DC2626",
          700: "#B91C1C",
          800: "#9E1413",
          900: "#840B0B",
        },
        yellow: {
          50: "#FEFCE8",
          100: "#FEF9C3",
          200: "#FEF08A",
          300: "#FDE047",
          400: "#FACC15",
          500: "#EAB308",
          600: "#CA8A04",
          700: "#A16207",
          800: "#854D0E",
          900: "#713F12",
        },
        green: {
          50: "#E9F6E7",
          100: "#CCEAC4",
          200: "#B0DEA3",
          300: "#93D281",
          400: "#76C65E",
          500: "#55B938",
          600: "#419E2A",
          700: "#2E831D",
          800: "#1B6A0F",
          900: "#055102",
        },
      },
      fontSize: ({ theme }) => ({
        // Paragraph 12
        xs: [
          "0.75rem",
          { lineHeight: "1rem", fontWeight: theme("fontWeight.normal") },
        ],
        // Paragraph 14
        sm: [
          "0.875rem",
          { lineHeight: "1.25rem", fontWeight: theme("fontWeight.normal") },
        ],
        // Paragraph 16
        base: [
          "1rem",
          { lineHeight: "1.5rem", fontWeight: theme("fontWeight.normal") },
        ],
        // Subtitle 2
        lg: [
          "1.125rem",
          { lineHeight: "1.75rem", fontWeight: theme("fontWeight.normal") },
        ],
        // Subtitle 1
        xl: [
          "1.25rem",
          { lineHeight: "1.75rem", fontWeight: theme("fontWeight.normal") },
        ],
        // Heading 6
        "2xl": [
          "1.25rem",
          { lineHeight: "1.75rem", fontWeight: theme("fontWeight.medium") },
        ],
        // Heading 5
        "3xl": [
          "1.5rem",
          { lineHeight: "1.875rem", fontWeight: theme("fontWeight.medium") },
        ],
        // Heading 4
        "4xl": [
          "1.875rem",
          { lineHeight: "2.25rem", fontWeight: theme("fontWeight.medium") },
        ],
        // Heading 3
        "5xl": [
          "2.25rem",
          { lineHeight: "3rem", fontWeight: theme("fontWeight.medium") },
        ],
        // Heading 2
        "6xl": [
          "3rem",
          { lineHeight: "3.75rem", fontWeight: theme("fontWeight.semibold") },
        ],
        // Heading 1
        "7xl": [
          "3.75rem",
          { lineHeight: "4.5rem", fontWeight: theme("fontWeight.semibold") },
        ],
        "8xl": [
          "4.5rem",
          { lineHeight: "6rem", fontWeight: theme("fontWeight.semibold") },
        ],
        "9xl": [
          "6rem",
          { lineHeight: "1", fontWeight: theme("fontWeight.semibold") },
        ],
      }),
    },
  },
  plugins: [],
};
