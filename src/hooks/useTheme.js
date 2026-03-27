import { useState, useEffect } from 'react'

/**
 * useTheme — manages dark/light mode with:
 *   - auto-detect via prefers-color-scheme on first visit
 *   - localStorage persistence across sessions
 *   - sets data-theme="dark|light" on <html>
 *   - adds .theme-transitioning for 350ms to enable smooth CSS transitions
 *
 * Returns [theme, toggleTheme]
 */
export function useTheme() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'dark'
    const saved = localStorage.getItem('theme')
    if (saved === 'dark' || saved === 'light') return saved
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
  })

  // Apply to DOM immediately (also on first render)
  useEffect(() => {
    const root = document.documentElement
    root.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setTheme(t => t === 'dark' ? 'light' : 'dark')
      return
    }
    // Enable transitions only during toggle to avoid flash on load
    const root = document.documentElement
    root.classList.add('theme-transitioning')
    setTheme(t => t === 'dark' ? 'light' : 'dark')
    const id = setTimeout(() => root.classList.remove('theme-transitioning'), 400)
    return () => clearTimeout(id)
  }

  return [theme, toggleTheme]
}
