const items = [
  'SOLUTION ARCHITECTURE',
  'WIR BAUEN LÖSUNGEN',
  'INDIVIDUAL SYSTEMS',
  'PRECISION EXECUTION',
  'CROSS-INDUSTRY',
  'WORLDWIDE',
  'DAELION LABS',
]

const doubled = [...items, ...items]

export default function Marquee({ inverted = false }) {
  return (
    <div
      className={`relative overflow-hidden border-y py-3.5 ${
        inverted
          ? 'border-white/10 bg-brand-accent'
          : 'border-brand-border bg-brand-bg'
      }`}
      style={{
        maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
      }}
      aria-hidden="true"
    >
      <div
        className="flex whitespace-nowrap"
        style={{ animation: 'marquee 28s linear infinite' }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className={`inline-flex items-center shrink-0 px-6 font-mono text-[0.65rem] font-normal tracking-widest uppercase ${
              inverted ? 'text-white/70' : 'text-brand-sub'
            }`}
          >
            <span className={`mr-5 text-base leading-none ${inverted ? 'text-white/40' : 'text-brand-accent/60'}`}>✦</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
