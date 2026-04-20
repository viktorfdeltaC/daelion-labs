import { renderToString } from 'react-dom/server'
import { MemoryRouter } from 'react-router-dom'
import App from './App'
import { LanguageProvider } from './contexts/LanguageContext'

/**
 * Server-side render entry point.
 * Called by scripts/prerender.js at build time to generate static HTML.
 * useEffect hooks (Lenis, Cursor, etc.) do NOT run here — browser-only.
 * MemoryRouter used instead of StaticRouter to avoid react-router-dom/server
 * export condition issues in Vite's SSR module loader.
 */
export function render(url) {
  return renderToString(
    <MemoryRouter initialEntries={[url]}>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </MemoryRouter>
  )
}
