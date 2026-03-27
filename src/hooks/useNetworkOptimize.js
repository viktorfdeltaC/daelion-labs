import { useEffect } from 'react'

/**
 * Detects slow connections via Network Information API and adds
 * class="perf-reduce" to <html> so CSS can disable expensive visuals.
 *
 * Triggers on:
 *   - navigator.connection.saveData === true  (user opted into data saver)
 *   - effectiveType === 'slow-2g' | '2g'      (measured connection is slow)
 *
 * Note: Network Information API is Chromium-only. Safari/Firefox silently
 * skip — this is an enhancement, never a requirement.
 */
export function useNetworkOptimize() {
  useEffect(() => {
    const conn =
      navigator?.connection ||
      navigator?.mozConnection ||
      navigator?.webkitConnection

    if (!conn) return

    const apply = () => {
      const slow =
        conn.saveData === true ||
        conn.effectiveType === 'slow-2g' ||
        conn.effectiveType === '2g'
      document.documentElement.classList.toggle('perf-reduce', slow)
    }

    apply()
    conn.addEventListener('change', apply)
    return () => conn.removeEventListener('change', apply)
  }, [])
}
