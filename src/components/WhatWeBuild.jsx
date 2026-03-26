import { useRef, useCallback } from 'react'
import { useInView } from '../hooks/useInView'

const cards = [
  {
    title: 'Individuelle Buchungs- & Automatisierungssysteme',
    description: 'Maßgeschneiderte Buchungsabläufe, Planungslogik und automatisierte Pipelines — exakt auf die Funktionsweise deines Unternehmens zugeschnitten.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="4" width="18" height="18" rx="0" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" />
      </svg>
    ),
  },
  {
    title: 'KI-gestützte Workflow-Optimierungen',
    description: 'Intelligente Automatisierungen und KI-Integrationen, die Routinearbeit eliminieren und die wirklich relevanten Entscheidungen nach oben bringen.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: 'Interne Business-Tools & digitale Assistenten',
    description: 'Individuelle Dashboards, interne Portale und intelligente Assistenten — gebaut für dein Team, nicht für den generischen Markt.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="0" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
  {
    title: 'Prozessautomatisierungen, die Zeit und Geld sparen',
    description: 'Vollständige Automatisierung komplexer operativer Prozesse — weniger Reibung, niedrigere Kosten, mehr Zeit für das Wesentliche.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22V12m0 0l-4 4m4-4l4 4" />
        <path d="M20 16.5A8 8 0 1 0 7.5 20" />
      </svg>
    ),
  },
]

function useTilt() {
  const ref = useRef(null)

  const onMouseMove = useCallback((e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    el.style.setProperty('--tilt-x', `${(y - 0.5) * -8}deg`)
    el.style.setProperty('--tilt-y', `${(x - 0.5) * 8}deg`)
    el.style.setProperty('--glow-x', `${x * 100}%`)
    el.style.setProperty('--glow-y', `${y * 100}%`)
  }, [])

  const onMouseLeave = useCallback(() => {
    const el = ref.current
    if (!el) return
    el.style.setProperty('--tilt-x', '0deg')
    el.style.setProperty('--tilt-y', '0deg')
  }, [])

  return { ref, onMouseMove, onMouseLeave }
}

function Card({ title, description, icon, index }) {
  const [inViewRef, inView] = useInView()
  const { ref: tiltRef, onMouseMove, onMouseLeave } = useTilt()

  return (
    <div
      ref={(el) => {
        inViewRef.current = el
        tiltRef.current = el
      }}
      className={`tilt-card glass relative p-8 group cursor-default overflow-hidden
        hover:border-brand-accent-border
        ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
      `}
      style={{
        transitionDelay: `${index * 80}ms`,
        transitionProperty: 'opacity, transform, border-color, box-shadow, background',
        transitionDuration: '600ms, 600ms, 300ms, 300ms, 300ms',
        transitionTimingFunction: 'cubic-bezier(0.22,1,0.36,1)',
      }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {/* Mouse-tracking glow */}
      <div className="card-mouse-glow" />

      {/* Icon */}
      <div
        className="relative z-10 inline-flex items-center justify-center w-11 h-11 mb-6 border border-brand-accent-border text-brand-accent"
        style={{ background: 'rgba(139,92,246,0.07)' }}
      >
        {icon}
      </div>

      {/* Content */}
      <h3 className="relative z-10 text-brand-text font-bold text-lg leading-snug mb-3 group-hover:text-white transition-colors">
        {title}
      </h3>
      <p className="relative z-10 text-brand-sub text-sm leading-relaxed">
        {description}
      </p>

      {/* Subtle corner accent */}
      <div
        className="absolute top-0 right-0 w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        aria-hidden="true"
        style={{
          background: 'linear-gradient(225deg, rgba(139,92,246,0.15) 0%, transparent 60%)',
        }}
      />
    </div>
  )
}

export default function WhatWeBuild() {
  const [headRef, headInView] = useInView()

  return (
    <section id="solutions" className="relative bg-brand-bg border-t border-brand-border py-32 px-6 overflow-hidden">

      {/* Background orb */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="section-orb"
          style={{
            width: '600px',
            height: '600px',
            bottom: '-15%',
            left: '-8%',
            background: 'radial-gradient(circle, rgba(139,92,246,0.09) 0%, transparent 65%)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div
          ref={headRef}
          className={`mb-16 transition-all duration-700 ease-out ${
            headInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="text-brand-accent text-xs font-semibold tracking-widest2 uppercase mb-4">
            Leistungen
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-text tracking-tight">
            Was wir bauen
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 gap-px bg-brand-border">
          {cards.map((card, i) => (
            <div key={card.title} className="bg-brand-bg">
              <Card {...card} index={i} />
            </div>
          ))}
        </div>

        {/* Sub-label */}
        <p className="mt-12 text-brand-sub text-sm font-medium tracking-widest2 uppercase text-center">
          Branchenübergreifend.&nbsp; Fallübergreifend.&nbsp; Weltweit.
        </p>
      </div>
    </section>
  )
}
