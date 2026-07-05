/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#0F2A5C',
        navyDark: '#0A1F44',
        gold: '#D4A017',
        goldLight: '#E8B923',
        red: '#D62828',
        offWhite: '#F8F8F6',
        grayish: '#cdd7d6',
        whiteB: '#EDEDED',
        grayB: '#BFC0C0',
        darkB: '#585959',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        bigB: ['Abril Fatface', 'serif'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        shadowScale: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
      },
      animation: {
        float: 'float 2s ease-in-out infinite',
        shadowScale: 'shadowScale 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}