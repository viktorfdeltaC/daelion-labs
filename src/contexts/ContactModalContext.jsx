import { createContext, useContext, useState } from 'react'
import ContactModal from '../components/ContactModal'

const ContactModalContext = createContext(null)

export const useContactModal = () => useContext(ContactModalContext)

export function ContactModalProvider({ children }) {
  const [open, setOpen] = useState(false)

  return (
    <ContactModalContext.Provider value={{ openModal: () => setOpen(true) }}>
      {children}
      <ContactModal open={open} onClose={() => setOpen(false)} />
    </ContactModalContext.Provider>
  )
}
