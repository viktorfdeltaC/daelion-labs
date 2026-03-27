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
          // Channel variables allow Tailwind opacity modifiers to work:
          // text-brand-accent/60, bg-brand-sub/20, etc.
          bg:     'var(--color-bg)',
          card:   'var(--color-surface)',
          accent: 'rgb(var(--c-accent) / <alpha-value>)',
          text:   'rgb(var(--c-text)   / <alpha-value>)',
          sub:    'rgb(var(--c-sub)    / <alpha-value>)',
          border: 'var(--color-border)',
          'accent-dim':    'var(--color-accent-dim)',
          'accent-border': 'var(--color-accent-border)',
        },
      },
      fontFamily: {
        display: ['"Clash Display"', 'Bricolage Grotesque', 'system-ui', 'sans-serif'],
        sans:    ['Instrument Sans', 'system-ui', 'sans-serif'],
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
