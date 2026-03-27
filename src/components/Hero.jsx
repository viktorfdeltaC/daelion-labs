export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-brand-bg pt-16">

      {/* ── Background orbs ───────────────────────── */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        <div className="section-orb" style={{ width: '70vw', height: '70vw', top: '-5%', right: '-10%', background: 'radial-gradient(circle, rgba(139,92,246,0.13) 0%, transparent 65%)', animation: 'float 12s ease-in-out infinite', maxWidth: '900px', maxHeight: '900px', willChange: 'transform' }} />
        <div className="section-orb" style={{ width: '40vw', height: '40vw', bottom: '5%', left: '-8%', background: 'radial-gradient(circle, rgba(109,40,217,0.08) 0%, transparent 65%)', animation: 'float-alt 16s ease-in-out infinite', maxWidth: '520px', maxHeight: '520px', willChange: 'transform' }} />
      </div>

      {/* ── Dot grid ──────────────────────────────── */}
      <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" aria-hidden="true" />

      {/* ── Section header bar ────────────────────── */}
      <div
        className="relative z-10 flex items-center justify-between px-6 md:px-10 lg:px-16 py-4 border-b border-brand-border shrink-0"
        style={{ animation: 'fade-up 0.5s ease 0.05s both' }}
      >
        <span className="section-label text-brand-accent">001 / HERO</span>
        <span className="section-label text-brand-sub/60">Solution Architecture</span>
      </div>

      {/* ── Main content — single coherent block ──── */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-6 md:px-10 lg:px-16 py-12 md:py-16">

        {/* Vertical side label — desktop only */}
        <div
          className="absolute left-0 top-1/2 hidden xl:flex flex-col items-center gap-3 pl-3"
          style={{ writingMode: 'vertical-rl', transform: 'translateY(-50%)', zIndex: 20 }}
          aria-hidden="true"
        >
          <span className="section-label text-brand-sub opacity-40" style={{ writingMode: 'vertical-rl', letterSpacing: '0.2em' }}>
            DAELION LABS
          </span>
          <div className="w-px h-10 bg-brand-border" />
          <span className="section-label text-brand-accent opacity-60" style={{ writingMode: 'vertical-rl', letterSpacing: '0.2em' }}>
            2026
          </span>
        </div>

        <div className="xl:pl-10 max-w-[1100px]">

          {/* ── Headline ──────────────────────────── */}
          <h1 className="font-display font-extrabold overflow-hidden">
            <span
              className="block text-brand-text/40"
              style={{
                fontSize: 'clamp(0.9rem, 1.8vw, 1.6rem)',
                letterSpacing: '0.18em',
                fontWeight: 400,
                lineHeight: 1,
                marginBottom: 'clamp(0.5rem, 1vw, 0.9rem)',
                animation: 'fade-up 0.7s cubic-bezier(0.22,1,0.36,1) 0.2s both',
              }}
            >
              WIR BAUEN
            </span>
            <span
              className="block text-white leading-[0.88]"
              style={{
                fontSize: 'clamp(3.5rem, 13vw, 11rem)',
                letterSpacing: '-0.02em',
                animation: 'fade-up 0.8s cubic-bezier(0.22,1,0.36,1) 0.32s both',
              }}
            >
              LÖSUNGEN
            </span>
            <span
              className="block text-brand-accent leading-[0.88]"
              style={{
                fontSize: 'clamp(2rem, 8vw, 7rem)',
                letterSpacing: '-0.01em',
                paddingLeft: 'clamp(1rem, 4vw, 5rem)',
                animation: 'fade-up 0.8s cubic-bezier(0.22,1,0.36,1) 0.44s both',
              }}
            >
              DIE BLEIBEN.
            </span>
          </h1>

          {/* ── Description ───────────────────────── */}
          <p
            className="text-brand-sub text-base md:text-lg leading-relaxed mt-8 md:mt-10 max-w-lg"
            style={{ animation: 'fade-up 0.7s cubic-bezier(0.22,1,0.36,1) 0.56s both' }}
          >
            Du verlierst täglich Zeit an Prozessen, die kein Standardtool wirklich löst. Wir bauen die maßgeschneiderte Lösung — präzise, schnell, dauerhaft.
          </p>

          {/* ── CTA ───────────────────────────────── */}
          <div
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-8 md:mt-10"
            style={{ animation: 'fade-up 0.7s cubic-bezier(0.22,1,0.36,1) 0.64s both' }}
          >
            <a
              href="#contact"
              className="btn-shimmer bg-brand-accent text-white font-sans font-semibold text-sm px-8 py-4 hover:bg-violet-500 transition-colors duration-200 cursor-pointer whitespace-nowrap"
              style={{ borderRadius: 0, boxShadow: '0 0 32px rgba(139,92,246,0.3)' }}
            >
              Projekt starten →
            </a>
            <a
              href="#problem"
              className="text-brand-sub text-sm font-medium hover:text-brand-text transition-colors duration-200 cursor-pointer"
            >
              Mehr erfahren
            </a>
          </div>

          {/* ── Stats ─────────────────────────────── */}
          <div
            className="flex flex-wrap items-center gap-3 mt-10 md:mt-12"
            style={{ animation: 'fade-up 0.7s cubic-bezier(0.22,1,0.36,1) 0.74s both' }}
          >
            {[
              { num: '12+', label: 'Projekte' },
              { num: '100%', label: 'Custom Code' },
              { num: '<24h', label: 'Antwortzeit' },
            ].map(({ num, label }) => (
              <div key={num} className="glass flex items-center gap-3 px-4 py-2.5">
                <span className="font-display font-bold text-brand-text text-sm leading-none">{num}</span>
                <span className="section-label text-brand-sub/60">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Bottom rule ───────────────────────────── */}
      <div
        className="relative z-10 mx-6 md:mx-10 lg:mx-16 shrink-0"
        style={{ animation: 'line-draw 0.9s cubic-bezier(0.22,1,0.36,1) 0.5s both', transformOrigin: 'left' }}
        aria-hidden="true"
      >
        <div className="h-px bg-brand-border" />
      </div>

      {/* ── Corner marks ──────────────────────────── */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" aria-hidden="true">
        <line x1="5%" y1="8%"  x2="8%"  y2="8%"  stroke="#8B5CF6" strokeWidth="1" strokeOpacity="0.2" />
        <line x1="5%" y1="8%"  x2="5%"  y2="11%" stroke="#8B5CF6" strokeWidth="1" strokeOpacity="0.2" />
        <line x1="95%" y1="8%"  x2="92%" y2="8%"  stroke="#8B5CF6" strokeWidth="1" strokeOpacity="0.2" />
        <line x1="95%" y1="8%"  x2="95%" y2="11%" stroke="#8B5CF6" strokeWidth="1" strokeOpacity="0.2" />
        <line x1="5%" y1="92%" x2="8%"  y2="92%" stroke="#8B5CF6" strokeWidth="1" strokeOpacity="0.2" />
        <line x1="5%" y1="92%" x2="5%"  y2="89%" stroke="#8B5CF6" strokeWidth="1" strokeOpacity="0.2" />
        <line x1="95%" y1="92%" x2="92%" y2="92%" stroke="#8B5CF6" strokeWidth="1" strokeOpacity="0.2" />
        <line x1="95%" y1="92%" x2="95%" y2="89%" stroke="#8B5CF6" strokeWidth="1" strokeOpacity="0.2" />
      </svg>
    </section>
  )
}
