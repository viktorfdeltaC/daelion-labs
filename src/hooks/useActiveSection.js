import { useState, useEffect } from 'react'

/**
 * Tracks which section from a list of IDs is currently in the "active zone"
 * of the viewport (configured via rootMargin).
 *
 * @param {string[]} ids — section element IDs to observe, in document order
 * @returns {string} activeId — the ID of the currently active section
 */
export function useActiveSection(ids) {
  const [active, setActive] = useState('')

  useEffect(() => {
    const visible = new Set()

    const update = () => {
      // Pick the first (topmost) visible section in document order
      for (const id of ids) {
        if (visible.has(id)) { setActive(id); return }
      }
      setActive('')
    }

    const observers = ids.map(id => {
      const el = document.getElementById(id)
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) visible.add(id)
          else visible.delete(id)
          update()
        },
        // Section is "active" when it occupies the middle 40% of the viewport
        { rootMargin: '-15% 0px -55% 0px' }
      )
      obs.observe(el)
      return obs
    })

    return () => observers.forEach(obs => obs?.disconnect())
  }, []) // ids array is stable (defined outside component)

  return active
}
