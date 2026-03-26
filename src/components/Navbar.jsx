import { useEffect, useState } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? 'glass border-b border-white/[0.06] shadow-xl shadow-black/30'
          : 'bg-transparent border-b border-transparent'
      }`}
      style={{ transitionDuration: '350ms' }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#"
          className="flex items-baseline gap-1 cursor-pointer group"
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

        <a
          href="#contact"
          className="btn-shimmer text-sm font-semibold text-white bg-brand-accent px-5 py-2.5 hover:bg-violet-500 transition-colors duration-200 cursor-pointer"
          style={{
            borderRadius: 0,
            boxShadow: scrolled ? '0 0 20px rgba(139,92,246,0.3)' : 'none',
            transition: 'background 0.2s, box-shadow 0.3s',
          }}
        >
          Projekt starten
        </a>
      </div>
    </header>
  )
}
