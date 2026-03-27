/**
 * DisplayHeadline — reusable component that bundles all premium typography
 * optimisations: Clash Display font, optical sizing, tight leading,
 * negative tracking, optional gradient, optional per-line reveal animation.
 *
 * Usage:
 *   <DisplayHeadline size="hero" gradient>LÖSUNGEN</DisplayHeadline>
 *   <DisplayHeadline size="section" lines={['Was wir', 'bauen']} inView={headInView} />
 */

const SIZE_STYLES = {
  /** Full-bleed hero word — 3.5rem → 11rem */
  hero: {
    fontSize: 'clamp(3.5rem, 13vw, 11rem)',
    letterSpacing: 'var(--tracking-display)',
    lineHeight: 0.88,
  },
  /** Section heading — 2.5rem → 5.5rem */
  section: {
    fontSize: 'clamp(2.5rem, 6vw, 5.5rem)',
    letterSpacing: 'var(--tracking-heading)',
    lineHeight: 0.92,
  },
  /** Sub-heading / card title — 1.5rem → 2.5rem */
  sub: {
    fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
    letterSpacing: 'var(--tracking-sub)',
    lineHeight: 1.1,
  },
  /** CTA headline — 3.5rem → 8.5rem */
  cta: {
    fontSize: 'clamp(3.5rem, 9vw, 8.5rem)',
    letterSpacing: 'var(--tracking-display)',
    lineHeight: 0.88,
  },
}

/**
 * Single-line variant — renders one headline span.
 */
export function DisplayHeadline({
  children,
  size = 'section',
  gradient = false,
  className = '',
  style = {},
  as: Tag = 'h2',
}) {
  return (
    <Tag
      className={`font-display font-bold ${gradient ? 'text-gradient' : 'text-brand-text'} ${className}`}
      style={{ ...SIZE_STYLES[size], ...style }}
    >
      {children}
    </Tag>
  )
}

/**
 * Multi-line variant — each line gets its own overflow-hidden mask so the
 * reveal-up animation works correctly (text slides up through the clip).
 *
 * @param {string[]}  lines   — array of text lines
 * @param {boolean}   inView  — from useInView(); triggers animation
 * @param {number}    delay   — base animation delay in seconds
 */
export function DisplayHeadlineLines({
  lines = [],
  size = 'section',
  gradient = false,
  inView = false,
  delay = 0,
  className = '',
  as: Tag = 'h2',
}) {
  const colorClass = gradient ? 'text-gradient' : 'text-brand-text'

  return (
    <Tag
      className={`font-display font-bold ${colorClass} ${className}`}
      style={SIZE_STYLES[size]}
    >
      {lines.map((line, i) => (
        <span key={line} className="block overflow-hidden pb-[0.06em]">
          <span
            className="block"
            style={{
              animation: inView
                ? `reveal-up 0.9s cubic-bezier(0.16,1,0.3,1) ${delay + i * 0.09}s both`
                : 'none',
            }}
          >
            {line}
          </span>
        </span>
      ))}
    </Tag>
  )
}

export default DisplayHeadline
