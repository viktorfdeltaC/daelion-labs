import { useEffect, useRef } from 'react'
import Lenis from 'lenis'

/**
 * Initialises Lenis smooth scroll and returns the instance via ref.
 *
 * @param {object} opts
 *   onScroll — callback fired on every scroll tick ({ scroll, progress, velocity })
 *              Called even when Lenis is disabled (native scroll fallback).
 *
 * Disabled automatically when:
 *   • prefers-reduced-motion: reduce  — respects OS accessibility setting
 *   • (pointer: coarse)               — touch-primary devices (phones/tablets)
 *     Native inertia scroll feels better here; Lenis would fight the browser.
 *
 * Anchor-link handling: intercepts clicks on <a href="#..."> and delegates
 * to lenis.scrollTo so the smooth easing applies to in-page jumps.
 *
 * SSR-safe: the effect only runs in a browser context.
 */
export function useLenis({ onScroll } = {}) {
  const lenisRef = useRef(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    // ── Guard: reduced motion or touch device ──────────────
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isTouchPrimary = window.matchMedia('(pointer: coarse)').matches

    if (prefersReduced || isTouchPrimary) {
      // Still drive the progress bar via native scroll events
      if (!onScroll) return
      const handleNative = () => {
        const max = document.documentElement.scrollHeight - window.innerHeight
        const progress = max > 0 ? window.scrollY / max : 0
        onScroll({ progress, scroll: window.scrollY, velocity: 0 })
      }
      // Fire once immediately so bar initialises at current position
      handleNative()
      window.addEventListener('scroll', handleNative, { passive: true })
      return () => window.removeEventListener('scroll', handleNative)
    }

    // ── Lenis smooth scroll ────────────────────────────────
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
      infinite: false,
    })

    lenisRef.current = lenis

    if (onScroll) lenis.on('scroll', onScroll)

    // Anchor-link interception — smooth scroll to on-page targets
    const handleAnchorClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]')
      if (!anchor) return
      const href = anchor.getAttribute('href')
      if (!href || href === '#') return
      const target = document.querySelector(href)
      if (!target) return
      e.preventDefault()
      lenis.scrollTo(target, { offset: -64, duration: 1.2 }) // 64px = navbar height
    }
    document.addEventListener('click', handleAnchorClick)

    // Drive Lenis via requestAnimationFrame
    let raf
    const animate = (time) => {
      lenis.raf(time)
      raf = requestAnimationFrame(animate)
    }
    raf = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(raf)
      document.removeEventListener('click', handleAnchorClick)
      lenis.destroy()
      lenisRef.current = null
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return lenisRef
}
