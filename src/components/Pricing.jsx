import { useInView } from '../hooks/useInView'

export default function Pricing() {
  const [headRef, headInView] = useInView()
  const [cardsRef, cardsInView] = useInView()

  return (
    <section id="pricing" className="relative bg-brand-bg border-t border-brand-border py-32 px-6 overflow-hidden">

      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="section-orb"
          style={{
            width: '500px',
            height: '500px',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 65%)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div
          ref={headRef}
          className={`mb-16 transition-all duration-700 ease-out ${
            headInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="text-brand-accent text-xs font-semibold tracking-widest2 uppercase mb-4">
            Preismodell
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-text tracking-tight">
            Einfach. Transparent.
          </h2>
        </div>

        <div
          ref={cardsRef}
          className={`grid md:grid-cols-2 transition-all duration-700 ease-out gap-px bg-brand-border ${
            cardsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {/* Setup Fee — accented */}
          <div className="relative glass-accent p-10 md:p-14 overflow-hidden group">
            {/* Top glow border */}
            <div
              className="absolute top-0 left-0 right-0 h-px"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.7), transparent)' }}
              aria-hidden="true"
            />
            <div className="flex items-start justify-between mb-8">
              <div>
                <p className="text-brand-accent text-xs font-semibold tracking-widest2 uppercase mb-3">
                  Setup Fee
                </p>
                <h3 className="text-brand-text font-bold text-2xl">Einmalig</h3>
              </div>
              <div
                className="w-10 h-10 border border-brand-accent-border flex items-center justify-center shrink-0"
                style={{ background: 'rgba(139,92,246,0.08)' }}
                aria-hidden="true"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
            </div>
            <p className="text-brand-sub text-sm leading-relaxed mb-8">
              Deckt die vollständige Entwicklung und Implementierung deiner individuellen Lösung ab. Projektgenau kalkuliert — keine versteckten Extras, keine stundenbasierten Überraschungen.
            </p>
            <ul className="space-y-3">
              {['Projektgenau kalkuliert', 'Vollständige Entwicklung inklusive', 'Keine Überraschungsrechnungen'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-brand-sub text-sm">
                  <span className="w-1.5 h-1.5 bg-brand-accent shrink-0" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Retainer */}
          <div className="relative glass p-10 md:p-14 overflow-hidden group">
            <div
              className="absolute top-0 left-0 right-0 h-px"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent)' }}
              aria-hidden="true"
            />
            <div className="flex items-start justify-between mb-8">
              <div>
                <p className="text-brand-sub text-xs font-semibold tracking-widest2 uppercase mb-3">
                  Retainer
                </p>
                <h3 className="text-brand-text font-bold text-2xl">
                  Optional
                  <span className="ml-2 text-brand-sub text-sm font-normal">/ projektabhängig</span>
                </h3>
              </div>
              <div
                className="w-10 h-10 border border-brand-border flex items-center justify-center shrink-0"
                aria-hidden="true"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A0A0B0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
            </div>
            <p className="text-brand-sub text-sm leading-relaxed mb-8">
              Wo deine Lösung laufende Infrastruktur, Wartung oder iterative Updates erfordert — bieten wir einen projektabhängigen Retainer. Nur dort, wo es Sinn ergibt. Nie als Standard-Upsell.
            </p>
            <ul className="space-y-3">
              {['Laufendes Hosting & Wartung', 'Updates und Weiterentwicklung', 'Kontinuierlicher Support'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-brand-sub text-sm">
                  <span className="w-1.5 h-1.5 bg-brand-sub shrink-0" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-8 text-brand-sub text-xs text-center">
          Jedes Projekt wird individuell kalkuliert. Melde dich — wir definieren das passende Modell für deinen Fall.
        </p>
      </div>
    </section>
  )
}
