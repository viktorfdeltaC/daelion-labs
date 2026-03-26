const socials = [
  {
    name: 'LinkedIn',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    name: 'X',
    href: '#',
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer className="bg-brand-bg border-t border-brand-border">

      {/* Large wordmark area */}
      <div className="px-6 md:px-10 lg:px-16 pt-16 pb-10 border-b border-brand-border">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          {/* Wordmark */}
          <div>
            <div className="flex items-baseline gap-3 mb-2">
              <span
                className="font-display font-extrabold text-brand-text leading-none tracking-tighter"
                style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}
              >
                DAELION
              </span>
              <span className="font-mono text-brand-accent font-normal tracking-widest2 uppercase" style={{ fontSize: 'clamp(0.75rem, 1.5vw, 1.1rem)' }}>
                LABS
              </span>
            </div>
            <p className="text-brand-sub text-sm">Wir bauen Lösungen.</p>
          </div>

          {/* Socials */}
          <nav aria-label="Social media links">
            <ul className="flex items-center gap-5">
              {socials.map(({ name, href, icon }) => (
                <li key={name}>
                  <a
                    href={href}
                    aria-label={name}
                    className="text-brand-sub hover:text-brand-accent transition-colors duration-200 cursor-pointer block"
                  >
                    {icon}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="px-6 md:px-10 lg:px-16 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <p className="section-label text-brand-sub/50">
          © {new Date().getFullYear()} Daelion Labs. Alle Rechte vorbehalten.
        </p>
        <p className="section-label text-brand-sub/25">
          Individuelle Lösungsarchitektur.
        </p>
      </div>
    </footer>
  )
}
