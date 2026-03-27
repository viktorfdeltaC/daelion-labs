import { useState, useRef, useId } from 'react'

const SUGGESTIONS = [
  { text: 'Manuelle Dateneingabe kostet Stunden', category: 'automation' },
  { text: 'Berichte werden von Hand zusammengestellt', category: 'data' },
  { text: 'Kundenkommunikation ist unstrukturiert', category: 'communication' },
  { text: 'Wir nutzen zu viele verschiedene Tools', category: 'tooling' },
  { text: 'Wiederkehrende Aufgaben lassen sich nicht automatisieren', category: 'automation' },
  { text: 'Datenauswertung dauert zu lange', category: 'data' },
  { text: 'Angebote und Rechnungen werden manuell erstellt', category: 'automation' },
  { text: 'Interne Prozesse sind nicht dokumentiert', category: 'tooling' },
  { text: 'KI soll in unsere Workflows integriert werden', category: 'ai' },
  { text: 'Unser Team kommuniziert über zu viele Kanäle', category: 'communication' },
]

const KEYWORD_MAP = {
  automation:    /(automatisier|manuell|händisch|wiederkehr|routine|aufgabe|eingabe|rechnung|angebot)/i,
  data:          /(daten|bericht|auswertung|analyse|report|tabelle|excel|csv|dashboard)/i,
  communication: /(kommunikation|kanal|email|nachricht|kunde|team|feedback|anfrage)/i,
  ai:            /(ki\b|chatgpt|sprachmodell|llm|gpt|intelligenz|machine.learning)/i,
  tooling:       /(tool|software|system|integration|workflow|prozess|app|plattform|schnittstelle)/i,
}

const RESPONSES = {
  automation: {
    tag: 'Automatisierung',
    headline: 'Das klingt nach einem klaren Fall für Automatisierung.',
    body: 'Manuelle Arbeit, die sich wiederholt, gehört in eine Pipeline — nicht auf deinen Tisch. Wir bauen das.',
    cta: 'Automatisierung anfragen',
    href: '#contact',
  },
  data: {
    tag: 'Daten-Pipeline',
    headline: 'Deine Daten arbeiten noch nicht für dich.',
    body: 'Berichte, die sich selbst schreiben — Dashboards, die immer aktuell sind. Das ist lösbar.',
    cta: 'Daten-Lösung besprechen',
    href: '#contact',
  },
  communication: {
    tag: 'Kommunikations-Tool',
    headline: 'Chaos in der Kommunikation kostet echte Zeit.',
    body: 'Ein zentrales System, das Anfragen sortiert, beantwortet und weiterleitet — maßgeschneidert für euren Prozess.',
    cta: 'Lösung ansehen',
    href: '#contact',
  },
  ai: {
    tag: 'KI-Integration',
    headline: 'KI macht erst Sinn, wenn sie in deinen Prozess passt.',
    body: 'Kein generisches ChatGPT-Wrapper — wir bauen KI-Funktionen, die direkt in deine Abläufe greifen.',
    cta: 'KI-Projekt starten',
    href: '#contact',
  },
  tooling: {
    tag: 'System-Integration',
    headline: 'Zu viele Tools — zu wenig System.',
    body: 'Wir verbinden, was getrennt ist, und ersetzen, was nicht funktioniert. Eine Plattform statt zehn Tabs.',
    cta: 'Analyse starten',
    href: '#contact',
  },
}

function detectCategory(text) {
  const t = text.toLowerCase()
  for (const [cat, regex] of Object.entries(KEYWORD_MAP)) {
    if (regex.test(t)) return cat
  }
  return null
}

export default function ProblemFinder() {
  const [value, setValue] = useState('')
  const [open, setOpen] = useState(false)
  const [focused, setFocused] = useState(-1)
  const [result, setResult] = useState(null)
  const [resultKey, setResultKey] = useState(0)

  const inputRef = useRef(null)
  const listRef = useRef(null)
  const uid = useId()
  const listboxId = `${uid}-listbox`
  const activeId = focused >= 0 ? `${uid}-opt-${focused}` : undefined

  const filtered = value.trim().length > 0
    ? SUGGESTIONS.filter(s => s.text.toLowerCase().includes(value.toLowerCase()))
    : SUGGESTIONS

  const showList = open && filtered.length > 0

  function commit(text) {
    setValue(text)
    setOpen(false)
    setFocused(-1)
    const cat = detectCategory(text)
    setResult(cat ? RESPONSES[cat] : 'generic')
    setResultKey(k => k + 1)
    inputRef.current?.blur()
  }

  function handleKey(e) {
    if (!showList) {
      if (e.key === 'Enter' && value.trim()) {
        e.preventDefault()
        commit(value)
      }
      return
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setFocused(f => Math.min(f + 1, filtered.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setFocused(f => Math.max(f - 1, -1))
    } else if (e.key === 'Enter') {
      e.preventDefault()
      if (focused >= 0) {
        commit(filtered[focused].text)
      } else if (value.trim()) {
        commit(value)
      }
    } else if (e.key === 'Escape') {
      setOpen(false)
      setFocused(-1)
    }
  }

  const showGenericCTA = result === 'generic'
  const res = result && result !== 'generic' ? result : null

  return (
    <div
      className="mt-8 md:mt-10"
      style={{ animation: 'fade-up 0.7s cubic-bezier(0.22,1,0.36,1) 0.58s both' }}
    >
      {/* Label */}
      <label
        htmlFor={`${uid}-input`}
        className="block section-label text-brand-sub/60 mb-3"
        style={{ letterSpacing: '0.18em' }}
      >
        WAS KOSTET DICH AM MEISTEN ZEIT?
      </label>

      {/* Combobox */}
      <div
        role="combobox"
        aria-expanded={showList}
        aria-owns={listboxId}
        aria-haspopup="listbox"
        className="relative max-w-lg"
      >
        <div className="relative flex items-center">
          <input
            ref={inputRef}
            id={`${uid}-input`}
            type="text"
            autoComplete="off"
            spellCheck="false"
            value={value}
            aria-autocomplete="list"
            aria-controls={listboxId}
            aria-activedescendant={activeId}
            placeholder="z. B. manuelle Berichte, Datenpflege …"
            className="w-full bg-transparent border border-brand-border text-brand-text text-sm placeholder:text-brand-sub/30 px-4 py-3 pr-12 outline-none focus:border-brand-accent transition-colors duration-200"
            style={{ borderRadius: 0 }}
            onChange={e => { setValue(e.target.value); setOpen(true); setFocused(-1) }}
            onFocus={() => setOpen(true)}
            onBlur={() => setTimeout(() => setOpen(false), 120)}
            onKeyDown={handleKey}
          />
          {/* Submit arrow */}
          <button
            type="button"
            aria-label="Analysieren"
            tabIndex={-1}
            onClick={() => value.trim() && commit(value)}
            className="absolute right-3 text-brand-sub/40 hover:text-brand-accent transition-colors duration-200 flex items-center justify-center w-6 h-6"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M2.5 7h9M8 3.5 11.5 7 8 10.5" />
            </svg>
          </button>
        </div>

        {/* Dropdown */}
        {showList && (
          <ul
            ref={listRef}
            id={listboxId}
            role="listbox"
            aria-label="Vorschläge"
            className="absolute left-0 right-0 top-full z-50 border border-brand-border border-t-0 bg-brand-bg max-h-56 overflow-y-auto"
            style={{ boxShadow: '0 12px 40px rgba(0,0,0,0.4)' }}
          >
            {filtered.map((s, i) => (
              <li
                key={s.text}
                id={`${uid}-opt-${i}`}
                role="option"
                aria-selected={i === focused}
                onMouseDown={() => commit(s.text)}
                onMouseEnter={() => setFocused(i)}
                className="px-4 py-2.5 text-sm cursor-pointer transition-colors duration-100"
                style={{
                  color: i === focused ? 'var(--color-accent)' : 'rgb(var(--c-sub))',
                  background: i === focused ? 'rgb(var(--c-accent) / 0.06)' : 'transparent',
                }}
              >
                {s.text}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Result card */}
      {res && (
        <div
          key={resultKey}
          role="region"
          aria-live="polite"
          aria-label="Ergebnis"
          className="mt-5 max-w-lg border border-brand-border p-5"
          style={{
            borderLeft: '2px solid var(--color-accent)',
            animation: 'problem-result 0.5s cubic-bezier(0.22,1,0.36,1) both',
          }}
        >
          <span
            className="section-label text-brand-accent block mb-2"
            style={{ letterSpacing: '0.16em' }}
          >
            {res.tag}
          </span>
          <p className="text-brand-text text-sm font-medium leading-snug mb-1">
            {res.headline}
          </p>
          <p className="text-brand-sub text-sm leading-relaxed mb-4">
            {res.body}
          </p>
          <a
            href={res.href}
            className="inline-flex items-center gap-2 text-brand-accent text-sm font-medium hover:gap-3 transition-all duration-200"
          >
            {res.cta}
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M2 6h8M7 3l3 3-3 3" />
            </svg>
          </a>
        </div>
      )}

      {showGenericCTA && (
        <div
          key={resultKey}
          role="region"
          aria-live="polite"
          className="mt-5 max-w-lg border border-brand-border p-5"
          style={{
            borderLeft: '2px solid var(--color-accent)',
            animation: 'problem-result 0.5s cubic-bezier(0.22,1,0.36,1) both',
          }}
        >
          <p className="text-brand-text text-sm font-medium leading-snug mb-1">
            Klingt nach einem guten Fall für uns.
          </p>
          <p className="text-brand-sub text-sm leading-relaxed mb-4">
            Wir schauen uns das gemeinsam an — kein Verkaufsgespräch, nur ehrliche Einschätzung.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-brand-accent text-sm font-medium hover:gap-3 transition-all duration-200"
          >
            Projekt besprechen
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M2 6h8M7 3l3 3-3 3" />
            </svg>
          </a>
        </div>
      )}

      {/* noscript fallback */}
      <noscript>
        <a
          href="#contact"
          className="mt-5 inline-flex items-center gap-2 text-brand-accent text-sm font-medium"
        >
          Projekt besprechen →
        </a>
      </noscript>
    </div>
  )
}
