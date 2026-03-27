/**
 * Heading — fluid, polymorphic heading component
 *
 * Implements the full type system defined in index.css / tailwind.config.js.
 * All sizes are viewport-responsive via clamp() CSS variables.
 *
 * ── Usage ─────────────────────────────────────────────────────────────────
 *
 *   // Semantic + visual match (most common)
 *   <Heading level="h1">Wir bauen was bleibt.</Heading>
 *
 *   // Display / hero size — larger than h1
 *   <Heading level="display">LÖSUNGEN</Heading>
 *
 *   // Gradient fill — white → accent
 *   <Heading level="h2" gradient>Unsere Methode</Heading>
 *
 *   // Key-phrase gradient — text → accent two-tone
 *   <Heading level="h2" gradientPhrase>Resultate, die zählen</Heading>
 *
 *   // Accent-only gradient
 *   <Heading level="h3" accentGradient>+340% Effizienz</Heading>
 *
 *   // Override HTML tag while keeping visual level
 *   <Heading level="h2" as="h3">Section label (visual h2, semantic h3)</Heading>
 *
 *   // Animated underline on hover — useful for interactive headings
 *   <Heading level="h3" underline>Mehr erfahren</Heading>
 *
 *   // Extra classes pass through
 *   <Heading level="h1" className="mb-8 text-center">Title</Heading>
 *
 * ── Props ─────────────────────────────────────────────────────────────────
 *   level          'display' | 'h1' | 'h2' | 'h3' | 'h4'  (default: 'h2')
 *   as             Override rendered HTML element
 *   gradient       boolean  — white → accent gradient fill
 *   gradientPhrase boolean  — text → accent two-tone (dezenter)
 *   accentGradient boolean  — pure accent gradient
 *   underline      boolean  — animated scaleX underline on hover
 *   children       React children
 *   className      Additional Tailwind / CSS classes
 *   style          Inline style overrides
 */

// ── Level → style config ────────────────────────────────────────────────────
// All class names are written as complete strings so Tailwind JIT
// statically detects and includes them in the CSS bundle.
const LEVELS = {
  display: {
    defaultTag: 'h1',
    className:
      'font-display font-bold text-fluid-hero tracking-display leading-display',
  },
  h1: {
    defaultTag: 'h1',
    className:
      'font-display font-bold text-fluid-h1 tracking-heading leading-heading',
  },
  h2: {
    defaultTag: 'h2',
    className:
      'font-display font-bold text-fluid-h2 tracking-heading leading-heading',
  },
  h3: {
    defaultTag: 'h3',
    className:
      'font-display font-semibold text-fluid-h3 tracking-sub leading-subhead',
  },
  h4: {
    defaultTag: 'h4',
    className:
      'font-sans font-semibold text-fluid-h4 tracking-sub leading-subhead',
  },
}

// ── Gradient class map ──────────────────────────────────────────────────────
const COLOR_CLASS = {
  gradient:       'text-gradient',
  gradientPhrase: 'text-gradient-phrase',
  accentGradient: 'text-gradient-accent',
  default:        'text-brand-text',
}

export function Heading({
  level = 'h2',
  as: Tag,
  gradient = false,
  gradientPhrase = false,
  accentGradient = false,
  underline = false,
  children,
  className = '',
  style,
}) {
  const config = LEVELS[level] ?? LEVELS.h2
  const Element = Tag ?? config.defaultTag

  // Pick gradient class — first truthy wins, else solid brand text
  const colorClass =
    gradient       ? COLOR_CLASS.gradient       :
    gradientPhrase ? COLOR_CLASS.gradientPhrase  :
    accentGradient ? COLOR_CLASS.accentGradient  :
    COLOR_CLASS.default

  const underlineClass = underline ? 'link-underline-accent' : ''

  return (
    <Element
      className={[
        config.className,
        colorClass,
        underlineClass,
        'text-wrap-balance',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      style={style}
    >
      {children}
    </Element>
  )
}

export default Heading
