import React, { useState } from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import Link from "next/link";

export default function FAQPage() {
  const faqSections = [
    {
      title: "1. Produkt & Funktionsweise",
      faqs: [
        {
          question: "Was genau macht dieses Produkt?",
          answer: (
            <p>
              Es erstellt einen <strong>passiven Exposure-Report</strong> Ihrer externen Angriffsfläche. Basierend auf öffentlich
              zugänglichen OSINT-Daten zeigen wir, welche Systeme, Dienste und Metadaten von außen sichtbar sind – genau wie ein
              Angreifer es in der ersten Erkundungsphase sehen würde.
            </p>
          ),
        },
        {
          question: "Werden meine Systeme gescannt oder angegriffen?",
          answer: (
            <p>
              <strong>Nein.</strong> Es finden <strong>keine aktiven Scans</strong> statt. Wir werten ausschließlich bereits öffentlich indexierte
              Informationen aus. Ihre Systeme bemerken nichts davon.
            </p>
          ),
        },
        {
          question: "Ersetzt der Report einen Penetrationstest?",
          answer: (
            <p>
              <strong>Nein.</strong> Ein Penetrationstest prüft aktiv, ob Systeme angreifbar sind. Unser Report zeigt nur die <strong>externe Sichtbarkeit</strong>.
              Er ist die perfekte Vorbereitung für einen Pentest, aber kein Ersatz.
            </p>
          ),
        },
        {
          question: "Warum werden CVEs aufgeführt, wenn nichts gescannt wird?",
          answer: (
            <div>
              <p>
                CVEs werden <strong>theoretisch zugeordnet</strong>, basierend auf öffentlich sichtbaren Softwareversionen.
              </p>
              <p className="mt-2"><strong>Wichtig:</strong></p>
              <ul className="list-disc pl-5 space-y-1 text-gray-200">
                <li>Keine Verifikation der Schwachstelle</li>
                <li>Kein Nachweis der Ausnutzbarkeit</li>
                <li>Nur Hinweis auf bekannte Schwachstellen zu dieser Version</li>
              </ul>
            </div>
          ),
        },
      ],
    },
    {
      title: "2. Nutzen & Analyse",
      faqs: [
        {
          question: "Was bringt die Trendanalyse?",
          answer: (
            <div>
              <p>Bei wiederholten Reports zeigen wir objektiv:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-200">
                <li>Neue öffentlich sichtbare Dienste</li>
                <li>Veränderungen Ihrer Angriffsfläche</li>
                <li>Erfolge Ihrer Absicherungsmaßnahmen</li>
              </ul>
            </div>
          ),
        },
        {
          question: "Bedeutet ein besserer Trend mehr Sicherheit?",
          answer: <p>Nicht unbedingt. Ein positiver Trend zeigt nur weniger Sichtbarkeit. Er ersetzt keine technischen Tests, ist aber ein gutes Signal.</p>,
        },
        {
          question: "Ist das für Wix/Shopify/WordPress.com sinnvoll?",
          answer: (
            <div>
              <p><strong>In der Regel nein.</strong> Bei Baukasten-Hosting kontrollieren Sie die Infrastruktur nicht selbst.</p>
              <p className="mt-2"><strong>Faustregel:</strong> Können Sie Firewall-Regeln oder SSH-Einstellungen ändern?</p>
              <p>→ <strong>Ja</strong> = sinnvoll &nbsp;&nbsp; → <strong>Nein</strong> = nicht geeignet</p>
            </div>
          ),
        },
        {
          question: "Kann durch die Analyse Schaden entstehen?",
          answer: <p>Nein. Da keine aktive Interaktion stattfindet, besteht kein Risiko für Ausfälle oder Überlastung.</p>,
        },
        {
          question: "Wie aktuell sind die Daten?",
          answer: <p>Die Aktualität hängt von den OSINT-Quellen ab. Änderungen werden mit Verzögerung von Stunden bis wenigen Tagen sichtbar.</p>,
        },
        {
          question: "Wie schnell erhalte ich den Report?",
          answer: <p>In der Regel <strong>innerhalb von 24 Stunden</strong> nach Auftragserteilung, oft schneller.</p>,
        },
        {
          question: "Was bedeutet \u201enichts gefunden\u201c?",
          answer: <p>Ein positives Signal, aber keine Garantie. Es bedeutet nur, dass aktuell keine öffentlich indexierten Dienste bekannt sind.</p>,
        },
      ],
    },
    {
      title: "3. Compliance & Business",
      faqs: [
        {
          question: "Kann ich den Report für Compliance nutzen?",
          answer: (
            <div>
              <p><strong>Ja, als ergänzende Dokumentation</strong> für Standards wie ISO 27001 oder BSI-Grundschutz.</p>
              <p><strong>Nein, als alleinigen Nachweis</strong> – dafür sind umfassendere Prüfungen nötig.</p>
            </div>
          ),
        },
        {
          question: "Was unterscheidet Sie von kostenlosen Tools?",
          answer: (
            <div>
              <ul className="list-disc pl-5 space-y-1 text-gray-200">
                <li><strong>Strukturierte Aufbereitung</strong> statt Rohdaten</li>
                <li><strong>Klare Priorisierung</strong> relevanter Exposures</li>
                <li><strong>Business-Fokus</strong> für Entscheider</li>
                <li><strong>Transparente Grenzen</strong> – kein Alarmismus</li>
              </ul>
            </div>
          ),
        },
        {
          question: "Welche Maßnahmen werden typisch empfohlen?",
          answer: (
            <ol className="list-decimal pl-5 space-y-1 text-gray-200">
              <li>Öffentliche Datenbankzugriffe entfernen</li>
              <li>Admin-Dienste via VPN/Whitelist absichern</li>
              <li>HTTPS-only mit HSTS aktivieren</li>
              <li>Unnötige Dienste abschalten</li>
              <li>Server-Banner minimieren</li>
            </ol>
          ),
        },
        {
          question: "Unterstützen Sie bei der Umsetzung?",
          answer: <p><strong>Nein.</strong> Wir liefern Lagebild und Empfehlungen, aber keine Implementierung. Auf Wunsch vermitteln wir geeignete IT-Dienstleister.</p>,
        },
        {
          question: "Gibt es Unternehmenslösungen?",
          answer: (
            <div>
              <p><strong>Ja:</strong></p>
              <ul className="list-disc pl-5 space-y-1 text-gray-200">
                <li>Pakete für bis zu 50 Assets</li>
                <li>Konsolidierte Standortberichte</li>
                <li>Volume Discounts ab 10 Assets</li>
                <li>White-Label für IT-Dienstleister</li>
              </ul>
            </div>
          ),
        },
        {
          question: "Gibt es Reports auf Englisch?",
          answer: <p><strong>Ja, optional.</strong> Standard ist Deutsch, englische Version +49€. Ideal für internationale Teams.</p>,
        },
      ],
    },
    {
      title: "4. Kosten & Wert",
      faqs: [
        {
          question: "Warum 490€, wenn Shodan kostenlos ist?",
          answer: (
            <div>
              <p>Sie bezahlen für <strong>Analyse, nicht für Daten</strong>:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-200">
                <li>Aus 107 CVEs die 3 relevanten Risiken filtern</li>
                <li>Technische Befunde in Business-Risiken übersetzen</li>
                <li>Konkrete Handlungsanleitungen liefern</li>
                <li>8+ Stunden Arbeit in 24h geliefert</li>
              </ul>
            </div>
          ),
        },
        {
          question: "Bieten Sie Umsetzungs-Support?",
          answer: <p><strong>Indirekt:</strong> Wir liefern klare Anleitungen und vermitteln auf Wunsch vertrauenswürdige IT-Partner für die Implementierung.</p>,
        },
      ],
    },
    {
      title: "5. Qualität & Sicherheit",
      faqs: [
        {
          question: "Wie sichern Sie die Datenqualität?",
          answer: (
            <div>
              <ul className="list-disc pl-5 space-y-1 text-gray-200">
                <li>Multi-Source-Korrelation (3+ Quellen)</li>
                <li>Manuelle Plausibilitätsprüfung jedes Reports</li>
                <li>Volle Transparenz der Quellen</li>
                <li><strong>30-Tage-Geld-zurück-Garantie</strong> bei fehlendem Mehrwert</li>
              </ul>
            </div>
          ),
        },
        {
          question: "Was passiert nach dem Report?",
          answer: (
            <div>
              <p><strong>Typischer Fahrplan:</strong></p>
              <ol className="list-decimal pl-5 space-y-1 text-gray-200">
                <li><strong>Woche 1:</strong> Kritische Risiken beheben</li>
                <li><strong>Woche 2-4:</strong> Strukturelle Maßnahmen umsetzen</li>
                <li><strong>Monat 2:</strong> Folgescan zur Dokumentation</li>
                <li><strong>Monat 3:</strong> Entscheidung für Monitoring oder nächste Stufe</li>
              </ol>
            </div>
          ),
        },
        {
          question: "Was passiert mit meinen Daten?",
          answer: <p>Nach <strong>30 Tagen</strong> werden IP/Domain und Report vollständig gelöscht. Wir verkaufen oder teilen Ihre Daten nicht.</p>,
        },
        {
          question: "Wie handhaben Sie False Positives?",
          answer: (
            <div>
              <ul className="list-disc pl-5 space-y-1 text-gray-200">
                <li>Sofortige Korrektur innerhalb 24h</li>
                <li>Volle Dokumentation der Quellen</li>
                <li>Lernen aus Fehlzuordnungen</li>
                <li>Persönliche Klärung im Review-Call</li>
              </ul>
            </div>
          ),
        },
        {
          question: "Unterschied zu Vulnerability Scannern?",
          answer: (
            <div>
              <table className="w-full text-left text-gray-200">
                <thead>
                  <tr><th className="pr-6">Unser Service</th><th>Vulnerability Scanner</th></tr>
                </thead>
                <tbody>
                  <tr><td>Passiv, kein Risiko</td><td>Aktiv, kann stören</td></tr>
                  <tr><td>Zeigt Sichtbarkeit</td><td>Testet Exploitierbarkeit</td></tr>
                  <tr><td>Business-Fokus</td><td>Technischer Fokus</td></tr>
                  <tr><td>24h Lieferung</td><td>Tage/Wochen für Scans</td></tr>
                </tbody>
              </table>
            </div>
          ),
        },
      ],
    },
    {
      title: "6. Vertrauen & Transparenz",
      faqs: [
        {
          question: "Kann ich Ihnen vertrauen, wenn Sie so transparent sind?",
          answer: (
            <div>
              <p><strong>Ja – genau darum geht es.</strong></p>
              <p>In einer Branche voller Blackbox-Lösungen ist unsere radikale Transparenz unser stärkstes Vertrauenssignal. Wir zeigen jeden Schritt, jede Grenze, jede Unsicherheit – weil Sicherheit mit Klarheit beginnt.</p>
            </div>
          ),
        },
      ],
    },
  ];

  // (Search removed) render all sections from `faqSections`

  return (
    <>
      <Helmet>
        <h2>Cybersecurity FAQ - MG Solutions</h2>
        <meta
          name="description"
          content="Antworten auf häufige Fragen zur Cybersicherheit für Unternehmen und Privatpersonen. Erfahren Sie, wie Sie sich effektiv schützen können."
        />
      </Helmet>
      <IndexNavbar fixed />

      <main className="cyber-bg min-h-screen">
        {/* Hero */}
        <section className="py-16 relative items-center flex min-h-[80vh] ">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-white gradient-text">FAQ – Klare Antworten auf wichtige Fragen</h1>
            <p className="mt-6 text-xl max-w-3xl mx-auto text-white ">Klare, präzise Antworten zu unserem Exposure-Report und Serviceumfang.</p>
          </div>
        </section>

        {/* (Quick links and search removed) */}

        {/* FAQ Sektionen */}
        <div className="py-10">
          <div className="container mx-auto px-4 max-w-7xl text-white">
            <div className="grid grid-cols-1 gap-6">
              {faqSections.map((sec, i) => (
                <div key={i} id={`section-${i}`} className="w-full">
                  <FAQSection title={sec.title} faqs={sec.faqs} />
                </div>
              ))}
            </div>
          </div>
        </div>
    
      {/* Call to Action */}
      <div className="py-20 text-center">
        <h2 className="text-4xl font-bold">Noch Fragen offen?</h2>
        <p className="mt-4 text-lg text-white">Wir beraten Sie gerne persönlich zu Ihrer Cybersicherheit.</p>
        <div className="mt-6">
          <Link href="/contact" passHref legacyBehavior>
            <a className="cyber-direct-btn hover:bg-blue-700 text-white py-3 px-8 rounded-full font-medium transition duration-300 inline-block">Jetzt Kontakt aufnehmen</a>
          </Link>
        </div>
      </div>

      </main>
      <Footer />
    </>
  );
}

// Einzelne FAQ-Sektion
function FAQSection({ title, faqs }) {
  return (
    <div className="p-8 rounded-2xl transition text-white" style={{ backgroundColor: 'rgba(30,41,59,0.8)', border: '1px solid rgba(0,212,255,0.06)' }}>
      <h2 className="text-3xl font-semibold mb-6 text-center">{title}</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <FAQCard key={index} question={faq.question}>
            {faq.answer}
          </FAQCard>
        ))}
      </div>
    </div>
  );
}

// Accordion-Komponente
function FAQCard({ question, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-md transition" style={{ backgroundColor: 'rgba(20,28,43,0.65)', border: '1px solid rgba(0,212,255,0.04)' }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-4 focus:outline-none flex justify-between items-center text-white"
      >
        <h3 className="text-lg font-semibold">{question}</h3>
        <span className={`text-cyan-300 text-2xl transform transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`}>
          +
        </span>
      </button>
      {isOpen && <div className="px-4 pb-4 text-white font-light">{children}</div>}
    </div>
  );
}