/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      /* ── Brand colours ─────────────────────────────────────
         Channel variables allow Tailwind opacity modifiers:
         text-brand-accent/60, bg-brand-sub/20, etc.          */
      colors: {
        brand: {
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

      /* ── Font families ──────────────────────────────────── */
      fontFamily: {
        display: [
          '"Clash Display"',
          '"Neue Haas Grotesk Display"',
          'system-ui',
          'sans-serif',
        ],
        sans: [
          'Geist',
          'Inter',
          'system-ui',
          'sans-serif',
        ],
        mono: [
          '"Geist Mono"',
          'ui-monospace',
          'monospace',
        ],
      },

      /* ── Fluid font sizes ───────────────────────────────────
         Each entry references the CSS variable so the scale is
         single-source-of-truth.  Line-height is pre-paired so
         `text-fluid-h2` sets both font-size AND line-height.  */
      fontSize: {
        'fluid-hero': ['var(--text-hero)', { lineHeight: 'var(--leading-display)' }],
        'fluid-h1':   ['var(--text-h1)',   { lineHeight: 'var(--leading-heading)' }],
        'fluid-h2':   ['var(--text-h2)',   { lineHeight: 'var(--leading-heading)' }],
        'fluid-h3':   ['var(--text-h3)',   { lineHeight: 'var(--leading-subhead)' }],
        'fluid-h4':   ['var(--text-h4)',   { lineHeight: 'var(--leading-subhead)' }],
        'fluid-body': ['var(--text-body)', { lineHeight: 'var(--leading-body)' }],
        'fluid-sm':   ['var(--text-sm)',   { lineHeight: 'var(--leading-ui)' }],
        'fluid-xs':   ['var(--text-xs)',   { lineHeight: 'var(--leading-ui)' }],
        'fluid-label':['var(--text-label)',{ lineHeight: '1' }],
      },

      /* ── Letter spacing ─────────────────────────────────── */
      letterSpacing: {
        display: 'var(--tracking-display)',   /* -0.03em hero          */
        heading: 'var(--tracking-heading)',   /* -0.02em H1/H2         */
        sub:     'var(--tracking-sub)',       /* -0.01em H3/H4         */
        body:    'var(--tracking-body)',      /* -0.005em prose        */
        label:   'var(--tracking-label)',     /* +0.12em uppercase UI  */
        widest2: '0.2em',
      },

      /* ── Line heights ───────────────────────────────────── */
      lineHeight: {
        display: 'var(--leading-display)',    /* 0.88 — hero           */
        heading: 'var(--leading-heading)',    /* 1.1  — H1/H2          */
        subhead: 'var(--leading-subhead)',    /* 1.3  — H3/H4          */
        body:    'var(--leading-body)',       /* 1.7  — prose          */
        ui:      'var(--leading-ui)',         /* 1.4  — labels/buttons */
      },

      transitionDuration: {
        400: '400ms',
      },
    },
  },
  plugins: [],
}
