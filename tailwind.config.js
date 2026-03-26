/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg:      '#08080F',
          card:    '#0D0D1A',
          accent:  '#8B5CF6',
          text:    '#FFFFFF',
          sub:     '#A0A0B0',
          border:  'rgba(255,255,255,0.06)',
          'accent-dim': 'rgba(139,92,246,0.08)',
          'accent-border': 'rgba(139,92,246,0.25)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.2em',
      },
    },
  },
  plugins: [],
}

