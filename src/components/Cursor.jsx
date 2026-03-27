import { useEffect, useRef } from 'react'

/**
 * Cursor — label-style agency cursor.
 *
 * Two layers:
 *   dot   — 4px, snaps instantly, mix-blend-mode:difference
 *   ring  — 32px at rest, expands to 80px on hover and fills with accent
 *           colour; a contextual label fades in inside the ring.
 *
 * Label logic (priority order):
 *   1. [data-cursor="CUSTOM"]   — explicit override on any element
 *   2. .magnetic-btn / .btn-purple / .btn-glass → "STARTEN"
 *   3. mailto: links            → "ANFRAGEN"
 *   4. same-page #anchor links  → "MEHR"
 *   5. external / other <a>     → "ÖFFNEN"
 *   6. <button>                 → "KLICK"
 *
 * Custom label example:
 *   <a href="/work" data-cursor="ANSEHEN">Case study</a>
 *
 * Feature detection (all must pass):
 *   ✓ (hover: hover)   — device supports hover
 *   ✓ (pointer: fine)  — mouse / trackpad, not touch
 */

function getLabel(el) {
  const target = el?.closest('[data-cursor], a, button, [role="button"]')
  if (!target) return ''

  // Explicit override
  if (target.dataset.cursor) return target.dataset.cursor

  // CTA / magnetic buttons
  if (target.matches('.magnetic-btn, .btn-purple, .btn-glass')) return 'STARTEN'

  // mailto
  if (target.getAttribute('href')?.startsWith('mailto:')) return 'ANFRAGEN'

  // Same-page anchors
  if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) return 'MEHR'

  // External / other links
  if (target.tagName === 'A') return 'ÖFFNEN'

  return 'KLICK'
}

export default function Cursor() {
  const dotRef   = useRef(null)
  const ringRef  = useRef(null)
  const labelRef = useRef(null)

  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return
    document.body.classList.add('has-custom-cursor')

    const pos = { mx: -200, my: -200, rx: -200, ry: -200 }
    let raf, lastTs = 0

    const onMove = (e) => { pos.mx = e.clientX; pos.my = e.clientY }

    const onOver = (e) => {
      const label = getLabel(e.target)
      if (label) {
        ringRef.current?.classList.add('is-hovering')
        dotRef.current?.classList.add('is-hidden')
        if (labelRef.current) labelRef.current.textContent = label
      }
    }

    const onOut = (e) => {
      if (!e.target.closest('[data-cursor], a, button, [role="button"]')) return
      // Only clear when leaving to a non-interactive element
      if (!e.relatedTarget?.closest('[data-cursor], a, button, [role="button"]')) {
        ringRef.current?.classList.remove('is-hovering')
        dotRef.current?.classList.remove('is-hidden')
        if (labelRef.current) labelRef.current.textContent = ''
      }
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout', onOut)

    // Time-based lerp — same visual speed at 60 and 120 Hz
    const tick = (ts) => {
      const dt = lastTs > 0 ? Math.min((ts - lastTs) / 1000, 0.05) : 0.016
      lastTs = ts
      const f = 1 - Math.exp(-9 * dt)

      pos.rx += (pos.mx - pos.rx) * f
      pos.ry += (pos.my - pos.ry) * f

      dotRef.current?.style.setProperty(
        'transform',
        `translate3d(${pos.mx}px,${pos.my}px,0) translate(-50%,-50%)`
      )
      ringRef.current?.style.setProperty(
        'transform',
        `translate3d(${pos.rx}px,${pos.ry}px,0) translate(-50%,-50%)`
      )

      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
      document.body.classList.remove('has-custom-cursor')
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true">
        <span ref={labelRef} className="cursor-label" />
      </div>
    </>
  )
}
