/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          cream: '#FFF8EA',
          green: '#0F5E4E',
          deepGreen: '#06382F',
          maroon: '#7A1E1E',
          gold: '#F4B400',
          text: '#1A1A1A',
          muted: '#737373',
          border: '#E8DDC8',
        },
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        display: ['Cormorant Garamond', 'serif'],
      },
      boxShadow: {
        soft: '0 18px 45px -24px rgba(6, 56, 47, 0.35)',
        card: '0 24px 60px -30px rgba(15, 94, 78, 0.28)',
      },
    },
  },
  plugins: [],
}
