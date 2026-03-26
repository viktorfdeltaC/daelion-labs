export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-bg pt-16">

      {/* ── Floating orbs ─────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        {/* Main center orb */}
        <div
          className="section-orb"
          style={{
            width: '700px',
            height: '700px',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -58%)',
            background: 'radial-gradient(circle, rgba(139,92,246,0.22) 0%, transparent 65%)',
            animation: 'float 9s ease-in-out infinite',
          }}
        />
        {/* Left orb */}
        <div
          className="section-orb"
          style={{
            width: '420px',
            height: '420px',
            top: '20%',
            left: '-5%',
            background: 'radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)',
            animation: 'float-alt 13s ease-in-out infinite',
          }}
        />
        {/* Right bottom orb */}
        <div
          className="section-orb"
          style={{
            width: '320px',
            height: '320px',
            bottom: '15%',
            right: '5%',
            background: 'radial-gradient(circle, rgba(109,40,217,0.1) 0%, transparent 70%)',
            animation: 'float 11s ease-in-out infinite reverse',
            animationDelay: '-4s',
          }}
        />
      </div>

      {/* ── Dot grid ──────────────────────────────────── */}
      <div className="absolute inset-0 dot-grid pointer-events-none" aria-hidden="true" />

      {/* ── Corner precision marks ────────────────────── */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* top-left */}
        <line x1="7%" y1="10%" x2="9.5%" y2="10%" stroke="#8B5CF6" strokeWidth="1" strokeOpacity="0.4" />
        <line x1="7%" y1="10%" x2="7%"   y2="13%" stroke="#8B5CF6" strokeWidth="1" strokeOpacity="0.4" />
        {/* top-right */}
        <line x1="93%" y1="10%" x2="90.5%" y2="10%" stroke="#8B5CF6" strokeWidth="1" strokeOpacity="0.4" />
        <line x1="93%" y1="10%" x2="93%"   y2="13%" stroke="#8B5CF6" strokeWidth="1" strokeOpacity="0.4" />
        {/* bottom-left */}
        <line x1="7%" y1="90%" x2="9.5%" y2="90%" stroke="#8B5CF6" strokeWidth="1" strokeOpacity="0.4" />
        <line x1="7%" y1="90%" x2="7%"   y2="87%" stroke="#8B5CF6" strokeWidth="1" strokeOpacity="0.4" />
        {/* bottom-right */}
        <line x1="93%" y1="90%" x2="90.5%" y2="90%" stroke="#8B5CF6" strokeWidth="1" strokeOpacity="0.4" />
        <line x1="93%" y1="90%" x2="93%"   y2="87%" stroke="#8B5CF6" strokeWidth="1" strokeOpacity="0.4" />
        {/* subtle center cross */}
        <circle cx="50%" cy="50%" r="1.5" fill="#8B5CF6" fillOpacity="0.2" />
      </svg>

      {/* ── Content ───────────────────────────────────── */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">

        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 glass px-4 py-2 mb-10"
          style={{ animation: 'badge-pop 0.7s cubic-bezier(0.22,1,0.36,1) 0.1s both' }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" style={{ animation: 'orb-breathe 2s ease-in-out infinite' }} />
          <span className="text-brand-accent text-xs font-semibold tracking-widest2 uppercase">
            Solution Architecture
          </span>
        </div>

        {/* Headline — staggered word reveal */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-brand-text leading-[0.93] tracking-tight mb-8">
          <span
            className="inline-block"
            style={{ animation: 'word-reveal 0.8s cubic-bezier(0.22,1,0.36,1) 0.25s both' }}
          >
            Wir&nbsp;
          </span>
          <span
            className="inline-block"
            style={{ animation: 'word-reveal 0.8s cubic-bezier(0.22,1,0.36,1) 0.38s both' }}
          >
            bauen
          </span>
          <br />
          <span
            className="inline-block relative"
            style={{ animation: 'word-reveal 0.8s cubic-bezier(0.22,1,0.36,1) 0.5s both' }}
          >
            <span className="relative z-10">Lösungen.</span>
            {/* underline glow */}
            <span
              className="absolute bottom-1 left-0 right-0 h-px"
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.5), transparent)',
                animation: 'line-draw 1s cubic-bezier(0.22,1,0.36,1) 1s both',
                transformOrigin: 'left',
              }}
            />
          </span>
        </h1>

        {/* Subline */}
        <p
          className="text-brand-sub text-lg sm:text-xl max-w-xl mx-auto leading-relaxed mb-12"
          style={{ animation: 'fade-up 0.8s cubic-bezier(0.22,1,0.36,1) 0.62s both' }}
        >
          Individuelle Lösungsarchitekturen für Probleme, die kein Standardtool der Welt lösen kann.
        </p>

        {/* CTA */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          style={{ animation: 'fade-up 0.8s cubic-bezier(0.22,1,0.36,1) 0.72s both' }}
        >
          <a
            href="#contact"
            className="btn-shimmer relative inline-block bg-brand-accent text-white font-semibold text-sm px-8 py-4 hover:bg-violet-500 transition-colors duration-200 cursor-pointer"
            style={{
              borderRadius: 0,
              boxShadow: '0 0 32px rgba(139,92,246,0.35)',
            }}
          >
            Projekt starten
          </a>
          <a
            href="#problem"
            className="text-brand-sub text-sm font-medium hover:text-brand-text transition-colors duration-200 cursor-pointer flex items-center gap-2"
          >
            Mehr erfahren
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Scroll hint */}
        <div
          className="mt-24 flex flex-col items-center gap-3"
          style={{ animation: 'fade-up 1s cubic-bezier(0.22,1,0.36,1) 1.1s both' }}
        >
          <div className="w-px h-14 bg-gradient-to-b from-transparent via-brand-accent to-transparent opacity-40" />
        </div>
      </div>
    </section>
  )
}
