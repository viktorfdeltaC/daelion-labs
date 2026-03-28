import { useRef, useState, useEffect } from 'react'
import { useInView } from '../hooks/useInView'
import { DisplayHeadlineLines } from './DisplayHeadline'
import { useLanguage } from '../contexts/LanguageContext'

export default function WinsSection() {
  const { t } = useLanguage()
  const wins = t('wins_cards')
  const [headRef, headInView] = useInView()
  const [gridRef, gridInView] = useInView()

  // Swipe carousel state (mobile only — no-op on desktop)
  const trackRef = useRef(null)
  const [activeIdx, setActiveIdx] = useState(0)

  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    const onScroll = () => {
      const max = el.scrollWidth - el.clientWidth
      if (max <= 0) return
      setActiveIdx(Math.round((el.scrollLeft / max) * (wins.length - 1)))
    }
    el.addEventListener('scroll', onScroll, { passive: true })
    return () => el.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (i) => {
    const el = trackRef.current
    if (!el) return
    const max = el.scrollWidth - el.clientWidth
    el.scrollTo({ left: (i / (wins.length - 1)) * max, behavior: 'smooth' })
  }

  return (
    <section id="impact" className="relative bg-brand-bg overflow-hidden">

      {/* Section header bar */}
      <div className="border-b border-brand-border px-6 md:px-10 lg:px-16 py-4 flex items-center justify-between">
        <span className="section-label text-brand-accent">004 / IMPACT</span>
        <span className="section-label text-brand-sub">{t('wins_section_right')}</span>
      </div>

      {/* Background orb */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="section-orb" style={{ width: '600px', height: '600px', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', background: 'radial-gradient(circle, rgb(var(--c-accent)/0.05) 0%, transparent 65%)' }} />
      </div>

      {/* Header */}
      <div
        ref={headRef}
        className={`relative z-10 px-6 md:px-10 lg:px-16 pt-14 pb-12 border-b border-brand-border transition-[opacity,transform] duration-700 ${
          headInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <DisplayHeadlineLines lines={[t('wins_h1'), t('wins_h2')]} inView={headInView} />
          <p className="text-brand-sub text-sm max-w-xs leading-relaxed md:text-right">
            {t('wins_sub')}
          </p>
        </div>
      </div>

      {/* ── Cards ── */}
      {/* Mobile: horizontal scroll-snap carousel                         */}
      {/* Desktop: 4-column grid (md:grid-cols-4 lg:grid-cols-4)          */}
      <div ref={gridRef} className="relative z-10 border-b border-brand-border">

        {/* Scroll track — overflow-x-auto on mobile, grid on md+ */}
        <div
          ref={trackRef}
          className="
            carousel-track
            flex overflow-x-auto snap-x snap-mandatory scroll-smooth
            gap-0
            md:grid md:grid-cols-2 lg:grid-cols-4
            md:overflow-x-visible
          "
        >
          {wins.map((win, i) => (
            <div
              key={win.title}
              className={`
                relative group
                snap-center shrink-0
                w-[82vw] sm:w-[60vw]
                md:w-auto
                border-r border-brand-border last:border-r-0
                border-b md:border-b-0
                p-8 md:p-10 lg:p-12
                overflow-hidden
                transition-[opacity,transform] duration-700 ease-out
                ${gridInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
              `}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Dark hover background — slides up from bottom */}
              <div
                className="win-hover-bg absolute inset-0 pointer-events-none"
                aria-hidden="true"
              />
              {/* Accent top line on hover */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                style={{ background: 'linear-gradient(90deg, transparent, rgb(var(--c-accent)/0.8), transparent)' }}
                aria-hidden="true"
              />

              {/* Metric */}
              <div className="relative z-10 mb-5">
                <span
                  className="font-display font-extrabold text-brand-accent block leading-none"
                  style={{
                    fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
                    animation: gridInView ? `count-in 0.7s cubic-bezier(0.16,1,0.3,1) ${i * 0.1}s both` : 'none',
                  }}
                >
                  {win.metric}
                </span>
                <span
                  className="section-label text-brand-sub/60 group-hover:text-white/40 mt-1 block transition-colors duration-300"
                  style={{ animation: gridInView ? `fade-up 0.6s ease ${0.1 + i * 0.1}s both` : 'none' }}
                >
                  {win.unit}
                </span>
              </div>

              <h3
                className="relative z-10 font-display font-bold text-brand-text group-hover:text-white leading-tight mb-3 transition-colors duration-300"
                style={{ fontSize: 'clamp(1rem, 1.5vw, 1.3rem)' }}
              >
                {win.title}
              </h3>

              <p className="relative z-10 text-brand-sub group-hover:text-white/60 text-sm leading-relaxed transition-colors duration-300">
                {win.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Dot indicators — mobile only */}
        <div className="flex justify-center gap-2 py-4 md:hidden" role="tablist" aria-label="Karten-Navigation">
          {wins.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === activeIdx}
              aria-label={`Karte ${i + 1} von ${wins.length}`}
              onClick={() => scrollTo(i)}
              className="min-w-[44px] min-h-[44px] flex items-center justify-center"
            >
              <span
                className="block rounded-full transition-all duration-300"
                style={{
                  width: i === activeIdx ? '20px' : '6px',
                  height: '6px',
                  background: i === activeIdx ? 'var(--color-accent)' : 'var(--color-border)',
                }}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
