import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return

    document.body.classList.add('has-custom-cursor')

    const pos = { mx: -200, my: -200, rx: -200, ry: -200 }
    let raf, lastTs = 0

    const onMove = (e) => { pos.mx = e.clientX; pos.my = e.clientY }
    const onOver = (e) => { if (e.target.closest('a, button, [role="button"]')) ringRef.current?.classList.add('is-hovering') }
    const onOut  = (e) => { if (e.target.closest('a, button, [role="button"]')) ringRef.current?.classList.remove('is-hovering') }

    window.addEventListener('mousemove', onMove, { passive: true })
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout', onOut)

    // Time-based lerp — consistent speed regardless of frame rate (60Hz, 120Hz, etc.)
    const tick = (ts) => {
      const dt = lastTs > 0 ? Math.min((ts - lastTs) / 1000, 0.05) : 0.016
      lastTs = ts
      const f = 1 - Math.exp(-9 * dt) // ~0.139 at 60fps, ~0.072 at 120fps — same visual speed

      pos.rx += (pos.mx - pos.rx) * f
      pos.ry += (pos.my - pos.ry) * f

      dotRef.current?.style.setProperty('transform', `translate3d(${pos.mx}px,${pos.my}px,0) translate(-50%,-50%)`)
      ringRef.current?.style.setProperty('transform', `translate3d(${pos.rx}px,${pos.ry}px,0) translate(-50%,-50%)`)

      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
      document.body.classList.remove('has-custom-cursor')
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  )
}
