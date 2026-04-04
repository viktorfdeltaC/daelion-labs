import { useEffect, useState } from 'react'
import { useActiveSection } from '../hooks/useActiveSection'
import ThemeToggle from './ThemeToggle'
import MagneticButton from './MagneticButton'
import { useLanguage } from '../contexts/LanguageContext'
import { useContactModal } from '../contexts/ContactModalContext'

const NAV_HREFS = ['#solutions', '#process', '#pricing']

const SECTION_IDS = NAV_HREFS.map(h => h.slice(1))

export default function Navbar() {
  const { lang, t, toggle } = useLanguage()
  const { openModal } = useContactModal()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const activeSection = useActiveSection(SECTION_IDS)

  const navLinks = [
    { label: t('nav_services'), href: '#solutions' },
    { label: t('nav_process'),  href: '#process' },
    { label: t('nav_pricing'),  href: '#pricing' },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Body scroll lock + Escape to close
  useEffect(() => {
    document.body.classList.toggle('nav-open', menuOpen)
    if (!menuOpen) return
    const onKey = (e) => { if (e.key === 'Escape') setMenuOpen(false) }
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.classList.remove('nav-open')
    }
  }, [menuOpen])

  const close = () => setMenuOpen(false)

  return (
    <>
      {/* ── Persistent header bar ─────────────────────────── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-[background,border-color,box-shadow,backdrop-filter] duration-300 ${
          scrolled
            ? 'glass border-b border-brand-border shadow-xl shadow-black/30'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        {/* Accent top line — appears on scroll */}
        <div
          className="absolute top-0 left-0 right-0 h-px pointer-events-none transition-opacity duration-500"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgb(var(--c-accent)/0.6) 30%, rgb(var(--c-accent)/0.9) 50%, rgb(var(--c-accent)/0.6) 70%, transparent 100%)',
            opacity: scrolled ? 1 : 0,
          }}
          aria-hidden="true"
        />

        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-8">

          {/* Logo */}
          <a href="#" className="flex items-baseline gap-1 cursor-pointer group shrink-0" aria-label="Daelion Labs home">
            <span className="text-brand-text font-bold text-lg tracking-tight group-hover:text-white transition-colors">Daelion</span>
            <span className="text-brand-accent font-semibold text-xs tracking-widest2 uppercase group-hover:text-brand-accent/70 transition-colors" style={{ fontVariant: 'small-caps' }}>Labs</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className={`nav-link section-label transition-colors duration-200 ${
                  activeSection === href.slice(1)
                    ? 'text-brand-accent'
                    : 'text-brand-sub hover:text-brand-text'
                }`}
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Right controls */}
          <div className="flex items-center gap-2">
            {/* Language toggle */}
            <button
              onClick={toggle}
              aria-label={lang === 'de' ? 'Switch to English' : 'Zu Deutsch wechseln'}
              className="section-label text-brand-sub hover:text-brand-accent transition-colors duration-200 px-2 h-11 flex items-center"
              style={{ letterSpacing: '0.12em' }}
            >
              {lang === 'de' ? 'EN' : 'DE'}
            </button>
            <ThemeToggle />
            <MagneticButton
              as="button"
              onClick={openModal}
              aria-label={t('nav_cta')}
              maxPx={7}
              className="btn-shimmer btn-purple text-sm font-semibold text-white bg-brand-accent px-5 cursor-pointer hidden sm:inline-flex items-center"
              style={{ borderRadius: 0, minHeight: '44px' }}
            >
              <span className="btn-inner">{t('nav_cta')}</span>
            </MagneticButton>

            {/* Hamburger — 44×44 tap target */}
            <button
              className="md:hidden flex flex-col justify-center items-center w-11 h-11 gap-1.5 text-brand-sub hover:text-brand-text transition-colors"
              aria-label={menuOpen ? t('nav_menu_close') : t('nav_menu_open')}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              onClick={() => setMenuOpen(v => !v)}
            >
              <span className={`block h-px w-5 bg-current transition-transform duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-[5px]' : ''}`} />
              <span className={`block h-px w-5 bg-current transition-[opacity,transform] duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
              <span className={`block h-px w-5 bg-current transition-transform duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-[5px]' : ''}`} />
            </button>
          </div>
        </div>
      </header>

      {/* ── Full-screen overlay (mobile only) ─────────────── */}
      <div
        id="mobile-nav"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation"
        className="fixed inset-0 z-[100] flex flex-col md:hidden"
        style={{
          background: 'var(--color-bg)',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'auto' : 'none',
          transition: 'opacity 0.25s ease',
        }}
      >
        {/* Overlay top bar */}
        <div className="h-16 shrink-0 flex items-center justify-between px-6 border-b border-brand-border">
          <a href="#" onClick={close} className="flex items-baseline gap-1" aria-label="Daelion Labs home">
            <span className="text-brand-text font-bold text-lg tracking-tight">Daelion</span>
            <span className="text-brand-accent font-semibold text-xs tracking-widest2 uppercase" style={{ fontVariant: 'small-caps' }}>Labs</span>
          </a>
          <button
            className="flex items-center justify-center w-11 h-11 text-brand-sub"
            aria-label={t('nav_menu_close')}
            onClick={close}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Nav links — large, staggered reveal */}
        <nav className="flex-1 flex flex-col justify-center px-6 overflow-hidden" aria-label="Mobile navigation">
          {navLinks.map(({ label, href }, i) => (
            <a
              key={href}
              href={href}
              onClick={close}
              className="group flex items-center justify-between py-5 border-b border-brand-border"
              style={{
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? 'translateY(0)' : 'translateY(14px)',
                transition: `opacity 0.4s ease ${0.1 + i * 0.07}s, transform 0.45s cubic-bezier(0.22,1,0.36,1) ${0.1 + i * 0.07}s`,
              }}
            >
              <span
                className={`font-display font-bold leading-none transition-colors duration-150 ${
                  activeSection === href.slice(1) ? 'text-brand-accent' : 'text-brand-text group-hover:text-brand-accent'
                }`}
                style={{ fontSize: 'clamp(2rem, 10vw, 3.2rem)' }}
              >
                {label}
              </span>
              <span className="section-label text-brand-sub/30 group-hover:text-brand-accent/60 transition-colors">
                0{i + 1}
              </span>
            </a>
          ))}

          {/* CTA — MagneticButton handles desktop hover; on mobile the menu
               overlay is touch-only so magnetic is automatically disabled */}
          <MagneticButton
            as="button"
            onClick={() => { openModal(); close() }}
            aria-label={t('nav_cta')}
            className="mt-8 text-white font-semibold text-sm inline-flex items-center justify-center"
            style={{
              borderRadius: 0,
              minHeight: '52px',
              background: '#07050F',
              color: '#fff',
              border: '1px solid rgba(139,92,246,0.35)',
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? 'translateY(0)' : 'translateY(14px)',
              transition: `opacity 0.4s ease 0.35s, transform 0.45s cubic-bezier(0.22,1,0.36,1) 0.35s`,
            }}
          >
            <span className="btn-inner">{t('nav_cta')} <span className="btn-arrow">→</span></span>
          </MagneticButton>
        </nav>

        {/* Bottom info */}
        <div
          className="shrink-0 px-6 py-6 border-t border-brand-border"
          style={{
            opacity: menuOpen ? 1 : 0,
            transition: 'opacity 0.4s ease 0.42s',
          }}
        >
          <p className="section-label text-brand-sub/40">hello@daelionlabs.com</p>
        </div>
      </div>
    </>
  )
}
