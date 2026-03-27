import { useEffect, useRef } from 'react'

/**
 * useMagnet — makes an element magnetically attract to the cursor when nearby.
 *
 * Movement is pixel-capped (maxPx) and direction-normalised so the button
 * always moves the same distance regardless of where inside the activation
 * radius the cursor sits.  Lerp easing gives smooth follow; a boosted ease
 * factor on leave produces a snappier spring-back.
 *
 * Feature detection (ALL must pass to activate):
 *   ✓ (hover: hover) and (pointer: fine)  — desktop mouse / trackpad
 *   ✓ !prefers-reduced-motion             — user opted in to motion
 *
 * Touch / coarse-pointer devices are explicitly excluded; the element stays
 * perfectly centred and receives the tap-scale via CSS :active instead.
 *
 * @param {object} opts
 *   maxPx    — maximum translation in px (default 10, split ±X and ±Y)
 *   ease     — lerp smoothness while following (default 0.15)
 *   onEnter  — called when cursor enters the activation radius
 *   onLeave  — called when cursor leaves the activation radius
 *
 * Returns a ref to attach to the target element.
 */
export function useMagnet({
  maxPx   = 10,
  ease    = 0.15,
  onEnter = null,
  onLeave = null,
} = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let targetX  = 0, targetY  = 0
    let currentX = 0, currentY = 0
    let isNear   = false
    let isLeaving = false
    let raf

    const onMove = (e) => {
      const rect = el.getBoundingClientRect()
      const cx   = rect.left + rect.width  / 2
      const cy   = rect.top  + rect.height / 2
      const dx   = e.clientX - cx
      const dy   = e.clientY - cy
      const dist = Math.sqrt(dx * dx + dy * dy)
      // Activation radius: 1.5× the larger dimension so the magnet "reaches out"
      const radius = Math.max(rect.width, rect.height) * 1.5

      if (dist < radius) {
        if (!isNear) {
          isNear    = true
          isLeaving = false
          onEnter?.()
        }
        // Ease-out falloff: full strength at center, 0 at radius edge
        const falloff = Math.pow(1 - dist / radius, 1.1)
        const safeDist = Math.max(dist, 1)
        // Normalise direction then scale by falloff × maxPx
        targetX = (dx / safeDist) * falloff * maxPx
        targetY = (dy / safeDist) * falloff * maxPx
      } else {
        if (isNear) {
          isNear    = false
          isLeaving = true
          onLeave?.()
          targetX = 0
          targetY = 0
        }
      }
    }

    const tick = () => {
      // Boost lerp on return-to-centre for a snappier spring feel
      const lerpFactor = isLeaving ? Math.min(1, ease * 2.8) : ease

      currentX += (targetX - currentX) * lerpFactor
      currentY += (targetY - currentY) * lerpFactor

      const settled = Math.abs(currentX) < 0.05 && Math.abs(currentY) < 0.05

      if (settled && targetX === 0 && targetY === 0) {
        el.style.transform = 'translate(0, 0)'
        if (isLeaving) isLeaving = false
      } else {
        el.style.transform = `translate(${currentX.toFixed(2)}px, ${currentY.toFixed(2)}px)`
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
  // maxPx / ease are numbers — stable after first render, no dependency churn
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [maxPx, ease])

  return ref
}
