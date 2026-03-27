import { useEffect, useState } from 'react'

/**
 * useVisualViewport — tracks the soft keyboard height via VisualViewport API.
 *
 * When the soft keyboard opens on mobile, window.visualViewport.height shrinks
 * while window.innerHeight stays fixed.  The difference is the keyboard height.
 *
 * Sets --keyboard-height CSS variable on <html> so layouts can react without
 * JS prop-drilling:
 *   padding-bottom: calc(var(--keyboard-height, 0px) + 16px);
 *
 * Returns the keyboard height in px (0 when keyboard is closed).
 *
 * Usage:
 *   const keyboardHeight = useVisualViewport()
 *   // or just call it for the side-effect (CSS variable only):
 *   useVisualViewport()
 */
export function useVisualViewport() {
  const [keyboardHeight, setKeyboardHeight] = useState(0)

  useEffect(() => {
    if (!window.visualViewport) return

    const update = () => {
      const offset = Math.max(0, window.innerHeight - window.visualViewport.height)
      setKeyboardHeight(offset)
      document.documentElement.style.setProperty('--keyboard-height', `${offset}px`)
    }

    window.visualViewport.addEventListener('resize', update)
    update()

    return () => window.visualViewport.removeEventListener('resize', update)
  }, [])

  return keyboardHeight
}
