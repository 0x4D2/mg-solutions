import React, { useState, useEffect, useRef, forwardRef, useImperativeHandle } from "react";
import Head from "next/head";
import Link from "next/link";
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
    iconColor: "#334155",
    bg: "rgba(71,85,105,0.04)",
    border: "rgba(71,85,105,0.14)",
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
    iconColor: "#92400e",
    bg: "rgba(146,64,14,0.05)",
    border: "rgba(146,64,14,0.15)",
    items: [
      "Sehr kleine Infrastruktur (1 Domain, keine Server)",
      "Keine öffentlich sichtbaren Dienste vorhanden",
      "Rein intern betriebene Systeme",
    ],
  },
  {
    icon: <IconXCircle />,
    title: "Nicht geeignet",
    iconColor: "#dc2626",
    bg: "rgba(220,38,38,0.04)",
    border: "rgba(220,38,38,0.14)",
    items: [
      "Wix / Shopify / WordPress.com (kein Infrastruktur-Zugriff)",
      "Als Ersatz für einen Penetrationstest",
      "Für fremde Systeme (nur eigene Infrastruktur)",
    ],
  },
];

const EXPOSURE_SLIDES = [
  { src: "/img/report-seite-01.png", label: "Management-Zusammenfassung" },
  { src: "/img/report-seite-02.png", label: "Handlungsempfehlungen" },
  { src: "/img/report-seite-03.png", label: "Attack Surface Discovery" },
  { src: "/img/report-seite-04.png", label: "Technischer Anhang" },
  { src: "/img/report-seite-05.png", label: "CVE-Übersicht" },
  { src: "/img/report-seite-06.png", label: "Trend- & Vergleichsanalyse" },
  { src: "/img/report-seite-07.png", label: "Fazit & Nächste Schritte" },
  { src: "/img/report-seite-08.png", label: "Einordnung & Bewertungslogik" },
  { src: "/img/report-seite-09.png", label: "Disclaimer & SHA256" },
];

const ExposureSlideshow = forwardRef(function ExposureSlideshow(props, ref) {
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const prev = () => setActive(i => (i - 1 + EXPOSURE_SLIDES.length) % EXPOSURE_SLIDES.length);
  const next = () => setActive(i => (i + 1) % EXPOSURE_SLIDES.length);
  useImperativeHandle(ref, () => ({ open: () => setLightbox(true) }));

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e) => {
      if (e.key === "Escape") setLightbox(false);
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  return (
    <>
      <div className="slideshow">
        {EXPOSURE_SLIDES.map((s, i) => (
          <img key={i} src={s.src} alt={s.label}
            className={`slide-img${i === active ? " slide-active" : ""}`}
          />
        ))}
        <button className="slide-arrow slide-prev" onClick={prev} aria-label="Vorheriges Bild">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
        </button>
        <button className="slide-arrow slide-next" onClick={next} aria-label="Nächstes Bild">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
        </button>
        <div className="slide-label">{EXPOSURE_SLIDES[active].label} {active + 1}/{EXPOSURE_SLIDES.length}</div>
      </div>

      {lightbox && (
        <div className="lightbox-overlay" onClick={() => setLightbox(false)}>
          <button className="lightbox-close" onClick={() => setLightbox(false)} aria-label="Schließen">✕</button>
          <button className="lightbox-arrow lightbox-prev" onClick={(e) => { e.stopPropagation(); prev(); }} aria-label="Vorheriges Bild">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
          </button>
          <img src={EXPOSURE_SLIDES[active].src} alt={EXPOSURE_SLIDES[active].label}
            className="lightbox-img" onClick={(e) => e.stopPropagation()}
          />
          <button className="lightbox-arrow lightbox-next" onClick={(e) => { e.stopPropagation(); next(); }} aria-label="Nächstes Bild">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
          </button>
          <div className="lightbox-label">{EXPOSURE_SLIDES[active].label} {active + 1}/{EXPOSURE_SLIDES.length}</div>
        </div>
      )}
    </>
  );
});

export default function ExposurePage() {
  const slideshowRef = useRef(null);
  return (
    <>
      <Head>
        <title>Exposure-Report - ichwillsicherheit.de</title>
        <meta name="description" content="Was ist ein Exposure-Report? Wie funktioniert er, was enthält er und für wen ist er geeignet?" />
      </Head>

      <div className="iws-page cyber-bg">

        <div className="wrap">

          {/* HERO */}
          <div className="hero">
            <div className="live-badge">
              <span className="live-dot" />
              Passiv · OSINT · 24h Lieferung
            </div>
            <h1 className="page-headline">Der Exposure-Report</h1>
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
                      <th style={{ color: "#0f172a" }}>Exposure-Report</th>
                      <th style={{ color: "#94a3b8", paddingLeft: 16 }}>Pentest</th>
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
                        <td style={{ color: "#1e293b" }}>{l}</td>
                        <td style={{ color: "#94a3b8", paddingLeft: 16 }}>{r}</td>
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
                { name: "crt.sh", desc: "Zertifikats-Historie — enthüllt vergessene Subdomains und historische Infrastruktur" },
                { name: "HackerTarget", desc: "Passiver Subdomain-Lookup aus öffentlichen DNS-Datenbanken" },
              ].map(({ name, desc }) => (
                <div key={name} className="source-card">
                  <p className="source-name">{name}</p>
                  <p className="source-desc">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ATTACK SURFACE DISCOVERY */}
          <div className="section">
            <div className="section-label">Attack Surface Discovery</div>
            <h2 style={{ fontSize: "clamp(20px,2.5vw,28px)", fontWeight: 800, color: "#0f172a", letterSpacing: "-0.02em", marginBottom: 16 }}>
              Eine Domain. Viele Angriffsflächen.
            </h2>
            <p className="body-text" style={{ maxWidth: 640, marginBottom: 28 }}>
              Wenn Sie eine Domain angeben, ermitteln wir automatisch alle öffentlich erreichbaren
              IP-Adressen — passiv, ohne aktiven Scan. Das Ergebnis überrascht die meisten Kunden.
            </p>

            <div className="asd-grid">
              {[
                { source: "A-Record", label: "Hauptdomain & www", desc: "Direkte IP der Domain und www-Subdomain — das analysierte Asset." },
                { source: "MX-Record", label: "Mailserver", desc: "Häufig direkt exponiert und selten in Sicherheitsanalysen berücksichtigt." },
                { source: "NS-Record", label: "Nameserver", desc: "Zeigt Hosting-Anbieter und DNS-Infrastruktur — Fingerprint für Angreifer." },
                { source: "HackerTarget API", label: "Subdomain-Lookup", desc: "Passiver Abruf aus öffentlichen DNS-Datenbanken — enthüllt shop., mail., awareness., firewall. u.v.m." },
                { source: "crt.sh", label: "Zertifikats-Historie", desc: "Alle jemals ausgestellten TLS-Zertifikate der Domain — vergessene Subdomains werden sichtbar." },
                { source: "CDN-Filter", label: "Cloudflare / Akamai", desc: "IPs hinter bekannten CDNs werden automatisch erkannt und herausgefiltert — der Origin-Server bleibt verborgen." },
              ].map(({ source, label, desc }) => (
                <div key={source} className="asd-card">
                  <div className="asd-source">{source}</div>
                  <div className="asd-label">{label}</div>
                  <p className="asd-desc">{desc}</p>
                </div>
              ))}
            </div>

            <div className="asd-note">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#334155" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
              <span>Bewertet via Shodan wird nur die primäre Analyse-IP. Alle weiteren IPs erscheinen in Abschnitt 3 des Reports als Übersicht — ohne eigenen Shodan-Report.</span>
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
                <div className="section-label">Beispiel-Report (anonymisiert)</div>
                <div className="paper-frame">
                  <div className="paper-bar">
                    <span className="paper-dots"><i /><i /><i /></span>
                    <span className="paper-title">Exposure Report (Beispiel)</span>
                    <span className="paper-anon">Anonymisiert</span>
                    <button className="paper-expand" onClick={() => slideshowRef.current?.open()} aria-label="Vergrößern">
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/></svg>
                    </button>
                  </div>
                  <ExposureSlideshow ref={slideshowRef} />
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
            background: transparent;
            min-height: 100vh;
            font-family: 'DM Sans', 'Inter', sans-serif;
            color: #1e293b;
          }
          .iws-page .wrap {
            max-width: 1100px;
            margin: 0 auto;
            padding: 0 24px 80px;
          }

          /* Hero */
          .iws-page .hero { text-align: center; padding: 80px 0 56px; }
          .iws-page .live-badge { display: inline-flex; align-items: center; gap: 8px; padding: 6px 16px; border-radius: 100px; font-size: 11px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; background: rgba(71,85,105,0.08); border: 1px solid rgba(71,85,105,0.22); color: #334155; margin-bottom: 28px; }
          .iws-page .live-dot { width: 6px; height: 6px; border-radius: 50%; background: #334155; animation: pulse 2s infinite; display: inline-block; }
          @keyframes pulse { 0%,100%{ opacity:1 } 50%{ opacity:0.4 } }

          .iws-page .hero-sub { font-size: 16px; color: #475569; max-width: 540px; margin: 0 auto 36px; line-height: 1.7; }
          .iws-page .hero-btns { display: flex; justify-content: center; gap: 14px; flex-wrap: wrap; }

          /* Buttons */
          .iws-page .btn-primary { display: inline-flex; align-items: center; padding: 14px 28px; border-radius: 8px; font-weight: 700; font-size: 14px; background: #1e293b; color: #f8fafc; text-decoration: none; position: relative; overflow: hidden; transition: all 0.2s; }
          .iws-page .btn-primary:hover { background: #334155; transform: translateY(-1px); }
          .iws-page .btn-shine::after { content: ""; position: absolute; top: 0; left: -120%; width: 120%; height: 100%; background: linear-gradient(90deg,transparent,rgba(255,255,255,0.1),transparent); transition: left 0.7s ease; pointer-events: none; }
          .iws-page .btn-shine:hover::after { left: 100%; }
          .iws-page .btn-ghost { display: inline-flex; align-items: center; padding: 14px 24px; border-radius: 8px; font-size: 13px; font-weight: 600; border: 1px solid rgba(71,85,105,0.35); color: #334155; text-decoration: none; background: transparent; transition: all 0.2s; }
          .iws-page .btn-ghost:hover { border-color: #334155; background: rgba(71,85,105,0.05); }
          .iws-page .btn-row { display: flex; justify-content: center; gap: 14px; flex-wrap: wrap; }

          /* Sections */
          .iws-page .section { margin-bottom: 64px; }
          .iws-page .section-label { font-size: 11px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #94a3b8; margin-bottom: 16px; }
          .iws-page .split { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; align-items: start; }
          .iws-page .split h2 { font-family: 'Inter','DM Sans',sans-serif; font-size: clamp(20px,2.5vw,28px) !important; font-weight: 800 !important; color: #0f172a !important; letter-spacing: -0.02em !important; line-height: 1.2 !important; margin-bottom: 20px !important; -webkit-text-fill-color: unset !important; background: none !important; }
          .iws-page .body-text { font-size: 13px; color: #475569; line-height: 1.7; margin-bottom: 14px; }

          /* Compare table */
          .iws-page .compare-card { background: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; padding: 24px; box-shadow: 0 1px 6px rgba(0,0,0,0.05); }
          .iws-page .compare-table { width: 100%; font-size: 12px; border-collapse: collapse; }
          .iws-page .compare-table th { text-align: left; padding-bottom: 10px; font-weight: 700; }
          .iws-page .compare-table td { padding: 8px 0; border-top: 1px solid #f1f5f9; }

          /* Sources */
          /* Attack Surface Discovery */
          .iws-page .asd-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 12px; margin-bottom: 16px; }
          .iws-page .asd-card { background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 18px; box-shadow: 0 1px 4px rgba(0,0,0,0.04); }
          .iws-page .asd-source { font-size: 10px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #334155; margin-bottom: 6px; }
          .iws-page .asd-label { font-size: 13px; font-weight: 700; color: #0f172a; margin-bottom: 6px; }
          .iws-page .asd-desc { font-size: 11px; color: #64748b; line-height: 1.55; margin: 0; }
          .iws-page .asd-note { display: flex; align-items: flex-start; gap: 8px; padding: 12px 16px; background: rgba(71,85,105,0.04); border: 1px solid #e2e8f0; border-radius: 10px; font-size: 12px; color: #64748b; line-height: 1.55; }

          .iws-page .sources-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 14px; }
          .iws-page .source-card { background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; box-shadow: 0 1px 4px rgba(0,0,0,0.04); }
          .iws-page .source-name { font-size: 13px; font-weight: 700; color: #0f172a; margin-bottom: 8px; }
          .iws-page .source-desc { font-size: 11px; color: #64748b; line-height: 1.55; }

          /* Report sections */
          .iws-page .report-sections { display: flex; flex-direction: column; }
          .iws-page .report-row { display: flex; gap: 14px; align-items: flex-start; padding: 12px 0; border-bottom: 1px solid #f1f5f9; }
          .iws-page .report-num { flex-shrink: 0; font-size: 11px; font-weight: 800; width: 24px; height: 24px; border-radius: 6px; background: rgba(71,85,105,0.08); border: 1px solid rgba(71,85,105,0.18); color: #334155; display: flex; align-items: center; justify-content: center; margin-top: 2px; }
          .iws-page .report-title { font-size: 13px; font-weight: 600; color: #0f172a; margin-bottom: 3px; }
          .iws-page .report-desc { font-size: 11px; color: #64748b; line-height: 1.55; }

          /* Check list */
          .iws-page .check-list { list-style: none; padding: 0; margin-top: 16px; }
          .iws-page .check-item { display: flex; align-items: flex-start; gap: 12px; padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-size: 13px; color: #475569; line-height: 1.6; }
          .iws-page .check-icon { color: #334155; flex-shrink: 0; margin-top: 1px; }

          /* Report preview */
          .iws-page .report-preview { background: rgba(15,23,42,0.8); border: 1px solid rgba(0,212,255,0.15); border-radius: 16px; min-height: 400px; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 24px; position: relative; }
          .iws-page .preview-label { font-size: 13px; font-weight: 600; color: #475569; margin: 18px 0 6px; }
          .iws-page .preview-sub { font-size: 11px; color: #334155; margin-bottom: 4px; }
          .iws-page .preview-code { font-size: 11px; color: #334155; font-family: monospace; }
          .iws-page .preview-badge-top { position: absolute; top: 14px; left: 14px; padding: 4px 10px; border-radius: 100px; font-size: 10px; font-weight: 700; background: rgba(71,85,105,0.08); color: #334155; border: 1px solid rgba(71,85,105,0.18); }
          .iws-page .preview-badge-bottom { position: absolute; bottom: 14px; right: 14px; padding: 4px 10px; border-radius: 100px; font-size: 10px; background: rgba(248,250,252,0.95); color: #64748b; border: 1px solid #e2e8f0; }
          .iws-page .preview-note { font-size: 11px; color: #94a3b8; text-align: center; margin-top: 10px; }

          /* Suitability */
          .iws-page .suitability-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 14px; }
          .iws-page .suit-card { border-radius: 12px; padding: 24px; }
          .iws-page .suit-icon { margin-bottom: 12px; }
          .iws-page .suit-title { font-size: 13px; font-weight: 700; margin-bottom: 14px; }
          .iws-page .suit-items { list-style: none; padding: 0; }
          .iws-page .suit-items li { font-size: 11px; color: #475569; line-height: 1.55; padding: 3px 0; }
          .iws-page .suit-title { font-family: 'Inter','DM Sans',sans-serif; }

          /* Final CTA */
          .iws-page .final-cta { background: linear-gradient(135deg, rgba(71,85,105,0.05), rgba(71,85,105,0.03)); border: 1px solid #e2e8f0; border-radius: 18px; padding: 56px 32px; text-align: center; }
          .iws-page .final-cta h2 { font-family: 'Inter','DM Sans',sans-serif; font-size: clamp(22px,3vw,32px) !important; font-weight: 800 !important; letter-spacing: -0.03em !important; color: #0f172a !important; margin-bottom: 10px !important; -webkit-text-fill-color: unset !important; background: none !important; }
          .iws-page .final-cta p { color: #64748b; font-size: 15px; margin-bottom: 28px; }

          @media (max-width: 768px) {
            .iws-page .split { grid-template-columns: 1fr; }
            .iws-page .sources-grid { grid-template-columns: 1fr 1fr; }
            .iws-page .suitability-grid { grid-template-columns: 1fr; }
            .iws-page .asd-grid { grid-template-columns: 1fr 1fr; }
          }
          @media (max-width: 480px) {
            .iws-page .sources-grid { grid-template-columns: 1fr; }
            .iws-page .asd-grid { grid-template-columns: 1fr; }
          }

          /* Paper frame & slideshow (shared with index.js) */
          .iws-page .paper-frame { background: #ffffff; border-radius: 12px; border: 1px solid #e2e8f0; box-shadow: 0 8px 32px rgba(0,0,0,0.1), 0 1px 4px rgba(0,0,0,0.05); overflow: hidden; }
          .iws-page .paper-bar { background: #f8fafc; border-bottom: 1px solid #e2e8f0; padding: 9px 14px; display: flex; align-items: center; gap: 8px; }
          .iws-page .paper-dots { display: flex; gap: 5px; flex-shrink: 0; }
          .iws-page .paper-dots i { width: 8px; height: 8px; border-radius: 50%; background: #e2e8f0; display: block; }
          .iws-page .paper-title { font-size: 11px; color: #94a3b8; font-weight: 500; flex: 1; }
          .iws-page .paper-anon { font-size: 10px; font-weight: 700; color: #64748b; background: rgba(71,85,105,0.08); border: 1px solid rgba(71,85,105,0.15); padding: 2px 8px; border-radius: 100px; white-space: nowrap; }
          .iws-page .paper-expand { display: inline-flex; align-items: center; justify-content: center; width: 22px; height: 22px; border-radius: 5px; border: 1px solid rgba(71,85,105,0.2); background: rgba(71,85,105,0.06); color: #64748b; cursor: pointer; flex-shrink: 0; margin-left: 4px; }
          .iws-page .paper-expand:hover { background: rgba(71,85,105,0.14); color: #334155; }
          .iws-page .slideshow { position: relative; overflow: hidden; border-radius: 0 0 12px 12px; }
          .iws-page .slide-img { width: 100%; display: block; position: absolute; top: 0; left: 0; opacity: 0; transition: opacity 0.7s ease; }
          .iws-page .slide-img:first-child { position: relative; }
          .iws-page .slide-img.slide-active { opacity: 1; position: relative; }
          .iws-page .slide-img:not(.slide-active) { position: absolute; }
          .iws-page .slide-arrow { position: absolute; top: 50%; transform: translateY(-50%); background: rgba(255,255,255,0.85); border: 1px solid #e2e8f0; color: #475569; border-radius: 50%; width: 28px; height: 28px; display: flex; align-items: center; justify-content: center; cursor: pointer; z-index: 3; padding: 0; }
          .iws-page .slide-arrow:hover { background: #ffffff; color: #1e293b; }
          .iws-page .slide-prev { left: 8px; }
          .iws-page .slide-next { right: 8px; }
          .iws-page .slide-label { position: absolute; bottom: 10px; right: 12px; font-size: 10px; color: #94a3b8; background: rgba(248,250,252,0.9); padding: 2px 8px; border-radius: 100px; border: 1px solid #e2e8f0; }
          .lightbox-overlay { position: fixed; inset: 0; z-index: 9999; background: rgba(0,0,0,0.82); display: flex; align-items: center; justify-content: center; cursor: zoom-out; }
          .lightbox-img { max-width: 92vw; max-height: 88vh; border-radius: 10px; box-shadow: 0 8px 48px rgba(0,0,0,0.5); cursor: default; }
          .lightbox-close { position: absolute; top: 20px; right: 24px; background: rgba(255,255,255,0.12); border: 1px solid rgba(255,255,255,0.2); color: #fff; font-size: 18px; width: 36px; height: 36px; border-radius: 50%; cursor: pointer; display: flex; align-items: center; justify-content: center; }
          .lightbox-close:hover { background: rgba(255,255,255,0.22); }
          .lightbox-arrow { position: absolute; top: 50%; transform: translateY(-50%); background: rgba(255,255,255,0.12); border: 1px solid rgba(255,255,255,0.2); color: #fff; width: 44px; height: 44px; border-radius: 50%; cursor: pointer; display: flex; align-items: center; justify-content: center; z-index: 2; }
          .lightbox-arrow:hover { background: rgba(255,255,255,0.22); }
          .lightbox-prev { left: 20px; }
          .lightbox-next { right: 20px; }
          .lightbox-label { position: absolute; bottom: 20px; left: 50%; transform: translateX(-50%); color: rgba(255,255,255,0.6); font-size: 12px; letter-spacing: 0.05em; }
        `}</style>
      </div>
    </>
  );
}
