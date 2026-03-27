import { useRef, useEffect } from 'react'

const items = [
  'SOLUTION ARCHITECTURE',
  'WIR BAUEN LÖSUNGEN',
  'INDIVIDUAL SYSTEMS',
  'PRECISION EXECUTION',
  'CROSS-INDUSTRY',
  'WORLDWIDE',
  'DAELION LABS',
]

const doubled = [...items, ...items]

/**
 * Marquee — horizontally scrolling text band with optional parallax.
 *
 * Parallax: the band translates ±maxParallaxPx on the Y axis as the
 * user scrolls, creating a subtle depth layer effect.  Uses
 * getBoundingClientRect() so it reads the VISUAL position — compatible
 * with Lenis transforms.  Disabled on prefers-reduced-motion.
 *
 * Props:
 *   inverted      — swap colour scheme (accent background, white text)
 *   parallax      — enable Y parallax (default true)
 *   maxParallaxPx — maximum vertical translation in pixels (default 18)
 */
export default function Marquee({ inverted = false, parallax = true, maxParallaxPx = 18 }) {
  const outerRef = useRef(null)

  useEffect(() => {
    if (!parallax) return
    if (typeof window === 'undefined') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const el = outerRef.current
    if (!el) return

    let raf
    let targetY  = 0
    let currentY = 0

    const onScroll = () => {
      const rect = el.getBoundingClientRect()
      // How far the band's center is from the viewport center (–1 … +1)
      const relativePos = (rect.top + rect.height / 2 - window.innerHeight / 2) / window.innerHeight
      targetY = relativePos * maxParallaxPx
    }

    const tick = () => {
      // Lerp for smooth motion — ease = 0.08 (very gentle)
      currentY += (targetY - currentY) * 0.08
      if (Math.abs(currentY) > 0.05) {
        el.style.transform = `translateY(${currentY.toFixed(2)}px)`
      }
      raf = requestAnimationFrame(tick)
    }

    // Seed initial position
    onScroll()
    raf = requestAnimationFrame(tick)

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      el.style.transform = ''
    }
  }, [parallax, maxParallaxPx])

  return (
    <div
      ref={outerRef}
      className={`relative overflow-hidden border-y py-3.5 ${
        inverted
          ? 'border-white/10 bg-brand-accent'
          : 'border-brand-border bg-brand-bg'
      }`}
      style={{
        maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
        willChange: parallax ? 'transform' : undefined,
      }}
      aria-hidden="true"
    >
      <div
        className="flex whitespace-nowrap"
        style={{ animation: 'marquee 28s linear infinite' }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className={`inline-flex items-center shrink-0 px-6 font-mono text-[0.65rem] font-normal tracking-widest uppercase ${
              inverted ? 'text-white/70' : 'text-brand-sub'
            }`}
          >
            <span className={`mr-5 text-base leading-none ${inverted ? 'text-white/40' : 'text-brand-accent/60'}`}>✦</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
