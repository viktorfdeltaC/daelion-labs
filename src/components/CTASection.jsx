import { useInView } from '../hooks/useInView'
import { useLanguage } from '../contexts/LanguageContext'
import { ShinyButton } from './ShinyButton'

export default function CTASection() {
  const { t } = useLanguage()
  const [ref, inView] = useInView()

  return (
    <section
      id="contact"
      className="relative overflow-hidden min-h-dvh flex flex-col"
      style={{ background: '#07050F' }}
    >
      {/* Ambient glow orbs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Main purple bloom — top center */}
        <div style={{ position: 'absolute', top: '-10%', left: '50%', transform: 'translateX(-50%)', width: '90vw', height: '90vw', maxWidth: '900px', maxHeight: '900px', background: 'radial-gradient(circle, rgba(134,59,255,0.28) 0%, rgba(100,20,220,0.1) 40%, transparent 70%)', borderRadius: '50%' }} />
        {/* Cyan accent — bottom right */}
        <div style={{ position: 'absolute', bottom: '-15%', right: '-5%', width: '50vw', height: '50vw', maxWidth: '600px', maxHeight: '600px', background: 'radial-gradient(circle, rgba(34,211,238,0.09) 0%, transparent 65%)', borderRadius: '50%' }} />
        {/* Deep purple anchor — bottom left */}
        <div style={{ position: 'absolute', bottom: '-20%', left: '-10%', width: '45vw', height: '45vw', maxWidth: '500px', maxHeight: '500px', background: 'radial-gradient(circle, rgba(120,30,255,0.15) 0%, transparent 65%)', borderRadius: '50%' }} />
      </div>

      {/* Dot grid — subtler on dark */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '28px 28px' }}
        aria-hidden="true"
      />

      {/* Section label */}
      <div className="relative z-10 border-b border-white/[0.06] px-6 md:px-10 lg:px-16 py-4 flex items-center justify-between shrink-0">
        <span className="section-label text-brand-accent">007 / CONTACT</span>
        <span className="section-label text-white/30">{t('cta_section_right')}</span>
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
          <ShinyButton
            as="a"
            href="mailto:hello@daelionlabs.com"
            aria-label="Lösung anfragen per E-Mail"
          >
            {t('cta_button')}
          </ShinyButton>
          <a
            href="mailto:hello@daelionlabs.com"
            className="section-label text-white/30 hover:text-white/60 transition-colors duration-200 hidden sm:inline"
          >
            hello@daelionlabs.com
          </a>
        </div>
      </div>

      {/* Bottom rule */}
      <div className="relative z-10 border-t border-white/[0.06] px-6 md:px-10 lg:px-16 py-5 flex items-center justify-between shrink-0">
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
