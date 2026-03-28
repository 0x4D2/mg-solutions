import React from "react";
import Link from "next/link";
import IndexNavbar from "components/Navbars/IndexNavbar.js";

export default function Index() {
  return (
    <div className="iws-page">
      <IndexNavbar fixed />

      <div className="wrap">

        {/* HERO */}
        <div className="hero">
          <div className="badge"><span className="dot"></span> OSINT · Passiv · 24h Lieferung</div>
          <h1>
            Ihr Unternehmen hat wahrscheinlich<br />
            mehr öffentliche Angriffsfläche,<br />
            <span className="grad">als Sie glauben.</span>
          </h1>
          <p className="hero-sub">Wir analysieren, welche Systeme, Daten und Informationen über Ihr Unternehmen öffentlich erreichbar sind — und was davon ein Angreifer sofort nutzen könnte.</p>
          <p className="micro muted">Keine Installation · Kein Zugriff auf interne Systeme · Nur öffentliche Datenquellen</p>
          <div className="cta-row">
            <Link href="/contact" legacyBehavior><a className="btn-primary">Kostenlos Risiko prüfen lassen</a></Link>
            <Link href="/pricing" legacyBehavior><a className="btn-ghost">490 € Einmal-Report ansehen →</a></Link>
          </div>
        </div>

        {/* TRUST BAR */}
        <div className="trust">
          <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>100% passiv — keine Scans</span>
          <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>Report in 24 Stunden</span>
          <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="2"><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="10"/></svg>Manuell geprüft — keine Blackbox</span>
          <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="2"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="1"/></svg>Kein Abo, keine Verpflichtung</span>
          <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>Shodan · NVD · CISA KEV</span>
        </div>

        {/* PAIN */}
        <div className="section">
          <div className="slabel">Das eigentliche Problem</div>
          <h2>Das sieht ein Angreifer —<br />bevor Sie es sehen.</h2>
          <p className="section-sub">Diese Informationen sind nicht versteckt. Sie sind nur selten aktiv überprüft.</p>
          <div className="grid3">
            <div className="card">
              <span className="card-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8m-4-4v4"/></svg></span>
              <h3>Öffentlich erreichbare Systeme</h3>
              <p>Alte Subdomains, Staging-Umgebungen, offene Ports — sichtbar für jeden der sucht.</p>
              <span className="tag">Häufig übersehen</span>
            </div>
            <div className="card">
              <span className="card-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg></span>
              <h3>Daten aus Leaks &amp; Breaches</h3>
              <p>Firmen-E-Mails und Credentials aus Datenpannen werden aktiv für Angriffe genutzt.</p>
              <span className="tag">Unterschätztes Risiko</span>
            </div>
            <div className="card">
              <span className="card-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg></span>
              <h3>Rückschlüsse auf interne Struktur</h3>
              <p>Technologie-Stack, Versionsstände, Dienste — alles öffentlich, alles verwertbar.</p>
              <span className="tag">Angreifer-Perspektive</span>
            </div>
          </div>
        </div>

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
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="2"><path d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <div><div className="fi-title">{title}</div><div className="fi-desc">{desc}</div></div>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#64748b", marginBottom: "12px" }}>Beispiel-Report (anonymisiert)</div>
              <div className="placeholder">
                <div className="ph-badge">PASSIV · OSINT</div>
                <svg viewBox="0 0 24 24"><path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                <div className="ph-label" style={{ color: "#475569", fontSize: "13px", fontWeight: 500, marginBottom: "4px" }}>Report-Screenshot folgt</div>
                <div className="ph-label">/img/report-preview.png</div>
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
              <div className="zt-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg></div>
              <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#e2e8f0", marginBottom: "10px" }}>IT-Verantwortliche</h3>
              <p style={{ fontSize: "13px", color: "#64748b", marginBottom: "16px", lineHeight: 1.6 }}>Endlich ein externes Bild Ihrer Infrastruktur — ohne aktiven Scan, ohne rechtliche Grauzone.</p>
              <ul className="checklist">
                <li><svg className="chk" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" /></svg> Externe Angriffsfläche dokumentieren</li>
                <li><svg className="chk" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" /></svg> Maßnahmen nach realer Ausnutzbarkeit priorisieren</li>
                <li><svg className="chk" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" /></svg> CVE-Exposition nachweisbar machen</li>
              </ul>
            </div>
            <div className="card">
              <div className="zt-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="4" height="14" rx="1"/><rect x="9" y="3" width="4" height="18" rx="1"/><rect x="16" y="10" width="4" height="11" rx="1"/></svg></div>
              <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#e2e8f0", marginBottom: "10px" }}>Geschäftsführung</h3>
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
            <div className="price-meta">einmalig · zzgl. MwSt.</div>
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
              Kein Abo · <Link href="/pricing" legacyBehavior><a style={{ color: "#00d4ff" }}>Alle Preise ansehen</a></Link>
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
          <Link href="/faq" legacyBehavior><a style={{ color: "#00d4ff", fontSize: "13px", display: "inline-block", marginTop: "20px" }}>Alle FAQs ansehen →</a></Link>
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

        {/* FOOTER */}
        <div className="footer-bar">
          <div style={{ fontWeight: 700, fontSize: "13px", color: "#fff" }}>ich<span style={{ color: "#00d4ff" }}>will</span>sicherheit<span style={{ color: "#00d4ff" }}>.</span></div>
          <div style={{ display: "flex", gap: "20px" }}>
            <Link href="/imprint" legacyBehavior><a style={{ color: "#334155", textDecoration: "none", fontSize: "12px" }}>Impressum</a></Link>
            <Link href="/privacy" legacyBehavior><a style={{ color: "#334155", textDecoration: "none", fontSize: "12px" }}>Datenschutz</a></Link>
            <Link href="/contact" legacyBehavior><a style={{ color: "#334155", textDecoration: "none", fontSize: "12px" }}>Kontakt</a></Link>
          </div>
          <div className="footer-social">
            <a href="https://www.youtube.com/@ichwillsicherheit" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none"/></svg>
            </a>
            <a href="https://www.instagram.com/ichwillsicherheit/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/></svg>
            </a>
            <a href="https://www.tiktok.com/@ichwillsicherheit" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/></svg>
            </a>
            <a href="https://www.linkedin.com/company/ichwillsicherheit/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
          </div>
          <div style={{ color: "#334155" }}>© 2026 MG Solutions</div>
        </div>

      </div>

      <style jsx global>{`
        .iws-page {
          background: #0a192f;
          min-height: 100vh;
          font-family: 'Segoe UI', system-ui, sans-serif;
          color: #e2e8f0;
        }
        .iws-page .wrap {
          max-width: 900px;
          margin: 0 auto;
          padding: 64px 24px 0;
        }
        .iws-page .hero { text-align: center; padding: 64px 0 48px; }
        .iws-page .badge { display: inline-flex; align-items: center; gap: 8px; background: rgba(0,212,255,0.08); border: 1px solid rgba(0,212,255,0.2); color: #00d4ff; font-size: 11px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; padding: 5px 14px; border-radius: 100px; margin-bottom: 28px; }
        .iws-page .dot { width: 6px; height: 6px; border-radius: 50%; background: #00d4ff; display: inline-block; animation: iwsDot 2s infinite; }
        @keyframes iwsDot { 0%,100%{opacity:1} 50%{opacity:0.3} }
        .iws-page h1 { font-size: clamp(26px,4vw,42px) !important; font-weight: 800 !important; line-height: 1.1 !important; letter-spacing: -0.03em !important; color: #fff !important; margin-bottom: 20px !important; -webkit-text-fill-color: unset !important; background: none !important; }
        .iws-page h1 .grad { background: linear-gradient(90deg,#00d4ff,#4fa3ff); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .iws-page .hero-sub { font-size: 17px; color: #cbd5e1; max-width: 580px; margin: 0 auto 12px; line-height: 1.65; }
        .iws-page .micro { font-size: 13px; margin-bottom: 36px; }
        .iws-page .muted { color: #64748b; }
        .iws-page .cta-row { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }
        .iws-page .btn-primary { background: #00d4ff; color: #001f3f; padding: 14px 28px; border-radius: 14px; font-weight: 800; font-size: 15px; text-decoration: none; transition: all 0.2s; display: inline-block; }
        .iws-page .btn-primary:hover { opacity: 0.9; transform: translateY(-1px); }
        .iws-page .btn-ghost { border: 1px solid rgba(0,212,255,0.3); color: #00d4ff; padding: 14px 28px; border-radius: 14px; font-size: 15px; text-decoration: none; display: inline-block; }
        .iws-page .trust { display: flex; flex-wrap: wrap; justify-content: center; gap: 12px 28px; padding: 14px 20px; margin: 32px 0 56px; border-radius: 14px; background: rgba(0,212,255,0.04); border: 1px solid rgba(0,212,255,0.08); font-size: 13px; color: #94a3b8; }
        .iws-page .trust span { display: inline-flex; align-items: center; gap: 7px; }
        .iws-page .section { margin-bottom: 64px; }
        .iws-page .slabel { font-size: 11px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: #00d4ff; margin-bottom: 14px; }
        .iws-page h2 { font-size: clamp(22px,3vw,34px) !important; font-weight: 800 !important; letter-spacing: -0.02em !important; color: #e2e8f0 !important; line-height: 1.15 !important; margin-bottom: 10px !important; -webkit-text-fill-color: unset !important; background: none !important; }
        .iws-page .section-sub { font-size: 14px; color: #64748b; margin-bottom: 36px; }
        .iws-page .grid3 { display: grid; grid-template-columns: repeat(3,1fr); gap: 14px; }
        .iws-page .card { background: rgba(30,41,59,0.75); border: 1px solid rgba(0,212,255,0.12); border-radius: 16px; padding: 24px; }
        .iws-page .card-icon { font-size: 24px; margin-bottom: 16px; display: block; }
        .iws-page .card h3 { font-size: 15px !important; font-weight: 700 !important; color: #e2e8f0 !important; margin-bottom: 10px !important; -webkit-text-fill-color: unset !important; background: none !important; }
        .iws-page .card p { font-size: 13px; color: #94a3b8; line-height: 1.6; margin-bottom: 14px; }
        .iws-page .tag { display: inline-block; font-size: 11px; font-weight: 700; padding: 3px 10px; border-radius: 100px; background: rgba(255,107,53,0.1); border: 1px solid rgba(255,107,53,0.22); color: #ff6b35; }
        .iws-page .bridge { background: rgba(0,212,255,0.04); border: 1px solid rgba(0,212,255,0.12); border-radius: 16px; padding: 28px; text-align: center; }
        .iws-page .bridge p { font-size: 16px; color: #cbd5e1; line-height: 1.65; }
        .iws-page .bridge .bridge-sub { color: #64748b; font-size: 14px; display: block; margin-top: 6px; }
        .iws-page .split { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: start; }
        .iws-page .feature-list { list-style: none; margin-top: 8px; padding: 0; }
        .iws-page .feature-list li { display: flex; gap: 14px; padding: 14px 0; border-bottom: 1px solid rgba(0,212,255,0.06); }
        .iws-page .feature-list li:last-child { border-bottom: none; }
        .iws-page .fi-icon { width: 30px; height: 30px; border-radius: 8px; background: rgba(0,212,255,0.08); border: 1px solid rgba(0,212,255,0.16); display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 2px; }
        .iws-page .fi-title { font-size: 13px; font-weight: 700; color: #e2e8f0; margin-bottom: 3px; }
        .iws-page .fi-desc { font-size: 12px; color: #64748b; line-height: 1.5; }
        .iws-page .placeholder { background: rgba(15,23,42,0.8); border: 1px solid rgba(0,212,255,0.15); border-radius: 16px; min-height: 320px; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; position: relative; padding: 24px; }
        .iws-page .placeholder svg { width: 40px; height: 40px; stroke: #334155; stroke-width: 1.5; fill: none; margin-bottom: 12px; }
        .iws-page .ph-label { font-size: 12px; color: #334155; }
        .iws-page .ph-badge { position: absolute; top: 12px; left: 12px; background: rgba(0,212,255,0.1); border: 1px solid rgba(0,212,255,0.2); color: #00d4ff; font-size: 10px; font-weight: 700; padding: 3px 10px; border-radius: 100px; }
        .iws-page .ph-badge2 { position: absolute; bottom: 12px; right: 12px; background: rgba(15,23,42,0.9); border: 1px solid rgba(100,116,139,0.2); color: #64748b; font-size: 10px; padding: 3px 10px; border-radius: 100px; }
        .iws-page .grid2 { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .iws-page .zt-icon { width: 38px; height: 38px; border-radius: 10px; background: rgba(0,212,255,0.08); border: 1px solid rgba(0,212,255,0.15); display: flex; align-items: center; justify-content: center; font-size: 18px; margin-bottom: 18px; }
        .iws-page .checklist { list-style: none; margin-top: 0; padding: 0; }
        .iws-page .checklist li { display: flex; align-items: flex-start; gap: 10px; font-size: 13px; color: #cbd5e1; padding: 7px 0; border-bottom: 1px solid rgba(0,212,255,0.06); }
        .iws-page .checklist li:last-child { border-bottom: none; }
        .iws-page .chk { width: 16px; height: 16px; flex-shrink: 0; margin-top: 1px; stroke: #00d4ff; fill: none; stroke-width: 2; }
        .iws-page .steps { display: grid; grid-template-columns: repeat(4,1fr); gap: 32px; text-align: center; }
        .iws-page .step-num { width: 52px; height: 52px; border-radius: 50%; background: rgba(15,23,42,0.9); border: 2px solid rgba(0,212,255,0.2); color: #00d4ff; font-size: 18px; font-weight: 800; display: flex; align-items: center; justify-content: center; margin: 0 auto 16px; }
        .iws-page .step h4 { font-size: 13px; font-weight: 700; color: #e2e8f0; margin-bottom: 6px; }
        .iws-page .step p { font-size: 12px; color: #64748b; line-height: 1.5; }
        .iws-page .price-card { background: linear-gradient(160deg, rgba(0,212,255,0.06) 0%, rgba(30,41,59,0.9) 40%); border: 1px solid rgba(0,212,255,0.45); border-radius: 18px; padding: 36px; max-width: 480px; position: relative; overflow: hidden; box-shadow: 0 0 0 1px rgba(0,212,255,0.08), 0 0 40px rgba(0,212,255,0.14), 0 16px 48px rgba(0,0,0,0.5); }
        .iws-page .price-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px; background: linear-gradient(90deg,#00d4ff,#0077ff,#00d4ff); background-size: 200% 100%; animation: shimmer 3s linear infinite; }
        @keyframes shimmer { 0%{background-position:0% 0%} 100%{background-position:200% 0%} }
        .iws-page .price-badge { display: inline-block; background: linear-gradient(90deg,#00d4ff,#0077ff); color: #000; font-size: 11px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; border-radius: 20px; padding: 4px 12px; margin-bottom: 20px; }
        .iws-page .free-note { background: rgba(0,212,255,0.06); border: 1px solid rgba(0,212,255,0.14); border-radius: 10px; padding: 12px 16px; font-size: 13px; color: #00d4ff; margin-bottom: 20px; }
        .iws-page .free-note span { color: #64748b; font-weight: 400; }
        .iws-page .price-num { font-size: 56px; font-weight: 800; color: #00d4ff; letter-spacing: -0.04em; line-height: 1; text-shadow: 0 0 30px rgba(0,212,255,0.4); }
        .iws-page .price-meta { font-size: 13px; color: #64748b; margin-top: 4px; margin-bottom: 24px; }
        .iws-page .faq-list { max-width: 640px; }
        .iws-page .faq-item { padding: 18px 0; border-bottom: 1px solid rgba(0,212,255,0.08); }
        .iws-page .faq-q { font-size: 14px; font-weight: 700; color: #e2e8f0; display: flex; align-items: flex-start; gap: 10px; margin-bottom: 8px; }
        .iws-page .q-badge { background: rgba(0,212,255,0.1); color: #00d4ff; font-size: 10px; font-weight: 800; width: 20px; height: 20px; border-radius: 4px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 2px; }
        .iws-page .faq-a { font-size: 13px; color: #64748b; line-height: 1.65; padding-left: 30px; }
        .iws-page .final { background: linear-gradient(135deg,rgba(0,212,255,0.06),rgba(0,119,255,0.04)); border: 1px solid rgba(0,212,255,0.14); border-radius: 20px; padding: 56px 40px; text-align: center; margin-bottom: 48px; }
        .iws-page .final h2 { font-size: clamp(22px,3.5vw,36px) !important; font-weight: 800 !important; letter-spacing: -0.03em !important; color: #fff !important; margin-bottom: 12px !important; line-height: 1.15 !important; }
        .iws-page .partner { text-align: center; margin: 48px 0 56px; }
        .iws-page .partner-label { font-size: 18px; font-weight: 400; color: #64748b; margin-bottom: 24px; }
        .iws-page .partner-logos { display: flex; flex-wrap: wrap; justify-content: center; gap: 16px 24px; padding: 0 16px; }
        .iws-page .partner-logo-link { display: inline-block; transition: opacity 0.2s; }
        .iws-page .partner-logo-link:hover { opacity: 0.75; }
        .iws-page .partner-logo-img { height: 70px; width: auto; display: block; }
        .iws-page .footer-bar { border-top: 1px solid rgba(0,212,255,0.1); padding: 20px 0; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px; font-size: 12px; color: #334155; }
        .iws-page .footer-social { display: flex; gap: 16px; align-items: center; }
        .iws-page .footer-social a { color: #475569; transition: color 0.2s; }
        .iws-page .footer-social a:hover { color: #00d4ff; }
        @media (max-width: 640px) {
          .iws-page .grid3 { grid-template-columns: 1fr; }
          .iws-page .grid2 { grid-template-columns: 1fr; }
          .iws-page .split { grid-template-columns: 1fr; gap: 32px; }
          .iws-page .steps { grid-template-columns: 1fr 1fr; }
        }
      `}</style>
    </div>
  );
}
