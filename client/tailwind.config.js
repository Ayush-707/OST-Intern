const colors = require("tailwindcss/colors");
//const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        indigo: {
          50: '#EEF2FF',
          100: '#E0E7FF',
          200: '#C7D2FE',
          300: '#A5B4FC',
          400: '#818CF8',
          500: '#6366F1',
          600: '#4F46E5',
          700: '#4338CA',
          800: '#3730A3',
          900: '#312E81',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  externals: {
    'react': 'React',
    'react-dom' :'ReactDom'

  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class",
    }),
    require("@material-tailwind/react"),
  ],
};

