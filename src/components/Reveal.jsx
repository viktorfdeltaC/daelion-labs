import { useRef, useEffect, useState } from 'react'

/**
 * Reveal — scroll-triggered section wrapper.
 *
 * Fires once when the element enters the viewport (threshold 20%).
 * Adds `.reveal--visible` to trigger CSS transitions defined in index.css.
 *
 * Direct children get staggered entry delays via `--reveal-i` CSS variable
 * (handled entirely in CSS — no React.cloneElement needed).
 *
 * ── Usage ──────────────────────────────────────────────────────────────────
 *
 *   // Wrap a section block:
 *   <Reveal>
 *     <h2>Heading</h2>
 *     <p>Body copy</p>
 *     <a href="#">CTA</a>
 *   </Reveal>
 *
 *   // Control stagger base delay and direction:
 *   <Reveal delay={200} direction="left" className="grid grid-cols-3 gap-6">
 *     {cards.map(c => <Card key={c.id} {...c} />)}
 *   </Reveal>
 *
 *   // Skip animation (e.g. already has internal useInView logic):
 *   <Reveal skip>…</Reveal>
 *
 * ── Props ───────────────────────────────────────────────────────────────────
 *   delay      — base delay before first child animates (ms, default 0)
 *   stagger    — per-child additional delay (ms, default 100)
 *   direction  — slide direction: 'up' | 'down' | 'left' | 'right' (default 'up')
 *   threshold  — viewport intersection ratio to trigger (default 0.2)
 *   once       — stay visible once triggered (default true)
 *   skip       — disable all animation, render children as-is
 *   as         — wrapper element tag (default 'div')
 *   className  — extra classes on the wrapper
 *   style      — extra inline styles
 */
export default function Reveal({
  children,
  delay     = 0,
  stagger   = 100,
  direction = 'up',
  threshold = 0.2,
  once      = true,
  skip      = false,
  as: Tag   = 'div',
  className = '',
  style     = {},
}) {
  const ref     = useRef(null)
  const [visible, setVisible] = useState(false)

  // Respect prefers-reduced-motion at the component level
  const reduced = typeof window !== 'undefined'
    && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  useEffect(() => {
    if (skip || reduced) { setVisible(true); return }
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          if (once) observer.disconnect()
        } else if (!once) {
          setVisible(false)
        }
      },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, once, skip, reduced])

  if (skip) return <Tag className={className} style={style}>{children}</Tag>

  return (
    <Tag
      ref={ref}
      className={[
        'reveal',
        `reveal--${direction}`,
        visible ? 'reveal--visible' : '',
        className,
      ].filter(Boolean).join(' ')}
      style={{
        '--reveal-delay':   `${delay}ms`,
        '--reveal-stagger': `${stagger}ms`,
        ...style,
      }}
    >
      {children}
    </Tag>
  )
}
