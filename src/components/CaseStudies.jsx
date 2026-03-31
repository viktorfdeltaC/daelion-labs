import { useRef } from 'react'
import { useInView } from '../hooks/useInView'
import { DisplayHeadlineLines } from './DisplayHeadline'
import { useLanguage } from '../contexts/LanguageContext'

function CaseCard({ tag, metric, unit, title, problem, solution, result, index, inView, labelProblem, labelSolution, labelResult }) {
  const rafId = useRef(null)

  const handleMouseMove = (e) => {
    if (rafId.current) return
    const el = e.currentTarget
    const cx = e.clientX
    const cy = e.clientY
    rafId.current = requestAnimationFrame(() => {
      const rect = el.getBoundingClientRect()
      el.style.setProperty('--glow-x', `${((cx - rect.left) / rect.width) * 100}%`)
      el.style.setProperty('--glow-y', `${((cy - rect.top) / rect.height) * 100}%`)
      rafId.current = null
    })
  }

  const handleMouseLeave = (e) => {
    if (rafId.current) { cancelAnimationFrame(rafId.current); rafId.current = null }
  }

  return (
    <div
      className={`relative group overflow-hidden border-b border-brand-border lg:border-b-0 lg:border-r last:border-r-0 last:border-b-0 transition-[opacity,transform] duration-700 ease-out ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Hover bg slide-up */}
      <div
        className="win-hover-bg absolute inset-0 pointer-events-none"
        aria-hidden="true"
      />

      {/* Mouse glow */}
      <div className="card-mouse-glow" aria-hidden="true" />

      {/* Top accent line on hover */}
      <div
        className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.6), transparent)' }}
        aria-hidden="true"
      />

      <div className="relative z-10 p-8 md:p-10 lg:p-12 flex flex-col h-full">

        {/* Tag */}
        <span className="section-label text-brand-accent mb-6 block">{tag}</span>

        {/* Metric */}
        <div className="mb-5">
          <span
            className="font-display font-extrabold text-brand-accent leading-none block"
            style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)' }}
          >
            {metric}
          </span>
          <span className="section-label text-brand-sub/60 mt-1 block">{unit}</span>
        </div>

        {/* Divider */}
        <div className="h-px bg-brand-border mb-5 group-hover:bg-brand-accent/25 transition-colors duration-300" />

        {/* Title */}
        <h3
          className="font-display font-bold text-brand-text leading-tight mb-6 group-hover:text-brand-accent transition-colors duration-300"
          style={{ fontSize: 'clamp(1rem, 1.4vw, 1.2rem)' }}
        >
          {title}
        </h3>

        {/* Body: Problem / Solution / Result */}
        <dl className="space-y-3 mt-auto">
          <div>
            <dt className="section-label text-brand-sub/40 mb-0.5">{labelProblem}</dt>
            <dd className="text-brand-sub text-sm leading-relaxed group-hover:text-brand-sub/80 transition-colors duration-300">{problem}</dd>
          </div>
          <div>
            <dt className="section-label text-brand-sub/40 mb-0.5">{labelSolution}</dt>
            <dd className="text-brand-sub text-sm leading-relaxed group-hover:text-brand-sub/80 transition-colors duration-300">{solution}</dd>
          </div>
          <div>
            <dt className="section-label text-brand-accent/70 mb-0.5">{labelResult}</dt>
            <dd className="text-brand-text text-sm leading-relaxed font-medium">{result}</dd>
          </div>
        </dl>
      </div>
    </div>
  )
}

export default function CaseStudies() {
  const { t } = useLanguage()
  const cases = t('cs_cases')
  const [headRef, headInView] = useInView()
  const [gridRef, gridInView] = useInView()

  return (
    <section className="relative bg-brand-bg overflow-hidden">

      {/* Background orb */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="section-orb" style={{ width: '500px', height: '500px', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: 'radial-gradient(circle, rgba(139,92,246,0.05) 0%, transparent 65%)' }} />
      </div>

      {/* Section header bar */}
      <div className="border-b border-brand-border px-6 md:px-10 lg:px-16 py-4 flex items-center justify-between">
        <span className="section-label text-brand-accent">005 / ERGEBNISSE</span>
        <span className="section-label text-brand-sub">{t('cs_section_right')}</span>
      </div>

      {/* Headline */}
      <div
        ref={headRef}
        className={`relative z-10 px-6 md:px-10 lg:px-16 pt-14 pb-10 border-b border-brand-border transition-[opacity,transform] duration-700 ${
          headInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <DisplayHeadlineLines lines={[t('cs_h1'), t('cs_h2')]} inView={headInView} />
        <p className="text-brand-sub/50 text-sm mt-4 section-label">{t('cs_sub')}</p>
      </div>

      {/* Cards grid */}
      <div
        ref={gridRef}
        className="relative z-10 grid lg:grid-cols-3 border-b border-brand-border"
      >
        {cases.map((c, i) => (
          <CaseCard
            key={c.tag}
            {...c}
            index={i}
            inView={gridInView}
            labelProblem={t('cs_label_problem')}
            labelSolution={t('cs_label_solution')}
            labelResult={t('cs_label_result')}
          />
        ))}
      </div>
    </section>
  )
}
