/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#0A0F1E',
          900: '#0F172A',
          800: '#1B2336',
          700: '#334155',
        },
        accent: {
          DEFAULT: '#2DD4BF',
          hover: '#14B8A6',
          glow: 'rgba(45, 212, 191, 0.15)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'waveform': 'waveform 1.5s ease-in-out infinite',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(45, 212, 191, 0.15)' },
          '50%': { boxShadow: '0 0 40px rgba(45, 212, 191, 0.3)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'waveform': {
          '0%, 100%': { height: '12px' },
          '50%': { height: '32px' },
        },
      },
    },
  },
  plugins: [],
};
