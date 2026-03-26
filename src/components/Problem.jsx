import { useInView } from '../hooks/useInView'
import { useCountUp } from '../hooks/useCountUp'

export default function Problem() {
  const [sectionRef, sectionInView] = useInView()
  const [countRef, count] = useCountUp(70)

  return (
    <section id="problem" className="relative bg-brand-bg border-t border-brand-border py-32 px-6 overflow-hidden">

      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="section-orb"
          style={{
            width: '500px',
            height: '500px',
            top: '-10%',
            right: '-5%',
            background: 'radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 65%)',
          }}
        />
      </div>

      <div
        ref={sectionRef}
        className={`relative z-10 max-w-4xl mx-auto transition-all duration-700 ease-out ${
          sectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Stat callout */}
        <div className="flex items-start gap-6 mb-16">
          <div ref={countRef}>
            <span
              className="block text-7xl sm:text-8xl font-black leading-none text-brand-accent tabular-nums"
              style={{
                textShadow: '0 0 40px rgba(139,92,246,0.4)',
                transition: 'text-shadow 0.3s',
              }}
            >
              {count}%
            </span>
          </div>
          <div className="pt-3">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-text leading-tight mb-4">
              Standardtools lösen 70 % deines Problems.
            </h2>
            <p className="text-brand-accent text-sm font-semibold tracking-widest2 uppercase">
              Die letzte Meile gehört uns.
            </p>
          </div>
        </div>

        {/* Body — glass panels */}
        <div className="grid md:grid-cols-2 gap-px bg-brand-border">
          <div className="glass p-8 md:p-10">
            <p className="text-brand-sub text-base leading-relaxed">
              Jedes Unternehmen basiert auf spezifischen Workflows. Speziellen Sonderfällen. Prozessen, die über Jahre im echten Betrieb gewachsen sind. Generische Tools — Calendly, Notion, Standard-CRMs — sind für den Durchschnitt gebaut. Sie lösen das Allgemeine, nicht das Deine.
            </p>
          </div>
          <div className="glass p-8 md:p-10">
            <p className="text-brand-sub text-base leading-relaxed">
              Die verbleibenden 30 % sind kein kleines Ärgernis. Sie sind der Engpass, der deinen Betrieb ausbremst. Die Lücke, die manuelle Workarounds erzwingt. Genau das, was dich jeden Tag aufhält. Diese letzte Meile ist unser Terrain — und wo Standardprodukte einfach aufhören.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
