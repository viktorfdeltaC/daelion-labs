export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-brand-bg pt-16">

      {/* ── Background orbs ───────────────────────── */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        <div className="section-orb" style={{ width: '65vw', height: '65vw', top: '5%', left: '30%', background: 'radial-gradient(circle, rgba(139,92,246,0.18) 0%, transparent 65%)', animation: 'float 10s ease-in-out infinite', maxWidth: '800px', maxHeight: '800px' }} />
        <div className="section-orb" style={{ width: '40vw', height: '40vw', bottom: '10%', left: '-5%', background: 'radial-gradient(circle, rgba(109,40,217,0.1) 0%, transparent 65%)', animation: 'float-alt 14s ease-in-out infinite', maxWidth: '500px', maxHeight: '500px' }} />
      </div>

      {/* ── Dot grid ──────────────────────────────── */}
      <div className="absolute inset-0 dot-grid opacity-35 pointer-events-none" aria-hidden="true" />

      {/* ── Top meta row ──────────────────────────── */}
      <div
        className="relative z-10 flex items-center justify-between px-6 md:px-10 lg:px-16 pt-10 md:pt-14"
        style={{ animation: 'fade-up 0.6s ease 0.05s both' }}
      >
        <span className="section-label text-brand-accent">001 / HERO</span>
        <span className="section-label text-brand-sub">Solution Architecture</span>
      </div>

      {/* ── Main headline ─────────────────────────── */}
      <div className="relative z-10 flex-1 flex flex-col justify-center py-10 md:py-0">

        {/* Vertical side label — desktop only */}
        <div
          className="absolute left-0 top-1/2 hidden xl:flex flex-col items-center gap-3 pl-3"
          style={{ writingMode: 'vertical-rl', transform: 'translateY(-50%)', zIndex: 20 }}
          aria-hidden="true"
        >
          <span className="section-label text-brand-sub opacity-60" style={{ writingMode: 'vertical-rl', letterSpacing: '0.2em' }}>
            DAELION LABS
          </span>
          <div className="w-px h-12 bg-brand-border" />
          <span className="section-label text-brand-accent opacity-80" style={{ writingMode: 'vertical-rl', letterSpacing: '0.2em' }}>
            2026
          </span>
        </div>

        {/* WIR BAUEN — small qualifier label */}
        <div
          className="px-6 md:px-10 lg:px-16 xl:pl-10 mb-2"
          style={{ animation: 'fade-up 0.6s cubic-bezier(0.22,1,0.36,1) 0.1s both' }}
        >
          <span
            className="font-mono text-brand-sub/40 uppercase tracking-[0.3em]"
            style={{ fontSize: '0.75rem' }}
          >
            WIR BAUEN
          </span>
        </div>

        {/* LÖSUNGEN. — architectural, fills the viewport width */}
        <div
          className="overflow-hidden"
          style={{ animation: 'word-reveal 1s cubic-bezier(0.22,1,0.36,1) 0.2s both' }}
        >
          <h1
            className="font-display font-extrabold leading-[0.88] tracking-tighter text-brand-accent block"
            style={{
              fontSize: 'clamp(3.5rem, 15vw, 14rem)',
              paddingLeft: 'clamp(1.5rem, 2.5vw, 4rem)',
              textShadow: '0 0 120px rgba(139,92,246,0.4)',
            }}
          >
            LÖSUNGEN.
          </h1>
        </div>

        {/* ── Stats badges ──────────────────────── */}
        <div
          className="flex flex-wrap items-center gap-3 mt-6 px-6 md:px-10 lg:px-16 xl:pl-10"
          style={{ animation: 'fade-up 0.8s cubic-bezier(0.22,1,0.36,1) 0.52s both' }}
        >
          {[
            { num: '12+', label: 'Projekte' },
            { num: '100%', label: 'Custom Code' },
            { num: '<24h', label: 'Antwortzeit' },
          ].map(({ num, label }) => (
            <div key={num} className="glass flex items-center gap-3 px-4 py-2.5">
              <span className="font-display font-bold text-brand-text text-sm leading-none">{num}</span>
              <span className="section-label text-brand-sub/70">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Dividing rule ─────────────────────────── */}
      <div
        className="relative z-10 mx-6 md:mx-10 lg:mx-16"
        style={{ animation: 'line-draw 0.9s cubic-bezier(0.22,1,0.36,1) 0.5s both', transformOrigin: 'left' }}
        aria-hidden="true"
      >
        <div className="h-px bg-brand-border" />
      </div>

      {/* ── Bottom info row ───────────────────────── */}
      <div
        className="relative z-10 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-8 px-6 md:px-10 lg:px-16 pt-8 pb-12 md:pb-16"
        style={{ animation: 'fade-up 0.8s cubic-bezier(0.22,1,0.36,1) 0.65s both' }}
      >
        <p className="text-brand-sub text-base md:text-lg max-w-sm leading-relaxed">
          Individuelle Lösungsarchitekturen für Probleme, die kein Standardtool der Welt lösen kann.
        </p>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <a
            href="#contact"
            className="btn-shimmer bg-brand-accent text-white font-display font-bold text-sm px-8 py-4 hover:bg-violet-500 transition-colors duration-200 cursor-pointer whitespace-nowrap"
            style={{ borderRadius: 0, boxShadow: '0 0 32px rgba(139,92,246,0.35)' }}
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
      </div>

      {/* ── Corner marks ──────────────────────────── */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" aria-hidden="true">
        <line x1="5%" y1="8%"  x2="8%"  y2="8%"  stroke="#8B5CF6" strokeWidth="1" strokeOpacity="0.35" />
        <line x1="5%" y1="8%"  x2="5%"  y2="11%" stroke="#8B5CF6" strokeWidth="1" strokeOpacity="0.35" />
        <line x1="95%" y1="8%"  x2="92%" y2="8%"  stroke="#8B5CF6" strokeWidth="1" strokeOpacity="0.35" />
        <line x1="95%" y1="8%"  x2="95%" y2="11%" stroke="#8B5CF6" strokeWidth="1" strokeOpacity="0.35" />
        <line x1="5%" y1="92%" x2="8%"  y2="92%" stroke="#8B5CF6" strokeWidth="1" strokeOpacity="0.35" />
        <line x1="5%" y1="92%" x2="5%"  y2="89%" stroke="#8B5CF6" strokeWidth="1" strokeOpacity="0.35" />
        <line x1="95%" y1="92%" x2="92%" y2="92%" stroke="#8B5CF6" strokeWidth="1" strokeOpacity="0.35" />
        <line x1="95%" y1="92%" x2="95%" y2="89%" stroke="#8B5CF6" strokeWidth="1" strokeOpacity="0.35" />
      </svg>
    </section>
  )
}
