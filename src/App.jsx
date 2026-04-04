import { useNetworkOptimize } from './hooks/useNetworkOptimize'
import { useViewportHeight } from './hooks/useViewportHeight'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Cursor from './components/Cursor'
import Landing from './pages/Landing'
import Impressum from './pages/Impressum'
import Datenschutz from './pages/Datenschutz'
import { useLenis } from './hooks/useLenis'
import { ContactModalProvider } from './contexts/ContactModalContext'

// Fade-out timer — lives outside React state to avoid triggering re-renders
let _progressFadeTimer = null

export default function App() {
  // Disable GPU-heavy visuals on slow connections / data-saver mode
  useNetworkOptimize()
  // Keep --vh in sync for iOS Safari @supports fallback
  useViewportHeight()

  // Lenis: smooth scroll on desktop, native scroll fallback on
  // touch-primary devices and when prefers-reduced-motion is set.
  // The onScroll callback updates the progress bar directly on the DOM
  // (no setState) so it never causes a React re-render.
  useLenis({
    onScroll: ({ progress }) => {
      const bar = document.querySelector('[data-scroll-progress]')
      if (!bar) return

      bar.style.width = `${progress * 100}%`

      // Fade out after reaching the bottom; restore when scrolling back up
      if (progress >= 0.999) {
        clearTimeout(_progressFadeTimer)
        _progressFadeTimer = setTimeout(() => bar.classList.add('done'), 300)
      } else {
        clearTimeout(_progressFadeTimer)
        bar.classList.remove('done')
      }
    },
  })

  return (
    <ContactModalProvider>
    <div className="bg-brand-bg min-h-screen font-sans antialiased relative">
      <Cursor />
      <div className="grain-overlay" aria-hidden="true" />

      {/*
        Scroll progress bar
        Styled via .scroll-progress + .done in index.css
        Width driven by useLenis onScroll — zero re-renders
      */}
      <div
        data-scroll-progress
        className="scroll-progress"
        aria-hidden="true"
      />

      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
      </Routes>
      <Footer />
    </div>
    </ContactModalProvider>
  )
}
