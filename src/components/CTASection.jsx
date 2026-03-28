import { useInView } from '../hooks/useInView'
import MagneticButton from './MagneticButton'
import { useLanguage } from '../contexts/LanguageContext'

export default function CTASection() {
  const { t } = useLanguage()
  const [ref, inView] = useInView()

  return (
    <section
      id="contact"
      className="relative overflow-hidden min-h-dvh flex flex-col"
      style={{ background: '#8B5CF6' }}
    >
      {/* Orbs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="section-orb" style={{ width: '70vw', height: '70vw', top: '-20%', right: '-15%', background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 65%)', maxWidth: '900px', maxHeight: '900px' }} />
        <div className="section-orb" style={{ width: '50vw', height: '50vw', bottom: '-25%', left: '-10%', background: 'radial-gradient(circle, rgba(109,40,217,0.6) 0%, transparent 65%)', maxWidth: '700px', maxHeight: '700px' }} />
      </div>

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)', backgroundSize: '28px 28px' }}
        aria-hidden="true"
      />

      {/* Section label */}
      <div className="relative z-10 border-b border-white/10 px-6 md:px-10 lg:px-16 py-4 flex items-center justify-between shrink-0">
        <span className="section-label text-white/60">007 / CONTACT</span>
        <span className="section-label text-white/40">{t('cta_section_right')}</span>
      </div>

      {/* Main content */}
      <div
        ref={ref}
        className={`relative z-10 flex-1 flex flex-col justify-between px-6 md:px-10 lg:px-16 pt-10 md:pt-16 pb-12 md:pb-16 transition-[opacity,transform] duration-700 ease-out ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Massive hero word — fills the room */}
        <div className="flex-1 flex flex-col justify-center">
          <div className="overflow-hidden">
            <h2
              className="font-display font-extrabold text-white leading-[0.82] tracking-tighter"
              style={{
                fontSize: 'clamp(6rem, 18vw, 16rem)',
                animation: inView ? 'reveal-up 1.1s cubic-bezier(0.16,1,0.3,1) 0s both' : 'none',
                marginLeft: 'clamp(-0.3rem, -0.5vw, -1rem)',
              }}
            >
              {t('cta_headline')}
            </h2>
          </div>

          {/* Supporting copy — small, bottom-left contrast */}
          <p
            className="text-white/50 text-sm leading-relaxed mt-8 max-w-xs"
            style={{ animation: inView ? 'fade-up 0.8s ease 0.5s both' : 'none' }}
          >
            {t('cta_desc')}
          </p>
        </div>

        {/* Action row — prominent button */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mt-10 md:mt-14">
          <MagneticButton
            as="a"
            href="mailto:hello@daelionlabs.com"
            aria-label="Lösung anfragen per E-Mail"
            className="btn-shimmer btn-glass text-white font-sans font-semibold text-base px-16 py-6 cursor-pointer whitespace-nowrap inline-block"
            style={{ borderRadius: 0 }}
          >
            <span className="btn-inner">{t('cta_button')}</span>
          </MagneticButton>
          <span className="section-label text-white/30 hidden sm:inline">
            hello@daelionlabs.com
          </span>
        </div>
      </div>

      {/* Bottom rule */}
      <div className="relative z-10 border-t border-white/10 px-6 md:px-10 lg:px-16 py-5 flex items-center justify-between shrink-0">
        <span className="section-label text-white/25">© 2026 Daelion Labs</span>
        <div className="flex items-center gap-2" aria-hidden="true">
          <div className="w-1 h-1 bg-white/30 rounded-full" />
          <div className="w-1 h-1 bg-white/20 rounded-full" />
          <div className="w-1 h-1 bg-white/10 rounded-full" />
        </div>
      </div>
    </section>
  )
}
