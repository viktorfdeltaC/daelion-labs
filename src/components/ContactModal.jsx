import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { ShinyButton } from './ShinyButton'

// Field label — monospace, tight, uppercase
const Label = ({ children }) => (
  <span style={{
    fontFamily: 'var(--font-mono, "JetBrains Mono", monospace)',
    fontSize: '0.6rem',
    letterSpacing: '0.2em',
    fontWeight: 500,
    color: '#9ca3af',
    textTransform: 'uppercase',
    display: 'block',
    marginBottom: 8,
  }}>
    {children}
  </span>
)

const fieldBase = {
  width: '100%',
  background: '#f9fafb',
  border: '1px solid #e5e7eb',
  color: '#111827',
  fontSize: '0.875rem',
  padding: '11px 14px',
  outline: 'none',
  borderRadius: 0,
  fontFamily: 'inherit',
  transition: 'border-color 0.18s, background 0.18s',
  boxSizing: 'border-box',
}

const onFocus = (e) => { e.target.style.borderColor = '#8B5CF6'; e.target.style.background = '#fff' }
const onBlur  = (e) => { e.target.style.borderColor = '#e5e7eb'; e.target.style.background = '#f9fafb' }

const W3F_KEY = 'ab2fb790-a653-4757-b1bc-e8fe05600260'

export default function ContactModal({ open, onClose }) {
  const { t } = useLanguage()
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [form, setForm] = useState({ name: '', email: '', topic: '', message: '' })
  const [file, setFile] = useState(null)
  const [fileError, setFileError] = useState(null)
  const [mounted, setMounted] = useState(false)
  const firstFieldRef = useRef(null)
  const fileInputRef = useRef(null)

  useEffect(() => {
    if (open) {
      setSubmitted(false)
      setForm({ name: '', email: '', topic: '', message: '' })
      setFile(null)
      setFileError(null)
      // Slight delay so CSS transition fires
      setTimeout(() => setMounted(true), 10)
      setTimeout(() => firstFieldRef.current?.focus(), 80)
    } else {
      setMounted(false)
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  if (!open) return null

  const handleFileChange = (e) => {
    const f = e.target.files?.[0]
    if (!f) return
    if (f.size > 1_000_000) {
      setFileError(t('modal_file_error'))
      setFile(null)
      e.target.value = ''
    } else {
      setFileError(null)
      setFile(f)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (fileError) return
    setLoading(true)
    setError(null)
    try {
      const fd = new FormData()
      fd.append('access_key', W3F_KEY)
      fd.append('subject', `[${form.topic || 'Anfrage'}] ${form.name}`)
      fd.append('name', form.name)
      fd.append('email', form.email)
      fd.append('thema', form.topic)
      fd.append('message', form.message)
      if (file) fd.append('attachment', file)

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: fd,
      })
      const data = await res.json()
      if (data.success) {
        setSubmitted(true)
      } else {
        setError('Etwas ist schiefgelaufen. Bitte versuch es nochmal.')
      }
    } catch {
      setError('Netzwerkfehler. Bitte versuch es nochmal.')
    } finally {
      setLoading(false)
    }
  }

  const topics = [
    t('modal_topic_web'),
    t('modal_topic_automation'),
    t('modal_topic_tool'),
    t('modal_topic_reporting'),
    t('modal_topic_ai'),
    t('modal_topic_process'),
    t('modal_topic_other'),
  ]

  return (
    <>
      {/* Backdrop */}
      <div
        aria-hidden="true"
        onClick={onClose}
        style={{
          position: 'fixed', inset: 0, zIndex: 200,
          background: 'rgba(7,5,15,0.7)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          opacity: mounted ? 1 : 0,
          transition: 'opacity 0.25s ease',
        }}
      />

      {/* Centering shell */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label={t('modal_title')}
        style={{
          position: 'fixed', inset: 0, zIndex: 201,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: 16,
          pointerEvents: 'none',
        }}
      >
        {/* Card — flex column so header stays fixed and body scrolls */}
        <div
          onClick={(e) => e.stopPropagation()}
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: 520,
            maxHeight: '90dvh',
            display: 'flex',
            flexDirection: 'column',
            background: '#ffffff',
            boxShadow: '0 40px 100px rgba(0,0,0,0.22), 0 0 0 1px rgba(139,92,246,0.12)',
            borderTop: '2px solid #8B5CF6',
            pointerEvents: 'auto',
            transform: mounted ? 'translateY(0) scale(1)' : 'translateY(16px) scale(0.97)',
            opacity: mounted ? 1 : 0,
            transition: 'transform 0.3s cubic-bezier(0.22,1,0.36,1), opacity 0.25s ease',
          }}
        >
          {/* Corner marks — bottom-right only, subtle */}
          <svg
            aria-hidden="true"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 10, overflow: 'hidden' }}
          >
            <line x1="100%" y1="100%" x2="calc(100% - 18px)" y2="100%" stroke="#8B5CF6" strokeWidth="1" strokeOpacity="0.25" />
            <line x1="100%" y1="100%" x2="100%" y2="calc(100% - 18px)" stroke="#8B5CF6" strokeWidth="1" strokeOpacity="0.25" />
          </svg>

          {/* ── Header — flex-shrink: 0 so it never collapses ── */}
          <div style={{
            flexShrink: 0,
            padding: '14px 28px',
            borderBottom: '1px solid #f3f4f6',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
          }}>
            <div>
              <Label>{t('modal_title')}</Label>
              <p style={{
                fontFamily: 'var(--font-display, sans-serif)',
                fontWeight: 800,
                fontSize: 'clamp(1.4rem, 3vw, 1.75rem)',
                color: '#0f0a1e',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                marginTop: 4,
              }}>
                {t('modal_headline')}
              </p>
            </div>
            <button
              onClick={onClose}
              aria-label="Schließen"
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                width: 34, height: 34, flexShrink: 0, marginTop: 2,
                background: 'none', border: '1px solid #e5e7eb', cursor: 'pointer',
                color: '#9ca3af', transition: 'color 0.15s, border-color 0.15s',
                borderRadius: 0,
              }}
              onMouseEnter={e => { e.currentTarget.style.color = '#111827'; e.currentTarget.style.borderColor = '#111827' }}
              onMouseLeave={e => { e.currentTarget.style.color = '#9ca3af'; e.currentTarget.style.borderColor = '#e5e7eb' }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* ── Body — scrollable ── */}
          <div style={{ flex: 1, minHeight: 0, overflowY: 'auto', padding: '20px 28px 32px' }}>
            {submitted ? (
              /* Success */
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 20, padding: '20px 0' }}>
                <div style={{
                  width: 48, height: 48,
                  border: '1.5px solid #8B5CF6',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div>
                  <p style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.2rem', color: '#0f0a1e', marginBottom: 8, letterSpacing: '-0.01em' }}>
                    {t('modal_success_title')}
                  </p>
                  <p style={{ color: '#6b7280', fontSize: '0.85rem', lineHeight: 1.65, maxWidth: 300 }}>
                    {t('modal_success_body')}
                  </p>
                </div>
                <button
                  onClick={onClose}
                  style={{
                    fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.18em',
                    color: '#9ca3af', background: 'none', border: 'none', cursor: 'pointer',
                    marginTop: 4, transition: 'color 0.2s', textTransform: 'uppercase',
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = '#6b7280'}
                  onMouseLeave={e => e.currentTarget.style.color = '#9ca3af'}
                >
                  ← Schließen
                </button>
              </div>
            ) : (
              /* Form */
              <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>

                {/* Name + Email row */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                  <div>
                    <Label>{t('modal_name')}</Label>
                    <input
                      ref={firstFieldRef}
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm(f => ({ ...f, name: e.target.value }))}
                      style={fieldBase}
                      placeholder="Max Muster"
                      onFocus={onFocus}
                      onBlur={onBlur}
                    />
                  </div>
                  <div>
                    <Label>{t('modal_email')}</Label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm(f => ({ ...f, email: e.target.value }))}
                      style={fieldBase}
                      placeholder="max@beispiel.de"
                      onFocus={onFocus}
                      onBlur={onBlur}
                    />
                  </div>
                </div>

                {/* Topic */}
                <div>
                  <Label>{t('modal_topic')}</Label>
                  <div style={{ position: 'relative' }}>
                    <select
                      value={form.topic}
                      onChange={(e) => setForm(f => ({ ...f, topic: e.target.value }))}
                      style={{ ...fieldBase, appearance: 'none', cursor: 'pointer', paddingRight: 36 }}
                      onFocus={onFocus}
                      onBlur={onBlur}
                    >
                      <option value="" disabled>—</option>
                      {topics.map(topic => (
                        <option key={topic} value={topic}>{topic}</option>
                      ))}
                    </select>
                    {/* Chevron */}
                    <svg
                      aria-hidden="true"
                      width="10" height="10" viewBox="0 0 24 24" fill="none"
                      stroke="#9ca3af" strokeWidth="2.5" strokeLinecap="round"
                      style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <Label>{t('modal_message')}</Label>
                  <textarea
                    required
                    rows={3}
                    value={form.message}
                    onChange={(e) => setForm(f => ({ ...f, message: e.target.value }))}
                    style={{ ...fieldBase, resize: 'none', lineHeight: 1.6 }}
                    placeholder={t('modal_message_placeholder')}
                    onFocus={onFocus}
                    onBlur={onBlur}
                  />
                </div>

                {/* File upload */}
                <div>
                  <Label>{t('modal_file')}</Label>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*,.pdf"
                    onChange={handleFileChange}
                    style={{ display: 'none' }}
                    aria-label={t('modal_file')}
                  />
                  {file ? (
                    /* File selected — show name + remove */
                    <div style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                      padding: '10px 14px',
                      border: '1px solid #8B5CF6',
                      background: '#faf5ff',
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8, minWidth: 0 }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>
                        </svg>
                        <span style={{ fontSize: '0.8rem', color: '#111827', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                          {file.name}
                        </span>
                        <span style={{ fontSize: '0.7rem', color: '#9ca3af', flexShrink: 0 }}>
                          ({(file.size / 1024).toFixed(0)} KB)
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => { setFile(null); setFileError(null); fileInputRef.current.value = '' }}
                        style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#9ca3af', padding: '0 0 0 8px', flexShrink: 0, transition: 'color 0.15s' }}
                        onMouseEnter={e => e.currentTarget.style.color = '#ef4444'}
                        onMouseLeave={e => e.currentTarget.style.color = '#9ca3af'}
                        aria-label="Anhang entfernen"
                      >
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                          <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                        </svg>
                      </button>
                    </div>
                  ) : (
                    /* Drop zone */
                    <button
                      type="button"
                      onClick={() => fileInputRef.current.click()}
                      style={{
                        width: '100%', padding: '16px 14px',
                        border: '1px dashed #e5e7eb',
                        background: 'transparent', cursor: 'pointer',
                        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
                        transition: 'border-color 0.18s, background 0.18s',
                        borderRadius: 0,
                      }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = '#8B5CF6'; e.currentTarget.style.background = '#faf5ff' }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = '#e5e7eb'; e.currentTarget.style.background = 'transparent' }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/>
                      </svg>
                      <span style={{ fontSize: '0.8rem', color: '#6b7280' }}>{t('modal_file_hint')}</span>
                    </button>
                  )}
                  {fileError && (
                    <p style={{ fontSize: '0.75rem', color: '#ef4444', marginTop: 6 }}>{fileError}</p>
                  )}
                </div>

                {/* Submit */}
                <div style={{ paddingTop: 4, display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
                    <ShinyButton type="submit" disabled={loading} style={{ opacity: loading ? 0.7 : 1 }}>
                      {loading ? '...' : t('modal_submit')}
                    </ShinyButton>
                    <span style={{
                      fontFamily: 'var(--font-mono)', fontSize: '0.6rem',
                      letterSpacing: '0.12em', color: '#d1d5db', textTransform: 'uppercase',
                    }}>
                      hello@daelionlabs.com
                    </span>
                  </div>
                  {error && (
                    <p style={{ fontSize: '0.8rem', color: '#ef4444', fontFamily: 'inherit' }}>{error}</p>
                  )}
                </div>

              </form>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
