import React from "react";
import Link from "next/link";
import Footer from "components/Footers/Footer.js";

export default function Pricing() {
  return (
    <div className="prc-page cyber-bg">
      <div className="wrap">

        {/* Hero */}
        <div className="hero">
          <div className="slabel">Preise</div>
          <h1>Monatlich kündbar.<br /><span className="grad">Keine Fallen.</span></h1>
          <p>Kein Jahresvertrag, kein Lock-in. Kontinuierliche Sicherheitsanalyse — solange sie für Sie sinnvoll ist.</p>
        </div>

        {/* Warum Abo */}
        <div className="why-box">
          <div className="why-grid">
            <div>
              <div className="why-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg></div>
              <div className="why-title">Kontinuität schlägt Momentaufnahme</div>
              <div className="why-body">Ein einmaliger Report zeigt den Stand heute. Ein Abo zeigt ob es besser oder schlechter wird — genau das wollen Audits und Versicherungen sehen.</div>
            </div>
            <div>
              <div className="why-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M23 4v6h-6"/><path d="M1 20v-6h6"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg></div>
              <div className="why-title">Angriffsfläche verändert sich monatlich</div>
              <div className="why-body">Neue Dienste, alte Subdomains, frische CVEs — Ihre Infrastruktur steht nicht still. Ihr Sicherheitsbild sollte es auch nicht.</div>
            </div>
            <div>
              <div className="why-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="1"/><line x1="9" y1="12" x2="15" y2="12"/><line x1="9" y1="16" x2="13" y2="16"/></svg></div>
              <div className="why-title">Nachweisbar für Audits &amp; Compliance</div>
              <div className="why-body">Monatliche Reports dokumentieren Ihre Sicherheitslage über Zeit. Was Prüfer und Versicherer zunehmend fordern.</div>
            </div>
          </div>
        </div>

        {/* Einmal-Report */}
        <div className="oneoff">
          <div>
            <div className="oo-label">Noch unsicher?</div>
            <div className="oo-title">Einmaliger Exposure-Report — 490 €</div>
            <div className="oo-sub">Einmalig, manuell geprüft, kein Abo. Perfekt um uns kennenzulernen.</div>
          </div>
          <Link href="/contact?product=oneoff" legacyBehavior><a className="oo-btn">Einmal testen →</a></Link>
        </div>
        <div className="arrow-note">↓ Oder direkt mit einem Abo starten — monatlich kündbar, keine Mindestlaufzeit</div>

        {/* Pakete */}
        <div className="plans">

          {/* Essential */}
          <div className="plan normal">
            <div className="plan-name">Essential</div>
            <div className="plan-tag">Für kleine Teams — bis 5 Assets</div>
            <div className="plan-price">99 €</div>
            <div className="plan-period">/ Monat · inkl. aller Kosten</div>
            <ul className="feat-list">
              <li className="feat-item active"><svg viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg><span>Monatlicher Exposure-Report (PDF)</span></li>
              <li className="feat-item active"><svg viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg><span>Bis zu 5 Assets / IPs</span></li>
              <li className="feat-item active"><svg viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg><span>Top-3-Risiken priorisiert</span></li>
              <li className="feat-item active"><svg viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg><span>CVE-Analyse via NVD</span></li>
              <li className="feat-item active"><svg viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg><span>Trendvergleich zum Vormonat</span></li>
              <li className="feat-item active"><svg viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg><span>E-Mail-Benachrichtigung</span></li>
              <li className="feat-item muted"><svg viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg><span>Review-Call nicht enthalten</span></li>
              <li className="feat-item muted"><svg viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg><span>CISA KEV nicht enthalten</span></li>
            </ul>
            <Link href="/contact?plan=essential" legacyBehavior><a className="plan-cta ghost">Essential starten</a></Link>
          </div>

          {/* Professional */}
          <div className="plan featured">
            <div className="plan-accent"></div>
            <div className="plan-badge">Meistgewählt</div>
            <div className="plan-name">Professional</div>
            <div className="plan-tag">Empfohlen für KMU — bis 20 Assets</div>
            <div className="plan-price">199 €</div>
            <div className="plan-period">/ Monat · inkl. aller Kosten</div>
            <ul className="feat-list">
              <li className="feat-item active"><svg viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg><span>Monatlicher Exposure-Report (PDF)</span></li>
              <li className="feat-item active"><svg viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg><span>Bis zu 20 Assets / IPs</span></li>
              <li className="feat-item active"><svg viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg><span>Vollständige CVE-Übersicht mit CVSS-Scores</span></li>
              <li className="feat-item active"><svg viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg><span>CISA KEV-Markierung</span></li>
              <li className="feat-item active"><svg viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg><span>Trendvergleich zum Vormonat</span></li>
              <li className="feat-item active"><svg viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg><span>Ausführliche Handlungsempfehlungen</span></li>
              <li className="feat-item active"><svg viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg><span>E-Mail-Benachrichtigung</span></li>
              <li className="feat-item active"><svg viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg><span>Quartalsweiser Review-Call (30 min)</span></li>
            </ul>
            <Link href="/contact?plan=professional" legacyBehavior><a className="plan-cta primary">Professional starten</a></Link>
          </div>

          {/* Corporate */}
          <div className="plan normal">
            <div className="plan-name">Corporate</div>
            <div className="plan-tag">Für Compliance — bis 50 Assets</div>
            <div className="plan-price">349 €</div>
            <div className="plan-period">/ Monat · inkl. aller Kosten</div>
            <ul className="feat-list">
              <li className="feat-item active"><svg viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg><span>Monatlicher Exposure-Report (PDF)</span></li>
              <li className="feat-item active"><svg viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg><span>Bis zu 50 Assets / IPs</span></li>
              <li className="feat-item active"><svg viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg><span>Vollständige CVE-Übersicht mit CVSS-Scores</span></li>
              <li className="feat-item active"><svg viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg><span>CISA KEV-Markierung</span></li>
              <li className="feat-item active"><svg viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg><span>Trendvergleich zum Vormonat</span></li>
              <li className="feat-item active"><svg viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg><span>Ausführliche Handlungsempfehlungen</span></li>
              <li className="feat-item active"><svg viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg><span>Monatlicher Review-Call (30 min)</span></li>
              <li className="feat-item active"><svg viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg><span>Archiv-Nachweis auf Anfrage (SHA256)</span></li>
              <li className="feat-item active"><svg viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg><span>Kundenbranding auf Wunsch</span></li>
            </ul>
            <Link href="/contact?plan=corporate" legacyBehavior><a className="plan-cta ghost">Corporate anfragen</a></Link>
          </div>
        </div>

        {/* Extra */}
        <div className="extra">
          Mehr Assets benötigt? <span>Jedes zusätzliche Asset ab 15 € / Monat.</span> <Link href="/contact" legacyBehavior><a>Individuell anfragen →</a></Link>
        </div>

        {/* Trust */}
        <div className="trust-grid">
          <div className="trust-item"><div className="ti-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></div><div><div className="ti-title">SHA256-gesichert</div><div className="ti-body">Jeder Report kryptografisch gesichert. Manipulationssicher, nachweisbar, auditfähig.</div></div></div>
          <div className="trust-item"><div className="ti-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/><line x1="12" y1="11" x2="12" y2="17"/><line x1="9" y1="14" x2="15" y2="14"/></svg></div><div><div className="ti-title">Versioniert &amp; archiviert</div><div className="ti-body">Alle Reports intern versioniert. Corporate-Kunden erhalten Archiv-Nachweise auf Anfrage.</div></div></div>
          <div className="trust-item"><div className="ti-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg></div><div><div className="ti-title">100% passiv</div><div className="ti-body">Keine aktiven Scans, kein Eingriff. Ausschließlich öffentliche Datenquellen.</div></div></div>
          <div className="trust-item"><div className="ti-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg></div><div><div className="ti-title">Kein Lock-in</div><div className="ti-body">Monatlich kündbar, keine Mindestlaufzeit. Kein automatischer Verlängerungsvertrag.</div></div></div>
        </div>

        {/* Legal */}
        <div className="legal">
          Monatlich kündbar · Keine Mindestlaufzeit · Widerrufsrecht: 14 Tage bei Fernabsatzverträgen ·{" "}
          <Link href="/agb" legacyBehavior><a>AGB</a></Link> ·{" "}
          <Link href="/widerruf" legacyBehavior><a>Widerrufsbelehrung</a></Link>
        </div>

        {/* Final CTA */}
        <div className="final">
          <h2>Noch Fragen?</h2>
          <p>Wir helfen Ihnen das richtige Paket zu finden — oder starten Sie einfach kostenlos.</p>
          <div className="btn-row">
            <Link href="/contact" legacyBehavior><a className="btn-primary">Kostenlos starten →</a></Link>
            <Link href="/faq" legacyBehavior><a className="btn-ghost">FAQ ansehen</a></Link>
          </div>
        </div>

      </div>

      <Footer />

      <style jsx global>{`
        .prc-page { background: #0a192f; min-height: 100vh; font-family: 'Segoe UI', system-ui, sans-serif; color: #e2e8f0; }
        .prc-page * { box-sizing: border-box; }
        .prc-page h1, .prc-page h2 { color: #e2e8f0 !important; }
        .prc-page .wrap { max-width: 900px; margin: 0 auto; padding: 0 24px 48px; }
        .prc-page .slabel { font-size: 11px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: #00d4ff; margin-bottom: 12px; }
        .prc-page .hero { text-align: center; padding: 100px 0 40px; }
        .prc-page .hero h1 { font-size: clamp(26px,4vw,40px); font-weight: 800; letter-spacing: -0.03em; line-height: 1.1; margin-bottom: 14px; }
        .prc-page .hero .grad { background: linear-gradient(90deg,#00d4ff,#4fa3ff); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .prc-page .hero p { color: #64748b; font-size: 15px; max-width: 480px; margin: 0 auto; }
        .prc-page .why-box { background: rgba(0,212,255,0.04); border: 1px solid rgba(0,212,255,0.12); border-radius: 16px; padding: 32px; margin-bottom: 20px; }
        .prc-page .why-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 24px; text-align: center; }
        .prc-page .why-icon { display: flex; justify-content: center; margin-bottom: 14px; }
        .prc-page .why-title { font-size: 13px; font-weight: 700; color: #e2e8f0; margin-bottom: 6px; }
        .prc-page .why-body { font-size: 12px; color: #64748b; line-height: 1.55; }
        .prc-page .oneoff { background: rgba(15,23,42,0.7); border: 1px solid rgba(0,212,255,0.08); border-radius: 14px; padding: 20px 24px; display: flex; align-items: center; justify-content: space-between; gap: 16px; margin-bottom: 10px; }
        .prc-page .oo-label { font-size: 11px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: #475569; margin-bottom: 4px; }
        .prc-page .oo-title { font-size: 15px; font-weight: 700; color: #e2e8f0; margin-bottom: 4px; }
        .prc-page .oo-sub { font-size: 12px; color: #64748b; }
        .prc-page .oo-btn { border: 1px solid rgba(0,212,255,0.25); color: #00d4ff; padding: 10px 20px; border-radius: 12px; font-size: 13px; font-weight: 600; text-decoration: none; white-space: nowrap; flex-shrink: 0; transition: all 0.2s; }
        .prc-page .oo-btn:hover { border-color: rgba(0,212,255,0.5); background: rgba(0,212,255,0.05); transform: translateY(-1px); }
        .prc-page .oneoff:hover { border-color: rgba(0,212,255,0.18); background: rgba(15,23,42,0.9); }
        .prc-page .arrow-note { text-align: center; font-size: 12px; color: #334155; margin-bottom: 28px; }
        .prc-page .plans { display: grid; grid-template-columns: repeat(3,1fr); gap: 14px; margin-bottom: 32px; }
        .prc-page .plan { border-radius: 16px; padding: 24px; display: flex; flex-direction: column; position: relative; overflow: hidden; }
        .prc-page .plan.normal { background: rgba(20,30,48,0.75); border: 1px solid rgba(0,212,255,0.1); transition: all 0.2s; }
        .prc-page .plan.normal:hover { border-color: rgba(0,212,255,0.25); transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,0.3); }
        .prc-page .plan.featured { background: rgba(30,41,59,0.95); border: 2px solid rgba(0,212,255,0.35); box-shadow: 0 0 40px rgba(0,212,255,0.06); transition: all 0.2s; }
        .prc-page .plan.featured:hover { transform: translateY(-2px); box-shadow: 0 0 40px rgba(0,212,255,0.12), 0 8px 24px rgba(0,0,0,0.3); }
        .prc-page .plan-accent { position: absolute; top: 0; left: 0; right: 0; height: 2px; background: linear-gradient(90deg,#00d4ff,#0077ff); }
        .prc-page .plan-badge { display: inline-block; background: linear-gradient(90deg,#ffb84d,#ff9f1a); color: #001f3f; font-size: 11px; font-weight: 800; padding: 3px 10px; border-radius: 100px; margin-bottom: 12px; }
        .prc-page .plan-name { font-size: 17px; font-weight: 800; color: #e2e8f0; margin-bottom: 4px; }
        .prc-page .plan-tag { font-size: 11px; color: #64748b; margin-bottom: 16px; }
        .prc-page .plan-price { font-size: 36px; font-weight: 800; color: #e2e8f0; letter-spacing: -0.04em; line-height: 1; }
        .prc-page .plan-period { font-size: 11px; color: #64748b; margin-top: 3px; margin-bottom: 18px; }
        .prc-page .feat-list { list-style: none; flex-grow: 1; margin-bottom: 20px; padding: 0; }
        .prc-page .feat-item { display: flex; align-items: flex-start; gap: 8px; padding: 7px 0; border-bottom: 1px solid rgba(0,212,255,0.06); font-size: 12px; }
        .prc-page .feat-item:last-child { border-bottom: none; }
        .prc-page .feat-item.muted { color: #475569; }
        .prc-page .feat-item svg { width: 13px; height: 13px; flex-shrink: 0; margin-top: 1px; fill: none; stroke-width: 2; }
        .prc-page .feat-item.active svg { stroke: #00d4ff; }
        .prc-page .feat-item.muted svg { stroke: #334155; }
        .prc-page .feat-item.active span { color: #cbd5e1; }
        .prc-page .plan-cta { display: flex; align-items: center; justify-content: center; padding: 11px; border-radius: 12px; font-size: 13px; font-weight: 700; text-decoration: none; transition: all 0.2s; }
        .prc-page .plan-cta.primary { background: #00d4ff; color: #001f3f; }
        .prc-page .plan-cta.ghost { border: 1px solid rgba(0,212,255,0.25); color: #00d4ff; background: transparent; }
        .prc-page .extra { text-align: center; font-size: 13px; color: #64748b; margin-bottom: 28px; }
        .prc-page .extra span { color: #94a3b8; }
        .prc-page .extra a { color: #00d4ff; text-decoration: none; }
        .prc-page .trust-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 28px; }
        .prc-page .trust-item { display: flex; gap: 12px; align-items: flex-start; background: rgba(15,23,42,0.6); border: 1px solid rgba(0,212,255,0.07); border-radius: 12px; padding: 14px; }
        .prc-page .ti-icon { display: flex; align-items: center; flex-shrink: 0; padding-top: 1px; }
        .prc-page .ti-title { font-size: 13px; font-weight: 700; color: #e2e8f0; margin-bottom: 3px; }
        .prc-page .ti-body { font-size: 12px; color: #64748b; line-height: 1.5; }
        .prc-page .legal { text-align: center; font-size: 11px; color: #334155; margin-bottom: 40px; }
        .prc-page .legal a { color: #475569; text-decoration: none; }
        .prc-page .final { background: linear-gradient(135deg,rgba(0,212,255,0.06),rgba(0,119,255,0.04)); border: 1px solid rgba(0,212,255,0.14); border-radius: 18px; padding: 48px 32px; text-align: center; margin-bottom: 40px; }
        .prc-page .final h2 { font-size: clamp(22px,3vw,32px) !important; font-weight: 800; letter-spacing: -0.03em; margin-bottom: 10px; }
        .prc-page .final p { color: #64748b; font-size: 14px; margin-bottom: 24px; }
        .prc-page .btn-row { display: flex; justify-content: center; gap: 12px; flex-wrap: wrap; }
        .prc-page .btn-primary { background: #00d4ff; color: #001f3f; padding: 14px 28px; border-radius: 12px; font-weight: 800; font-size: 14px; text-decoration: none; transition: all 0.2s; display: inline-block; }
        .prc-page .btn-primary:hover { opacity: 0.9; transform: translateY(-1px); }
        .prc-page .btn-ghost { border: 1px solid rgba(0,212,255,0.2); color: #00d4ff; padding: 14px 24px; border-radius: 12px; font-size: 13px; text-decoration: none; transition: all 0.2s; display: inline-block; }
        .prc-page .btn-ghost:hover { border-color: rgba(0,212,255,0.5); background: rgba(0,212,255,0.05); transform: translateY(-1px); }
        @media (max-width: 640px) {
          .prc-page .why-grid { grid-template-columns: 1fr; }
          .prc-page .plans { grid-template-columns: 1fr; }
          .prc-page .trust-grid { grid-template-columns: 1fr; }
          .prc-page .oneoff { flex-direction: column; align-items: flex-start; }
        }
      `}</style>
    </div>
  );
}
