/**
 * prerender.js — runs after `vite build` to generate static HTML for each route.
 *
 * Uses Vite's SSR module loader to render the React app server-side,
 * then injects the rendered HTML into the built index.html template.
 *
 * Output structure:
 *   dist/index.html              ← homepage
 *   dist/impressum/index.html    ← /impressum
 *   dist/datenschutz/index.html  ← /datenschutz
 */

import { createServer } from 'vite'
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')

const routes = ['/', '/impressum', '/datenschutz']

async function prerender() {
  console.log('\n🔧 Prerendering routes...')

  const vite = await createServer({
    root,
    server: { middlewareMode: true },
    appType: 'custom',
    logLevel: 'error',
    // Use browser conditions so packages resolve their browser builds during SSR.
    // Avoids Node/browser export-condition mismatches (e.g. react-router-dom, lenis).
    resolve: {
      conditions: ['browser', 'module', 'import', 'default'],
    },
  })

  try {
    // Load the SSR render function via Vite (handles JSX transform + aliases)
    const { render } = await vite.ssrLoadModule('/src/entry-server.jsx')

    // Read the built HTML template
    const template = readFileSync(resolve(root, 'dist/index.html'), 'utf-8')

    for (const route of routes) {
      let appHtml = ''
      try {
        appHtml = render(route)
      } catch (err) {
        console.warn(`  ⚠ SSR render failed for ${route}, falling back to shell:`, err.message)
      }

      const html = template.replace(
        '<div id="root"></div>',
        `<div id="root">${appHtml}</div>`
      )

      const filePath =
        route === '/'
          ? resolve(root, 'dist/index.html')
          : resolve(root, `dist${route}/index.html`)

      mkdirSync(dirname(filePath), { recursive: true })
      writeFileSync(filePath, html)
      console.log(`  ✓ ${route}`)
    }

    console.log('✅ Prerender complete.\n')
  } finally {
    await vite.close()
  }
}

prerender().catch((err) => {
  console.error('Prerender error:', err)
  process.exit(1)
})
