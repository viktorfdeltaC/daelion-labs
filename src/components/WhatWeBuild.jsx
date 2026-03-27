import { useState } from 'react'
import { useInView } from '../hooks/useInView'

const capabilities = [
  {
    number: '01',
    title: 'Individuelle Buchungs- & Automatisierungssysteme',
    description: 'Kein manuelles Koordinieren mehr. Buchungen, Planungslogik und Pipelines laufen automatisch — exakt so, wie dein Betrieb funktioniert. Mehr Kapazität, weniger Fehler.',
    tag: 'Automation',
  },
  {
    number: '02',
    title: 'KI-gestützte Workflow-Optimierungen',
    description: 'Routineaufgaben, die heute Stunden fressen, erledigen sich morgen von selbst. KI übernimmt das Repetitive — du behältst den Kopf frei für Entscheidungen, die wirklich zählen.',
    tag: 'AI / ML',
  },
  {
    number: '03',
    title: 'Interne Business-Tools & digitale Assistenten',
    description: 'Dashboards und Tools, die dein Team wirklich nutzt — weil sie für eure genauen Abläufe gebaut wurden, nicht für irgendeinen Durchschnittskunden.',
    tag: 'Tooling',
  },
  {
    number: '04',
    title: 'Prozessautomatisierungen, die sich rechnen',
    description: 'Komplexe Abläufe, die heute Nerven und Budget kosten, laufen morgen vollautomatisch. Weniger Fehler, niedrigere Kosten, mehr Kapazität — ohne zusätzliches Personal.',
    tag: 'Process',
  },
]

function CapabilityRow({ number, title, description, tag, index, sectionInView }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div
      className={`relative group border-b border-brand-border cursor-default overflow-hidden transition-[opacity,transform] duration-500 ease-out ${
        sectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
      }`}
      style={{ transitionDelay: `${index * 75}ms` }}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      {/* Left accent bar — scaleY 0 → 1 on hover */}
      <div
        className="absolute left-0 top-0 bottom-0 w-[2px] bg-brand-accent origin-top"
        style={{
          transform: expanded ? 'scaleY(1)' : 'scaleY(0)',
          transition: 'transform 0.4s cubic-bezier(0.22,1,0.36,1)',
        }}
        aria-hidden="true"
      />

      <div className="flex items-center justify-between px-6 md:px-10 lg:px-16 py-5 md:py-7 group-hover:bg-white/[0.02] transition-colors duration-200">

        {/* Number */}
        <span className="section-label text-brand-accent shrink-0 w-8 mr-4 md:mr-8 group-hover:text-brand-accent transition-colors">
          {number}
        </span>

        {/* Title + description */}
        <div className="flex-1 min-w-0">
          <h3
            className="font-display font-bold text-brand-sub group-hover:text-white leading-tight transition-colors duration-250"
            style={{
              fontSize: 'clamp(1rem, 2.2vw, 2rem)',
              transform: expanded ? 'translateX(6px)' : 'translateX(0)',
              transition: 'transform 0.3s cubic-bezier(0.22,1,0.36,1), color 0.25s',
            }}
          >
            {title}
          </h3>

          {/* Expandable description */}
          <div
            className="overflow-hidden"
            style={{
              maxHeight: expanded ? '72px' : '0',
              opacity: expanded ? 1 : 0,
              marginTop: expanded ? '8px' : '0',
              transition: 'max-height 0.35s ease-out, opacity 0.3s ease-out, margin-top 0.35s ease-out',
            }}
          >
            <p className="text-brand-sub text-sm leading-relaxed pr-4 md:pr-16">{description}</p>
          </div>
        </div>

        {/* Arrow + Tag */}
        <div className="flex items-center gap-4 ml-4 shrink-0">
          <div
            className="text-brand-accent"
            style={{
              opacity: expanded ? 1 : 0,
              transform: expanded ? 'translateX(0)' : 'translateX(-6px)',
              transition: 'opacity 0.25s, transform 0.25s',
            }}
            aria-hidden="true"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
          <span className="section-label text-brand-sub/40 group-hover:text-brand-accent/60 transition-colors hidden sm:inline">
            {tag}
          </span>
        </div>
      </div>
    </div>
  )
}

export default function WhatWeBuild() {
  const [headRef, headInView] = useInView()
  const [listRef, listInView] = useInView()

  return (
    <section id="solutions" className="relative bg-brand-bg overflow-hidden">

      {/* Section header bar */}
      <div className="border-b border-brand-border px-6 md:px-10 lg:px-16 py-4 flex items-center justify-between">
        <span className="section-label text-brand-accent">003 / CAPABILITIES</span>
        <span className="section-label text-brand-sub">Leistungen</span>
      </div>

      {/* Background orb */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="section-orb" style={{ width: '500px', height: '500px', bottom: '-10%', left: '-5%', background: 'radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 65%)' }} />
      </div>

      {/* Header */}
      <div
        ref={headRef}
        className={`relative z-10 px-6 md:px-10 lg:px-16 pt-14 pb-12 border-b border-brand-border transition-[opacity,transform] duration-700 ${
          headInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <h2
            className="font-display font-extrabold text-brand-text leading-none tracking-tight"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)' }}
          >
            Was wir<br />bauen
          </h2>
          <p className="text-brand-sub text-sm max-w-xs leading-relaxed md:text-right">
            Für jede Branche. Für jeden Sonderfall. Überall.
          </p>
        </div>
      </div>

      {/* Capability rows */}
      <div ref={listRef} className="relative z-10">
        {capabilities.map((cap, i) => (
          <CapabilityRow key={cap.number} {...cap} index={i} sectionInView={listInView} />
        ))}
      </div>
    </section>
  )
}
