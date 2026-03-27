import { useNetworkOptimize } from './hooks/useNetworkOptimize'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Problem from './components/Problem'
import WhatWeBuild from './components/WhatWeBuild'
import WinsSection from './components/WinsSection'
import HowItWorks from './components/HowItWorks'
import Pricing from './components/Pricing'
import CTASection from './components/CTASection'
import Footer from './components/Footer'
import Marquee from './components/Marquee'
import Cursor from './components/Cursor'
import { useLenis } from './hooks/useLenis'

// Fade-out timer — lives outside React state to avoid triggering re-renders
let _progressFadeTimer = null

export default function App() {
  // Disable GPU-heavy visuals on slow connections / data-saver mode
  useNetworkOptimize()

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
      <main>
        <Hero />
        <Marquee />
        <Problem />
        <Marquee />
        <WhatWeBuild />
        <WinsSection />
        <HowItWorks />
        <Pricing />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
