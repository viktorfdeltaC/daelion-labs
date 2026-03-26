import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Problem from './components/Problem'
import WhatWeBuild from './components/WhatWeBuild'
import HowItWorks from './components/HowItWorks'
import Pricing from './components/Pricing'
import CTASection from './components/CTASection'
import Footer from './components/Footer'

function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement
      const scrollTop = window.scrollY || doc.scrollTop
      const scrollHeight = doc.scrollHeight - doc.clientHeight
      setProgress(scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: '2px',
        width: `${progress}%`,
        background: 'linear-gradient(90deg, #7C3AED, #8B5CF6, #A78BFA)',
        zIndex: 9999,
        transition: 'width 0.08s linear',
        boxShadow: '0 0 8px rgba(139,92,246,0.8)',
      }}
    />
  )
}

export default function App() {
  return (
    <div className="bg-brand-bg min-h-screen font-sans antialiased relative">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <WhatWeBuild />
        <HowItWorks />
        <Pricing />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
