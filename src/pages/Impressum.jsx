import { Link } from 'react-router-dom'

export default function Impressum() {
  return (
    <main className="min-h-screen px-6 md:px-10 lg:px-16 pt-32 pb-24 max-w-2xl">
      <Link
        to="/"
        className="inline-flex items-center gap-2 section-label text-brand-sub/50 hover:text-brand-accent transition-colors duration-200 mb-12"
      >
        ← Zurück zur Startseite
      </Link>

      <h1
        className="font-display font-extrabold text-brand-text tracking-tighter mb-2 leading-none"
        style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}
      >
        Impressum
      </h1>
      <p className="section-label text-brand-sub/50 mb-12">Angaben gemäß § 5 TMG</p>

      <div className="space-y-10 text-brand-text/80" style={{ fontSize: 'var(--text-body)' }}>

        <section>
          <h2 className="font-display font-bold text-brand-text mb-3" style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)' }}>
            Anbieter
          </h2>
          <p className="leading-relaxed">
            Viktor Fink Consulting<br />
            Daelion Labs / Software and AI Agency<br />
            Passauer Str. 21<br />
            94060 Pocking<br />
            Deutschland
          </p>
        </section>

        <section>
          <h2 className="font-display font-bold text-brand-text mb-3" style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)' }}>
            Kontakt
          </h2>
          <p className="leading-relaxed">
            Telefon: <a href="tel:+491772289693" className="text-brand-accent hover:underline">+49 177 228 9693</a><br />
            E-Mail: <a href="mailto:fink.viktor@protonmail.com" className="text-brand-accent hover:underline">fink.viktor@protonmail.com</a>
          </p>
        </section>

        <section>
          <h2 className="font-display font-bold text-brand-text mb-3" style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)' }}>
            Verbraucherstreitbeilegung / Universalschlichtungsstelle
          </h2>
          <p className="leading-relaxed text-brand-sub">
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </section>

      </div>
    </main>
  )
}
