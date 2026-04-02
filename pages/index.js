import React, { useState, useEffect } from "react";
import Link from "next/link";
import Footer from "components/Footers/Footer.js";
import SichtVergleich from "components/SichtVergleich";

const SLIDES = [
  { src: "/img/report-preview.jpg",   label: "Handlungsempfehlungen" },
  { src: "/img/report-preview-2.jpg", label: "Technischer Anhang" },
  { src: "/img/report-preview-3.jpg", label: "CVE-Übersicht" },
];

function ReportSlideshow() {
  const [active, setActive] = useState(0);
  const prev = () => setActive(i => (i - 1 + SLIDES.length) % SLIDES.length);
  const next = () => setActive(i => (i + 1) % SLIDES.length);
  return (
    <div className="slideshow">
      {SLIDES.map((s, i) => (
        <img
          key={i}
          src={s.src}
          alt={s.label}
          className={`slide-img${i === active ? " slide-active" : ""}`}
        />
      ))}
      <button className="slide-arrow slide-prev" onClick={prev} aria-label="Vorheriges Bild">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
      </button>
      <button className="slide-arrow slide-next" onClick={next} aria-label="Nächstes Bild">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
      </button>
      <div className="slide-label">{SLIDES[active].label} · {active + 1}/{SLIDES.length}</div>
    </div>
  );
}

export default function Index() {
  return (
    <div className="iws-page cyber-bg">

      <div className="wrap">

        {/* HERO */}
        <div className="hero">
          <div className="hero-box">
            <div className="hero-split">
              <div className="hero-text">
                <div className="badge"><span className="dot"></span> Keine Scans · Keine Installation · Report in 24h</div>
                <h1 className="page-headline">
                  Die Angriffsfläche<br />
                  <span style={{ whiteSpace: "nowrap" }}>Ihres Unternehmens</span><br />
                  <span className="grad"> wirklich verstehen.</span>
                </h1>
                <p className="hero-sub">Wir analysieren, welche Systeme, Daten und Informationen über Ihr Unternehmen öffentlich erreichbar sind und was davon ein Angreifer sofort nutzen könnte.</p>
                <div className="cta-row">
                  <Link href="/contact" legacyBehavior><a className="btn-primary">Kostenlos Risiko prüfen lassen</a></Link>
                </div>
              </div>
              <div className="hero-report">
                <div className="paper-frame">
                  <div className="paper-bar">
                    <span className="paper-dots"><i /><i /><i /></span>
                    <span className="paper-title">Exposure Report (Beispiel)</span>
                    <span className="paper-anon">Anonymisiert</span>
                  </div>
                  <ReportSlideshow />
                </div>
                <p className="hero-report-note">9 Abschnitte · Executive Summary · CVE-Übersicht</p>
              </div>
            </div>
          </div>
        </div>

        {/* TRUST BAR */}
        <div className="trust">
          <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#334155" strokeWidth="2"><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="10"/></svg>Manuell geprüft, kein Automatismus</span>
          <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#334155" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>SHA256-gesichert &amp; revisionssicher</span>
          <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#334155" strokeWidth="2"><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="10"/></svg>Manuell geprüft — keine Blackbox</span>
          <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#334155" strokeWidth="2"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="1"/></svg>Kein Abo, keine Verpflichtung</span>
          <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#334155" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>Shodan · NVD · CISA KEV</span>
        </div>

        {/* PAIN */}
        <div className="section">
          <div className="slabel">Das eigentliche Problem</div>
          <h2>Das sieht ein Angreifer —<br />bevor Sie es sehen.</h2>
          <p className="section-sub">Diese Informationen sind nicht versteckt. Sie sind nur selten aktiv überprüft.</p>
          <div className="grid3">
            <div className="card">
              <span className="card-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#334155" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8m-4-4v4"/></svg></span>
              <h3>Öffentlich erreichbare Systeme</h3>
              <p>Alte Subdomains, Staging-Umgebungen, offene Ports — sichtbar für jeden der sucht.</p>
              <span className="tag">Häufig übersehen</span>
            </div>
            <div className="card">
              <span className="card-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#334155" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg></span>
              <h3>Daten aus Leaks &amp; Breaches</h3>
              <p>Firmen-E-Mails und Credentials aus Datenpannen werden aktiv für Angriffe genutzt.</p>
              <span className="tag">Unterschätztes Risiko</span>
            </div>
            <div className="card">
              <span className="card-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#334155" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg></span>
              <h3>Rückschlüsse auf interne Struktur</h3>
              <p>Technologie-Stack, Versionsstände, Dienste — alles öffentlich, alles verwertbar.</p>
              <span className="tag">Angreifer-Perspektive</span>
            </div>
          </div>
        </div>

        <SichtVergleich />

        {/* VALUE BRIDGE */}
        <div className="section">
          <div className="bridge">
            <p>Angriffe beginnen nicht im System — sondern mit öffentlich verfügbaren Informationen.<br />
              <span className="bridge-sub">Wenn diese Daten sichtbar sind, ist der erste Schritt eines Angriffs bereits erledigt.</span>
            </p>
          </div>
        </div>

        {/* WAS SIE BEKOMMEN */}
        <div className="section">
          <div className="split">
            <div>
              <div className="slabel">Was Sie bekommen</div>
              <h2>Ein Exposure-Report<br />ist kein Pentest.</h2>
              <p style={{ fontSize: "13px", color: "#64748b", marginBottom: "24px", lineHeight: 1.6 }}>Das ist kein Monitoring-System. Es ist ein realistischer Blick auf das, was bereits sichtbar ist — aus der Perspektive eines Angreifers.</p>
              <ul className="feature-list">
                {[
                  { title: "9-seitiger PDF-Report", desc: "Executive Summary für die GF, technischer Anhang für die IT. Ein Dokument — zwei Zielgruppen." },
                  { title: "Top-Risiken nach Ausnutzbarkeit priorisiert", desc: "CVE-Scores aus NVD & CISA KEV — kein Rauschen, nur was zählt." },
                  { title: "Manuell geprüft, keine Blackbox", desc: "Jeder Befund wird von einem Menschen bewertet. Keine False-Positive-Flut." },
                  { title: "Trendanalyse & Monatsvergleich", desc: "Wie hat sich Ihre Angriffsfläche verändert? Mit historischem Vergleich sichtbar." },
                  { title: "Revisionssicher archiviert", desc: "SHA256-gesichert, versioniert — nachweisbar für Audits und Compliance." },
                ].map(({ title, desc }) => (
                  <li key={title}>
                    <div className="fi-icon">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#334155" strokeWidth="2"><path d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <div><div className="fi-title">{title}</div><div className="fi-desc">{desc}</div></div>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#64748b", marginBottom: "12px" }}>Beispiel-Report (anonymisiert)</div>
              <div style={{ position: "relative" }}>
                <div className="ph-badge">PASSIV · OSINT</div>
                <img
                  src="/img/report-preview.png"
                  alt="Anonymisierter Beispiel-Report"
                  style={{ width: "100%", borderRadius: "12px", border: "1px solid rgba(0,212,255,0.15)", display: "block" }}
                />
                <div className="ph-badge2">Anonymisiertes Beispiel</div>
              </div>
              <div style={{ fontSize: "11px", color: "#334155", textAlign: "center", marginTop: "10px" }}>9 Abschnitte · Executive Summary · CVE-Übersicht</div>
            </div>
          </div>
        </div>

        {/* ZIELGRUPPEN */}
        <div className="section">
          <div className="slabel">Zielgruppen</div>
          <h2 style={{ marginBottom: "32px" }}>Ein Dokument. Zwei Zielgruppen.</h2>
          <div className="grid2">
            <div className="card">
              <div className="zt-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#334155" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg></div>
              <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#0f172a", marginBottom: "10px" }}>IT-Verantwortliche</h3>
              <p style={{ fontSize: "13px", color: "#64748b", marginBottom: "16px", lineHeight: 1.6 }}>Endlich ein externes Bild Ihrer Infrastruktur — ohne aktiven Scan, ohne rechtliche Grauzone.</p>
              <ul className="checklist">
                <li><svg className="chk" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" /></svg> Externe Angriffsfläche dokumentieren</li>
                <li><svg className="chk" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" /></svg> Maßnahmen nach realer Ausnutzbarkeit priorisieren</li>
                <li><svg className="chk" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" /></svg> CVE-Exposition nachweisbar machen</li>
              </ul>
            </div>
            <div className="card">
              <div className="zt-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#334155" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="4" height="14" rx="1"/><rect x="9" y="3" width="4" height="18" rx="1"/><rect x="16" y="10" width="4" height="11" rx="1"/></svg></div>
              <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#0f172a", marginBottom: "10px" }}>Geschäftsführung</h3>
              <p style={{ fontSize: "13px", color: "#64748b", marginBottom: "16px", lineHeight: 1.6 }}>Sicherheitsinvestitionen brauchen ein Fundament. Dieser Report liefert es — verständlich, ohne IT-Vorkenntnisse.</p>
              <ul className="checklist">
                <li><svg className="chk" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" /></svg> Sicherheits-ROI sichtbar und kommunizierbar machen</li>
                <li><svg className="chk" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" /></svg> Investitionen gegenüber Gesellschaftern rechtfertigen</li>
                <li><svg className="chk" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" /></svg> Compliance- und Audit-Anforderungen erfüllen</li>
              </ul>
              <div style={{ marginTop: "20px" }}>
                <Link href="/contact" legacyBehavior><a className="btn-primary" style={{ fontSize: "13px", padding: "10px 20px", borderRadius: "12px", display: "inline-flex" }}>Kostenlos Risiko prüfen lassen</a></Link>
              </div>
            </div>
          </div>
        </div>

        {/* ABLAUF */}
        <div className="section">
          <div className="slabel">Ablauf</div>
          <h2 style={{ marginBottom: "64px" }}>Von Anfrage bis Report in 48h.</h2>
          <br />
          <div className="steps">
            <div className="step"><div className="step-num">01</div><h4>Ersteinschätzung</h4><p>Kostenfrei. Wir melden uns innerhalb eines Werktags.</p></div>
            <div className="step"><div className="step-num">02</div><h4>OSINT-Analyse</h4><p>Shodan, NVD, CISA KEV, DNS, TLS — passiv, kein Eingriff.</p></div>
            <div className="step"><div className="step-num">03</div><h4>Manuelle Prüfung</h4><p>Jeder Befund wird von einem Menschen eingeordnet.</p></div>
            <div className="step"><div className="step-num">04</div><h4>Report + Call</h4><p>9-seitiges PDF + optionaler 30-min Review-Call.</p></div>
          </div>
        </div>

        {/* 490€ */}
        <div className="section">
          <div className="slabel">Einstieg</div>
          <h2 style={{ marginBottom: "32px" }}>Einmalige Sicherheitsanalyse.<br />Kein Abo, keine Verpflichtung.</h2>
          <div className="price-card">
            <div className="price-badge">Beliebt</div>
            <div className="free-note">✓ Starten Sie kostenlos — <span>wir schicken Ihnen eine erste Einschätzung ohne Verpflichtung.</span></div>
            <div className="price-num">490 €</div>
            <div className="price-meta">einmalig · inkl. aller Kosten</div>
            <ul className="checklist" style={{ marginBottom: "24px" }}>
              <li><svg className="chk" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" /></svg> Vollständige Analyse der öffentlichen Angriffsfläche</li>
              <li><svg className="chk" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" /></svg> Priorisierte Risiken nach realer Ausnutzbarkeit (CVE-Scores)</li>
              <li><svg className="chk" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" /></svg> Executive Summary + technischer Anhang</li>
              <li><svg className="chk" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" /></svg> Report innerhalb von 24 Stunden (PDF)</li>
              <li><svg className="chk" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" /></svg> Optionaler 30-min Review-Call</li>
              <li><svg className="chk" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" /></svg> Revisionssicher archiviert mit SHA256</li>
            </ul>
            <Link href="/contact" legacyBehavior><a className="btn-primary" style={{ display: "flex", justifyContent: "center", fontSize: "15px", padding: "16px" }}>Jetzt Analyse starten →</a></Link>
            <p style={{ fontSize: "12px", textAlign: "center", marginTop: "14px", color: "#334155" }}>
              Kein Abo · <Link href="/pricing" legacyBehavior><a>Alle Preise ansehen</a></Link>
            </p>
          </div>
        </div>

        {/* FAQ */}
        <div className="section">
          <div className="slabel">Häufige Fragen</div>
          <h2 style={{ marginBottom: "32px" }}>Was Sie wissen sollten.</h2>
          <div className="faq-list">
            {[
              { q: "Werden unsere Systeme gescannt oder angegriffen?", a: "Nein — 100% passiv. Wir nutzen ausschließlich öffentlich zugängliche Informationen (Shodan, NVD, CISA KEV, DNS, TLS). Rechtlich und technisch sauber." },
              { q: "Was ist der Unterschied zu einem Pentest?", a: "Ein Pentest greift aktiv an und kostet 5.000–15.000 €. Wir zeigen Ihre öffentliche Angriffsfläche aus der Perspektive eines Rechercheurs — schneller, günstiger, ohne rechtliche Grauzone." },
              { q: "Wie schnell bekommen wir Ergebnisse?", a: "Nach Auftragserteilung liefern wir den vollständigen Report innerhalb von 24 Stunden." },
              { q: "Gibt es ein Abo oder Folgekosten?", a: "Nein. Der Einmal-Report ist eine einmalige Zahlung ohne Verpflichtung. Wer regelmäßige Analysen möchte, findet auf der Preisseite monatlich kündbare Pakete." },
            ].map(({ q, a }) => (
              <div className="faq-item" key={q}>
                <div className="faq-q"><span className="q-badge">Q</span>{q}</div>
                <div className="faq-a">{a}</div>
              </div>
            ))}
          </div>
          <Link href="/faq" legacyBehavior><a style={{ color: "#334155", fontSize: "13px", display: "inline-block", marginTop: "20px" }}>Alle FAQs ansehen →</a></Link>
        </div>

        {/* PARTNER */}
        <div className="partner">
          <div className="partner-label">Unsere Partner &amp; Mitgliedschaften</div>
          <div className="partner-logos">
            <a href="https://www.cyber-sicherheitsnetzwerk.de" target="_blank" rel="noopener noreferrer" className="partner-logo-link">
              <img src="/img/csn-logo.png" alt="Mitglied im Cyber-Sicherheitsnetzwerk" className="partner-logo-img" />
            </a>
          </div>
        </div>

        {/* FINAL CTA */}
        <div className="final">
          <h2>Was finden Angreifer heute<br />über Ihr Unternehmen?</h2>
          <p style={{ color: "#64748b", fontSize: "15px", marginBottom: "28px" }}>Wir schauen zuerst — damit Sie reagieren können, bevor jemand anderes handelt.</p>
          <Link href="/contact" legacyBehavior><a className="btn-primary" style={{ display: "inline-flex", fontSize: "15px", padding: "16px 36px" }}>Kostenlose Ersteinschätzung anfordern →</a></Link>
          <p style={{ fontSize: "12px", color: "#334155", marginTop: "14px" }}>Keine Verpflichtung · Antwort innerhalb eines Werktags · 100% passiv</p>
        </div>

</div>

      <Footer />

      <style jsx global>{`
        .iws-page {
          background: transparent;
          min-height: 100vh;
          font-family: 'DM Sans', sans-serif;
          color: #1e293b;
        }
        .iws-page .wrap {
          max-width: 1100px;
          margin: 0 auto;
          padding: 64px 24px 0;
        }
        .iws-page .hero { padding: 48px 0 40px; }
        .iws-page .hero-split { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: center; }
        .iws-page .hero-text { text-align: left; }
        .iws-page .hero-report { }
        .iws-page .paper-frame { background: #ffffff; border-radius: 12px; border: 1px solid #e2e8f0; box-shadow: 0 8px 32px rgba(0,0,0,0.1), 0 1px 4px rgba(0,0,0,0.05); overflow: hidden; transform: rotate(0.8deg); transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .iws-page .paper-frame:hover { transform: rotate(0deg); box-shadow: 0 12px 40px rgba(0,0,0,0.13); }
        .iws-page .paper-bar { background: #f8fafc; border-bottom: 1px solid #e2e8f0; padding: 9px 14px; display: flex; align-items: center; gap: 8px; }
        .iws-page .paper-dots { display: flex; gap: 5px; flex-shrink: 0; }
        .iws-page .paper-dots i { width: 8px; height: 8px; border-radius: 50%; background: #e2e8f0; display: block; }
        .iws-page .paper-title { font-size: 11px; color: #94a3b8; font-weight: 500; flex: 1; }
        .iws-page .paper-anon { font-size: 10px; font-weight: 700; color: #64748b; background: rgba(71,85,105,0.08); border: 1px solid rgba(71,85,105,0.15); padding: 2px 8px; border-radius: 100px; white-space: nowrap; }
        .iws-page .hero-report-note { font-size: 11px; color: #94a3b8; text-align: center; margin-top: 10px; }
        .iws-page .slideshow { position: relative; overflow: hidden; border-radius: 0 0 12px 12px; }
        .iws-page .slide-img { width: 100%; display: block; position: absolute; top: 0; left: 0; opacity: 0; transition: opacity 0.7s ease; }
        .iws-page .slide-img:first-child { position: relative; }
        .iws-page .slide-img.slide-active { opacity: 1; position: relative; }
        .iws-page .slide-img:not(.slide-active) { position: absolute; }
        .iws-page .slide-arrow { position: absolute; top: 50%; transform: translateY(-50%); background: rgba(255,255,255,0.85); border: 1px solid #e2e8f0; color: #475569; border-radius: 50%; width: 28px; height: 28px; display: flex; align-items: center; justify-content: center; cursor: pointer; z-index: 3; transition: background 0.15s, color 0.15s; padding: 0; }
        .iws-page .slide-arrow:hover { background: #ffffff; color: #1e293b; }
        .iws-page .slide-prev { left: 8px; }
        .iws-page .slide-next { right: 8px; }
        .iws-page .slide-label { position: absolute; bottom: 10px; right: 12px; font-size: 10px; color: #94a3b8; background: rgba(248,250,252,0.9); padding: 2px 8px; border-radius: 100px; border: 1px solid #e2e8f0; }
        .iws-page .hero-box { position: relative; overflow: hidden; border: 1px solid rgba(71,85,105,0.25); border-radius: 32px; padding: 48px 32px; background: rgba(255,255,255,0.85); box-shadow: 0 2px 20px rgba(0,0,0,0.06); transition: box-shadow 0.3s ease; animation: borderBreath 7s ease-in-out 1.5s backwards infinite; }
        .iws-page .hero-box:hover { box-shadow: 0 4px 32px rgba(71,85,105,0.12); }
        .iws-page .hero-box::before { content: ''; position: absolute; top: 0; left: 0; width: 3px; height: 100%; background: linear-gradient(to bottom, transparent 0%, rgba(71,85,105,0.9) 20%, rgba(71,85,105,0.9) 80%, transparent 100%); box-shadow: 0 0 10px 4px rgba(71,85,105,0.15); transform: translateX(-10px); animation: scanLine 1.2s ease-in-out 0.3s forwards; pointer-events: none; }
        @keyframes scanLine { 0% { transform: translateX(-10px); opacity: 1; } 85% { opacity: 1; } 100% { transform: translateX(1200px); opacity: 0; } }
        @keyframes borderBreath { 0%,100% { border-color: rgba(71,85,105,0.15); } 50% { border-color: rgba(71,85,105,0.4); } }
        .iws-page .badge { display: inline-flex; align-items: center; gap: 8px; background: rgba(71,85,105,0.08); border: 1px solid rgba(71,85,105,0.22); color: #334155; font-size: 11px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; padding: 5px 14px; border-radius: 100px; margin-bottom: 28px; }
        .iws-page .dot { width: 6px; height: 6px; border-radius: 50%; background: #334155; display: inline-block; animation: iwsDot 2s infinite; }
        @keyframes iwsDot { 0%,100%{opacity:1} 50%{opacity:0.3} }
        .page-headline .grad { font-weight: 800; }
        .iws-page .hero-sub { font-size: 17px; color: #475569; max-width: 580px; margin: 0 0 12px; line-height: 1.65; text-align: justify; overflow-wrap: break-word; word-break: break-word; hyphens: none; }
        .iws-page .micro { font-size: 13px; margin-bottom: 36px; }
        .iws-page .muted { color: #64748b; }
        .iws-page .cta-row { display: flex; gap: 14px; justify-content: flex-start; flex-wrap: wrap; }
        .iws-page .btn-primary { background: #1e293b; color: #f8fafc; padding: 14px 28px; border-radius: 8px; font-weight: 700; font-size: 15px; text-decoration: none; transition: all 0.2s; display: inline-block; font-family: 'DM Sans', sans-serif; }
        .iws-page .btn-primary:hover { background: #334155; transform: translateY(-1px); }
        .iws-page .btn-ghost { border: 1px solid rgba(71,85,105,0.4); color: #334155; padding: 14px 28px; border-radius: 8px; font-size: 15px; text-decoration: none; display: inline-block; }
        .iws-page .trust { display: flex; flex-wrap: wrap; justify-content: center; gap: 12px 28px; padding: 16px 24px; margin: 32px 0 56px; border-radius: 12px; background: #ffffff; border: 1px solid #cbd5e1; box-shadow: 0 1px 4px rgba(0,0,0,0.06); font-size: 13px; color: #1e293b; font-weight: 500; }
        .iws-page .trust span { display: inline-flex; align-items: center; gap: 7px; }
        .iws-page .section { margin-bottom: 64px; }
        .iws-page .slabel { font-family: 'Inter', 'DM Sans', sans-serif; font-size: 11px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: #334155; margin-bottom: 14px; }
        .iws-page h2 { font-family: 'Inter', 'DM Sans', sans-serif; font-size: clamp(22px,3vw,34px) !important; font-weight: 700 !important; letter-spacing: -0.02em !important; color: #0f172a !important; line-height: 1.15 !important; margin-bottom: 10px !important; -webkit-text-fill-color: unset !important; background: none !important; }
        .iws-page .section-sub { font-size: 14px; color: #64748b; margin-bottom: 36px; }
        .iws-page .grid3 { display: grid; grid-template-columns: repeat(3,1fr); gap: 14px; }
        .iws-page .card { background: #ffffff; border: 1px solid #e2e8f0; border-radius: 14px; padding: 24px; box-shadow: 0 1px 6px rgba(0,0,0,0.05); }
        .iws-page .card-icon { font-size: 24px; margin-bottom: 16px; display: block; }
        .iws-page .card h3 { font-family: 'Inter', 'DM Sans', sans-serif; font-size: 15px !important; font-weight: 700 !important; color: #0f172a !important; margin-bottom: 10px !important; -webkit-text-fill-color: unset !important; background: none !important; }
        .iws-page .card p { font-size: 13px; color: #64748b; line-height: 1.6; margin-bottom: 14px; }
        .iws-page .tag { display: inline-block; font-size: 11px; font-weight: 700; padding: 3px 10px; border-radius: 100px; background: rgba(180,83,9,0.08); border: 1px solid rgba(180,83,9,0.22); color: #b45309; }
        .iws-page .bridge { background: rgba(71,85,105,0.04); border: 1px solid #e2e8f0; border-radius: 14px; padding: 28px; text-align: center; }
        .iws-page .bridge p { font-size: 16px; color: #334155; line-height: 1.65; }
        .iws-page .bridge .bridge-sub { color: #64748b; font-size: 14px; display: block; margin-top: 6px; }
        .iws-page .split { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: start; }
        .iws-page .feature-list { list-style: none; margin-top: 8px; padding: 0; }
        .iws-page .feature-list li { display: flex; gap: 14px; padding: 14px 0; border-bottom: 1px solid #e2e8f0; }
        .iws-page .feature-list li:last-child { border-bottom: none; }
        .iws-page .fi-icon { width: 30px; height: 30px; border-radius: 8px; background: rgba(71,85,105,0.07); border: 1px solid rgba(71,85,105,0.16); display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 2px; }
        .iws-page .fi-title { font-size: 13px; font-weight: 700; color: #0f172a; margin-bottom: 3px; }
        .iws-page .fi-desc { font-size: 12px; color: #64748b; line-height: 1.5; }
        .iws-page .placeholder { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 14px; min-height: 320px; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; position: relative; padding: 24px; }
        .iws-page .placeholder svg { width: 40px; height: 40px; stroke: #cbd5e1; stroke-width: 1.5; fill: none; margin-bottom: 12px; }
        .iws-page .ph-label { font-size: 12px; color: #94a3b8; }
        .iws-page .ph-badge { position: absolute; top: 12px; left: 12px; background: rgba(71,85,105,0.08); border: 1px solid rgba(71,85,105,0.18); color: #334155; font-size: 10px; font-weight: 700; padding: 3px 10px; border-radius: 100px; }
        .iws-page .ph-badge2 { position: absolute; bottom: 12px; right: 12px; background: rgba(248,250,252,0.95); border: 1px solid #e2e8f0; color: #64748b; font-size: 10px; padding: 3px 10px; border-radius: 100px; }
        .iws-page .grid2 { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .iws-page .zt-icon { width: 38px; height: 38px; border-radius: 10px; background: rgba(71,85,105,0.07); border: 1px solid rgba(71,85,105,0.15); display: flex; align-items: center; justify-content: center; font-size: 18px; margin-bottom: 18px; }
        .iws-page .checklist { list-style: none; margin-top: 0; padding: 0; }
        .iws-page .checklist li { display: flex; align-items: flex-start; gap: 10px; font-size: 13px; color: #475569; padding: 7px 0; border-bottom: 1px solid #e2e8f0; }
        .iws-page .checklist li:last-child { border-bottom: none; }
        .iws-page .chk { width: 16px; height: 16px; flex-shrink: 0; margin-top: 1px; stroke: #334155; fill: none; stroke-width: 2; }
        .iws-page .steps { display: grid; grid-template-columns: repeat(4,1fr); gap: 32px; text-align: center; }
        .iws-page .step-num { width: 52px; height: 52px; border-radius: 50%; background: #f1f5f9; border: 2px solid #cbd5e1; color: #334155; font-family: 'Inter', 'DM Sans', sans-serif; font-size: 18px; font-weight: 800; display: flex; align-items: center; justify-content: center; margin: 0 auto 16px; }
        .iws-page .step h4 { font-family: 'Inter', 'DM Sans', sans-serif; font-size: 13px; font-weight: 700; color: #0f172a; margin-bottom: 6px; }
        .iws-page .step p { font-size: 12px; color: #64748b; line-height: 1.5; }
        .iws-page .price-card { background: #ffffff; border: 1px solid #e2e8f0; border-radius: 14px; padding: 36px; max-width: 480px; position: relative; overflow: hidden; box-shadow: 0 1px 8px rgba(0,0,0,0.06); }
        .iws-page .price-card::before { display: none; }
        @keyframes shimmer { 0%{background-position:0% 0%} 100%{background-position:200% 0%} }
        .iws-page .price-badge { display: inline-block; background: #1e293b; color: #f8fafc; font-size: 11px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; border-radius: 20px; padding: 4px 14px; margin-bottom: 20px; }
        .iws-page .free-note { background: rgba(71,85,105,0.06); border: 1px solid rgba(71,85,105,0.16); border-radius: 10px; padding: 12px 16px; font-size: 13px; color: #334155; margin-bottom: 20px; }
        .iws-page .free-note span { color: #64748b; font-weight: 400; }
        .iws-page .price-num { font-family: 'Inter', 'DM Sans', sans-serif; font-size: 56px; font-weight: 800; color: #0f172a; letter-spacing: -0.04em; line-height: 1; }
        .iws-page .price-meta { font-size: 13px; color: #64748b; margin-top: 4px; margin-bottom: 24px; }
        .iws-page .faq-list { max-width: 640px; }
        .iws-page .faq-item { padding: 18px 0; border-bottom: 1px solid #e2e8f0; }
        .iws-page .faq-q { font-size: 14px; font-weight: 700; color: #0f172a; display: flex; align-items: flex-start; gap: 10px; margin-bottom: 8px; }
        .iws-page .q-badge { background: rgba(71,85,105,0.1); color: #334155; font-size: 10px; font-weight: 800; width: 20px; height: 20px; border-radius: 4px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 2px; }
        .iws-page .faq-a { font-size: 13px; color: #64748b; line-height: 1.65; padding-left: 30px; }
        .iws-page .final { background: linear-gradient(135deg, rgba(71,85,105,0.05), rgba(71,85,105,0.03)); border: 1px solid #e2e8f0; border-radius: 14px; padding: 56px 40px; text-align: center; margin-bottom: 48px; }
        .iws-page .final h2 { font-family: 'Inter', 'DM Sans', sans-serif; font-size: clamp(22px,3.5vw,36px) !important; font-weight: 800 !important; letter-spacing: -0.03em !important; color: #0f172a !important; margin-bottom: 12px !important; line-height: 1.15 !important; }
        .iws-page .partner { text-align: center; margin: 48px 0 56px; }
        .iws-page .partner-label { font-size: 18px; font-weight: 400; color: #64748b; margin-bottom: 24px; }
        .iws-page .partner-logos { display: flex; flex-wrap: wrap; justify-content: center; gap: 16px 24px; padding: 0 16px; }
        .iws-page .partner-logo-link { display: inline-block; transition: opacity 0.2s; }
        .iws-page .partner-logo-link:hover { opacity: 0.75; }
        .iws-page .partner-logo-img { height: 100px; width: auto; display: block; }
        @media (max-width: 640px) {
          .iws-page .grid3 { grid-template-columns: 1fr; }
          .iws-page .grid2 { grid-template-columns: 1fr; }
          .iws-page .split { grid-template-columns: 1fr; gap: 32px; }
          .iws-page .steps { grid-template-columns: 1fr 1fr; }
          .iws-page .hero-box { padding: 24px 18px; border-radius: 20px; }
          .iws-page .hero-split { grid-template-columns: 1fr; gap: 28px; }
          .iws-page .hero-text { text-align: center; }
          .iws-page .cta-row { justify-content: center; }
          .iws-page .paper-frame { transform: none; }
        }
      `}</style>
    </div>
  );
}

