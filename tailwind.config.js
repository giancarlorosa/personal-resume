/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layout/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'davy-grey': '#555555',
        mercury: '#e5e5e5',
        'dark-jungle-green': '#222222',
        'pacific-blue': '#0099cc',
        'peacock-blue': '#006699',
        'deep-sky-blue': '#007ced',
      },
      fontFamily: {
        poppins: ['var(--font-poppins)'],
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      lineHeight: {
        'extra-snug': '1.425',
      },
    },
  },
  plugins: [],
};
