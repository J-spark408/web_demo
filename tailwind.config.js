/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f8f7f4',
          100: '#efe5d5',
          200: '#e6d0b3',
          300: '#d9b286',
          400: '#cc9359',
          500: '#c27a3b',
          600: '#b56331',
          700: '#964c2c',
          800: '#7b3f29',
          900: '#653626',
          950: '#391c14',
        },
        accent: {
          50: '#f4f7f8',
          100: '#dfeef1',
          200: '#bfe2e8',
          300: '#91d0da',
          400: '#5cb6c5',
          500: '#3b9aad',
          600: '#2f7c91',
          700: '#296476',
          800: '#265262',
          900: '#234654',
          950: '#132a34',
        },
        gray: {
          50: '#f8f8f8',
          100: '#f0f0f0',
          200: '#e4e4e4',
          300: '#d1d1d1',
          400: '#b4b4b4',
          500: '#9a9a9a',
          600: '#818181',
          700: '#6a6a6a',
          800: '#5a5a5a',
          900: '#4e4e4e',
          950: '#282828',
        },
      },
      fontFamily: {
        'serif': ['Playfair Display', 'Georgia', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};