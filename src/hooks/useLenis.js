import { useEffect, useRef } from 'react'
import Lenis from 'lenis'

/**
 * Initialises Lenis smooth scroll and returns the instance via ref.
 *
 * @param {object} opts
 *   onScroll — callback fired on every lerped scroll tick ({ scroll, progress, velocity })
 *
 * Anchor-link handling: intercepts clicks on <a href="#..."> and delegates
 * to lenis.scrollTo so the smooth easing applies to in-page jumps too.
 *
 * SSR-safe: the effect only runs in a browser context.
 */
export function useLenis({ onScroll } = {}) {
  const lenisRef = useRef(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
      infinite: false,
    })

    lenisRef.current = lenis

    // Fire consumer callback on every scroll tick
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
