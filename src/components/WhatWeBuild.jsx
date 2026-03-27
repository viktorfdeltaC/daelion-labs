import { useRef } from 'react'
import { useInView } from '../hooks/useInView'
import { DisplayHeadlineLines } from './DisplayHeadline'

const capabilities = [
  {
    number: '01',
    title: 'Individuelle Buchungs- & Automatisierungssysteme',
    description: 'Kein manuelles Koordinieren mehr. Buchungen, Planungslogik und Pipelines laufen automatisch — exakt so, wie dein Betrieb funktioniert. Mehr Kapazität, weniger Fehler.',
    tag: 'Automation',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
      </svg>
    ),
  },
  {
    number: '02',
    title: 'KI-gestützte Workflow-Optimierungen',
    description: 'Routineaufgaben, die heute Stunden fressen, erledigen sich morgen von selbst. KI übernimmt das Repetitive — du behältst den Kopf frei für Entscheidungen, die wirklich zählen.',
    tag: 'AI / ML',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Interne Business-Tools & digitale Assistenten',
    description: 'Dashboards und Tools, die dein Team wirklich nutzt — weil sie für eure genauen Abläufe gebaut wurden, nicht für irgendeinen Durchschnittskunden.',
    tag: 'Tooling',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/>
        <path d="M17.5 14v6M14.5 17h6"/>
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Prozessautomatisierungen, die sich rechnen',
    description: 'Komplexe Abläufe, die heute Nerven und Budget kosten, laufen morgen vollautomatisch. Weniger Fehler, niedrigere Kosten, mehr Kapazität — ohne zusätzliches Personal.',
    tag: 'Process',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
  },
]

function CapabilityRow({ number, title, description, tag, icon, index, sectionInView }) {
  const rowRef = useRef(null)

  // Detect once — no useState, no re-render
  const isTouch = typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches

  const expand  = () => rowRef.current?.classList.add('is-expanded')
  const collapse = () => rowRef.current?.classList.remove('is-expanded')
  const toggle  = () => rowRef.current?.classList.toggle('is-expanded')

  const handlers = isTouch
    ? { onClick: toggle }
    : { onMouseEnter: expand, onMouseLeave: collapse }

  return (
    <div
      ref={rowRef}
      className={`cap-row relative border-b border-brand-border overflow-hidden transition-[opacity,transform] duration-500 ease-out ${
        sectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
      }`}
      style={{ transitionDelay: `${index * 75}ms`, cursor: isTouch ? 'pointer' : 'default' }}
      {...handlers}
    >
      {/* Left accent bar */}
      <div className="cap-bar absolute left-0 top-0 bottom-0 w-[2px] bg-brand-accent origin-top" aria-hidden="true" />

      <div className="cap-bg flex items-start justify-between px-6 md:px-10 lg:px-16 py-6 md:py-8">

        {/* Number */}
        <span className="section-label text-brand-accent shrink-0 w-8 mr-4 md:mr-8 pt-1">
          {number}
        </span>

        {/* Title + description */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3">
            <span className="cap-icon text-brand-accent shrink-0">{icon}</span>
            <h3
              className="cap-title font-display font-bold text-brand-sub leading-tight"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 3.5rem)', letterSpacing: '-0.01em' }}
            >
              {title}
            </h3>
          </div>

          {/* Grid-reveal for description */}
          <div className="cap-desc-grid">
            <div className="overflow-hidden">
              <p className="cap-desc-text text-brand-sub text-sm leading-relaxed pr-4 md:pr-16 pt-3 pb-1">
                {description}
              </p>
            </div>
          </div>
        </div>

        {/* Arrow + Tag */}
        <div className="flex items-center gap-4 ml-4 shrink-0 pt-1">
          <div className="cap-arrow text-brand-accent" aria-hidden="true">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
          <span className="cap-tag section-label text-brand-sub/40 hidden sm:inline">{tag}</span>
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
          <DisplayHeadlineLines lines={['Was wir', 'bauen']} inView={headInView} />
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
