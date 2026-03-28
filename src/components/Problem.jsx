import { useInView } from '../hooks/useInView'
import { useCountUp } from '../hooks/useCountUp'
import { useLanguage } from '../contexts/LanguageContext'

export default function Problem() {
  const { t } = useLanguage()
  const [sectionRef, sectionInView] = useInView()
  const [countRef, count] = useCountUp(70)

  return (
    <section id="problem" className="relative bg-brand-bg overflow-hidden">

      {/* ── Section header bar ─────────────────────── */}
      <div className="border-b border-brand-border px-6 md:px-10 lg:px-16 py-4 flex items-center justify-between">
        <span className="section-label text-brand-accent">002 / PROBLEM</span>
        <span className="section-label text-brand-sub">{t('problem_section_right')}</span>
      </div>

      {/* ── Background orb ────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="section-orb" style={{ width: '500px', height: '500px', top: '-10%', right: '-5%', background: 'radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 65%)' }} />
      </div>

      {/* ── Split layout ──────────────────────────── */}
      <div
        ref={sectionRef}
        className={`relative z-10 grid lg:grid-cols-2 border-b border-brand-border transition-[opacity,transform] duration-700 ease-out ${
          sectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Left — giant counter */}
        <div
          ref={countRef}
          className="flex items-center justify-center lg:border-r border-brand-border py-20 md:py-28 px-6 md:px-10"
        >
          <div className="relative flex flex-col items-center leading-none">
            {/* SVG progress arc */}
            <div className="relative" aria-hidden="true">
              <svg
                width="280" height="280" viewBox="0 0 280 280"
                className="absolute inset-0 -translate-x-1/2 -translate-y-1/2"
                style={{ left: '50%', top: '50%', pointerEvents: 'none' }}
              >
                {/* Background ring */}
                <circle cx="140" cy="140" r="128" fill="none" stroke="rgba(139,92,246,0.07)" strokeWidth="1" />
                {/* Progress arc — animates on inView */}
                <circle
                  cx="140" cy="140" r="128"
                  fill="none"
                  stroke="rgba(139,92,246,0.25)"
                  strokeWidth="1"
                  strokeDasharray={`${2 * Math.PI * 128}`}
                  strokeDashoffset={sectionInView ? `${2 * Math.PI * 128 * 0.3}` : `${2 * Math.PI * 128}`}
                  strokeLinecap="round"
                  transform="rotate(-90 140 140)"
                  style={{ transition: 'stroke-dashoffset 1.6s cubic-bezier(0.16,1,0.3,1) 0.4s' }}
                />
                {/* Outer faint ring */}
                <circle cx="140" cy="140" r="136" fill="none" stroke="rgba(139,92,246,0.04)" strokeWidth="1" />
              </svg>

              <span
                className="relative font-display font-extrabold text-brand-accent block"
                style={{
                  fontSize: 'clamp(7rem, 22vw, 18rem)',
                  lineHeight: 1,
                  textShadow: '0 0 80px rgba(139,92,246,0.3), 0 0 200px rgba(139,92,246,0.1)',
                  animation: sectionInView ? 'number-rise 0.8s cubic-bezier(0.22,1,0.36,1) 0.2s both' : 'none',
                }}
              >
                {count}%
              </span>
            </div>

            <p
              className="relative section-label text-brand-accent/70 mt-6"
              style={{ animation: sectionInView ? 'fade-up 0.6s ease 0.7s both' : 'none' }}
            >
              {t('problem_label')}
            </p>
          </div>
        </div>

        {/* Right — headline + text */}
        <div className="flex flex-col justify-center py-16 md:py-24 px-6 md:px-10 lg:px-14">
          <h2
            className="font-display font-bold text-brand-text leading-[1.05] tracking-tight mb-6"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)' }}
          >
            {t('problem_headline')}
          </h2>

          <div
            className="h-px bg-brand-accent/40 mb-8 origin-left"
            style={{ animation: sectionInView ? 'line-draw 0.8s cubic-bezier(0.22,1,0.36,1) 0.3s both' : 'none' }}
          />

          <div className="space-y-5">
            {t('problem_body').map((text, i) => (
              <p
                key={i}
                className="text-brand-sub text-base leading-relaxed"
                style={{ animation: sectionInView ? `fade-up 0.7s cubic-bezier(0.22,1,0.36,1) ${0.45 + i * 0.15}s both` : 'none' }}
              >
                {text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
