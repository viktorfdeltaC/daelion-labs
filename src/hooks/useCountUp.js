import { useEffect, useRef, useState } from 'react'
import { useInView } from './useInView'

export function useCountUp(target, duration = 1600) {
  const [count, setCount] = useState(0)
  const [ref, inView] = useInView({ threshold: 0.3 })
  const triggered = useRef(false)

  useEffect(() => {
    if (!inView || triggered.current) return
    triggered.current = true

    let startTime = null

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp
      const elapsed = timestamp - startTime
      const progress = Math.min(elapsed / duration, 1)
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * target))
      if (progress < 1) requestAnimationFrame(animate)
    }

    requestAnimationFrame(animate)
  }, [inView, target, duration])

  return [ref, count]
}
