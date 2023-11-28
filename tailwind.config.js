/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      boxShadow: {
        'custom-large':
          '0 0 #0000, 0 0 #0000, 0 0.75rem 0.5rem 0.125rem rgba(0, 0, 0, .22), 0 0.5rem 0.25rem rgba(0, 0, 0, .18)',
        'custom-small': '0px 3px 6px rgba(47,55,0,.36)',
      },
    },
  },
  plugins: [],
};
