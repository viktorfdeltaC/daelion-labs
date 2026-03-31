import { Link } from 'react-router-dom'

export default function Datenschutz() {
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
        Datenschutz
      </h1>
      <p className="section-label text-brand-sub/50 mb-12">Datenschutzerklärung gemäß DSGVO</p>

      <div className="space-y-10 text-brand-text/80" style={{ fontSize: 'var(--text-body)' }}>

        <section>
          <h2 className="font-display font-bold text-brand-text mb-3" style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)' }}>
            1. Verantwortlicher
          </h2>
          <p className="leading-relaxed text-brand-sub">
            Viktor Fink Consulting / Daelion Labs<br />
            Passauer Str. 21<br />
            94060 Pocking<br />
            E-Mail: <a href="mailto:fink.viktor@protonmail.com" className="text-brand-accent hover:underline">fink.viktor@protonmail.com</a>
          </p>
        </section>

        <section>
          <h2 className="font-display font-bold text-brand-text mb-3" style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)' }}>
            2. Erhebung und Verarbeitung personenbezogener Daten
          </h2>
          <p className="leading-relaxed text-brand-sub mb-4">
            Wir erheben personenbezogene Daten nur, wenn du uns diese im Rahmen einer Kontaktaufnahme
            freiwillig mitteilst (z.B. Name, E-Mail-Adresse, Nachrichteninhalt). Diese Daten verwenden
            wir ausschließlich zur Bearbeitung deiner Anfrage.
          </p>
          <p className="leading-relaxed text-brand-sub">
            Beim Aufruf unserer Website werden durch den Webserver automatisch technische Zugriffsdaten
            erfasst (Server-Logs), darunter IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene URL
            sowie Browsertyp. Diese Daten dienen ausschließlich dem sicheren Betrieb der Website und
            werden nicht mit anderen Daten zusammengeführt.
          </p>
        </section>

        <section>
          <h2 className="font-display font-bold text-brand-text mb-3" style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)' }}>
            3. Rechtsgrundlage
          </h2>
          <p className="leading-relaxed text-brand-sub">
            Die Verarbeitung von Kontaktdaten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO
            (Vertragsanbahnung) oder Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der
            Bearbeitung von Anfragen). Server-Logs werden auf Basis von Art. 6 Abs. 1 lit. f DSGVO
            verarbeitet.
          </p>
        </section>

        <section>
          <h2 className="font-display font-bold text-brand-text mb-3" style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)' }}>
            4. Speicherdauer
          </h2>
          <p className="leading-relaxed text-brand-sub">
            Kontaktdaten werden gelöscht, sobald die Anfrage abschließend bearbeitet wurde und kein
            berechtigtes Interesse an einer weiteren Aufbewahrung besteht. Server-Logs werden nach
            spätestens 30 Tagen gelöscht.
          </p>
        </section>

        <section>
          <h2 className="font-display font-bold text-brand-text mb-3" style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)' }}>
            5. Weitergabe an Dritte
          </h2>
          <p className="leading-relaxed text-brand-sub">
            Wir geben deine Daten nicht an Dritte weiter, es sei denn, dies ist zur Vertragserfüllung
            erforderlich oder gesetzlich vorgeschrieben. Wir setzen keine Analytics-Dienste oder
            Tracking-Tools ein.
          </p>
        </section>

        <section>
          <h2 className="font-display font-bold text-brand-text mb-3" style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)' }}>
            6. Deine Rechte
          </h2>
          <p className="leading-relaxed text-brand-sub mb-4">
            Du hast gegenüber uns folgende Rechte in Bezug auf deine personenbezogenen Daten:
          </p>
          <ul className="list-disc list-inside space-y-1 text-brand-sub">
            <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
            <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
            <li>Recht auf Löschung (Art. 17 DSGVO)</li>
            <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
            <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
            <li>Recht auf Widerspruch (Art. 21 DSGVO)</li>
          </ul>
          <p className="leading-relaxed text-brand-sub mt-4">
            Du hast außerdem das Recht, dich bei einer Datenschutz-Aufsichtsbehörde zu beschweren.
          </p>
        </section>

        <section>
          <h2 className="font-display font-bold text-brand-text mb-3" style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)' }}>
            7. Kontakt bei Datenschutzfragen
          </h2>
          <p className="leading-relaxed text-brand-sub">
            Bei Fragen zum Datenschutz erreichst du uns unter:{' '}
            <a href="mailto:fink.viktor@protonmail.com" className="text-brand-accent hover:underline">
              fink.viktor@protonmail.com
            </a>
          </p>
        </section>

      </div>
    </main>
  )
}
