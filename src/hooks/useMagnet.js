import { useEffect, useRef } from 'react'

/**
 * Makes an element magnetically attract to the cursor when nearby.
 * Only activates on pointer-fine devices (desktop).
 *
 * @param {object} opts
 *   strength — how far the element moves (0–1)
 *   ease     — lerp factor per frame (lower = smoother/slower)
 */
export function useMagnet({ strength = 0.32, ease = 0.12 } = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let targetX = 0, targetY = 0
    let currentX = 0, currentY = 0
    let raf

    const onMove = (e) => {
      const rect = el.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const dx = e.clientX - cx
      const dy = e.clientY - cy
      const dist = Math.sqrt(dx * dx + dy * dy)
      const threshold = Math.max(rect.width, rect.height) * 1.4

      if (dist < threshold) {
        const factor = (1 - dist / threshold) * strength
        targetX = dx * factor
        targetY = dy * factor
      } else {
        targetX = 0
        targetY = 0
      }
    }

    const tick = () => {
      currentX += (targetX - currentX) * ease
      currentY += (targetY - currentY) * ease

      if (Math.abs(currentX) > 0.05 || Math.abs(currentY) > 0.05) {
        el.style.transform = `translate(${currentX}px, ${currentY}px)`
      } else if (targetX === 0 && targetY === 0) {
        el.style.transform = 'translate(0, 0)'
      }

      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    window.addEventListener('mousemove', onMove, { passive: true })
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMove)
      el.style.transform = ''
    }
  }, [strength, ease])

  return ref
}
