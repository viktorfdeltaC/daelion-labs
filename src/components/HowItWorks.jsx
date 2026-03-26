import { useInView } from '../hooks/useInView'

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'Wir verstehen dein konkretes Problem in der Tiefe — die Workflows, die Sonderfälle, die genaue Lücke, die dich aufhält.',
  },
  {
    number: '02',
    title: 'Architektur',
    description: 'Wir entwerfen die exakte Lösung für deinen Fall. Keine Templates. Kein Standard-Denken. Reine individuelle Architektur.',
  },
  {
    number: '03',
    title: 'Build & Deploy',
    description: 'Wir implementieren und liefern. Präzise Umsetzung, saubere Übergabe und Support, wo das Projekt es erfordert.',
  },
]

function Step({ number, title, description, index, isLast }) {
  const [ref, inView] = useInView()
  return (
    <div
      ref={ref}
      className={`relative flex-1 transition-all duration-700 ease-out ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 130}ms` }}
    >
      {/* Connector line — desktop only */}
      {!isLast && (
        <div
          className="hidden md:block absolute top-[1.75rem] left-[calc(50%+2.5rem)] right-0 h-px overflow-hidden"
          aria-hidden="true"
        >
          <div
            className={`h-full bg-gradient-to-r from-brand-accent/40 to-transparent transition-all duration-1000 ${
              inView ? 'w-full' : 'w-0'
            }`}
            style={{ transitionDelay: `${index * 130 + 300}ms` }}
          />
        </div>
      )}

      <div className="glass p-8 mr-0 md:mr-8 h-full group hover:border-brand-accent-border transition-all duration-300">
        {/* Number with glow */}
        <div className="flex items-center gap-4 mb-6">
          <span
            className="text-brand-accent font-black text-4xl leading-none tabular-nums group-hover:text-violet-300 transition-colors"
            style={{ textShadow: '0 0 20px rgba(139,92,246,0.3)' }}
          >
            {number}
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-brand-border to-transparent md:hidden" aria-hidden="true" />
        </div>
        <h3 className="text-brand-text font-bold text-xl mb-3 group-hover:text-white transition-colors">{title}</h3>
        <p className="text-brand-sub text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

export default function HowItWorks() {
  const [headRef, headInView] = useInView()

  return (
    <section id="process" className="relative bg-brand-bg border-t border-brand-border py-32 px-6 overflow-hidden">

      {/* Background orb */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="section-orb"
          style={{
            width: '450px',
            height: '450px',
            top: '50%',
            right: '-5%',
            transform: 'translateY(-50%)',
            background: 'radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 65%)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div
          ref={headRef}
          className={`mb-20 transition-all duration-700 ease-out ${
            headInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="text-brand-accent text-xs font-semibold tracking-widest2 uppercase mb-4">
            Prozess
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-text tracking-tight">
            So arbeiten wir
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-4 md:gap-0">
          {steps.map((step, i) => (
            <Step key={step.number} {...step} index={i} isLast={i === steps.length - 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
