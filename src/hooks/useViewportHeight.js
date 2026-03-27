import { useEffect } from 'react'

/**
 * useViewportHeight — keeps --vh in sync with the real inner height.
 *
 * Solves the classic iOS Safari "100vh includes the browser chrome" bug.
 * Sets --vh to 1% of window.innerHeight so `calc(var(--vh) * 100)` always
 * equals the visible viewport, even when the keyboard is open or the
 * address bar is shown/hidden.
 *
 * Used as a fallback alongside 100dvh:
 *   @supports not (height: 100dvh) {
 *     .full-height { height: calc(var(--vh, 1vh) * 100); }
 *   }
 *
 * Usage — call once in App.jsx:
 *   import { useViewportHeight } from './hooks/useViewportHeight'
 *   export default function App() {
 *     useViewportHeight()
 *     …
 *   }
 */
export function useViewportHeight() {
  useEffect(() => {
    const setVH = () => {
      const vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    }

    setVH()
    window.addEventListener('resize', setVH)
    return () => window.removeEventListener('resize', setVH)
  }, [])
}
