import Hero from '../components/Hero'
import Problem from '../components/Problem'
import WhatWeBuild from '../components/WhatWeBuild'
import WinsSection from '../components/WinsSection'
import HowItWorks from '../components/HowItWorks'
import Pricing from '../components/Pricing'
import CTASection from '../components/CTASection'
import Marquee from '../components/Marquee'

export default function Landing() {
  return (
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
  )
}
