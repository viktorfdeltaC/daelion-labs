import { useEffect, useState } from 'react'
import { useMagnet } from '../hooks/useMagnet'

const navLinks = [
  { label: 'Leistungen', href: '#solutions' },
  { label: 'Prozess', href: '#process' },
  { label: 'Preise', href: '#pricing' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const ctaRef = useMagnet({ strength: 0.25, ease: 0.1 })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on scroll
  useEffect(() => {
    if (menuOpen && scrolled) setMenuOpen(false)
  }, [scrolled, menuOpen])

  const handleLinkClick = () => setMenuOpen(false)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-[background,border-color,box-shadow,backdrop-filter] duration-300 ${
        scrolled
          ? 'glass border-b border-white/[0.06] shadow-xl shadow-black/30'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      {/* Purple accent line at top — appears on scroll */}
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none transition-opacity duration-500"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(139,92,246,0.6) 30%, rgba(139,92,246,0.9) 50%, rgba(139,92,246,0.6) 70%, transparent 100%)',
          opacity: scrolled ? 1 : 0,
        }}
        aria-hidden="true"
      />
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-8">

        {/* Logo */}
        <a
          href="#"
          className="flex items-baseline gap-1 cursor-pointer group shrink-0"
          aria-label="Daelion Labs home"
        >
          <span className="text-brand-text font-bold text-lg tracking-tight group-hover:text-white transition-colors">
            Daelion
          </span>
          <span
            className="text-brand-accent font-semibold text-xs tracking-widest2 uppercase group-hover:text-violet-300 transition-colors"
            style={{ fontVariant: 'small-caps' }}
          >
            Labs
          </span>
        </a>

        {/* Desktop nav links */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="nav-link section-label text-brand-sub hover:text-brand-text transition-colors duration-200"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <a
            ref={ctaRef}
            href="#contact"
            className="btn-shimmer btn-purple text-sm font-semibold text-white bg-brand-accent hover:bg-violet-500 px-5 py-2.5 cursor-pointer hidden sm:inline-flex items-center"
            style={{ borderRadius: 0, minHeight: '44px', willChange: 'transform' }}
          >
            <span className="btn-inner">Projekt starten</span>
          </a>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-11 h-11 gap-1.5 text-brand-sub hover:text-brand-text transition-colors"
            aria-label={menuOpen ? 'Menu schließen' : 'Menu öffnen'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span
              className={`block h-px w-5 bg-current transition-[transform] duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-[5px]' : ''}`}
            />
            <span
              className={`block h-px w-5 bg-current transition-[opacity,transform] duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`}
            />
            <span
              className={`block h-px w-5 bg-current transition-[transform] duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-[5px]' : ''}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden glass border-t border-white/[0.06] overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
          menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="px-6 py-6 flex flex-col gap-1" aria-label="Mobile navigation">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={handleLinkClick}
              className="font-display font-bold text-2xl text-brand-sub hover:text-white transition-colors py-2"
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={handleLinkClick}
            className="btn-shimmer btn-purple mt-4 text-sm font-semibold text-white bg-brand-accent hover:bg-violet-500 px-5 py-3 text-center inline-block"
            style={{ borderRadius: 0 }}
          >
            <span className="btn-inner">Projekt starten</span>
          </a>
        </nav>
      </div>
    </header>
  )
}
