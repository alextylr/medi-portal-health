/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "portal-blue": {
          DEFAULT: "#5a81fa",
          300: "#88A5FB",
        },
        "portal-purple": {
          DEFAULT: "#28398D",
          100: "#CDDEFF",
          300: "#6073D2",
          500: "#4057C9",
          700: "#2D409F",
          900: "#28398D",
        },
        "portal-gray": {
          DEFAULT: "#f8f9fd",
          50: "#f2f5ff",
          100: "#E9E9ED",
          300: "#BBBEC9",
          500: "#6A6E83",
          900: "#A1A1A5",
        },
        "portal-red": {
          DEFAULT: "#FA978D",
          300: "#FCB8B1",
          500: "#F98376",
        },
        "portal-green": {
          DEFAULT: "#91d095",
          300: "#e0f5e5",
        },
        "portal-dark": {
          DEFAULT: "#1f1f1f",
          500: "#2f2f2f",
          700: "#292929",
          900: "#01070a",
        },
       
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
