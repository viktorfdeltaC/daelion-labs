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
          'accent-dim':    'rgba(139,92,246,0.08)',
          'accent-border': 'rgba(139,92,246,0.25)',
        },
      },
      fontFamily: {
        // Clash Display — geometric, high-contrast, premium agency feel
        // Bricolage Grotesque as variable-weight fallback
        display: ['"Clash Display"', 'Bricolage Grotesque', 'system-ui', 'sans-serif'],
        // Instrument Sans — refined body & UI text
        sans:    ['Instrument Sans', 'system-ui', 'sans-serif'],
        // Instrument Sans doubles as mono for labels (tracked + uppercase = distinct)
        mono:    ['Instrument Sans', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        widest2: '0.2em',
      },
      transitionDuration: {
        400: '400ms',
      },
    },
  },
  plugins: [],
}
