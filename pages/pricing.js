import Head from "next/head";
import Link from "next/link";
import Footer from "components/Footers/Footer.js";

const plans = [
  {
    name: "Essential",
    subtitle: "Für kleine Teams",
    ips: "bis 5 IPs",
    price: "99",
    highlight: false,
    badge: null,
    cta: "Essential starten",
    ctaHref: "/contact",
    features: [
      { text: "Monatlicher Exposure-Report (PDF)", included: true },
      { text: "Bis zu 5 IP-Adressen (1 Report pro IP)", included: true },
      { text: "Top-3-Risiken priorisiert", included: true },
      { text: "CVE-Analyse via NVD", included: true },
      { text: "Trendvergleich zum Vormonat", included: true },
      { text: "E-Mail-Benachrichtigung", included: true },
      { text: "Review-Call", included: false },
      { text: "CISA KEV-Markierung", included: false },
    ],
  },
  {
    name: "Professional",
    subtitle: "Empfohlen für KMU",
    ips: "bis 20 IPs",
    price: "199",
    highlight: true,
    badge: "Unsere Empfehlung",
    cta: "Professional starten",
    ctaHref: "/contact",
    features: [
      { text: "Monatlicher Exposure-Report (PDF)", included: true },
      { text: "Bis zu 20 IP-Adressen (1 Report pro IP)", included: true },
      { text: "Vollständige CVE-Übersicht mit CVSS-Scores", included: true },
      { text: "CISA KEV-Markierung", included: true },
      { text: "Trendvergleich zum Vormonat", included: true },
      { text: "Ausführliche Handlungsempfehlungen", included: true },
      { text: "E-Mail-Benachrichtigung", included: true },
      { text: "Quartalsweiser Review-Call (30 min)", included: true },
    ],
  },
  {
    name: "Corporate",
    subtitle: "Für Compliance",
    ips: "bis 50 IPs",
    price: "349",
    highlight: false,
    badge: null,
    cta: "Corporate anfragen",
    ctaHref: "/contact",
    features: [
      { text: "Monatlicher Exposure-Report (PDF)", included: true },
      { text: "Bis zu 50 IP-Adressen (1 Report pro IP)", included: true },
      { text: "Vollständige CVE-Übersicht mit CVSS-Scores", included: true },
      { text: "CISA KEV-Markierung", included: true },
      { text: "Trendvergleich zum Vormonat", included: true },
      { text: "Ausführliche Handlungsempfehlungen", included: true },
      { text: "Monatlicher Review-Call (30 min)", included: true },
      { text: "Archiv-Nachweis auf Anfrage (SHA256)", included: true },
      { text: "Kundenbranding auf Wunsch", included: true },
    ],
  },
];

const whySubscribe = [
  {
    title: "Kontinuität schlägt Momentaufnahme",
    body: "Ein einmaliger Report zeigt den Stand heute. Ein Abo zeigt ob es besser oder schlechter wird — genau das wollen Audits und Versicherungen sehen.",
  },
  {
    title: "Angriffsfläche verändert sich monatlich",
    body: "Neue Dienste, alte Subdomains, frische CVEs — Ihre Infrastruktur steht nicht still. Ihr Sicherheitsbild sollte es auch nicht.",
  },
  {
    title: "Nachweisbar für Audits & Compliance",
    body: "Monatliche Reports dokumentieren Ihre Sicherheitslage über Zeit. Was Prüfer und Versicherer zunehmend fordern.",
  },
];

const trustBadges = [
  { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#334155" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>, label: "SHA256-gesichert", desc: "Jeder Report kryptografisch gesichert. Manipulationssicher, nachweisbar, auditfähig." },
  { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#334155" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>, label: "Versioniert & archiviert", desc: "Alle Reports intern versioniert. Corporate-Kunden erhalten Archiv-Nachweise auf Anfrage." },
  { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#334155" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>, label: "100% passiv", desc: "Keine aktiven Scans, kein Eingriff. Ausschließlich öffentliche Datenquellen." },
  { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#334155" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>, label: "Kein Lock-in", desc: "Monatlich kündbar, keine Mindestlaufzeit. Kein automatischer Verlängerungsvertrag." },
];

export default function Pricing() {
  return (
    <>
      <Head>
        <title>Preise – ichwillsicherheit.de</title>
        <meta name="description" content="Transparente Preise für passive Sicherheitsanalysen. Monatlich kündbar, kein Lock-in." />
      </Head>

      <div className="iws-page">
      <main className="pricing-page iws-pricing">
        {/* Hero */}
        <div className="hero">
          <div className="slabel">Preise</div>
          <h1 className="page-headline">Monatlich kündbar.<br /><span className="grad">Keine Fallen.</span></h1>
          <p className="hero-sub">
            Kein Jahresvertrag, kein Lock-in. Kontinuierliche Sicherheitsanalyse —<br className="br-desk" />
            solange sie für Sie sinnvoll ist.
          </p>
        </div>

        {/* Why subscribe */}
        <section className="why-section">
          <div className="why-grid">
            {whySubscribe.map((w) => (
              <div key={w.title} className="why-card">
                <div className="why-marker" />
                <h3 className="why-title">{w.title}</h3>
                <p className="why-body">{w.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* One-time offer */}
        <section className="onetime-section">
          <div className="onetime-card">
            <div className="onetime-left">
              <span className="onetime-label">Noch unsicher?</span>
              <h2 className="onetime-title">Einmaliger Exposure-Report</h2>
              <p className="onetime-desc">Einmalig, manuell geprüft, kein Abo. Perfekt um uns kennenzulernen.</p>
            </div>
            <div className="onetime-right">
              <span className="onetime-price">490 €</span>
              <Link href="/contact" className="btn btn-outline">Einmal testen →</Link>
            </div>
          </div>
          <div className="divider-label">
            <span>↓ Oder direkt mit einem Abo starten — monatlich kündbar, keine Mindestlaufzeit</span>
          </div>
        </section>

        {/* Plans */}
        <section className="plans-section">
          <div className="plans-grid">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`plan-card${plan.highlight ? " plan-card--highlight" : ""}`}
              >
                {plan.badge && (
                  <div className="plan-badge">{plan.badge}</div>
                )}
                <div className="plan-header">
                  <div>
                    <p className="plan-subtitle">{plan.subtitle} — {plan.ips}</p>
                    <h2 className="plan-name">{plan.name}</h2>
                  </div>
                  <div className="plan-price-block">
                    <span className="plan-price">{plan.price} €</span>
                    <span className="plan-period">/ Monat · inkl. aller Kosten</span>
                  </div>
                </div>

                <ul className="plan-features">
                  {plan.features.map((f) => (
                    <li key={f.text} className={`plan-feature${f.included ? "" : " plan-feature--excluded"}`}>
                      <span className="feature-icon">
                        {f.included
                          ? <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="10"/></svg>
                          : <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="8" y1="12" x2="16" y2="12"/></svg>
                        }
                      </span>
                      {f.text}
                    </li>
                  ))}
                </ul>

                <Link
                  href={plan.ctaHref}
                  className={`btn${plan.highlight ? " btn-primary" : " btn-outline"} plan-cta`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Asset info */}
        <section className="asset-section">
          <div className="asset-card">
            <span className="asset-pin"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#334155" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg></span>
            <div>
              <h3 className="asset-title">Was ist ein Asset?</h3>
              <p className="asset-body">
                Ein Asset = eine öffentlich erreichbare IPv4-Adresse. Jede IP erhält einen eigenen Report – 1 Report pro Asset.
                Geben Sie eine Domain an? Wir analysieren die primäre IP dieser Domain (basierend auf DNS).
                Wichtig: Weitere IPs aus DNS (z.&nbsp;B. Nameserver, Mailserver) werden in Abschnitt 3 aufgelistet, aber nicht als separate Assets bewertet.
                Wer mehrere IPs bewertet haben möchte, bucht sie einfach als eigenständige Assets.
              </p>
              <p className="asset-extra">
                Mehr Assets benötigt? Jedes zusätzliche Asset ab <strong>15 € / Monat</strong>.{" "}
                <Link href="/contact" className="link-cyan">Individuell anfragen →</Link>
              </p>
            </div>
          </div>
        </section>

        {/* Trust badges */}
        <section className="trust-section">
          <div className="trust-grid">
            {trustBadges.map((b) => (
              <div key={b.label} className="trust-item">
                <span className="trust-icon">{b.icon}</span>
                <strong className="trust-label">{b.label}</strong>
                <p className="trust-desc">{b.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Legal footer note */}
        <section className="legal-note">
          <p>
            Monatlich kündbar · Keine Mindestlaufzeit · Widerrufsrecht: 14 Tage bei Fernabsatzverträgen ·{" "}
            <Link href="/agb" className="link-muted">AGB</Link> ·{" "}
            <Link href="/widerruf" className="link-muted">Widerrufsbelehrung</Link>
          </p>
        </section>

        {/* CTA bottom */}
        <section className="cta-bottom">
          <h2 className="cta-title">Noch Fragen?</h2>
          <p className="cta-body">Wir helfen Ihnen das richtige Paket zu finden — oder starten Sie einfach kostenlos.</p>
          <div className="cta-actions">
            <Link href="/contact" className="btn btn-primary">Kostenlos starten →</Link>
            <Link href="/faq" className="btn btn-outline">FAQ ansehen</Link>
          </div>
        </section>
      </main>

      <Footer />

      <style jsx global>{`
        .iws-pricing { color: #1e293b; }
        .iws-pricing .page-headline { color: #0f172a; }
        .iws-pricing .page-headline .grad {
          font-style: normal;
          text-decoration: none;
          font-weight: 800;
          background: linear-gradient(90deg, #0f172a 0%, #475569 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .iws-pricing .hero { text-align: center; padding: 80px 0 40px; }
        .iws-pricing .slabel { font-size: 11px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: #94a3b8; margin-bottom: 12px; }
        .iws-pricing .hero-sub { color: #64748b; font-size: 1.05rem; line-height: 1.6; max-width: 580px; margin: 0 auto; }
        .iws-pricing .why-card { background: #ffffff; border: 1px solid #e2e8f0; box-shadow: 0 1px 6px rgba(0,0,0,0.05); }
        .iws-pricing .why-marker { background: #334155; }
        .iws-pricing .why-title { font-family: 'Inter','DM Sans',sans-serif; color: #0f172a; }
        .iws-pricing .why-body { color: #475569; }
        .iws-pricing .onetime-card { background: #ffffff; border: 1px solid #e2e8f0; box-shadow: 0 1px 6px rgba(0,0,0,0.05); }
        .iws-pricing .onetime-label { color: #334155; }
        .iws-pricing .onetime-title { font-family: 'Inter','DM Sans',sans-serif; color: #0f172a; }
        .iws-pricing .onetime-desc { color: #64748b; }
        .iws-pricing .onetime-price { font-family: 'Inter','DM Sans',sans-serif; color: #0f172a; }
        .iws-pricing .divider-label span { color: #94a3b8; }
        .iws-pricing .plan-card { background: #ffffff; border: 1px solid #e2e8f0; box-shadow: 0 1px 8px rgba(0,0,0,0.05); }
        .iws-pricing .plan-card--highlight { border-color: #334155; background: #f8fafc; }
        .iws-pricing .plan-badge { background: #1e293b; color: #f8fafc; }
        .iws-pricing .plan-subtitle { color: #94a3b8; }
        .iws-pricing .plan-name { font-family: 'Inter','DM Sans',sans-serif; color: #0f172a; }
        .iws-pricing .plan-price-block { border-color: #e2e8f0; }
        .iws-pricing .plan-card--highlight .plan-price-block { border-color: #cbd5e1; }
        .iws-pricing .plan-price { font-family: 'Inter','DM Sans',sans-serif; color: #0f172a; }
        .iws-pricing .plan-period { color: #94a3b8; }
        .iws-pricing .plan-feature { color: #475569; }
        .iws-pricing .plan-feature--excluded { color: #cbd5e1; }
        .iws-pricing .feature-icon { color: #334155; }
        .iws-pricing .plan-feature--excluded .feature-icon { color: #e2e8f0; }
        .iws-pricing .btn-primary { background: #1e293b; color: #f8fafc; border: none; }
        .iws-pricing .btn-primary:hover { background: #334155; }
        .iws-pricing .btn-outline { color: #334155; border: 1px solid rgba(51,65,85,0.35); }
        .iws-pricing .btn-outline:hover { border-color: #334155; }
        .iws-pricing .asset-card { background: #ffffff; border: 1px solid #e2e8f0; box-shadow: 0 1px 6px rgba(0,0,0,0.05); }
        .iws-pricing .asset-title { font-family: 'Inter','DM Sans',sans-serif; color: #0f172a; }
        .iws-pricing .asset-body { color: #475569; }
        .iws-pricing .asset-extra { color: #475569; }
        .iws-pricing .asset-extra strong { color: #1e293b; }
        .iws-pricing .link-cyan { color: #334155; }
        .iws-pricing .link-cyan:hover { color: #0f172a; }
        .iws-pricing .trust-item { background: #ffffff; border: 1px solid #e2e8f0; box-shadow: 0 1px 4px rgba(0,0,0,0.04); }
        .iws-pricing .trust-label { font-family: 'Inter','DM Sans',sans-serif; color: #0f172a; }
        .iws-pricing .trust-desc { color: #64748b; }
        .iws-pricing .legal-note p { color: #94a3b8; }
        .iws-pricing .link-muted { color: #94a3b8; }
        .iws-pricing .link-muted:hover { color: #475569; }
        .iws-pricing .cta-bottom { border-color: #e2e8f0; }
        .iws-pricing .cta-title { font-family: 'Inter','DM Sans',sans-serif; color: #0f172a; }
        .iws-pricing .cta-body { color: #475569; }
      `}</style>
      </div>
    </>
  );
}

