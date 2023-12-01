/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '0px',

      md: '768px',

      lg: '1200px',

      xl: '1280px',

      '2xl': '1536px',
    },
  },
  plugins: [],
};
