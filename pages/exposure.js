import React from "react";
import Head from "next/head";
import Link from "next/link";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

// SVG Icons
const IconCheck = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 13l4 4L19 7"/>
  </svg>
);
const IconCheckCircle = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
  </svg>
);
const IconAlertTriangle = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
    <line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
  </svg>
);
const IconXCircle = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/>
  </svg>
);
const IconFile = () => (
  <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#334155" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2z"/>
  </svg>
);

function CheckItem({ children }) {
  return (
    <li className="check-item">
      <span className="check-icon"><IconCheck /></span>
      <span>{children}</span>
    </li>
  );
}

function ReportSection({ num, title, desc }) {
  return (
    <div className="report-row">
      <span className="report-num">{num}</span>
      <div>
        <p className="report-title">{title}</p>
        <p className="report-desc">{desc}</p>
      </div>
    </div>
  );
}

const suitability = [
  {
    icon: <IconCheckCircle />,
    title: "Geeignet für",
    iconColor: "#00d4ff",
    bg: "rgba(0,212,255,0.04)",
    border: "rgba(0,212,255,0.12)",
    items: [
      "Unternehmen mit eigener Infrastruktur",
      "IT-Verantwortliche die externe Sicht brauchen",
      "GF die Sicherheits-ROI nachweisen müssen",
      "Vor Audits, ISO 27001 oder BSI-Grundschutz",
      "Nach Mitarbeiterwechsel in der IT",
    ],
  },
  {
    icon: <IconAlertTriangle />,
    title: "Eingeschränkt geeignet",
    iconColor: "#ffb74d",
    bg: "rgba(255,183,77,0.04)",
    border: "rgba(255,183,77,0.12)",
    items: [
      "Sehr kleine Infrastruktur (1 Domain, keine Server)",
      "Keine öffentlich sichtbaren Dienste vorhanden",
      "Rein intern betriebene Systeme",
    ],
  },
  {
    icon: <IconXCircle />,
    title: "Nicht geeignet",
    iconColor: "#ff4d4d",
    bg: "rgba(255,77,77,0.04)",
    border: "rgba(255,77,77,0.12)",
    items: [
      "Wix / Shopify / WordPress.com (kein Infrastruktur-Zugriff)",
      "Als Ersatz für einen Penetrationstest",
      "Für fremde Systeme (nur eigene Infrastruktur)",
    ],
  },
];

export default function ExposurePage() {
  return (
    <>
      <Head>
        <title>Exposure-Report - ichwillsicherheit.de</title>
        <meta name="description" content="Was ist ein Exposure-Report? Wie funktioniert er, was enthält er und für wen ist er geeignet?" />
      </Head>

      <div className="iws-page">
        <IndexNavbar fixed />

        <div className="wrap">

          {/* HERO */}
          <div className="hero">
            <div className="live-badge">
              <span className="live-dot" />
              Passiv · OSINT · 24h Lieferung
            </div>
            <h1>Der Exposure-Report</h1>
            <p className="hero-sub">
              Ein strukturierter Blick auf das, was über Ihr Unternehmen öffentlich
              sichtbar ist — aus der Perspektive eines Angreifers, bevor er handelt.
            </p>
            <div className="hero-btns">
              <Link href="/contact" legacyBehavior>
                <a className="btn-primary">Kostenlos Ersteinschätzung anfordern →</a>
              </Link>
              <Link href="/pricing" legacyBehavior>
                <a className="btn-ghost">Preise ansehen</a>
              </Link>
            </div>
          </div>

          {/* WAS IST ES */}
          <div className="section">
            <div className="split">
              <div>
                <div className="section-label">Was ist ein Exposure-Report?</div>
                <h2>Kein Pentest.<br />Keine Blackbox.<br />Nur Klarheit.</h2>
                <p className="body-text">
                  Ein Exposure-Report analysiert ausschließlich öffentlich zugängliche
                  Informationen — genau das, was ein Angreifer in seiner Erkundungsphase
                  sieht, bevor er irgendetwas unternimmt.
                </p>
                <p className="body-text">
                  Keine aktiven Scans. Kein Eingriff in Ihre Systeme. Keine rechtliche
                  Grauzone. Nur ein realistisches Bild Ihrer externen Sichtbarkeit —
                  verständlich für IT und Geschäftsführung.
                </p>
              </div>
              <div className="compare-card">
                <div className="section-label">Im Vergleich</div>
                <table className="compare-table">
                  <thead>
                    <tr>
                      <th style={{ color: "#00d4ff" }}>Exposure-Report</th>
                      <th style={{ color: "#475569", paddingLeft: 16 }}>Pentest</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Passiv — kein Risiko", "Aktiv — kann stören"],
                      ["Öffentliche Daten", "Interne Tests"],
                      ["24h Lieferung", "Wochen Vorlauf"],
                      ["490 € einmalig", "5.000–15.000 €"],
                      ["Keine Genehmigung nötig", "Schriftliche Genehmigung"],
                      ["Business-Fokus", "Technischer Fokus"],
                    ].map(([l, r], i) => (
                      <tr key={i}>
                        <td style={{ color: "#cbd5e1" }}>{l}</td>
                        <td style={{ color: "#475569", paddingLeft: 16 }}>{r}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* DATENQUELLEN */}
          <div className="section">
            <div className="section-label">Datenquellen & Methodik</div>
            <div className="sources-grid">
              {[
                { name: "Shodan", desc: "Öffentlich indexierte Dienste, Ports, Banner, Softwareversionen" },
                { name: "NVD", desc: "National Vulnerability Database — CVE-Scores und Schwachstellenbeschreibungen" },
                { name: "CISA KEV", desc: "Known Exploited Vulnerabilities — aktiv in der Praxis ausgenutzte Schwachstellen" },
                { name: "DNS / TLS", desc: "Subdomains, Zertifikate, Konfigurationen, ablaufende Zertifikate" },
              ].map(({ name, desc }) => (
                <div key={name} className="source-card">
                  <p className="source-name">{name}</p>
                  <p className="source-desc">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 9 ABSCHNITTE */}
          <div className="section">
            <div className="split">
              <div>
                <div className="section-label">Aufbau des Reports</div>
                <h2>9 Abschnitte.<br />Ein Dokument für alle.</h2>
                <p className="body-text" style={{ marginBottom: 24 }}>
                  IT und Geschäftsführung lesen denselben Report — jeder findet seinen Teil.
                </p>
                <div className="report-sections">
                  <ReportSection num="1" title="Header & Asset-Information" desc="Professionelle Metadaten, analysierte IP/Domain, Zeitstempel, Versionierung." />
                  <ReportSection num="2" title="Management-Zusammenfassung" desc="Executive Summary mit Exposure-Level (1-5), Kernergebnissen und Handlungsbedarf — verständlich ohne IT-Vorkenntnisse." />
                  <ReportSection num="3" title="Trend- & Vergleichsanalyse" desc="Historische Entwicklung zum Vormonat: Was ist neu, was wurde verbessert, was bleibt?" />
                  <ReportSection num="4" title="Priorisierte Handlungsempfehlungen" desc="Konkrete Maßnahmen in Priorität 1 und 2 — nach realer Ausnutzbarkeit sortiert." />
                  <ReportSection num="5" title="Technische Detailanalyse" desc="Ports, Dienste, Softwareversionen, Risikobewertung pro Service." />
                  <ReportSection num="6" title="CVE- & Exploit-Übersicht" desc="Bekannte Schwachstellen mit CVSS-Scores, CISA KEV-Markierung und Quellenangabe." />
                  <ReportSection num="7" title="Methodik & Grenzen" desc="Transparente Dokumentation der verwendeten Quellen und was der Report nicht abdeckt." />
                  <ReportSection num="8" title="Fazit & Ausblick" desc="Zusammenfassung und empfohlene nächste Schritte." />
                  <ReportSection num="9" title="Disclaimer" desc="Rechtlicher Hinweis: OSINT-Indizien, kein Ersatz für Penetrationstest, Vertraulichkeit." />
                </div>
              </div>

              <div>
                <div className="section-label" style={{ color: "#64748b" }}>Beispiel-Report (anonymisiert)</div>
                <div style={{ position: "relative" }}>
                  <div className="preview-badge-top">PASSIV · OSINT</div>
                  <img
                    src="/img/report-preview.png"
                    alt="Anonymisierter Beispiel-Report"
                    style={{ width: "100%", borderRadius: "12px", border: "1px solid rgba(0,212,255,0.15)", display: "block" }}
                  />
                  <div className="preview-badge-bottom">Anonymisiertes Beispiel</div>
                </div>
                <p className="preview-note">9 Abschnitte · SHA256-gesichert · versioniert archiviert</p>
                <ul className="check-list">
                  <CheckItem>Lieferung innerhalb von 24 Stunden</CheckItem>
                  <CheckItem>Manuell geprüft — keine Blackbox-Automation</CheckItem>
                  <CheckItem>Revisionssicher archiviert (SHA256)</CheckItem>
                  <CheckItem>Verständlich für IT und Geschäftsführung</CheckItem>
                  <CheckItem>Optionaler 30-min Review-Call inklusive</CheckItem>
                </ul>
              </div>
            </div>
          </div>

          {/* FÜR WEN */}
          <div className="section">
            <div className="section-label">Für wen ist das sinnvoll?</div>
            <div className="suitability-grid">
              {suitability.map(({ icon, title, iconColor, bg, border, items }) => (
                <div key={title} className="suit-card" style={{ background: bg, border: `1px solid ${border}` }}>
                  <div className="suit-icon" style={{ color: iconColor }}>{icon}</div>
                  <p className="suit-title" style={{ color: iconColor }}>{title}</p>
                  <ul className="suit-items">
                    {items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* FINAL CTA */}
          <div className="final-cta">
            <h2>Bereit für Ihren ersten Exposure-Report?</h2>
            <p>Starten Sie kostenlos mit einer ersten Einschätzung.</p>
            <div className="btn-row">
              <Link href="/contact" legacyBehavior>
                <a className="btn-primary btn-shine">Kostenlose Ersteinschätzung →</a>
              </Link>
              <Link href="/pricing" legacyBehavior>
                <a className="btn-ghost">Preise & Pakete ansehen</a>
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
            max-width: 1000px;
            margin: 0 auto;
            padding: 0 24px 80px;
          }

          /* Hero */
          .iws-page .hero { text-align: center; padding: 80px 0 56px; }
          .iws-page .live-badge { display: inline-flex; align-items: center; gap: 8px; padding: 6px 16px; border-radius: 100px; font-size: 11px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; background: rgba(0,212,255,0.08); border: 1px solid rgba(0,212,255,0.2); color: #00d4ff; margin-bottom: 28px; }
          .iws-page .live-dot { width: 6px; height: 6px; border-radius: 50%; background: #00d4ff; animation: pulse 2s infinite; display: inline-block; }
          @keyframes pulse { 0%,100%{ opacity:1 } 50%{ opacity:0.4 } }
          .iws-page .hero h1 { font-size: clamp(28px,5vw,48px) !important; font-weight: 800 !important; letter-spacing: -0.03em !important; color: #fff !important; margin-bottom: 20px !important; -webkit-text-fill-color: unset !important; background: none !important; line-height: 1.1 !important; }
          .iws-page .hero-sub { font-size: 16px; color: #64748b; max-width: 540px; margin: 0 auto 36px; line-height: 1.7; }
          .iws-page .hero-btns { display: flex; justify-content: center; gap: 14px; flex-wrap: wrap; }

          /* Buttons */
          .iws-page .btn-primary { display: inline-flex; align-items: center; padding: 14px 28px; border-radius: 12px; font-weight: 800; font-size: 14px; background: #00d4ff; color: #001f3f; text-decoration: none; position: relative; overflow: hidden; transition: all 0.2s; }
          .iws-page .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,212,255,0.2); }
          .iws-page .btn-shine::after { content: ""; position: absolute; top: 0; left: -120%; width: 120%; height: 100%; background: linear-gradient(90deg,transparent,rgba(255,255,255,0.18),transparent); transition: left 0.7s ease; pointer-events: none; }
          .iws-page .btn-shine:hover::after { left: 100%; }
          .iws-page .btn-ghost { display: inline-flex; align-items: center; padding: 14px 24px; border-radius: 12px; font-size: 13px; font-weight: 600; border: 1px solid rgba(0,212,255,0.2); color: #00d4ff; text-decoration: none; background: transparent; transition: all 0.2s; }
          .iws-page .btn-ghost:hover { background: rgba(0,212,255,0.06); }
          .iws-page .btn-row { display: flex; justify-content: center; gap: 14px; flex-wrap: wrap; }

          /* Sections */
          .iws-page .section { margin-bottom: 64px; }
          .iws-page .section-label { font-size: 11px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #475569; margin-bottom: 16px; }
          .iws-page .split { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; align-items: start; }
          .iws-page .split h2 { font-size: clamp(20px,2.5vw,28px) !important; font-weight: 800 !important; color: #e2e8f0 !important; letter-spacing: -0.02em !important; line-height: 1.2 !important; margin-bottom: 20px !important; -webkit-text-fill-color: unset !important; background: none !important; }
          .iws-page .body-text { font-size: 13px; color: #94a3b8; line-height: 1.7; margin-bottom: 14px; }

          /* Compare table */
          .iws-page .compare-card { background: rgba(15,23,42,0.8); border: 1px solid rgba(0,212,255,0.12); border-radius: 16px; padding: 24px; }
          .iws-page .compare-table { width: 100%; font-size: 12px; border-collapse: collapse; }
          .iws-page .compare-table th { text-align: left; padding-bottom: 10px; font-weight: 700; }
          .iws-page .compare-table td { padding: 8px 0; border-top: 1px solid rgba(0,212,255,0.06); }

          /* Sources */
          .iws-page .sources-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 14px; }
          .iws-page .source-card { background: rgba(20,30,48,0.75); border: 1px solid rgba(0,212,255,0.1); border-radius: 12px; padding: 20px; }
          .iws-page .source-name { font-size: 13px; font-weight: 700; color: #00d4ff; margin-bottom: 8px; }
          .iws-page .source-desc { font-size: 11px; color: #64748b; line-height: 1.55; }

          /* Report sections */
          .iws-page .report-sections { display: flex; flex-direction: column; }
          .iws-page .report-row { display: flex; gap: 14px; align-items: flex-start; padding: 12px 0; border-bottom: 1px solid rgba(0,212,255,0.06); }
          .iws-page .report-num { flex-shrink: 0; font-size: 11px; font-weight: 800; width: 24px; height: 24px; border-radius: 6px; background: rgba(0,212,255,0.08); border: 1px solid rgba(0,212,255,0.15); color: #00d4ff; display: flex; align-items: center; justify-content: center; margin-top: 2px; }
          .iws-page .report-title { font-size: 13px; font-weight: 600; color: #e2e8f0; margin-bottom: 3px; }
          .iws-page .report-desc { font-size: 11px; color: #64748b; line-height: 1.55; }

          /* Check list */
          .iws-page .check-list { list-style: none; padding: 0; margin-top: 16px; }
          .iws-page .check-item { display: flex; align-items: flex-start; gap: 12px; padding: 10px 0; border-bottom: 1px solid rgba(0,212,255,0.06); font-size: 13px; color: #cbd5e1; line-height: 1.6; }
          .iws-page .check-icon { color: #00d4ff; flex-shrink: 0; margin-top: 1px; }

          /* Report preview */
          .iws-page .report-preview { background: rgba(15,23,42,0.8); border: 1px solid rgba(0,212,255,0.15); border-radius: 16px; min-height: 400px; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 24px; position: relative; }
          .iws-page .preview-label { font-size: 13px; font-weight: 600; color: #475569; margin: 18px 0 6px; }
          .iws-page .preview-sub { font-size: 11px; color: #334155; margin-bottom: 4px; }
          .iws-page .preview-code { font-size: 11px; color: #334155; font-family: monospace; }
          .iws-page .preview-badge-top { position: absolute; top: 14px; left: 14px; padding: 4px 10px; border-radius: 100px; font-size: 10px; font-weight: 700; background: rgba(0,212,255,0.1); color: #00d4ff; border: 1px solid rgba(0,212,255,0.2); }
          .iws-page .preview-badge-bottom { position: absolute; bottom: 14px; right: 14px; padding: 4px 10px; border-radius: 100px; font-size: 10px; background: rgba(15,23,42,0.9); color: #475569; border: 1px solid rgba(100,116,139,0.15); }
          .iws-page .preview-note { font-size: 11px; color: #334155; text-align: center; margin-top: 10px; }

          /* Suitability */
          .iws-page .suitability-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 14px; }
          .iws-page .suit-card { border-radius: 12px; padding: 24px; }
          .iws-page .suit-icon { margin-bottom: 12px; }
          .iws-page .suit-title { font-size: 13px; font-weight: 700; margin-bottom: 14px; }
          .iws-page .suit-items { list-style: none; padding: 0; }
          .iws-page .suit-items li { font-size: 11px; color: #64748b; line-height: 1.55; padding: 3px 0; }

          /* Final CTA */
          .iws-page .final-cta { background: linear-gradient(135deg, rgba(0,212,255,0.06), rgba(0,119,255,0.04)); border: 1px solid rgba(0,212,255,0.14); border-radius: 18px; padding: 56px 32px; text-align: center; }
          .iws-page .final-cta h2 { font-size: clamp(22px,3vw,32px) !important; font-weight: 800 !important; letter-spacing: -0.03em !important; color: #fff !important; margin-bottom: 10px !important; -webkit-text-fill-color: unset !important; background: none !important; }
          .iws-page .final-cta p { color: #64748b; font-size: 15px; margin-bottom: 28px; }

          @media (max-width: 768px) {
            .iws-page .split { grid-template-columns: 1fr; }
            .iws-page .sources-grid { grid-template-columns: 1fr 1fr; }
            .iws-page .suitability-grid { grid-template-columns: 1fr; }
          }
          @media (max-width: 480px) {
            .iws-page .sources-grid { grid-template-columns: 1fr; }
          }
        `}</style>
      </div>
    </>
  );
}
