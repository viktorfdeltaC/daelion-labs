import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const movingMap = {
  TOP:    'radial-gradient(20.7% 50% at 50% 0%, rgba(139,92,246,0.9) 0%, rgba(139,92,246,0) 100%)',
  LEFT:   'radial-gradient(16.6% 43.1% at 0% 50%, rgba(139,92,246,0.9) 0%, rgba(139,92,246,0) 100%)',
  BOTTOM: 'radial-gradient(20.7% 50% at 50% 100%, rgba(139,92,246,0.9) 0%, rgba(139,92,246,0) 100%)',
  RIGHT:  'radial-gradient(16.2% 41.2% at 100% 50%, rgba(139,92,246,0.9) 0%, rgba(139,92,246,0) 100%)',
}

const highlight = 'radial-gradient(75% 181% at 50% 50%, rgba(139,92,246,1) 0%, rgba(34,211,238,0.4) 60%, rgba(255,255,255,0) 100%)'

export function HoverBorderGradient({
  children,
  className = '',
  duration = 1.5,
  clockwise = true,
  as: Element = 'div',
  ...props
}) {
  const [hovered, setHovered] = useState(false)
  const [direction, setDirection] = useState('BOTTOM')

  const rotateDirection = (cur) => {
    const dirs = ['TOP', 'LEFT', 'BOTTOM', 'RIGHT']
    const idx = dirs.indexOf(cur)
    return clockwise
      ? dirs[(idx - 1 + dirs.length) % dirs.length]
      : dirs[(idx + 1) % dirs.length]
  }

  useEffect(() => {
    if (hovered) return
    const interval = setInterval(() => {
      setDirection((d) => rotateDirection(d))
    }, duration * 1000)
    return () => clearInterval(interval)
  }, [hovered, duration])

  return (
    <Element
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative flex items-center justify-center overflow-hidden bg-brand-bg/60 backdrop-blur-sm p-px ${className}`}
      style={{ borderRadius: 0 }}
      {...props}
    >
      {/* Inner content */}
      <div className="relative z-10 w-full h-full bg-brand-bg px-5 py-3 flex items-center justify-center">
        {children}
      </div>

      {/* Animated gradient border */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ filter: 'blur(2px)', width: '100%', height: '100%' }}
        initial={{ background: movingMap[direction] }}
        animate={{
          background: hovered ? [movingMap[direction], highlight] : movingMap[direction],
        }}
        transition={{ ease: 'linear', duration }}
      />

      {/* Inner bg cutout — 1px inset */}
      <div className="absolute inset-[1px] z-[1] bg-brand-bg" />
    </Element>
  )
}
