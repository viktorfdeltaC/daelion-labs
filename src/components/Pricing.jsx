import { useInView } from '../hooks/useInView'
import { useLanguage } from '../contexts/LanguageContext'

export default function Pricing() {
  const { t } = useLanguage()
  const [headRef, headInView] = useInView()
  const [bodyRef, bodyInView] = useInView()

  return (
    <section id="pricing" className="relative bg-brand-bg overflow-hidden">

      {/* Section header bar */}
      <div className="border-b border-brand-border px-6 md:px-10 lg:px-16 py-4 flex items-center justify-between">
        <span className="section-label text-brand-accent">006 / PRICING</span>
        <span className="section-label text-brand-sub">{t('pricing_section_right')}</span>
      </div>

      {/* Background orb */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="section-orb" style={{ width: '500px', height: '500px', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', background: 'radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 65%)' }} />
      </div>

      {/* Header */}
      <div
        ref={headRef}
        className={`relative z-10 px-6 md:px-10 lg:px-16 pt-14 pb-12 border-b border-brand-border transition-all duration-700 ${
          headRef && headInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <h2
            className="font-display font-extrabold text-brand-text leading-none tracking-tight"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)' }}
          >
            {t('pricing_h1')}<br />{t('pricing_h2')}
          </h2>
          <p className="text-brand-sub text-sm max-w-xs leading-relaxed md:text-right">
            {t('pricing_sub')}
          </p>
        </div>
      </div>

      {/* Pricing cards */}
      <div
        ref={bodyRef}
        className={`relative z-10 grid md:grid-cols-2 border-b border-brand-border transition-all duration-700 ease-out ${
          bodyInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        {/* Setup Fee */}
        <div className="relative group glass-accent border-r border-brand-accent-border p-10 md:p-14 lg:p-16 overflow-hidden transition-all duration-500 hover:shadow-[0_0_60px_rgba(139,92,246,0.12)]">
          {/* Radial glow on hover */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(139,92,246,0.1) 0%, transparent 60%)' }}
            aria-hidden="true"
          />
          {/* Accent top border — animated width */}
          <div
            className="absolute top-0 left-0 h-px transition-all duration-700 group-hover:right-0"
            style={{ right: '40%', background: 'linear-gradient(90deg, rgba(139,92,246,0.9), rgba(139,92,246,0.3))' }}
            aria-hidden="true"
          />

          <div className="flex items-start justify-between mb-10">
            <div>
              <span className="section-label text-brand-accent block mb-3">{t('pricing_setup_label')}</span>
              <h3 className="font-display font-bold text-brand-text text-3xl md:text-4xl">{t('pricing_setup_title')}</h3>
            </div>
            <div className="w-10 h-10 border border-brand-accent-border flex items-center justify-center shrink-0 mt-1" style={{ background: 'rgba(139,92,246,0.07)' }} aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 12l10 5 10-5" />
              </svg>
            </div>
          </div>

          <p className="text-brand-sub text-sm leading-relaxed mb-10">
            {t('pricing_setup_desc')}
          </p>

          <ul className="space-y-3">
            {t('pricing_setup_bullets').map((item) => (
              <li key={item} className="flex items-center gap-3 text-brand-sub text-sm">
                <span className="w-1.5 h-1.5 bg-brand-accent shrink-0" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Retainer */}
        <div className="relative group glass p-10 md:p-14 lg:p-16 overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,0,0,0.25)]">
          <div
            className="absolute top-0 left-0 h-px transition-all duration-700 group-hover:right-0"
            style={{ right: '60%', background: 'linear-gradient(90deg, rgba(255,255,255,0.15), rgba(255,255,255,0.04))' }}
            aria-hidden="true"
          />

          <div className="flex items-start justify-between mb-10">
            <div>
              <span className="section-label text-brand-sub block mb-3">{t('pricing_retainer_label')}</span>
              <h3 className="font-display font-bold text-brand-text text-3xl md:text-4xl">
                {t('pricing_retainer_title')}
              </h3>
              <span className="text-brand-sub text-sm font-normal">{t('pricing_retainer_sub')}</span>
            </div>
            <div className="w-10 h-10 border border-brand-border flex items-center justify-center shrink-0 mt-1" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A0A0B0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
              </svg>
            </div>
          </div>

          <p className="text-brand-sub text-sm leading-relaxed mb-10">
            {t('pricing_retainer_desc')}
          </p>

          <ul className="space-y-3">
            {t('pricing_retainer_bullets').map((item) => (
              <li key={item} className="flex items-center gap-3 text-brand-sub text-sm">
                <span className="w-1.5 h-1.5 bg-brand-sub shrink-0" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
