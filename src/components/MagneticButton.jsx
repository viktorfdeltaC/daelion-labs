import { useMagnet } from '../hooks/useMagnet'

/**
 * MagneticButton — drop-in wrapper that makes any element follow the cursor
 * with a smooth magnetic pull when the pointer is nearby.
 *
 * How it works:
 *   - Tracks cursor distance from element center on window mousemove
 *   - Applies a proportional translate (falls off to zero at `threshold` distance)
 *   - Lerps back to 0,0 when cursor leaves the activation radius
 *   - RAF-based loop for 60/120fps smoothness
 *   - No-ops on touch / coarse-pointer / prefers-reduced-motion devices
 *
 * Feature detection (all must pass to activate):
 *   ✓ window.matchMedia('(hover: hover)')      — device supports hover
 *   ✓ window.matchMedia('(pointer: fine)')     — mouse or trackpad, not touch
 *   ✓ !prefers-reduced-motion                  — user hasn't opted out of motion
 *
 * Props:
 *   as       — element type to render ('a', 'button', 'div', …)
 *   href     — forwarded if as="a"
 *   strength — magnetic pull intensity (0–1, default 0.30)
 *   ease     — lerp smoothness per RAF frame (default 0.10)
 *   children, className, style, …rest forwarded to the element
 *
 * Usage:
 *   <MagneticButton as="a" href="#contact" className="btn-shimmer btn-purple …">
 *     <span className="btn-inner">Projekt starten <span className="btn-arrow">→</span></span>
 *   </MagneticButton>
 */
export default function MagneticButton({
  children,
  as: Tag = 'button',
  strength = 0.30,
  ease = 0.10,
  className = '',
  style = {},
  ...rest
}) {
  const ref = useMagnet({ strength, ease })

  return (
    <Tag
      ref={ref}
      className={className}
      style={{ willChange: 'transform', ...style }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
