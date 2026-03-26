import { useState } from 'react'
import { useInView } from '../hooks/useInView'

const capabilities = [
  {
    number: '01',
    title: 'Individuelle Buchungs- & Automatisierungssysteme',
    description: 'Maßgeschneiderte Buchungsabläufe, Planungslogik und automatisierte Pipelines — exakt auf die Funktionsweise deines Unternehmens zugeschnitten.',
    tag: 'Automation',
  },
  {
    number: '02',
    title: 'KI-gestützte Workflow-Optimierungen',
    description: 'Intelligente Automatisierungen und KI-Integrationen, die Routinearbeit eliminieren und die wirklich relevanten Entscheidungen nach oben bringen.',
    tag: 'AI / ML',
  },
  {
    number: '03',
    title: 'Interne Business-Tools & digitale Assistenten',
    description: 'Individuelle Dashboards, interne Portale und intelligente Assistenten — gebaut für dein Team, nicht für den generischen Markt.',
    tag: 'Tooling',
  },
  {
    number: '04',
    title: 'Prozessautomatisierungen, die Zeit und Geld sparen',
    description: 'Vollständige Automatisierung komplexer operativer Prozesse — weniger Reibung, niedrigere Kosten, mehr Zeit für das Wesentliche.',
    tag: 'Process',
  },
]

function CapabilityRow({ number, title, description, tag, index, sectionInView }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div
      className={`relative group border-b border-brand-border cursor-default overflow-hidden transition-all duration-500 ease-out ${
        sectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
      }`}
      style={{ transitionDelay: `${index * 75}ms` }}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      {/* Left accent bar — scaleY from 0 → 1 on hover */}
      <div
        className="absolute left-0 top-0 bottom-0 w-[2px] bg-brand-accent origin-top transition-transform duration-400 ease-out"
        style={{ transform: expanded ? 'scaleY(1)' : 'scaleY(0)' }}
        aria-hidden="true"
      />

      <div className="flex items-start justify-between px-6 md:px-10 lg:px-16 py-6 md:py-8 group-hover:bg-white/[0.02] transition-colors duration-200">

        <div className="flex-1 min-w-0">
          {/* Number — small superscript label */}
          <span
            className="section-label text-brand-accent/50 block mb-1.5 transition-colors duration-300 group-hover:text-brand-accent/80"
          >
            {number}
          </span>

          {/* Title — large, shifts right on hover */}
          <h3
            className="font-display font-bold text-brand-sub group-hover:text-white leading-tight"
            style={{
              fontSize: 'clamp(1.5rem, 3.5vw, 3rem)',
              transform: expanded ? 'translateX(10px)' : 'translateX(0)',
              transition: 'transform 0.35s cubic-bezier(0.22,1,0.36,1), color 0.25s',
            }}
          >
            {title}
          </h3>

          {/* Expandable description */}
          <div
            className="overflow-hidden transition-all duration-350 ease-out"
            style={{
              maxHeight: expanded ? '80px' : '0',
              opacity: expanded ? 1 : 0,
              marginTop: expanded ? '10px' : '0',
            }}
          >
            <p className="text-brand-sub text-sm leading-relaxed pr-4 md:pr-24">{description}</p>
          </div>
        </div>

        {/* Tag */}
        <span className="shrink-0 section-label text-brand-sub/40 group-hover:text-brand-accent/70 transition-colors mt-2 ml-6 hidden sm:inline">
          {tag}
        </span>
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
        className={`relative z-10 px-6 md:px-10 lg:px-16 pt-14 pb-12 border-b border-brand-border transition-all duration-700 ${
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
            Branchenübergreifend. Fallübergreifend. Weltweit.
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
