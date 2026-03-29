import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Footer from "components/Footers/Footer.js";

// SVG Icons
const IconSearch = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
  </svg>
);
const IconTrending = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
  </svg>
);
const IconClipboard = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
    <rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>
  </svg>
);
const IconTag = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/>
    <line x1="7" y1="7" x2="7.01" y2="7"/>
  </svg>
);
const IconShield = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);
const IconUsers = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);

// Accordion
function FAQItem({ question, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="faq-item">
      <button className="faq-btn" onClick={() => setOpen(!open)} aria-expanded={open}>
        <span className="faq-q" style={{ color: open ? "#00d4ff" : "#e2e8f0" }}>
          {question}
        </span>
        <span
          className="faq-toggle"
          style={{
            background: open ? "rgba(0,212,255,0.12)" : "rgba(255,255,255,0.04)",
            color: open ? "#00d4ff" : "#64748b",
          }}
        >
          {open ? "−" : "+"}
        </span>
      </button>
      {open && <div className="faq-a">{children}</div>}
    </div>
  );
}

function FAQSection({ icon, title, faqs, id }) {
  return (
    <div className="section-card" id={id}>
      <div className="sec-header">
        <span className="sec-icon">{icon}</span>
        <span className="sec-title">{title}</span>
      </div>
      {faqs.map((faq, i) => (
        <FAQItem key={i} question={faq.question}>{faq.answer}</FAQItem>
      ))}
    </div>
  );
}

const Ul = ({ items }) => (
  <ul className="arrow-list">
    {items.map((item, i) => (
      <li key={i}>
        <span style={{ color: "#00d4ff", flexShrink: 0 }}>→</span>
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const CompareTable = ({ rows }) => (
  <div className="compare-wrap">
    <table className="compare-table">
      <thead>
        <tr>
          <th style={{ color: "#00d4ff" }}>Unser Service</th>
          <th style={{ color: "#64748b", paddingLeft: 20 }}>Vulnerability Scanner</th>
        </tr>
      </thead>
      <tbody>
        {rows.map(([left, right], i) => (
          <tr key={i}>
            <td style={{ color: "#cbd5e1", paddingRight: 16 }}>{left}</td>
            <td style={{ color: "#64748b", paddingLeft: 20 }}>{right}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const faqSections = [
  {
    icon: <IconSearch />,
    title: "Produkt & Funktionsweise",
    faqs: [
      {
        question: "Was genau macht dieses Produkt?",
        answer: (
          <p>Es erstellt einen <strong>passiven Exposure-Report</strong> Ihrer externen Angriffsfläche. Basierend auf öffentlich zugänglichen OSINT-Daten zeigen wir, welche Systeme, Dienste und Metadaten von außen sichtbar sind — genau wie ein Angreifer es in der ersten Erkundungsphase sehen würde.</p>
        ),
      },
      {
        question: "Werden meine Systeme gescannt oder angegriffen?",
        answer: (
          <p><strong>Nein.</strong> Es finden keine aktiven Scans statt. Wir werten ausschließlich bereits öffentlich indexierte Informationen aus (Shodan, NVD, CISA KEV, DNS, TLS). Ihre Systeme bemerken nichts davon.</p>
        ),
      },
      {
        question: "Ersetzt der Report einen Penetrationstest?",
        answer: (
          <p>Nein. Ein Penetrationstest prüft aktiv, ob Systeme angreifbar sind. Unser Report zeigt die <strong>externe Sichtbarkeit</strong> — er ist die perfekte Vorbereitung für einen Pentest, aber kein Ersatz. Ein typischer Pentest kostet 5.000–15.000 €; wir liefern einen schnellen Überblick zu einem Bruchteil der Kosten.</p>
        ),
      },
      {
        question: "Warum werden CVEs aufgeführt, wenn nichts gescannt wird?",
        answer: (
          <>
            <p>CVEs werden <strong>theoretisch zugeordnet</strong>, basierend auf öffentlich sichtbaren Softwareversionen aus Shodan-Daten.</p>
            <Ul items={[
              "Keine aktive Verifikation der Schwachstelle",
              "Kein Nachweis der Ausnutzbarkeit",
              "Nur Hinweis auf bekannte Schwachstellen zu dieser Version",
              "CISA KEV-Flag zeigt welche CVEs aktiv in der Praxis ausgenutzt werden",
            ]} />
          </>
        ),
      },
      {
        question: "Ist das für Wix / Shopify / WordPress.com sinnvoll?",
        answer: (
          <>
            <p>In der Regel <strong>nein</strong>. Bei Baukasten-Hosting kontrollieren Sie die Infrastruktur nicht selbst.</p>
            <p style={{ marginTop: 8 }}><strong>Faustregel:</strong> Können Sie Firewall-Regeln oder SSH-Einstellungen ändern?</p>
            <p style={{ marginTop: 4 }}>→ <strong style={{ color: "#00d4ff" }}>Ja</strong> = sinnvoll &nbsp;&nbsp;→ <strong style={{ color: "#64748b" }}>Nein</strong> = nicht geeignet</p>
          </>
        ),
      },
    ],
  },
  {
    icon: <IconTrending />,
    title: "Nutzen & Analyse",
    faqs: [
      {
        question: "Was bringt die Trendanalyse?",
        answer: (
          <>
            <p>Bei wiederholten Reports zeigen wir objektiv:</p>
            <Ul items={[
              "Neue öffentlich sichtbare Dienste",
              "Veränderungen Ihrer Angriffsfläche über Zeit",
              "Erfolge Ihrer Absicherungsmaßnahmen — dokumentiert",
            ]} />
          </>
        ),
      },
      {
        question: "Bedeutet ein besserer Trend automatisch mehr Sicherheit?",
        answer: (
          <p>Nicht unbedingt. Ein positiver Trend zeigt weniger öffentliche Sichtbarkeit — er ersetzt keine technischen Tests, ist aber ein gutes und nachweisbares Signal für Audits und Geschäftsführung.</p>
        ),
      },
      {
        question: "Wie aktuell sind die Daten?",
        answer: (
          <p>Die Aktualität hängt von den OSINT-Quellen (primär Shodan) ab. Änderungen werden mit einer Verzögerung von Stunden bis wenigen Tagen sichtbar.</p>
        ),
      },
      {
        question: "Wie schnell erhalte ich den Report?",
        answer: (
          <p>In der Regel <strong>innerhalb von 24 Stunden</strong> nach Auftragserteilung, oft schneller.</p>
        ),
      },
      {
        question: "Was bedeutet nichts gefunden?",
        answer: (
          <p>Ein positives Signal — aber keine Garantie. Es bedeutet nur, dass aktuell keine öffentlich indexierten Dienste bekannt sind. Nicht gefunden ist nicht gleich nicht vorhanden.</p>
        ),
      },
      {
        question: "Kann durch die Analyse Schaden entstehen?",
        answer: (
          <p>Nein. Da keine aktive Interaktion mit Ihren Systemen stattfindet, besteht kein Risiko für Ausfälle oder Überlastung.</p>
        ),
      },
    ],
  },
  {
    icon: <IconClipboard />,
    title: "Compliance & Business",
    faqs: [
      {
        question: "Kann ich den Report für Compliance nutzen?",
        answer: (
          <>
            <p><strong>Ja, als ergänzende Dokumentation</strong> für Standards wie ISO 27001 oder BSI-Grundschutz.</p>
            <p style={{ marginTop: 8, color: "#64748b" }}>Nicht als alleinigen Nachweis — dafür sind umfassendere Prüfungen nötig. Im Corporate-Paket sind SHA256-gesicherte Archiv-Nachweise auf Anfrage enthalten.</p>
          </>
        ),
      },
      {
        question: "Was unterscheidet Sie von kostenlosen Tools?",
        answer: (
          <Ul items={[
            "Strukturierte Aufbereitung statt Rohdaten",
            "Klare Priorisierung relevanter Exposures nach realer Ausnutzbarkeit",
            "Business-Fokus: verständlich für Entscheider ohne IT-Vorkenntnisse",
            "Manuelle Prüfung — keine Blackbox-Automation",
            "Transparente Grenzen — kein Alarmismus",
          ]} />
        ),
      },
      {
        question: "Welche Maßnahmen werden typisch empfohlen?",
        answer: (
          <Ul items={[
            "Öffentliche Datenbankzugriffe entfernen oder absichern",
            "Admin-Dienste via VPN / IP-Whitelist schützen",
            "HTTPS-only mit HSTS aktivieren",
            "Unnötige Dienste und offene Ports abschalten",
            "Server-Banner minimieren (weniger Versions-Metadaten nach außen)",
          ]} />
        ),
      },
      {
        question: "Gibt es Reports auf Englisch?",
        answer: (
          <>
            <span className="plan-pill">In Planung - voraussichtlich Q2 2026</span>
            <p style={{ marginTop: 8 }}>Derzeit nur auf Deutsch verfügbar. Bei akutem Bedarf für internationale Teams kontaktieren Sie uns bitte direkt.</p>
          </>
        ),
      },
      {
        question: "Gibt es Unternehmenslösungen für viele Assets?",
        answer: (
          <>
            <p>Ja — unsere Pakete skalieren:</p>
            <Ul items={[
              "Essential: bis 5 Assets (99 Euro/Monat)",
              "Professional: bis 20 Assets (199 Euro/Monat)",
              "Corporate: bis 50 Assets (349 Euro/Monat)",
              "Mehr Assets: individuell ab 15 Euro/Asset/Monat",
            ]} />
          </>
        ),
      },
    ],
  },
  {
    icon: <IconTag />,
    title: "Kosten & Wert",
    faqs: [
      {
        question: "Warum kostet der Report 490 Euro?",
        answer: (
          <>
            <p><strong>Sie bezahlen für Expertenanalyse, nicht für Rohdaten.</strong></p>
            <div className="value-grid">
              <div className="value-box cyan">
                <div className="value-box-title">Das erhalten Sie</div>
                <ul>
                  <li><span>→</span><span>Priorisierte Top-Risiken (OSINT)</span></li>
                  <li><span>→</span><span>Konkrete Handlungsempfehlungen</span></li>
                  <li><span>→</span><span>Verständlich für Entscheider</span></li>
                  <li><span>→</span><span>Lieferung in 24h + optionaler Call</span></li>
                </ul>
              </div>
              <div className="value-box dark">
                <div className="value-box-title">Das sparen Sie</div>
                <ul>
                  <li><span>→</span><span>8+ Stunden Analysearbeit intern</span></li>
                  <li><span>→</span><span>Fehlpriorisierungen</span></li>
                  <li><span>→</span><span>Technische Übersetzungsarbeit</span></li>
                  <li><span>→</span><span>False-Positive-Filterung</span></li>
                </ul>
              </div>
            </div>
          </>
        ),
      },
      {
        question: "Gibt es eine Geld-zurück-Garantie?",
        answer: (
          <p>Ja — <strong>30 Tage Geld-zurück-Garantie</strong> bei fehlendem Mehrwert. Kein Aufwand, keine Diskussion.</p>
        ),
      },
      {
        question: "Bieten Sie Umsetzungs-Support?",
        answer: (
          <p>Indirekt: Wir liefern klare Anleitungen und vermitteln auf Wunsch vertrauenswürdige IT-Partner für die Implementierung.</p>
        ),
      },
    ],
  },
  {
    icon: <IconShield />,
    title: "Qualität & Sicherheit",
    faqs: [
      {
        question: "Wie sichern Sie die Datenqualität?",
        answer: (
          <Ul items={[
            "Analyse auf Basis etablierter OSINT-Quellen (Shodan, NVD, CISA KEV)",
            "Manuelle Plausibilitätsprüfung jedes Reports vor Auslieferung",
            "Klare Kennzeichnung von OSINT-Indizien ohne technische Verifikation",
            "Volle Transparenz über Quelle, Methodik und Grenzen",
            "30-Tage-Geld-zurück-Garantie bei fehlendem Mehrwert",
          ]} />
        ),
      },
      {
        question: "Was passiert mit meinen Daten?",
        answer: (
          <p>Nach <strong>30 Tagen</strong> werden IP/Domain und Report vollständig gelöscht. Wir verkaufen oder teilen Ihre Daten nicht. Alle Reports werden intern SHA256-gesichert archiviert.</p>
        ),
      },
      {
        question: "Wie handhaben Sie False Positives?",
        answer: (
          <Ul items={[
            "Sofortige Korrektur innerhalb von 24 Stunden",
            "Volle Dokumentation der Quellen pro Befund",
            "Persönliche Klärung im optionalen Review-Call",
            "Kontinuierliche Verbesserung der Erkennungslogik",
          ]} />
        ),
      },
      {
        question: "Was ist der Unterschied zu Vulnerability Scannern?",
        answer: (
          <CompareTable rows={[
            ["Passiv — kein Risiko", "Aktiv — kann Systeme stören"],
            ["Zeigt externe Sichtbarkeit", "Testet Exploitierbarkeit"],
            ["Business-Fokus für Entscheider", "Technischer Fokus für IT"],
            ["24h Lieferung", "Tage/Wochen für vollständige Scans"],
            ["Keine rechtliche Grauzone", "Erfordert schriftliche Genehmigung"],
          ]} />
        ),
      },
      {
        question: "Was passiert nach dem ersten Report?",
        answer: (
          <>
            <p>Typischer Fahrplan nach dem Einmal-Report:</p>
            <Ul items={[
              "Woche 1: Kritische Risiken beheben",
              "Woche 2-4: Strukturelle Maßnahmen umsetzen",
              "Monat 2: Folge-Report zur Dokumentation der Verbesserung",
              "Monat 3: Entscheidung für regelmäßiges Monitoring (Abo)",
            ]} />
          </>
        ),
      },
    ],
  },
  {
    icon: <IconUsers />,
    title: "Vertrauen & Transparenz",
    faqs: [
      {
        question: "Kann ich Ihnen vertrauen, wenn Sie so transparent über Grenzen sind?",
        answer: (
          <p>Ja — genau darum geht es. <strong>In einer Branche voller Blackbox-Lösungen ist unsere radikale Transparenz unser stärkstes Vertrauenssignal.</strong> Wir zeigen jeden Schritt, jede Grenze, jede Unsicherheit — weil Sicherheit mit Klarheit beginnt.</p>
        ),
      },
      {
        question: "Sind Sie Mitglied in anerkannten Sicherheitsnetzwerken?",
        answer: (
          <p>Ja — wir sind Mitglied im <strong>Cyber-Sicherheitsnetzwerk Deutschland</strong> des BSI.</p>
        ),
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <>
      <Head>
        <title>FAQ - ichwillsicherheit.de</title>
        <meta name="description" content="Häufige Fragen zum Exposure-Report: Funktionsweise, Kosten, Compliance und Qualität." />
      </Head>

      <div className="iws-page cyber-bg">

        <div className="wrap">

          {/* HERO */}
          <div className="hero">
            <div className="slabel">FAQ</div>
            <h1>Klare Antworten.<br /><span className="grad">Keine Floskeln.</span></h1>
            <p className="hero-sub">
              Alles was Sie über den Exposure-Report wissen sollten —
              inklusive der Dinge, die wir bewusst nicht können oder tun.
            </p>
          </div>

          {/* NAV PILLS */}
          <div className="nav-pills">
            {faqSections.map((s, i) => (
              <a key={i} href={`#sec-${i}`} className="pill">
                <span className="pill-icon">{s.icon}</span>
                <span>{s.title}</span>
              </a>
            ))}
          </div>

          {/* FAQ SECTIONS */}
          <div className="faq-sections">
            {faqSections.map((section, i) => (
              <FAQSection
                key={i}
                id={`sec-${i}`}
                icon={section.icon}
                title={section.title}
                faqs={section.faqs}
              />
            ))}
          </div>

          {/* FINAL CTA */}
          <div className="final-cta">
            <h2>Noch Fragen offen?</h2>
            <p>Wir beraten Sie gerne persönlich — oder Sie starten direkt kostenlos.</p>
            <div className="btn-row">
              <Link href="/contact" legacyBehavior>
                <a className="btn-primary">Kostenlos starten →</a>
              </Link>
              <Link href="/pricing" legacyBehavior>
                <a className="btn-ghost">Preise ansehen</a>
              </Link>
            </div>
          </div>

        </div>

        <Footer />

        <style jsx global>{`
          .iws-page {
            background: #0a192f;
            min-height: 100vh;
            font-family: 'Segoe UI', system-ui, sans-serif;
            color: #e2e8f0;
          }
          .iws-page .wrap {
            max-width: 860px;
            margin: 0 auto;
            padding: 0 24px 80px;
          }
          .iws-page .hero { text-align: center; padding: 80px 0 40px; }
          .iws-page .slabel { font-size: 11px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: #00d4ff; margin-bottom: 12px; }
          .iws-page .hero h1 { font-size: clamp(26px,4vw,40px) !important; font-weight: 800 !important; letter-spacing: -0.03em !important; line-height: 1.1 !important; color: #fff !important; margin-bottom: 14px !important; -webkit-text-fill-color: unset !important; background: none !important; }
          .iws-page .grad { background: linear-gradient(90deg,#00d4ff,#4fa3ff); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
          .iws-page .hero-sub { color: #64748b; font-size: 15px; max-width: 460px; margin: 0 auto; line-height: 1.65; }

          /* Nav pills */
          .iws-page .nav-pills { display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; margin-bottom: 40px; }
          .iws-page .pill { display: inline-flex; align-items: center; gap: 6px; padding: 8px 14px; border-radius: 12px; font-size: 12px; font-weight: 600; background: rgba(15,23,42,0.7); border: 1px solid rgba(0,212,255,0.1); color: #64748b; text-decoration: none; transition: all 0.2s; }
          .iws-page .pill:hover { color: #00d4ff; border-color: rgba(0,212,255,0.25); }
          .iws-page .pill-icon { color: #475569; display: flex; align-items: center; transition: color 0.2s; }
          .iws-page .pill:hover .pill-icon { color: #00d4ff; }

          /* Sections */
          .iws-page .faq-sections { display: flex; flex-direction: column; gap: 14px; margin-bottom: 48px; }
          .iws-page .section-card { background: rgba(20,30,48,0.75); border: 1px solid rgba(0,212,255,0.1); border-radius: 16px; overflow: hidden; }
          .iws-page .sec-header { display: flex; align-items: center; gap: 10px; padding: 20px 24px; border-bottom: 1px solid rgba(0,212,255,0.06); }
          .iws-page .sec-icon { color: #00d4ff; display: flex; align-items: center; }
          .iws-page .sec-title { font-size: 14px; font-weight: 700; color: #e2e8f0; }

          /* Accordion */
          .iws-page .faq-item { border-bottom: 1px solid rgba(0,212,255,0.06); }
          .iws-page .faq-item:last-child { border-bottom: none; }
          .iws-page .faq-btn { width: 100%; display: flex; justify-content: space-between; align-items: flex-start; gap: 12px; padding: 16px 24px; background: none; border: none; cursor: pointer; text-align: left; }
          .iws-page .faq-q { font-size: 13px; font-weight: 600; line-height: 1.4; flex: 1; transition: color 0.2s; }
          .iws-page .faq-toggle { width: 20px; height: 20px; border-radius: 4px; font-size: 14px; font-weight: 700; display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 1px; transition: all 0.2s; }
          .iws-page .faq-a { padding: 0 24px 16px; font-size: 13px; color: #94a3b8; line-height: 1.65; }
          .iws-page .faq-a strong { color: #e2e8f0; }

          /* Arrow list */
          .iws-page .arrow-list { list-style: none; padding: 0; margin-top: 8px; }
          .iws-page .arrow-list li { display: flex; gap: 8px; padding: 3px 0; }

          /* Compare table */
          .iws-page .compare-wrap { overflow-x: auto; margin-top: 12px; }
          .iws-page .compare-table { width: 100%; font-size: 12px; border-collapse: collapse; }
          .iws-page .compare-table th { text-align: left; padding-bottom: 6px; font-weight: 600; }
          .iws-page .compare-table td { padding: 6px 0; border-top: 1px solid rgba(0,212,255,0.06); }

          /* Value grid */
          .iws-page .value-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 12px; font-size: 12px; }
          .iws-page .value-box { padding: 12px; border-radius: 8px; }
          .iws-page .value-box.cyan { background: rgba(0,212,255,0.04); border: 1px solid rgba(0,212,255,0.1); }
          .iws-page .value-box.dark { background: rgba(15,23,42,0.6); border: 1px solid rgba(255,255,255,0.04); }
          .iws-page .value-box-title { font-weight: 600; margin-bottom: 8px; }
          .iws-page .value-box.cyan .value-box-title { color: #00d4ff; }
          .iws-page .value-box.dark .value-box-title { color: #64748b; }
          .iws-page .value-box ul { list-style: none; padding: 0; }
          .iws-page .value-box li { display: flex; gap: 6px; padding: 2px 0; color: #94a3b8; }
          .iws-page .value-box.dark li { color: #64748b; }

          /* Plan pill */
          .iws-page .plan-pill { display: inline-block; font-size: 11px; font-weight: 700; padding: 2px 8px; border-radius: 100px; background: rgba(0,119,255,0.1); border: 1px solid rgba(0,119,255,0.2); color: #60a5fa; margin-bottom: 8px; }

          /* Final CTA */
          .iws-page .final-cta { background: linear-gradient(135deg, rgba(0,212,255,0.06), rgba(0,119,255,0.04)); border: 1px solid rgba(0,212,255,0.14); border-radius: 18px; padding: 48px 32px; text-align: center; }
          .iws-page .final-cta h2 { font-size: clamp(22px,3vw,30px) !important; font-weight: 800 !important; letter-spacing: -0.03em !important; color: #fff !important; margin-bottom: 10px !important; -webkit-text-fill-color: unset !important; background: none !important; }
          .iws-page .final-cta p { color: #64748b; font-size: 14px; margin-bottom: 24px; }
          .iws-page .btn-row { display: flex; justify-content: center; gap: 12px; flex-wrap: wrap; }
          .iws-page .btn-primary { display: inline-flex; align-items: center; padding: 14px 28px; border-radius: 12px; font-weight: 800; font-size: 14px; background: #00d4ff; color: #001f3f; text-decoration: none; position: relative; overflow: hidden; transition: all 0.2s; }
          .iws-page .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,212,255,0.2); }
          .iws-page .btn-ghost { display: inline-flex; align-items: center; padding: 14px 24px; border-radius: 12px; font-size: 13px; border: 1px solid rgba(0,212,255,0.2); color: #00d4ff; text-decoration: none; background: transparent; transition: all 0.2s; }
          .iws-page .btn-ghost:hover { background: rgba(0,212,255,0.06); }

          @media (max-width: 560px) {
            .iws-page .value-grid { grid-template-columns: 1fr; }
          }
        `}</style>
      </div>
    </>
  );
}
