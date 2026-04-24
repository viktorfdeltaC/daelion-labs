import { useContactModal } from '../contexts/ContactModalContext'

const pakete = [
  {
    nr: '01',
    tag: 'Automatisierung',
    title: 'Dein Team ist zu teuer für Copy-Paste.',
    tagline: 'Was täglich gleich passiert, soll nicht täglich jemanden kosten.',
    preis: '€3.000 – €6.000',
    preisNote: 'Einmalig · kein Abo',
    lieferzeit: '1–2 Wochen',
    beschreibung: [
      'Neue Anfrage im Postfach. Jemand trägt sie ins CRM ein. Schickt eine Bestätigung. Legt die Datei ab. Setzt eine Erinnerung.',
      'Jeden Tag. Immer gleich. Immer ein Mensch.',
      'Wir analysieren genau diesen Ablauf und automatisieren ihn. Was danach übrig bleibt, ist nur noch das, was wirklich Nachdenken braucht.',
    ],
    leistungen: [
      'Ablauf-Analyse & Dokumentation',
      'Technologieauswahl & Umsetzung',
      'Test, Übergabe & Einweisung',
    ],
    gutFuer: 'Teams, die genau wissen was sie täglich aufhält. Die Lösung kennen sie noch nicht.',
    meta: [
      { label: 'Risiko', value: 'Klar eingegrenztes Projekt. Ein Ablauf, ein Ergebnis.' },
      { label: 'Nächster Schritt', value: '30-Min-Call. Wir sagen dir direkt ob und wie es geht.' },
    ],
  },
  {
    nr: '02',
    tag: 'Custom Tool',
    title: 'Das Tool, das es für euch noch nicht gibt.',
    tagline: 'Gebaut für einen Betrieb: euren.',
    preis: 'Ab €8.000',
    preisNote: 'Einmalig · scope-abhängig',
    lieferzeit: '3–6 Wochen',
    beschreibung: [
      'Irgendwann reichen Spreadsheets nicht mehr. SaaS-Tools decken 70 % ab. Die fehlenden 30 % kosten täglich Nerven, Workarounds und Fehlerpotenzial.',
      'Wir bauen genau das, was fehlt. Ein Buchungssystem, ein internes Dashboard, eine Management-App. Gebaut so, wie euer Betrieb funktioniert. Nicht wie irgendein Durchschnittskunde.',
      'Code gehört euch. Kein Abo. Kein Lock-in.',
    ],
    leistungen: [
      'Discovery & Architektur',
      'Entwicklung & Integration in bestehende Systeme',
      'Deploy, Übergabe & Dokumentation',
    ],
    gutFuer: 'Unternehmen, die mit fünf Tools jonglieren, die nie wirklich zusammenpassen.',
    meta: [
      { label: 'Code-Ownership', value: '100 % euch. Ihr könnt damit machen was ihr wollt.' },
      { label: 'Häufig kombiniert mit', value: 'Paket 01 und / oder Paket 03.' },
    ],
  },
  {
    nr: '03',
    tag: 'KI-Integration',
    title: 'KI, die Aufgaben übernimmt. Nicht nur beantwortet.',
    tagline: 'Kein Chatbot. Ein System, das denkt, entscheidet und handelt.',
    preis: 'Ab €5.000',
    preisNote: 'Auf Anfrage · scope-abhängig',
    lieferzeit: '2–4 Wochen',
    beschreibung: [
      'Wo Automatisierung aufhört, fangen KI-Agenten an. Sie lesen eine Anfrage, bewerten den Lead, tragen ihn ins CRM ein und schicken die passende Antwort raus. Kein Knopfdruck nötig.',
      'Wir integrieren KI direkt in eure Abläufe, als Schicht auf einem bestehenden System oder als Teil eines Custom Tools. Der Agent arbeitet in den Grenzen, die ihr setzt. Rund um die Uhr.',
    ],
    leistungen: [
      'KI-Analyse: Wo bringt es euch wirklich etwas?',
      'Entwicklung & Integration des Agenten',
      'Einbindung in bestehende Systeme & Tools',
    ],
    gutFuer: 'Wer repetitive Aufgaben hat, die zu komplex für simple Automatisierung sind.',
    meta: [
      { label: 'Technologie', value: 'Wir wählen das Modell, das zur Aufgabe passt.' },
      { label: 'Häufig kombiniert mit', value: 'Paket 02, KI on top eines Custom Tools.' },
    ],
  },
]

export default function Packages() {
  const { openModal } = useContactModal()

  return (
    <section id="pakete" className="relative bg-brand-bg overflow-hidden">
      <div className="border-b border-brand-border px-6 md:px-10 lg:px-16 py-4 flex items-center justify-between">
        <span className="section-label text-brand-accent">007 / PAKETE</span>
        <span className="section-label text-brand-sub">Unsere Leistungspakete</span>
      </div>

      <div className="relative z-10 px-6 md:px-10 lg:px-16 pt-14 pb-12 border-b border-brand-border">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <h2
            className="font-display font-bold text-brand-text leading-[1.05] tracking-tight"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)' }}
          >
            <span className="block">Drei Pakete.</span>
            <span className="block">Ein Ziel.</span>
          </h2>
          <p className="text-brand-sub text-sm max-w-xs leading-relaxed md:text-right">
            Klar bepreist. Direkt lieferbar. Kein Abo, kein Lock-in.
          </p>
        </div>
      </div>

      <div className="relative z-10">
        {pakete.map((p) => (
          <div
            key={p.nr}
            className="border-b border-brand-border px-6 md:px-10 lg:px-16 py-10 md:py-12"
          >
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-8 pb-8 border-b border-brand-border">
              <div className="flex items-start gap-6 md:gap-10 flex-1 min-w-0">
                <span className="section-label text-brand-accent shrink-0 w-6 pt-1">{p.nr}</span>
                <div>
                  <span className="section-label text-brand-sub/50 block mb-2">{p.tag}</span>
                  <h3
                    className="font-display font-bold text-brand-text leading-tight mb-2"
                    style={{ fontSize: 'clamp(1.2rem, 2.5vw, 2rem)' }}
                  >
                    {p.title}
                  </h3>
                  <p className="text-brand-sub text-sm">{p.tagline}</p>
                </div>
              </div>
              <div className="lg:text-right shrink-0 pl-12 lg:pl-0">
                <p
                  className="font-display font-bold text-brand-accent leading-none mb-1"
                  style={{ fontSize: 'clamp(1.4rem, 2vw, 1.8rem)' }}
                >
                  {p.preis}
                </p>
                <p className="section-label text-brand-sub/50">{p.preisNote}</p>
                <p className="section-label text-brand-sub/40 mt-1">Lieferzeit: {p.lieferzeit}</p>
              </div>
            </div>
            <div className="grid lg:grid-cols-[1fr_260px] gap-8 lg:gap-12 pl-0 md:pl-16">
              <div>
                <div className="space-y-4 mb-8">
                  {p.beschreibung.map((t, i) => (
                    <p key={i} className="text-brand-sub text-sm leading-relaxed">
                      {t}
                    </p>
                  ))}
                </div>
                <ul className="space-y-3">
                  {p.leistungen.map((l, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-brand-sub text-sm"
                    >
                      <span
                        className="w-1.5 h-1.5 bg-brand-accent shrink-0 mt-[5px]"
                        aria-hidden="true"
                      />
                      {l}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:border-l border-brand-border lg:pl-10 flex flex-col gap-6">
                <div className="bg-brand-accent/[0.04] border border-brand-accent-border p-4">
                  <p className="section-label text-brand-accent mb-2">Gut für</p>
                  <p className="text-brand-sub text-sm leading-relaxed">{p.gutFuer}</p>
                </div>
                {p.meta.map((m, i) => (
                  <div key={i}>
                    <p className="section-label text-brand-sub/40 mb-1">{m.label}</p>
                    <p className="text-brand-sub text-sm leading-relaxed">{m.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="relative z-10 border-b border-brand-border px-6 md:px-10 lg:px-16 py-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <p className="section-label text-brand-accent mb-3">Kein Paket passt?</p>
          <h3
            className="font-display font-bold text-brand-text leading-tight mb-2"
            style={{ fontSize: 'clamp(1.1rem, 2vw, 1.5rem)' }}
          >
            Jedes Problem ist anders. Wir bauen auch komplett individuell.
          </h3>
          <p className="text-brand-sub text-sm leading-relaxed max-w-lg">
            Die Pakete sind ein Einstieg. Wenn dein Fall komplexer ist, andere Anforderungen hat oder du nicht weißt wo du anfangen sollst — schreib uns einfach. Wir schauen gemeinsam was Sinn macht.
          </p>
        </div>
        <button
          type="button"
          onClick={openModal}
          className="btn-text text-brand-sub text-sm font-medium hover:text-brand-text transition-colors duration-200 cursor-pointer whitespace-nowrap shrink-0 bg-transparent border-0 p-0"
        >
          Problem schildern <span className="btn-text-arrow">→</span>
        </button>
      </div>

      <div className="relative z-10 px-6 md:px-10 lg:px-16 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-brand-sub text-sm max-w-sm leading-relaxed">
          Nicht sicher welches Paket passt? In 30 Minuten finden wir es gemeinsam heraus.
        </p>
        <button
          type="button"
          onClick={openModal}
          className="magnetic-btn btn-shimmer btn-purple bg-brand-accent text-white font-sans font-semibold text-sm px-8 py-4 cursor-pointer whitespace-nowrap inline-block"
          style={{ borderRadius: '0px' }}
        >
          <span className="btn-inner">Paket anfragen →</span>
        </button>
      </div>
    </section>
  )
}
