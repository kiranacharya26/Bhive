/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Adjust paths for your project
  ],
  theme: {
    extend: {
      borderRadius: {
        'custom': '6px',
      },
      colors: {
        logo: {
          background1: '#FFBB00',
          background2: '#000000',
        },
        primaryButton: {
          lightYellow: '#FFCF4B',
          darkYellow: '#FFC422',
        },
        secondaryButton: {
          lightGrey: '#263238',
          darkGrey: '#65624C',
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'], // Use Inter font
      },
      fontSize: {
        'h1': '58px',
        'h2': '36px',
        'h3': '24px',
        'h4': '20px',
        'h5': '18px',
        'h6': '16px',
      },
      lineHeight: {
        'heading': '1.1',
      },
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
  },
  plugins: [],
};
