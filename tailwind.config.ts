/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:"class",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/common/**/*.{js,ts,jsx,tsx}",
    "./src/widgets/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      white: "#ffffff",
      breakerDay: {
        '50': '#effefc',
        '100': '#c9fef9',
        '200': '#93fcf4',
        '300': '#56f2ed',
        '400': '#23dede',
        '500': '#0ac0c2',
        '600': '#1FCBC4',
        '700': '#09777c',
        '800': '#0c5e63',
        '900': '#0f4f52',
        '950': '#012e32',
      },
      black: {
        100: "#111111",
        200: "#222222",
        300: "#333333",
        400: "#444444",
        500: "#555555",
        600: "#666666",
        700: "#777777",
        800: "#888888",
        900: "#999999",
      },
      gray: {
        100: "#f7fafc",
        200: "#edf2f7",
        300: "#e2e8f0",
        400: "#cbd5e0",
        500: "#a0aec0",
        600: "#718096",
        700: "#4a5568",
        800: "#2d3748",
        900: "#1a202c",
      },
      yellow: {
        '50': '#fbffe7',
        '100': '#f3ffc1',
        '200': '#ecff86',
        '300': '#e9ff41',
        '400': '#eeff0d',
        '500': '#fbff00',
        '600': '#d1c200',
        '700': '#a68d02',
        '800': '#896e0a',
        '900': '#74590f',
        '950': '#443104',
    },
    orange: {
        '50': '#fffbec',
        '100': '#fff5d3',
        '200': '#ffe8a5',
        '300': '#ffd66d',
        '400': '#ffb832',
        '500': '#ffa00a',
        '600': '#ff8800',
        '700': '#cc6402',
        '800': '#a14d0b',
        '900': '#82410c',
        '950': '#461f04',
    },
    
    },
    extend: {},
  },
  plugins: [],
};
