import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return

    document.body.classList.add('has-custom-cursor')

    const state = { mx: -200, my: -200, rx: -200, ry: -200 }
    let raf

    const onMove = (e) => {
      state.mx = e.clientX
      state.my = e.clientY
    }

    const onMouseOver = (e) => {
      if (e.target.closest('a, button, [role="button"]')) {
        ringRef.current?.classList.add('is-hovering')
      }
    }

    const onMouseOut = (e) => {
      if (e.target.closest('a, button, [role="button"]')) {
        ringRef.current?.classList.remove('is-hovering')
      }
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    document.addEventListener('mouseover', onMouseOver)
    document.addEventListener('mouseout', onMouseOut)

    const tick = () => {
      state.rx += (state.mx - state.rx) * 0.1
      state.ry += (state.my - state.ry) * 0.1

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${state.mx}px, ${state.my}px, 0) translate(-50%, -50%)`
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${state.rx}px, ${state.ry}px, 0) translate(-50%, -50%)`
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onMouseOver)
      document.removeEventListener('mouseout', onMouseOut)
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
