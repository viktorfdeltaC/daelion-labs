import { useInView } from '../hooks/useInView'

export default function CTASection() {
  const [ref, inView] = useInView()

  return (
    <section
      id="contact"
      className="relative overflow-hidden"
      style={{ background: '#8B5CF6' }}
    >
      {/* Orbs on purple */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="section-orb" style={{ width: '600px', height: '600px', top: '-20%', right: '-10%', background: 'radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 65%)' }} />
        <div className="section-orb" style={{ width: '400px', height: '400px', bottom: '-20%', left: '-5%', background: 'radial-gradient(circle, rgba(109,40,217,0.5) 0%, transparent 65%)' }} />
      </div>

      {/* Dot grid on purple */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)', backgroundSize: '28px 28px' }}
        aria-hidden="true"
      />

      {/* Section label */}
      <div className="relative z-10 border-b border-white/10 px-6 md:px-10 lg:px-16 py-4 flex items-center justify-between">
        <span className="section-label text-white/60">006 / CONTACT</span>
        <span className="section-label text-white/40">Jetzt starten</span>
      </div>

      {/* Content */}
      <div
        ref={ref}
        className={`relative z-10 px-6 md:px-10 lg:px-16 py-24 md:py-36 transition-all duration-700 ease-out ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-start md:items-end justify-between gap-12">

          {/* Headline */}
          <div className="flex-1">
            <h2
              className="font-display font-extrabold text-white leading-[0.9] tracking-tight"
              style={{ fontSize: 'clamp(3rem, 9vw, 8rem)' }}
            >
              Bereit, dein<br />Problem zu<br />lösen?
            </h2>
          </div>

          {/* Right side */}
          <div className="flex flex-col items-start md:items-end gap-6 shrink-0">
            <p className="text-white/70 text-base leading-relaxed max-w-xs md:text-right">
              Erzähl uns, was dich aufhält. Wir antworten innerhalb von 24 Stunden.
            </p>

            <a
              href="mailto:hello@daelionlabs.com"
              className="btn-shimmer inline-block bg-brand-bg text-white font-display font-bold text-sm px-10 py-5 hover:bg-[#13131f] transition-colors duration-200 cursor-pointer"
              style={{
                borderRadius: 0,
                boxShadow: '0 0 0 1px rgba(255,255,255,0.15), 0 20px 60px rgba(0,0,0,0.3)',
              }}
            >
              Jetzt Kontakt aufnehmen →
            </a>
          </div>
        </div>
      </div>

      {/* Bottom decorative rule */}
      <div className="relative z-10 border-t border-white/10 px-6 md:px-10 lg:px-16 py-5 flex items-center justify-between">
        <span className="section-label text-white/30">hello@daelionlabs.com</span>
        <div className="flex items-center gap-2" aria-hidden="true">
          <div className="w-1 h-1 bg-white/30 rounded-full" />
          <div className="w-1 h-1 bg-white/20 rounded-full" />
          <div className="w-1 h-1 bg-white/10 rounded-full" />
        </div>
      </div>
    </section>
  )
}
