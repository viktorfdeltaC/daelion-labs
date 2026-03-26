import { useInView } from '../hooks/useInView'

const wins = [
  {
    metric: '10+ Std.',
    unit: 'pro Woche',
    title: 'Zeit zurückgewinnen',
    description: 'Was heute Stunden frisst, läuft morgen automatisch. Unsere Kunden gewinnen wertvolle Zeit für die Arbeit, die wirklich zählt.',
  },
  {
    metric: '0 €',
    unit: 'laufende Gebühren',
    title: 'Kein Abo, kein Lock-in',
    description: 'Einmal entwickelt gehört die Lösung vollständig dir. Kein monatlicher SaaS-Vertrag, keine versteckte Abhängigkeit.',
  },
  {
    metric: '100%',
    unit: 'maßgeschneidert',
    title: 'Echter Wettbewerbsvorteil',
    description: 'Eine individuelle Lösung kann dein Wettbewerber nicht kaufen. Du baust damit einen Prozessvorteil, den niemand kopiert.',
  },
  {
    metric: 'Wochen',
    unit: 'nicht Monate',
    title: 'Schnell und direkt',
    description: 'Kein Account-Manager-Ping-Pong. Direkter Draht zum Team, das baut — erste funktionsfähige Version in wenigen Wochen.',
  },
]

export default function WinsSection() {
  const [headRef, headInView] = useInView()
  const [gridRef, gridInView] = useInView()

  return (
    <section id="impact" className="relative bg-brand-bg overflow-hidden">

      {/* Section header bar */}
      <div className="border-b border-brand-border px-6 md:px-10 lg:px-16 py-4 flex items-center justify-between">
        <span className="section-label text-brand-accent">004 / IMPACT</span>
        <span className="section-label text-brand-sub">Dein Vorteil</span>
      </div>

      {/* Background orb */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="section-orb" style={{ width: '600px', height: '600px', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', background: 'radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 65%)' }} />
      </div>

      {/* Header */}
      <div
        ref={headRef}
        className={`relative z-10 px-6 md:px-10 lg:px-16 pt-14 pb-12 border-b border-brand-border transition-all duration-700 ${
          headInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <h2
            className="font-display font-extrabold text-brand-text leading-none tracking-tight"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)' }}
          >
            Was du<br />davon hast.
          </h2>
          <p className="text-brand-sub text-sm max-w-xs leading-relaxed md:text-right">
            Kein anderes Angebot bringt dir das.
          </p>
        </div>
      </div>

      {/* Wins grid */}
      <div
        ref={gridRef}
        className="relative z-10 grid sm:grid-cols-2 lg:grid-cols-4 border-b border-brand-border"
      >
        {wins.map((win, i) => (
          <div
            key={win.title}
            className={`relative group border-b sm:border-b-0 ${i < wins.length - 1 ? 'lg:border-r' : ''} ${i % 2 === 0 ? 'sm:border-r' : ''} border-brand-border p-8 md:p-10 lg:p-12 overflow-hidden transition-all duration-700 ease-out ${
              gridInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            {/* Hover accent top */}
            <div
              className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-400"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.5), transparent)' }}
              aria-hidden="true"
            />

            {/* Metric */}
            <div className="mb-5">
              <span
                className="font-display font-extrabold text-brand-accent block leading-none"
                style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)' }}
              >
                {win.metric}
              </span>
              <span className="section-label text-brand-sub/60 mt-1 block">{win.unit}</span>
            </div>

            {/* Title */}
            <h3
              className="font-display font-bold text-brand-text leading-tight mb-3 group-hover:text-white transition-colors duration-200"
              style={{ fontSize: 'clamp(1rem, 1.5vw, 1.3rem)' }}
            >
              {win.title}
            </h3>

            {/* Description */}
            <p className="text-brand-sub text-sm leading-relaxed">{win.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
