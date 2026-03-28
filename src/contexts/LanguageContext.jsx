import { createContext, useContext, useState } from 'react'
import { translations } from '../i18n/translations'

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('de')
  const toggle = () => setLang(l => (l === 'de' ? 'en' : 'de'))
  // t(key) — returns translation string; falls back to key if missing
  const t = key => translations[lang][key] ?? key

  return (
    <LanguageContext.Provider value={{ lang, t, toggle }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
