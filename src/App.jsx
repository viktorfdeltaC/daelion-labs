import { useEffect, useRef } from 'react'
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

function ScrollProgress() {
  const barRef = useRef(null)
  useEffect(() => {
    const bar = barRef.current
    if (!bar) return
    const onScroll = () => {
      const doc = document.documentElement
      const scrollHeight = doc.scrollHeight - doc.clientHeight
      const pct = scrollHeight > 0 ? (window.scrollY / scrollHeight) * 100 : 0
      bar.style.width = `${pct}%`
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

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
        background: 'linear-gradient(90deg, #7C3AED, #8B5CF6, #A78BFA)',
        zIndex: 9999,
        boxShadow: '0 0 8px rgba(139,92,246,0.8)',
      }}
    />
  )
}

export default function App() {
  return (
    <div className="bg-brand-bg min-h-screen font-sans antialiased relative">
      <Cursor />
      <div className="grain-overlay" aria-hidden="true" />
      <ScrollProgress />
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
