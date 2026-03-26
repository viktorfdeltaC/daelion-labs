import { useInView } from '../hooks/useInView'
import { useCountUp } from '../hooks/useCountUp'

export default function Problem() {
  const [sectionRef, sectionInView] = useInView()
  const [countRef, count] = useCountUp(70)

  return (
    <section id="problem" className="relative bg-brand-bg overflow-hidden">

      {/* ── Section header bar ─────────────────────── */}
      <div className="border-b border-brand-border px-6 md:px-10 lg:px-16 py-4 flex items-center justify-between">
        <span className="section-label text-brand-accent">002 / PROBLEM</span>
        <span className="section-label text-brand-sub">Das Problem</span>
      </div>

      {/* ── Background orb ────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="section-orb" style={{ width: '500px', height: '500px', top: '-10%', right: '-5%', background: 'radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 65%)' }} />
      </div>

      {/* ── Split layout ──────────────────────────── */}
      <div
        ref={sectionRef}
        className={`relative z-10 grid lg:grid-cols-2 border-b border-brand-border transition-all duration-700 ease-out ${
          sectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Left — giant counter */}
        <div
          ref={countRef}
          className="flex items-center justify-center lg:border-r border-brand-border py-20 md:py-28 px-6 md:px-10"
        >
          <div className="relative text-center leading-none">
            {/* Glass card behind the number */}
            <div
              className="absolute inset-0 -m-8 rounded-none"
              style={{
                background: 'radial-gradient(ellipse at center, rgba(139,92,246,0.08) 0%, transparent 70%)',
                filter: 'blur(40px)',
              }}
              aria-hidden="true"
            />
            <span
              className="relative font-display font-extrabold text-brand-accent block"
              style={{
                fontSize: 'clamp(7rem, 22vw, 18rem)',
                lineHeight: 1,
                textShadow: '0 0 80px rgba(139,92,246,0.3), 0 0 200px rgba(139,92,246,0.1)',
                animation: sectionInView ? 'number-rise 0.8s cubic-bezier(0.22,1,0.36,1) 0.2s both' : 'none',
              }}
            >
              {count}%
            </span>
            <p
              className="relative section-label text-brand-accent/70 mt-4"
              style={{ animation: sectionInView ? 'fade-up 0.6s ease 0.7s both' : 'none' }}
            >
              — Die letzte Meile gehört uns.
            </p>
          </div>
        </div>

        {/* Right — headline + text */}
        <div className="flex flex-col justify-center py-16 md:py-24 px-6 md:px-10 lg:px-14">
          <h2
            className="font-display font-bold text-brand-text leading-[1.05] tracking-tight mb-6"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)' }}
          >
            Standardtools lösen 70&nbsp;% deines Problems.
          </h2>

          <div className="h-px bg-brand-border mb-8" />

          <div className="space-y-5">
            <p className="text-brand-sub text-base leading-relaxed">
              Jedes Unternehmen basiert auf spezifischen Workflows. Speziellen Sonderfällen. Prozessen, die über Jahre im echten Betrieb gewachsen sind. Generische Tools — Calendly, Notion, Standard-CRMs — sind für den Durchschnitt gebaut. Sie lösen das Allgemeine, nicht das Deine.
            </p>
            <p className="text-brand-sub text-base leading-relaxed">
              Die verbleibenden 30&nbsp;% sind kein kleines Ärgernis. Sie sind der Engpass, der deinen Betrieb ausbremst — die Lücke, die manuelle Workarounds erzwingt. Diese letzte Meile ist unser Terrain.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
