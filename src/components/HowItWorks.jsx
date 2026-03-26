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

function Step({ number, title, description, index, inView, isLast }) {
  return (
    <div
      className={`relative group ${!isLast ? 'border-r border-brand-border' : ''} transition-all duration-700 ease-out ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {/* Giant background number */}
      <div
        className="absolute inset-0 flex items-end justify-end px-6 pb-4 pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <span
          className="font-display font-extrabold leading-none text-brand-text/[0.04] group-hover:text-brand-accent/[0.08] transition-colors duration-500 select-none"
          style={{ fontSize: 'clamp(6rem, 12vw, 10rem)' }}
        >
          {number}
        </span>
      </div>

      <div className="relative z-10 p-8 md:p-10 lg:p-14">
        {/* Step number — small */}
        <span className="section-label text-brand-accent block mb-6">{number}</span>

        {/* Title */}
        <h3
          className="font-display font-bold text-brand-text leading-tight mb-4 group-hover:text-white transition-colors"
          style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)' }}
        >
          {title}
        </h3>

        {/* Divider */}
        <div className="h-px bg-brand-border mb-5 group-hover:bg-brand-accent/30 transition-colors duration-300" />

        <p className="text-brand-sub text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

export default function HowItWorks() {
  const [headRef, headInView] = useInView()
  const [stepsRef, stepsInView] = useInView()

  return (
    <section id="process" className="relative bg-brand-bg overflow-hidden">

      {/* Section header bar */}
      <div className="border-b border-brand-border px-6 md:px-10 lg:px-16 py-4 flex items-center justify-between">
        <span className="section-label text-brand-accent">004 / PROCESS</span>
        <span className="section-label text-brand-sub">So arbeiten wir</span>
      </div>

      {/* Background orb */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="section-orb" style={{ width: '400px', height: '400px', top: '50%', right: '-5%', transform: 'translateY(-50%)', background: 'radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 65%)' }} />
      </div>

      {/* Section headline */}
      <div
        ref={headRef}
        className={`relative z-10 px-6 md:px-10 lg:px-16 pt-14 pb-12 border-b border-brand-border transition-all duration-700 ${
          headInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <h2
          className="font-display font-extrabold text-brand-text leading-none tracking-tight"
          style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)' }}
        >
          So arbeiten<br />wir
        </h2>
      </div>

      {/* Steps grid */}
      <div
        ref={stepsRef}
        className="relative z-10 grid md:grid-cols-3 border-b border-brand-border"
      >
        {steps.map((step, i) => (
          <Step key={step.number} {...step} index={i} inView={stepsInView} isLast={i === steps.length - 1} />
        ))}
      </div>
    </section>
  )
}
