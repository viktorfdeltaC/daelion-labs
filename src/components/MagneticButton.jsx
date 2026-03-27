import { useState, useCallback } from 'react'
import { useMagnet } from '../hooks/useMagnet'

/**
 * MagneticButton — drop-in CTA wrapper with magnetic cursor tracking,
 * arrow micro-interaction, glow shadow, and full accessibility support.
 *
 * ── How the magnet works ───────────────────────────────────────────────────
 *   Desktop (hover:hover + pointer:fine):
 *     • Element follows cursor up to ±maxPx pixels (default 10px)
 *     • Lerp easing (default 0.15) for smooth follow
 *     • Spring-back on leave: boosted lerp for snappy return to centre
 *   Touch / coarse-pointer / prefers-reduced-motion:
 *     • Magnetic disabled — CSS :active gives tap-scale (0.98) instead
 *
 * ── Visual states ──────────────────────────────────────────────────────────
 *   Hover  → .btn-arrow slides 4px right, opacity 0.72 → 1
 *          → glow shadow composited on top of existing btn-purple / btn-glass
 *   Focus  → 2px accent outline via :focus-visible (CSS, no JS needed)
 *   Active → scale(0.98) on touch via CSS :active
 *
 * ── Usage (replace existing <a> CTAs) ─────────────────────────────────────
 *   // Primary CTA (replaces <a className="btn-shimmer btn-purple …">)
 *   <MagneticButton as="a" href="#contact" className="btn-shimmer btn-purple …">
 *     <span className="btn-inner">
 *       Projekt starten <span className="btn-arrow">→</span>
 *     </span>
 *   </MagneticButton>
 *
 *   // Glass CTA
 *   <MagneticButton as="a" href="mailto:…" className="btn-shimmer btn-glass …">
 *     <span className="btn-inner">
 *       Lösung anfragen <span className="btn-arrow">→</span>
 *     </span>
 *   </MagneticButton>
 *
 *   // Standalone button
 *   <MagneticButton aria-label="Jetzt starten">Starten</MagneticButton>
 *
 * ── Global upgrade pattern ─────────────────────────────────────────────────
 *   To upgrade every CTA site-wide without touching JSX, add [data-magnetic]
 *   to any <a> or <button> and call initMagneticCTAs() once in App.jsx:
 *
 *   // In a component:
 *   <a data-magnetic href="#contact" className="btn-shimmer btn-purple …">…</a>
 *
 *   // In App.jsx useEffect:
 *   import { initMagneticCTAs } from '../hooks/useMagnet'
 *   useEffect(() => initMagneticCTAs(), [])
 *
 *   // useMagnet.js exports:
 *   export function initMagneticCTAs(selector = '[data-magnetic]') {
 *     const els = document.querySelectorAll(selector)
 *     const cleanups = [...els].map(el => {
 *       const ref = { current: el }
 *       // Manually replicate useMagnet logic without React hooks
 *     })
 *     return () => cleanups.forEach(fn => fn())
 *   }
 *   (See useMagnet.js for the full implementation of initMagneticCTAs.)
 *
 * ── Props ──────────────────────────────────────────────────────────────────
 *   as        — rendered element ('a' | 'button' | any tag)  default: 'button'
 *   maxPx     — max translation in px                        default: 10
 *   ease      — lerp factor while following cursor           default: 0.15
 *   className — forwarded; add btn-shimmer + btn-purple/btn-glass here
 *   style     — forwarded; willChange:transform set automatically
 *   ...rest   — href, onClick, aria-label, data-*, etc. forwarded
 */
export default function MagneticButton({
  children,
  as: Tag    = 'button',
  maxPx      = 10,
  ease       = 0.15,
  className  = '',
  style      = {},
  ...rest
}) {
  const [hovered, setHovered] = useState(false)

  const handleEnter = useCallback(() => setHovered(true),  [])
  const handleLeave = useCallback(() => setHovered(false), [])

  const ref = useMagnet({ maxPx, ease, onEnter: handleEnter, onLeave: handleLeave })

  return (
    <Tag
      ref={ref}
      className={['magnetic-btn', className].filter(Boolean).join(' ')}
      style={{ willChange: 'transform', ...style }}
      data-hovered={hovered || undefined}
      {...rest}
    >
      {children}
    </Tag>
  )
}
