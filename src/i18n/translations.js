export const translations = {
  de: {
    // ── Navbar ──────────────────────────────────────────────
    nav_services: 'Leistungen',
    nav_process:  'Prozess',
    nav_pricing:  'Preise',
    nav_cta:      'Projekt starten',
    nav_menu_open:  'Menu öffnen',
    nav_menu_close: 'Menu schließen',

    // ── Hero ────────────────────────────────────────────────
    hero_section_right: 'Solution Architecture',
    hero_qualifier: 'WIR BAUEN',
    hero_word:      'LÖSUNGEN',
    hero_sub:       'DIE BLEIBEN.',
    hero_desc:      'Jeden Tag verlierst du Stunden an Aufgaben, für die kein fertiges Tool gemacht wurde. Das kostet mehr als Zeit. Wir bauen genau das, was fehlt.',
    hero_cta_primary:   'Projekt starten',
    hero_cta_secondary: 'Mehr erfahren',
    hero_stat_projects: 'Projekte',
    hero_stat_code:     'Custom Code',
    hero_stat_response: 'Antwortzeit',

    // ── ProblemFinder ───────────────────────────────────────
    pf_label:       'WAS KOSTET DICH AM MEISTEN ZEIT?',
    pf_placeholder: 'z. B. manuelle Berichte, Datenpflege …',
    pf_aria_analyze: 'Analysieren',
    pf_aria_suggestions: 'Vorschläge',
    pf_aria_result: 'Ergebnis',
    pf_generic_headline: 'Klingt nach einem guten Fall für uns.',
    pf_generic_body: 'Wir schauen uns das gemeinsam an. Kein Verkaufsgespräch, nur ehrliche Einschätzung.',
    pf_generic_cta:  'Projekt besprechen',
    pf_suggestions: [
      { text: 'Manuelle Dateneingabe kostet Stunden',            category: 'automation' },
      { text: 'Berichte werden von Hand zusammengestellt',        category: 'data' },
      { text: 'Kundenkommunikation ist unstrukturiert',           category: 'communication' },
      { text: 'Wir nutzen zu viele verschiedene Tools',           category: 'tooling' },
      { text: 'Wiederkehrende Aufgaben lassen sich nicht automatisieren', category: 'automation' },
      { text: 'Datenauswertung dauert zu lange',                  category: 'data' },
      { text: 'Angebote und Rechnungen werden manuell erstellt',  category: 'automation' },
      { text: 'Interne Prozesse sind nicht dokumentiert',         category: 'tooling' },
      { text: 'KI soll in unsere Workflows integriert werden',    category: 'ai' },
      { text: 'Unser Team kommuniziert über zu viele Kanäle',     category: 'communication' },
    ],
    pf_responses: {
      automation: {
        tag:      'Automatisierung',
        headline: 'Das klingt nach einem klaren Fall für Automatisierung.',
        body:     'Manuelle Arbeit, die sich wiederholt, gehört in eine Pipeline. Nicht auf deinen Tisch. Wir bauen das.',
        cta:      'Automatisierung anfragen',
        href:     '#contact',
      },
      data: {
        tag:      'Daten-Pipeline',
        headline: 'Deine Daten arbeiten noch nicht für dich.',
        body:     'Berichte, die sich selbst schreiben. Dashboards, die immer aktuell sind. Das ist lösbar.',
        cta:      'Daten-Lösung besprechen',
        href:     '#contact',
      },
      communication: {
        tag:      'Kommunikations-Tool',
        headline: 'Chaos in der Kommunikation kostet echte Zeit.',
        body:     'Ein zentrales System, das Anfragen sortiert, beantwortet und weiterleitet. Maßgeschneidert für euren Prozess.',
        cta:      'Lösung ansehen',
        href:     '#contact',
      },
      ai: {
        tag:      'KI-Integration',
        headline: 'KI macht erst Sinn, wenn sie in deinen Prozess passt.',
        body:     'Kein generisches ChatGPT-Wrapper. Wir bauen KI-Funktionen, die direkt in deine Abläufe greifen.',
        cta:      'KI-Projekt starten',
        href:     '#contact',
      },
      tooling: {
        tag:      'System-Integration',
        headline: 'Zu viele Tools. Zu wenig System.',
        body:     'Wir verbinden, was getrennt ist, und ersetzen, was nicht funktioniert. Eine Plattform statt zehn Tabs.',
        cta:      'Analyse starten',
        href:     '#contact',
      },
    },

    // ── Problem ─────────────────────────────────────────────
    problem_section_right: 'Das Problem',
    problem_label:    'Die letzten 30 % kosten dich am meisten.',
    problem_headline: 'Standardtools lösen 70\u00a0% deines Problems.',
    problem_body: [
      'Calendly, Notion, Standard-CRMs: all das ist für den Durchschnitt gebaut. Dein Unternehmen hat Workflows, Sonderfälle und Abläufe, die über Jahre im echten Betrieb gewachsen sind. Generische Software löst das Allgemeine, nicht das Deine.',
      'Diese fehlenden 30\u00a0% kosten dich täglich Stunden, erzwingen manuelle Workarounds und frustrieren dein Team. Sie sind der Engpass, der dein Wachstum deckelt. Genau dort setzen wir an.',
    ],

    // ── WhatWeBuild ─────────────────────────────────────────
    wwb_section_right: 'Leistungen',
    wwb_h1:  'Was wir',
    wwb_h2:  'bauen',
    wwb_sub: 'Kein Template. Kein Standard. Genau was du brauchst.',
    wwb_capabilities: [
      {
        number: '01',
        title:  'Individuelle Buchungs- & Automatisierungssysteme',
        tag:    'Automation',
        desc:   'Buchungen, Planungslogik, Sales-Pipelines. Alles läuft automatisch, so wie dein Team es braucht. Mehr Kapazität, weniger Koordinationsaufwand.',
      },
      {
        number: '02',
        title:  'KI-gestützte Workflow-Optimierungen',
        tag:    'AI / ML',
        desc:   'Routineaufgaben, die heute Stunden kosten, laufen morgen automatisch. KI übernimmt das Repetitive. Du behältst den Kopf frei.',
      },
      {
        number: '03',
        title:  'Interne Business-Tools & digitale Assistenten',
        tag:    'Tooling',
        desc:   'Dashboards und Tools, die dein Team tatsächlich nutzt. Gebaut für eure Abläufe, nicht für irgendeinen Durchschnittskunden.',
      },
      {
        number: '04',
        title:  'Prozessautomatisierungen, die sich rechnen',
        tag:    'Process',
        desc:   'Abläufe, die heute Nerven und Budget kosten, laufen vollautomatisch. Weniger Fehler, niedrigere Kosten, mehr Output. Ohne neues Personal.',
      },
    ],

    // ── WinsSection ─────────────────────────────────────────
    wins_section_right: 'Dein Vorteil',
    wins_h1:  'Was du',
    wins_h2:  'davon hast.',
    wins_sub: 'Kein SaaS-Tool passt genau. Kein Freelancer denkt das zu Ende.',
    wins_cards: [
      {
        metric: '10+ Std.',
        unit:   'pro Woche',
        title:  'Zeit zurückgewinnen',
        desc:   'Was dich heute jeden Morgen eine Stunde kostet, läuft morgen automatisch. Unsere Kunden merken es spätestens nach einer Woche.',
      },
      {
        metric: '0 €',
        unit:   'laufende Gebühren',
        title:  'Kein Abo, kein Lock-in',
        desc:   'Einmal gebaut, gehört dir alles. Kein Abo, keine Abhängigkeit, kein monatliches Danke.',
      },
      {
        metric: '100%',
        unit:   'maßgeschneidert',
        title:  'Echter Wettbewerbsvorteil',
        desc:   'Eine individuelle Lösung gibt es nicht im App Store. Dein Wettbewerber kann sie weder kaufen noch kopieren.',
      },
      {
        metric: 'Wochen',
        unit:   'nicht Monate',
        title:  'Schnell und direkt',
        desc:   'Kein Account-Manager-Ping-Pong. Du sprichst direkt mit dem Team, das baut. Erste funktionsfähige Version in wenigen Wochen.',
      },
    ],

    // ── CaseStudies ─────────────────────────────────────────
    cs_section_right: 'Anonymisierte Referenzen',
    cs_h1: 'Was wirklich',
    cs_h2: 'passiert ist.',
    cs_sub: 'Alle Projekte anonymisiert. Echte Zahlen.',
    cs_label_problem:  'Ausgangslage',
    cs_label_solution: 'Lösung',
    cs_label_result:   'Ergebnis',
    cs_cases: [
      {
        tag:      'Business Coaching',
        metric:   '9 Std.',
        unit:     'pro Woche gespart',
        title:    'Vom Buchungschaos zur automatisierten Kunden-Pipeline',
        problem:  'Jede Neukunden-Anfrage bedeutete 45 Minuten: E-Mails, manuelles Einbuchen, Dokumente verschicken, Termin bestätigen.',
        solution: 'Automatisches Onboarding mit Kalenderintegration, digitalem Vertrag, Zahlungslink und Begrüßungssequenz — ausgelöst durch ein einziges Formular.',
        result:   '38 % weniger Stornierungen. 9 Stunden pro Woche zurückgewonnen.',
      },
      {
        tag:      'E-Commerce / KMU',
        metric:   '2,5 Std.',
        unit:     'täglich → 8 Minuten',
        title:    'Ein Dashboard statt drei Tabellen',
        problem:  'Umsatz, Lagerbestand und Retouren lagen in drei verschiedenen Tools. Der Tagesabschluss war ein manuelles Puzzle.',
        solution: 'Ein zentrales Reporting-Dashboard, das alle Quellen live zusammenführt und den Tagesbericht automatisch erstellt und versendet.',
        result:   'Tagesbericht von 2,5 Stunden auf 8 Minuten. Keine Übertragungsfehler mehr.',
      },
      {
        tag:      'Sales / Vertrieb',
        metric:   '+41 %',
        unit:     'mehr Kundenkontakte',
        title:    'CRM-Pflege, die läuft — ohne dass jemand tippt',
        problem:  'Das Vertriebsteam verbrachte täglich 90 Minuten mit CRM-Updates, Gesprächsnotizen und Follow-up-Planung statt mit Kunden.',
        solution: 'Automatische Gesprächsprotokollierung, Lead-Scoring und Follow-up-Sequenzen, direkt aus dem bestehenden CRM heraus.',
        result:   '41 % mehr Kundenkontakte pro Woche. Vollständige Pipeline-Übersicht in Echtzeit.',
      },
    ],

    // ── HowItWorks ──────────────────────────────────────────
    hiw_section_right: 'So arbeiten wir',
    hiw_h1: 'So arbeiten',
    hiw_h2: 'wir',
    hiw_steps: [
      {
        number: '01',
        title:  'Discovery',
        desc:   'Wir verstehen dein Problem genau: die Workflows, die Sonderfälle, die Lücke, die dich täglich aufhält.',
      },
      {
        number: '02',
        title:  'Architektur',
        desc:   'Wir entwerfen die Lösung, die zu deinem Fall passt. Keine Templates, kein Standarddenken. Reine Architektur für dich.',
      },
      {
        number: '03',
        title:  'Build & Deploy',
        desc:   'Wir bauen und liefern. Saubere Umsetzung, klare Übergabe und Support dort, wo du ihn brauchst.',
      },
    ],

    // ── Pricing ─────────────────────────────────────────────
    pricing_section_right: 'Preismodell',
    pricing_h1:  'Einfach.',
    pricing_h2:  'Transparent.',
    pricing_sub: 'Jedes Projekt wird individuell kalkuliert. Kein Abo. Kein Lock-in.',
    pricing_setup_label: 'Setup Fee',
    pricing_setup_title: 'Einmalig',
    pricing_setup_desc:  'Deckt die gesamte Entwicklung und Implementierung deiner Lösung ab. Projektgenau kalkuliert, keine Überraschungsrechnungen.',
    pricing_setup_bullets: ['Projektgenau kalkuliert', 'Vollständige Entwicklung inklusive', 'Keine Überraschungsrechnungen'],
    pricing_retainer_label: 'Retainer',
    pricing_retainer_title: 'Optional',
    pricing_retainer_sub:   '/ projektabhängig',
    pricing_retainer_desc:  'Wenn deine Lösung laufende Infrastruktur, Wartung oder Updates braucht, bieten wir einen projektabhängigen Retainer. Nur wenn es wirklich Sinn ergibt.',
    pricing_retainer_bullets: ['Laufendes Hosting & Wartung', 'Updates und Weiterentwicklung', 'Kontinuierlicher Support'],

    // ── CTASection ──────────────────────────────────────────
    cta_section_right: 'Jetzt starten',
    cta_headline: 'Bereit.',
    cta_desc:     'Schreib uns kurz, was dich täglich ausbremst. Wir antworten innerhalb von 24 Stunden mit einem ersten konkreten Ansatz. Kostenlos.',
    cta_button:   'Lösung anfragen →',

    // ── Footer ──────────────────────────────────────────────
    footer_tagline:     'Wir bauen Lösungen.',
    footer_rights:      'Alle Rechte vorbehalten.',
    footer_impressum:   'Impressum',
    footer_datenschutz: 'Datenschutz',
  },

  // ────────────────────────────────────────────────────────────────────────────
  en: {
    // ── Navbar ──────────────────────────────────────────────
    nav_services: 'Services',
    nav_process:  'Process',
    nav_pricing:  'Pricing',
    nav_cta:      'Start project',
    nav_menu_open:  'Open menu',
    nav_menu_close: 'Close menu',

    // ── Hero ────────────────────────────────────────────────
    hero_section_right: 'Solution Architecture',
    hero_qualifier: 'WE BUILD',
    hero_word:      'SOLUTIONS',
    hero_sub:       'THAT LAST.',
    hero_desc:      "Every day you lose hours on tasks no off-the-shelf tool was built for. That costs more than time. We build exactly what's missing.",
    hero_cta_primary:   'Start project',
    hero_cta_secondary: 'Learn more',
    hero_stat_projects: 'Projects',
    hero_stat_code:     'Custom Code',
    hero_stat_response: 'Response time',

    // ── ProblemFinder ───────────────────────────────────────
    pf_label:       'WHAT COSTS YOU THE MOST TIME?',
    pf_placeholder: 'e.g. manual reports, data maintenance ...',
    pf_aria_analyze:     'Analyze',
    pf_aria_suggestions: 'Suggestions',
    pf_aria_result:      'Result',
    pf_generic_headline: 'Sounds like a good case for us.',
    pf_generic_body: "We'll look at it together. No sales pitch, just an honest assessment.",
    pf_generic_cta:  'Discuss project',
    pf_suggestions: [
      { text: 'Manual data entry costs hours',                   category: 'automation' },
      { text: 'Reports are assembled by hand',                   category: 'data' },
      { text: 'Customer communication is unstructured',          category: 'communication' },
      { text: 'We use too many different tools',                 category: 'tooling' },
      { text: 'Recurring tasks cannot be automated',             category: 'automation' },
      { text: 'Data analysis takes too long',                    category: 'data' },
      { text: 'Proposals and invoices are created manually',     category: 'automation' },
      { text: 'Internal processes are not documented',           category: 'tooling' },
      { text: 'We want to integrate AI into our workflows',      category: 'ai' },
      { text: 'Our team communicates across too many channels',  category: 'communication' },
    ],
    pf_responses: {
      automation: {
        tag:      'Automation',
        headline: "That sounds like a clear case for automation.",
        body:     "Manual work that repeats belongs in a pipeline. Not on your desk. We build it.",
        cta:      'Request automation',
        href:     '#contact',
      },
      data: {
        tag:      'Data Pipeline',
        headline: "Your data isn't working for you yet.",
        body:     "Reports that write themselves. Dashboards that are always up to date. That's solvable.",
        cta:      'Discuss data solution',
        href:     '#contact',
      },
      communication: {
        tag:      'Communication Tool',
        headline: 'Communication chaos costs real time.',
        body:     "A central system that sorts, responds to and routes requests. Tailored to your process.",
        cta:      'View solution',
        href:     '#contact',
      },
      ai: {
        tag:      'AI Integration',
        headline: 'AI only makes sense when it fits your process.',
        body:     "No generic ChatGPT wrapper. We build AI features that plug directly into your workflows.",
        cta:      'Start AI project',
        href:     '#contact',
      },
      tooling: {
        tag:      'System Integration',
        headline: 'Too many tools. Not enough system.',
        body:     "We connect what's separated and replace what's not working. One platform instead of ten tabs.",
        cta:      'Start analysis',
        href:     '#contact',
      },
    },

    // ── Problem ─────────────────────────────────────────────
    problem_section_right: 'The Problem',
    problem_label:    'The last 30% cost you the most.',
    problem_headline: 'Standard tools solve 70% of your problem.',
    problem_body: [
      "Calendly, Notion, off-the-shelf CRMs: all built for the average case. Your business has workflows, edge cases, and processes that evolved over years of real operations. Generic software solves the general, not yours.",
      "Those missing 30% cost you hours every day, force manual workarounds, and frustrate your team. They're the bottleneck capping your growth. That's exactly where we come in.",
    ],

    // ── WhatWeBuild ─────────────────────────────────────────
    wwb_section_right: 'Services',
    wwb_h1:  'What we',
    wwb_h2:  'build',
    wwb_sub: 'No templates. No shortcuts. Exactly what you need.',
    wwb_capabilities: [
      {
        number: '01',
        title:  'Custom Booking & Automation Systems',
        tag:    'Automation',
        desc:   "Bookings, workflows, sales pipelines. Everything runs automatically, the way your team needs it. More capacity, less coordination overhead.",
      },
      {
        number: '02',
        title:  'AI-Powered Workflow Optimization',
        tag:    'AI / ML',
        desc:   "Routine tasks that eat up hours today run automatically tomorrow. AI handles the repetitive work. You keep your head clear.",
      },
      {
        number: '03',
        title:  'Internal Business Tools & Digital Assistants',
        tag:    'Tooling',
        desc:   "Dashboards and tools your team actually uses. Built for your workflows, not for some average customer.",
      },
      {
        number: '04',
        title:  'Process Automation That Pays Off',
        tag:    'Process',
        desc:   "Processes that drain time and budget run fully automatically. Fewer errors, lower costs, more output. Without new headcount.",
      },
    ],

    // ── WinsSection ─────────────────────────────────────────
    wins_section_right: 'Your advantage',
    wins_h1:  'What you',
    wins_h2:  'get.',
    wins_sub: 'No SaaS tool fits exactly. No freelancer thinks it through.',
    wins_cards: [
      {
        metric: '10+ hrs.',
        unit:   'per week',
        title:  'Win back time',
        desc:   "What costs you an hour every morning runs automatically tomorrow. Our clients feel the difference within a week.",
      },
      {
        metric: '€0',
        unit:   'ongoing fees',
        title:  'No subscription, no lock-in',
        desc:   "Built once, it's all yours. No subscription, no dependency, no monthly thank-you note.",
      },
      {
        metric: '100%',
        unit:   'custom built',
        title:  'Real competitive advantage',
        desc:   "An individual solution isn't in the App Store. Your competitor can neither buy nor copy it.",
      },
      {
        metric: 'Weeks',
        unit:   'not months',
        title:  'Fast and direct',
        desc:   "No account manager ping-pong. You speak directly with the team that builds. First working version within weeks.",
      },
    ],

    // ── CaseStudies ─────────────────────────────────────────
    cs_section_right: 'Anonymised case studies',
    cs_h1: 'What actually',
    cs_h2: 'happened.',
    cs_sub: 'All projects anonymised. Real numbers.',
    cs_label_problem:  'Challenge',
    cs_label_solution: 'Solution',
    cs_label_result:   'Result',
    cs_cases: [
      {
        tag:      'Business Coaching',
        metric:   '9 hrs.',
        unit:     'saved per week',
        title:    'From booking chaos to an automated client pipeline',
        problem:  'Every new client inquiry took 45 minutes: emails, manual scheduling, sending documents, confirming appointments.',
        solution: 'Automated onboarding with calendar integration, digital contract, payment link and welcome sequence — triggered by a single form submission.',
        result:   '38% fewer cancellations. 9 hours per week reclaimed.',
      },
      {
        tag:      'E-Commerce / SMB',
        metric:   '2.5 hrs.',
        unit:     'daily → 8 minutes',
        title:    'One dashboard instead of three spreadsheets',
        problem:  'Revenue, inventory and returns lived in three different tools. The daily close was a manual puzzle — every single day.',
        solution: 'A central reporting dashboard that aggregates all sources in real time and automatically creates and sends the daily report.',
        result:   'Daily report from 2.5 hours to 8 minutes. No more transfer errors.',
      },
      {
        tag:      'Sales',
        metric:   '+41%',
        unit:     'more customer contacts',
        title:    'CRM updates that happen — without anyone typing',
        problem:  'The sales team spent 90 minutes a day on CRM updates, call notes and follow-up planning instead of talking to customers.',
        solution: 'Automated call logging, lead scoring and follow-up sequences, built directly into the existing CRM.',
        result:   '41% more customer contacts per week. Full pipeline visibility in real time.',
      },
    ],

    // ── HowItWorks ──────────────────────────────────────────
    hiw_section_right: 'How we work',
    hiw_h1: 'How we',
    hiw_h2: 'work',
    hiw_steps: [
      {
        number: '01',
        title:  'Discovery',
        desc:   "We understand your problem precisely: the workflows, the edge cases, the gap that holds you back every day.",
      },
      {
        number: '02',
        title:  'Architecture',
        desc:   "We design the solution that fits your case. No templates, no standard thinking. Pure architecture for you.",
      },
      {
        number: '03',
        title:  'Build & Deploy',
        desc:   "We build and deliver. Clean implementation, clear handover and support wherever you need it.",
      },
    ],

    // ── Pricing ─────────────────────────────────────────────
    pricing_section_right: 'Pricing model',
    pricing_h1:  'Simple.',
    pricing_h2:  'Transparent.',
    pricing_sub: 'Every project is individually calculated. No subscription. No lock-in.',
    pricing_setup_label: 'Setup Fee',
    pricing_setup_title: 'One-time',
    pricing_setup_desc:  'Covers the entire development and implementation of your solution. Calculated per project, no surprise invoices.',
    pricing_setup_bullets: ['Calculated per project', 'Full development included', 'No surprise invoices'],
    pricing_retainer_label: 'Retainer',
    pricing_retainer_title: 'Optional',
    pricing_retainer_sub:   '/ project-dependent',
    pricing_retainer_desc:  'If your solution requires ongoing infrastructure, maintenance or updates, we offer a project-based retainer. Only when it truly makes sense.',
    pricing_retainer_bullets: ['Ongoing hosting & maintenance', 'Updates and further development', 'Continuous support'],

    // ── CTASection ──────────────────────────────────────────
    cta_section_right: 'Get started',
    cta_headline: 'Ready.',
    cta_desc:     "Tell us briefly what's slowing you down every day. We respond within 24 hours with a first concrete approach. Free.",
    cta_button:   'Request solution →',

    // ── Footer ──────────────────────────────────────────────
    footer_tagline:     'We build solutions.',
    footer_rights:      'All rights reserved.',
    footer_impressum:   'Legal Notice',
    footer_datenschutz: 'Privacy Policy',
  },
}
