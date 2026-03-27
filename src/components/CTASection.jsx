import { useInView } from '../hooks/useInView'
import { useMagnet } from '../hooks/useMagnet'

export default function CTASection() {
  const [ref, inView] = useInView()
  const ctaRef = useMagnet({ strength: 0.3, ease: 0.1 })

  return (
    <section
      id="contact"
      className="relative overflow-hidden min-h-screen flex flex-col"
      style={{ background: '#8B5CF6' }}
    >
      {/* Orbs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="section-orb" style={{ width: '70vw', height: '70vw', top: '-20%', right: '-15%', background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 65%)', maxWidth: '900px', maxHeight: '900px' }} />
        <div className="section-orb" style={{ width: '50vw', height: '50vw', bottom: '-25%', left: '-10%', background: 'radial-gradient(circle, rgba(109,40,217,0.6) 0%, transparent 65%)', maxWidth: '700px', maxHeight: '700px' }} />
      </div>

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)', backgroundSize: '28px 28px' }}
        aria-hidden="true"
      />

      {/* Section label */}
      <div className="relative z-10 border-b border-white/10 px-6 md:px-10 lg:px-16 py-4 flex items-center justify-between shrink-0">
        <span className="section-label text-white/60">007 / CONTACT</span>
        <span className="section-label text-white/40">Jetzt starten</span>
      </div>

      {/* Main content */}
      <div
        ref={ref}
        className={`relative z-10 flex-1 flex flex-col justify-between px-6 md:px-10 lg:px-16 pt-16 md:pt-24 pb-12 md:pb-16 transition-[opacity,transform] duration-700 ease-out ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Headline block */}
        <div className="overflow-hidden">
          <h2
            className="font-display font-extrabold text-white leading-[0.88] tracking-tighter"
            style={{ fontSize: 'clamp(3.5rem, 9vw, 8.5rem)' }}
          >
            {['Lass uns', 'dein Problem', 'lösen.'].map((line, i) => (
              <span key={line} className="block overflow-hidden pb-1">
                <span
                  className="block"
                  style={{ animation: inView ? `reveal-up 1s cubic-bezier(0.16,1,0.3,1) ${i * 0.1}s both` : 'none' }}
                >
                  {line}
                </span>
              </span>
            ))}
          </h2>
          <p
            className="text-white/60 text-base md:text-lg leading-relaxed mt-8 max-w-md"
            style={{ animation: inView ? 'fade-up 0.8s ease 0.4s both' : 'none' }}
          >
            Schreib uns kurz, womit du kämpfst. Wir antworten innerhalb von 24 Stunden — mit einem konkreten ersten Ansatz, kostenlos.
          </p>
        </div>

        {/* Action row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-14">
          <a
            ref={ctaRef}
            href="mailto:hello@daelionlabs.com"
            className="btn-shimmer text-white font-sans font-semibold text-sm px-10 py-5 hover:bg-white/[0.12] transition-colors duration-300 cursor-pointer whitespace-nowrap inline-block"
            style={{
              borderRadius: 0,
              background: 'rgba(255,255,255,0.08)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              boxShadow: '0 0 0 1px rgba(255,255,255,0.15), inset 0 1px 0 rgba(255,255,255,0.1), 0 20px 60px rgba(0,0,0,0.25)',
              willChange: 'transform',
            }}
          >
            Lösung anfragen →
          </a>
          <span className="section-label text-white/30 hidden sm:inline">
            hello@daelionlabs.com
          </span>
        </div>
      </div>

      {/* Bottom rule */}
      <div className="relative z-10 border-t border-white/10 px-6 md:px-10 lg:px-16 py-5 flex items-center justify-between shrink-0">
        <span className="section-label text-white/25">© 2026 Daelion Labs</span>
        <div className="flex items-center gap-2" aria-hidden="true">
          <div className="w-1 h-1 bg-white/30 rounded-full" />
          <div className="w-1 h-1 bg-white/20 rounded-full" />
          <div className="w-1 h-1 bg-white/10 rounded-full" />
        </div>
      </div>
    </section>
  )
}
