import { useState, useRef, useId } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

// Language-aware keyword maps (regex can't be stored in JSON)
const KEYWORD_MAP = {
  de: {
    automation:    /(automatisier|manuell|händisch|wiederkehr|routine|aufgabe|eingabe|rechnung|angebot)/i,
    data:          /(daten|bericht|auswertung|analyse|report|tabelle|excel|csv|dashboard)/i,
    communication: /(kommunikation|kanal|email|nachricht|kunde|team|feedback|anfrage)/i,
    ai:            /(ki\b|chatgpt|sprachmodell|llm|gpt|intelligenz|machine.learning)/i,
    tooling:       /(tool|software|system|integration|workflow|prozess|app|plattform|schnittstelle)/i,
  },
  en: {
    automation:    /(automat|manual|repetit|routine|task|invoice|proposal|entry|recurring)/i,
    data:          /(data|report|analys|dashboard|excel|csv|spreadsheet|metric|insight)/i,
    communication: /(communicat|channel|email|message|customer|team|feedback|request)/i,
    ai:            /(\bai\b|chatgpt|llm|gpt|machine.learning|artificial|intelligent)/i,
    tooling:       /(tool|software|system|integrat|workflow|process|app|platform|interface)/i,
  },
}

function detectCategory(text, lang) {
  const t = text.toLowerCase()
  for (const [cat, regex] of Object.entries(KEYWORD_MAP[lang] ?? KEYWORD_MAP.de)) {
    if (regex.test(t)) return cat
  }
  return null
}

export default function ProblemFinder() {
  const { lang, t } = useLanguage()
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

  const suggestions = t('pf_suggestions')
  const responses   = t('pf_responses')

  const filtered = value.trim().length > 0
    ? suggestions.filter(s => s.text.toLowerCase().includes(value.toLowerCase()))
    : suggestions

  const showList = open && filtered.length > 0

  function commit(text) {
    setValue(text)
    setOpen(false)
    setFocused(-1)
    const cat = detectCategory(text, lang)
    setResult(cat ? responses[cat] : 'generic')
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
      style={{
        animation: 'fade-up 0.7s cubic-bezier(0.22,1,0.36,1) 0.58s both',
        position: 'relative',
        zIndex: 10,
      }}
    >
      {/* Label */}
      <label
        htmlFor={`${uid}-input`}
        className="block section-label text-brand-sub/60 mb-3"
        style={{ letterSpacing: '0.18em' }}
      >
        {t('pf_label')}
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
            placeholder={t('pf_placeholder')}
            className="w-full bg-transparent border border-brand-border text-brand-text text-sm placeholder:text-brand-sub/30 px-4 py-3 pr-12 outline-none focus:border-brand-accent transition-colors duration-200"
            style={{ borderRadius: 0 }}
            onChange={e => { setValue(e.target.value); setOpen(true); setFocused(-1) }}
            onFocus={() => setOpen(true)}
            onBlur={() => setTimeout(() => setOpen(false), 200)}
            onKeyDown={handleKey}
          />
          {/* Submit arrow */}
          <button
            type="button"
            aria-label={t('pf_aria_analyze')}
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
            aria-label={t('pf_aria_suggestions')}
            data-lenis-prevent
            className="absolute left-0 right-0 top-full z-50 border border-brand-border border-t-0 bg-brand-bg max-h-56 overflow-y-auto overscroll-contain"
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
          aria-label={t('pf_aria_result')}
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
            {t('pf_generic_headline')}
          </p>
          <p className="text-brand-sub text-sm leading-relaxed mb-4">
            {t('pf_generic_body')}
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-brand-accent text-sm font-medium hover:gap-3 transition-all duration-200"
          >
            {t('pf_generic_cta')}
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M2 6h8M7 3l3 3-3 3" />
            </svg>
          </a>
        </div>
      )}

      {/* noscript fallback */}
      <noscript>
        <a href="#contact" className="mt-5 inline-flex items-center gap-2 text-brand-accent text-sm font-medium">
          {t('pf_generic_cta')} →
        </a>
      </noscript>
    </div>
  )
}
