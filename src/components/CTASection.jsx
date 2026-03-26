import { useInView } from '../hooks/useInView'

export default function CTASection() {
  const [ref, inView] = useInView()

  return (
    <section id="contact" className="relative bg-brand-bg border-t border-brand-border py-32 px-6 overflow-hidden">

      {/* Large center orb */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="section-orb"
          style={{
            width: '700px',
            height: '700px',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'radial-gradient(circle, rgba(139,92,246,0.14) 0%, transparent 65%)',
            animation: 'orb-breathe 4s ease-in-out infinite',
          }}
        />
      </div>

      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" aria-hidden="true" />

      <div
        ref={ref}
        className={`relative z-10 max-w-3xl mx-auto text-center transition-all duration-700 ease-out ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Decorative rule */}
        <div className="flex items-center gap-4 justify-center mb-12" aria-hidden="true">
          <div className="h-px w-20 bg-gradient-to-r from-transparent to-brand-accent opacity-50" />
          <div
            className="w-1.5 h-1.5 bg-brand-accent"
            style={{ animation: 'orb-breathe 2s ease-in-out infinite' }}
          />
          <div className="h-px w-20 bg-gradient-to-l from-transparent to-brand-accent opacity-50" />
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-brand-text leading-tight tracking-tight mb-6">
          Bereit, dein Problem<br />zu lösen?
        </h2>
        <p className="text-brand-sub text-lg mb-14 max-w-md mx-auto">
          Erzähl uns, was dich aufhält.
        </p>

        {/* CTA with pulsing glow */}
        <div className="relative inline-block">
          <div
            className="absolute inset-0 blur-xl bg-brand-accent opacity-25 scale-110"
            style={{ animation: 'glow-pulse 2.5s ease-in-out infinite' }}
            aria-hidden="true"
          />
          <a
            href="mailto:hello@daelionlabs.com"
            className="btn-shimmer relative inline-block bg-brand-accent text-white font-semibold text-sm px-12 py-5 hover:bg-violet-500 transition-colors duration-200 cursor-pointer"
            style={{
              borderRadius: 0,
              boxShadow: '0 0 40px rgba(139,92,246,0.4), 0 0 80px rgba(139,92,246,0.15)',
            }}
          >
            Jetzt Kontakt aufnehmen
          </a>
        </div>

        <p className="mt-8 text-brand-sub text-xs">
          Wir antworten innerhalb von 24 Stunden.
        </p>

        {/* Corner marks */}
        <div className="relative mt-20 hidden sm:flex items-center justify-between opacity-20" aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <line x1="0" y1="0" x2="8" y2="0" stroke="#8B5CF6" strokeWidth="1" />
            <line x1="0" y1="0" x2="0" y2="8" stroke="#8B5CF6" strokeWidth="1" />
          </svg>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <line x1="20" y1="0" x2="12" y2="0" stroke="#8B5CF6" strokeWidth="1" />
            <line x1="20" y1="0" x2="20" y2="8" stroke="#8B5CF6" strokeWidth="1" />
          </svg>
        </div>
      </div>
    </section>
  )
}
