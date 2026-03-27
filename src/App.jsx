import { useRef } from 'react'
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

/**
 * Scroll progress bar — driven by Lenis scroll events so it reflects the
 * smoothed position, not the raw browser scroll.
 */
function ScrollProgress() {
  const barRef = useRef(null)

  // onScroll callback is passed into useLenis from App so we share the instance
  // This component just exposes its ref; wiring happens in App via prop
  return (
    <div
      ref={barRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: '2px',
        width: '0%',
        background: 'linear-gradient(90deg, var(--color-accent-dim), var(--color-accent), #A78BFA)',
        zIndex: 9999,
        boxShadow: '0 0 8px rgba(139,92,246,0.7)',
        pointerEvents: 'none',
      }}
    />
  )
}

export default function App() {
  const progressRef = useRef(null)

  // Lenis: smooth scroll, anchor handling, RAF loop.
  // Passes onScroll to update the progress bar from the lerped position.
  useLenis({
    onScroll: ({ progress }) => {
      // progressRef is a forwarded ref — find the bar via the DOM directly
      const bar = document.querySelector('[data-scroll-progress]')
      if (bar) bar.style.width = `${progress * 100}%`
    },
  })

  return (
    <div className="bg-brand-bg min-h-screen font-sans antialiased relative">
      <Cursor />
      <div className="grain-overlay" aria-hidden="true" />

      {/* Scroll progress — driven by Lenis onScroll callback above */}
      <div
        data-scroll-progress
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          height: '2px',
          width: '0%',
          background: 'linear-gradient(90deg, var(--color-accent-dim), var(--color-accent), #A78BFA)',
          zIndex: 9999,
          boxShadow: '0 0 8px rgba(139,92,246,0.7)',
          pointerEvents: 'none',
        }}
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
