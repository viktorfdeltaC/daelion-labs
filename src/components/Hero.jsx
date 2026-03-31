import { useEffect, useRef } from 'react'
import { useScramble } from '../hooks/useScramble'
import ProblemFinder from './ProblemFinder'
import MagneticButton from './MagneticButton'
import { useLanguage } from '../contexts/LanguageContext'
import { FloatingPaths } from './BackgroundPaths'
import { HoverBorderGradient } from './HoverBorderGradient'

export default function Hero() {
  const { t } = useLanguage()
  const heroRef = useRef(null)
  const circle1Ref = useRef(null)
  const circle2Ref = useRef(null)
  const headlineRef = useRef(null)

  // Scramble the main word — re-scrambles when language switches
  const scrambled = useScramble(t('hero_word'), { startDelay: 100, tickMs: 32, resolveEvery: 2 })

  // Mouse parallax — lerped, direct DOM, no React re-renders
  useEffect(() => {
    const hero = heroRef.current
    if (!hero || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return

    let mx = 0, my = 0, rx = 0, ry = 0, raf

    const onMove = (e) => {
      const rect = hero.getBoundingClientRect()
      mx = (e.clientX - rect.left) / rect.width - 0.5
      my = (e.clientY - rect.top) / rect.height - 0.5
    }

    const tick = () => {
      rx += (mx - rx) * 0.05
      ry += (my - ry) * 0.05

      if (circle1Ref.current) circle1Ref.current.style.transform = `translate(${rx * 24}px, ${ry * 16}px)`
      if (circle2Ref.current) circle2Ref.current.style.transform = `translate(${rx * -16}px, ${ry * -10}px)`
      if (headlineRef.current) headlineRef.current.style.transform = `translate(${rx * 6}px, ${ry * 4}px)`

      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    hero.addEventListener('mousemove', onMove, { passive: true })
    return () => {
      cancelAnimationFrame(raf)
      hero.removeEventListener('mousemove', onMove)
    }
  }, [])

  return (
    <section ref={heroRef} className="relative min-h-dvh flex flex-col overflow-hidden bg-brand-bg pt-16">

      {/* ── Floating SVG paths ──────────────────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none text-brand-accent/50 overflow-hidden z-0"
        style={{ maskImage: 'linear-gradient(to bottom, black 50%, transparent 78%)', WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 78%)' }}
        aria-hidden="true"
      >
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>

      {/* ── Geometric background — architectural, not blobby ── */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        {/* Large circle outline, upper right */}
        <div
          ref={circle1Ref}
          style={{
            position: 'absolute',
            top: '-18%',
            right: '-18%',
            width: '65vw',
            height: '65vw',
            maxWidth: '820px',
            maxHeight: '820px',
            border: '1px solid rgba(139,92,246,0.1)',
            borderRadius: '50%',
            willChange: 'transform',
          }}
        />
        {/* Inner circle, slightly offset */}
        <div
          style={{
            position: 'absolute',
            top: '-8%',
            right: '-8%',
            width: '40vw',
            height: '40vw',
            maxWidth: '500px',
            maxHeight: '500px',
            border: '1px solid rgba(139,92,246,0.06)',
            borderRadius: '50%',
          }}
        />
        {/* Small circle, lower left */}
        <div
          ref={circle2Ref}
          style={{
            position: 'absolute',
            bottom: '8%',
            left: '-8%',
            width: '28vw',
            height: '28vw',
            maxWidth: '360px',
            maxHeight: '360px',
            border: '1px solid rgba(139,92,246,0.07)',
            borderRadius: '50%',
            willChange: 'transform',
          }}
        />
        {/* Accent dot, upper right */}
        <div
          style={{
            position: 'absolute',
            top: '22%',
            right: '10%',
            width: '5px',
            height: '5px',
            background: 'rgba(139,92,246,0.7)',
            borderRadius: '50%',
            boxShadow: '0 0 12px rgba(139,92,246,0.5)',
            animation: 'glow-pulse 3s ease-in-out infinite',
          }}
        />
        {/* Subtle dot grid */}
        <div className="absolute inset-0 dot-grid opacity-20" />
        {/* Soft ambient glow — much subtler than orbs */}
        <div style={{
          position: 'absolute',
          top: '5%',
          right: '-5%',
          width: '50vw',
          height: '50vw',
          maxWidth: '600px',
          maxHeight: '600px',
          background: 'radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
      </div>

      {/* ── Section header bar ─────────────────────────────── */}
      <div
        className="relative z-10 flex items-center justify-between px-6 md:px-10 lg:px-16 py-4 border-b border-brand-border shrink-0"
        style={{ animation: 'fade-up 0.5s ease 0.05s both' }}
      >
        <span className="section-label text-brand-accent">001 / HERO</span>
        <span className="section-label text-brand-sub/60">{t('hero_section_right')}</span>
      </div>

      {/* ── Main content ───────────────────────────────────── */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-6 md:px-10 lg:px-16 py-12 md:py-16">

        {/* Vertical side label — desktop only */}
        <div
          className="absolute left-0 top-1/2 hidden xl:flex flex-col items-center gap-3 pl-3"
          style={{ writingMode: 'vertical-rl', transform: 'translateY(-50%)', zIndex: 20 }}
          aria-hidden="true"
        >
          <span className="section-label text-brand-sub opacity-40" style={{ writingMode: 'vertical-rl', letterSpacing: '0.2em' }}>DAELION LABS</span>
          <div className="w-px h-10 bg-brand-border" />
          <span className="section-label text-brand-accent opacity-60" style={{ writingMode: 'vertical-rl', letterSpacing: '0.2em' }}>2026</span>
        </div>

        <div className="xl:pl-10 max-w-[1100px]">

          {/* ── Headline ──────────────────────────────────── */}
          <div ref={headlineRef} style={{ willChange: 'transform' }}>
            <h1 className="font-display font-extrabold overflow-visible">
              {/* Qualifier label — sets the stage */}
              <span
                className="block text-brand-sub/50"
                style={{
                  fontFamily: 'var(--font-mono, "JetBrains Mono", monospace)',
                  fontSize: 'clamp(0.7rem, 1.1vw, 1.1rem)',
                  letterSpacing: '0.28em',
                  fontWeight: 400,
                  lineHeight: 1,
                  marginBottom: 'clamp(0.8rem, 1.5vw, 1.4rem)',
                  animation: 'fade-up 0.7s cubic-bezier(0.22,1,0.36,1) 0.2s both',
                }}
              >
                {t('hero_qualifier')}
              </span>

              {/* Main word — scrambled, full-bleed */}
              <span
                className="block text-gradient leading-[0.85]"
                style={{
                  fontSize: 'clamp(2.2rem, 13vw, 13rem)',
                  letterSpacing: '-0.02em',
                  animation: 'fade-up 0.9s cubic-bezier(0.22,1,0.36,1) 0.28s both',
                  fontVariantNumeric: 'tabular-nums',
                  marginLeft: 'clamp(-0.5rem, -1vw, -1.5rem)',
                }}
              >
                {scrambled}
              </span>

              {/* Sub-line — indented, accent colour */}
              <span
                className="block text-brand-accent leading-[0.88]"
                style={{
                  fontSize: 'clamp(1.6rem, 5.5vw, 5.5rem)',
                  letterSpacing: '0.01em',
                  paddingLeft: 'clamp(2rem, 6vw, 7rem)',
                  animation: 'fade-up 0.8s cubic-bezier(0.22,1,0.36,1) 0.44s both',
                  marginTop: 'clamp(0.4rem, 0.8vw, 0.8rem)',
                }}
              >
                {t('hero_sub')}
              </span>
            </h1>
          </div>

          {/* ── Description ───────────────────────────────── */}
          <p
            className="text-brand-sub text-base md:text-lg leading-relaxed mt-8 md:mt-10 max-w-lg"
            style={{ animation: 'fade-up 0.7s cubic-bezier(0.22,1,0.36,1) 0.56s both' }}
          >
            {t('hero_desc')}
          </p>

          {/* ── Problem Finder ──────────────────────────────── */}
          <ProblemFinder />

          {/* ── CTA ─────────────────────────────────────────── */}
          <div
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-8 md:mt-10"
            style={{ animation: 'fade-up 0.7s cubic-bezier(0.22,1,0.36,1) 0.64s both' }}
          >
            {/* Magnetic primary CTA */}
            <MagneticButton
              as="a"
              href="#contact"
              aria-label={t('hero_cta_primary')}
              className="btn-shimmer btn-purple bg-brand-accent text-white font-sans font-semibold text-sm px-8 py-4 cursor-pointer whitespace-nowrap inline-block"
              style={{ borderRadius: 0 }}
            >
              <span className="btn-inner">
                {t('hero_cta_primary')} <span className="btn-arrow">→</span>
              </span>
            </MagneticButton>
            <a
              href="#problem"
              className="btn-text text-brand-sub text-sm font-medium hover:text-brand-text transition-colors duration-200 cursor-pointer"
            >
              {t('hero_cta_secondary')} <span className="btn-text-arrow">→</span>
            </a>
          </div>

          {/* ── Stats ────────────────────────────────────── */}
          <div className="mt-10 md:mt-12">
            {/* Mobile: simple inline row */}
            <div className="flex items-center justify-between md:hidden border-t border-brand-border pt-5">
              {[
                { num: '75+',  label: t('hero_stat_projects') },
                { num: '100%', label: t('hero_stat_code') },
                { num: '<24h', label: t('hero_stat_response') },
              ].map(({ num, label }, i) => (
                <div
                  key={num}
                  className="flex flex-col items-center gap-1"
                  style={{ animation: `badge-pop 0.6s cubic-bezier(0.34,1.56,0.64,1) ${0.8 + i * 0.13}s both` }}
                >
                  <span className="font-display font-bold text-brand-text text-base leading-none">{num}</span>
                  <span className="section-label text-brand-sub/50">{label}</span>
                </div>
              ))}
            </div>
            {/* Desktop: animated border badges */}
            <div className="hidden md:flex flex-wrap items-center gap-3">
              {[
                { num: '75+',  label: t('hero_stat_projects') },
                { num: '100%', label: t('hero_stat_code') },
                { num: '<24h', label: t('hero_stat_response') },
              ].map(({ num, label }, i) => (
                <HoverBorderGradient
                  key={num}
                  style={{ animation: `badge-pop 0.6s cubic-bezier(0.34,1.56,0.64,1) ${0.8 + i * 0.13}s both` }}
                >
                  <span className="font-display font-bold text-brand-text text-sm leading-none">{num}</span>
                  <span className="section-label text-brand-sub/60 ml-3">{label}</span>
                </HoverBorderGradient>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Scroll indicator ──────────────────────────────── */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 z-50"
        style={{ animation: 'fade-up 1s ease 1.3s both' }}
        aria-hidden="true"
      >
        <span className="section-label text-brand-sub/60" style={{ letterSpacing: '0.2em' }}>SCROLL</span>
        <div className="relative w-px h-10 bg-brand-border overflow-hidden">
          <div
            className="absolute inset-x-0 top-0 h-full bg-brand-accent"
            style={{ animation: 'scroll-line 1.8s cubic-bezier(0.4,0,0.6,1) infinite' }}
          />
        </div>
      </div>

      {/* ── Bottom rule ─────────────────────────────────────── */}
      <div
        className="relative z-10 mx-6 md:mx-10 lg:mx-16 shrink-0"
        style={{ animation: 'line-draw 0.9s cubic-bezier(0.22,1,0.36,1) 0.5s both', transformOrigin: 'left' }}
        aria-hidden="true"
      >
        <div className="h-px bg-brand-border" />
      </div>

      {/* ── Corner marks ─────────────────────────────────────── */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" aria-hidden="true">
        <line x1="5%" y1="8%"  x2="8%"  y2="8%"  stroke="#8B5CF6" strokeWidth="1" strokeOpacity="0.2" />
        <line x1="5%" y1="8%"  x2="5%"  y2="11%" stroke="#8B5CF6" strokeWidth="1" strokeOpacity="0.2" />
        <line x1="95%" y1="8%"  x2="92%" y2="8%"  stroke="#8B5CF6" strokeWidth="1" strokeOpacity="0.2" />
        <line x1="95%" y1="8%"  x2="95%" y2="11%" stroke="#8B5CF6" strokeWidth="1" strokeOpacity="0.2" />
        <line x1="5%" y1="92%" x2="8%"  y2="92%" stroke="#8B5CF6" strokeWidth="1" strokeOpacity="0.2" />
        <line x1="5%" y1="92%" x2="5%"  y2="89%" stroke="#8B5CF6" strokeWidth="1" strokeOpacity="0.2" />
        <line x1="95%" y1="92%" x2="92%" y2="92%" stroke="#8B5CF6" strokeWidth="1" strokeOpacity="0.2" />
        <line x1="95%" y1="92%" x2="95%" y2="89%" stroke="#8B5CF6" strokeWidth="1" strokeOpacity="0.2" />
      </svg>
    </section>
  )
}
