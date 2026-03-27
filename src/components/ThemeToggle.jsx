import { useTheme } from '../hooks/useTheme'

/**
 * ThemeToggle — Sun/Moon icon button with cross-fade animation.
 * Self-contained: reads and writes theme via useTheme internally.
 * Accessible: aria-label updates per current state, keyboard-navigable.
 */
export default function ThemeToggle({ className = '' }) {
  const [theme, toggleTheme] = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Zu hellem Modus wechseln' : 'Zu dunklem Modus wechseln'}
      className={`relative flex items-center justify-center w-9 h-9 rounded-none text-brand-sub hover:text-brand-text transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-brand-bg ${className}`}
      style={{ overflow: 'hidden' }}
    >
      {/* Sun icon — visible in dark mode (click → go light) */}
      <span
        aria-hidden="true"
        style={{
          position: 'absolute',
          opacity: isDark ? 1 : 0,
          transform: isDark ? 'translateY(0) rotate(0deg)' : 'translateY(-8px) rotate(-30deg)',
          transition: 'opacity 0.25s ease, transform 0.3s cubic-bezier(0.22,1,0.36,1)',
        }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
        </svg>
      </span>

      {/* Moon icon — visible in light mode (click → go dark) */}
      <span
        aria-hidden="true"
        style={{
          position: 'absolute',
          opacity: isDark ? 0 : 1,
          transform: isDark ? 'translateY(8px) rotate(30deg)' : 'translateY(0) rotate(0deg)',
          transition: 'opacity 0.25s ease, transform 0.3s cubic-bezier(0.22,1,0.36,1)',
        }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      </span>
    </button>
  )
}
