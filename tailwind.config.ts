/** @type {import('tailwindcss').Config} */
module.exports = {
   daisyui: {
    themes: true,
   },
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        overlay: '#f4fff8ff', // Mint Cream
        background: '#000f08ff', // Night
        button: '#F8F32B', // Cadet Gray
        headline: '#f4fff8ff', // Mint Cream
        paragraph: '#8baaadff', // Cadet Gray
        buttonText: '#000f08ff', // Night
        stroke: '#4d4847ff', // Davy's Gray
        main: '#8baaadff', // Cadet Gray
        highlight: '#1c3738ff', // Gunmetal
        secondary: '#f4fff8ff', // Mint Cream
        tertiary: '#4d4847ff', // Davy's Gray
      },
    },
    fontFamily: {
      sans: ['Poppins', 'sans'],
      serif: ['Roboto Slab', 'serif'],
    },
  },
  plugins: [require('daisyui')],
};
