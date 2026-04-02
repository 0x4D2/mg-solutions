import React from "react";
import Head from "next/head";
import Link from "next/link";
import Footer from "components/Footers/Footer.js";

const STATUS = {
  live: {
    label: "Live",
    bg: "rgba(16,185,129,0.08)",
    border: "rgba(16,185,129,0.25)",
    color: "#047857",
    dot: "#047857",
  },
  dev: {
    label: "In Entwicklung",
    bg: "rgba(146,64,14,0.07)",
    border: "rgba(146,64,14,0.22)",
    color: "#92400e",
    dot: "#92400e",
  },
  planned: {
    label: "In Planung",
    bg: "rgba(100,116,139,0.07)",
    border: "rgba(100,116,139,0.2)",
    color: "#475569",
    dot: "#475569",
  },
};

function StatusBadge({ status }) {
  const s = STATUS[status];
  return (
    <span
      className="status-badge"
      style={{ background: s.bg, border: `1px solid ${s.border}`, color: s.color }}
    >
      <span className="badge-dot" style={{ background: s.dot }} />
      {s.label}
    </span>
  );
}

function RoadmapItem({ status, title, description, items, quarter, last = false }) {
  const s = STATUS[status];
  return (
    <div className="tl-row">
      <div className="tl-spine">
        <div
          className="tl-dot"
          style={{ background: s.bg, border: `2px solid ${s.border}` }}
        >
          <span className="tl-dot-inner" style={{ background: s.dot }} />
        </div>
        {!last && (
          <div
            className="tl-line"
            style={{ background: `linear-gradient(to bottom, ${s.border}, transparent)` }}
          />
        )}
      </div>
      <div className="tl-content">
        <div className="tl-meta">
          <StatusBadge status={status} />
          {quarter && <span className="quarter">{quarter}</span>}
        </div>
        <div className="tl-title">{title}</div>
        <div className="tl-desc">{description}</div>
        {items && (
          <ul className="tl-items">
            {items.map((item) => (
              <li key={item} className="tl-item">
                <span style={{ color: s.color, flexShrink: 0 }}>→</span>
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default function Roadmap() {
  return (
    <>
      <Head>
        <title>Roadmap - ichwillsicherheit.de</title>
        <meta name="description" content="Was wir bereits liefern, woran wir arbeiten und was als nachstes kommt." />
      </Head>

      <div className="iws-page cyber-bg">

        <div className="wrap">

          {/* HERO */}
          <div className="hero">
            <div className="slabel">Roadmap</div>
            <h1 className="page-headline">Was jetzt. <span className="grad">Was als nachstes.</span></h1>
            <p className="hero-sub">
              Keine leeren Versprechen. Nur was wirklich fertig ist, woran wir
              gerade arbeiten und was konkret geplant ist.
            </p>
          </div>

          {/* LEGENDE */}
          <div className="legend">
            {Object.entries(STATUS).map(([key, s]) => (
              <div key={key} className="legend-item" style={{ color: s.color }}>
                <span className="ldot" style={{ background: s.dot }} />
                {s.label}
              </div>
            ))}
          </div>

          {/* TIMELINE */}
          <div className="timeline">

            <RoadmapItem
              status="live"
              quarter="Seit Q1 2026"
              title="Exposure-Reports - Kern-Produkt"
              description="Monatliche OSINT-Analysen Ihrer externen Angriffsfläche, manuell gepruft, innerhalb von 24 Stunden geliefert."
              items={[
                "Shodan-Integration mit Snapshot-Persistierung",
                "CVE-Enrichment via NVD & CISA KEV",
                "9-seitiger PDF-Report (Executive Summary + technischer Anhang)",
                "Trendvergleich zum Vormonat",
                "SHA256-gesicherte Archivierung mit Versionierung",
                "Einzel- & Batch-Verarbeitung via CLI",
              ]}
            />

            <RoadmapItem
              status="live"
              quarter="Seit Q1 2026"
              title="RDP-Erkennung & Management-Warnungen"
              description="Spezifische Erkennung exponierter Remote-Desktop-Zugange mit priorisierten Management-Hinweisen."
              items={[
                "RDP-Port-Erkennung (Standard & Non-Standard)",
                "Automatische Risikoeinstufung",
                "Klarer Handlungstext fur Executive Summary",
              ]}
            />

            <RoadmapItem
              status="dev"
              quarter="Q2 2026"
              title="Erweiterte Insights & Subdomain-Analyse"
              description="Tiefere Sichtbarkeit: nicht nur IPs, sondern die gesamte offentliche Infrastruktur eines Unternehmens."
              items={[
                "Subdomain-Enumeration & Zertifikatsauswertung",
                "TLS/SSL-Konfigurationsanalyse",
                "Historische Trendvisualisierung uber mehrere Monate",
                "Fokus auf Indikatoren mit realer Angriffsrelevanz",
              ]}
            />

            <RoadmapItem
              status="dev"
              quarter="Q2 2026"
              title="Englische Reports"
              description="Fur internationale Teams und Kunden mit englischsprachiger Geschaftsfuhrung."
              items={[
                "Vollstandige Ubersetzung aller Report-Sektionen",
                "Konfigurierbar pro Kunde via YAML",
              ]}
            />

            <RoadmapItem
              status="planned"
              quarter="Q3 2026"
              title="Dashboard & automatisierte Benachrichtigungen"
              description="Alle Reports, Trends und Warnungen auf einen Blick - ohne manuellen PDF-Abruf."
              items={[
                "Web-Dashboard mit Monatsübersicht pro Kunde",
                "Automatischer Report-Versand per E-Mail",
                "Optional: Slack-Integration fur kritische Warnungen",
                "Kundenhistorie & Vergleichsansicht",
              ]}
            />

            <RoadmapItem
              status="planned"
              quarter="Q3-Q4 2026"
              title="API & Integrationen"
              description="Fur Teams die Exposure-Daten in ihre eigenen Workflows einbinden wollen."
              items={[
                "REST-API fur Report-Abruf & Status",
                "Webhook-Support fur neue Reports",
                "Integration in bestehende Security-Toolchains",
              ]}
              last
            />

          </div>

          {/* ANSATZ */}
          <div className="approach-box">
            <p className="approach-main">Schrittweise, transparent und praxisnah. Keine leeren Versprechen, kein Security-Theater.</p>
            <p className="approach-sub">
              Wir zeigen nur, was wirklich sichtbar ist - nicht, was theoretisch
              moglich ware. Jede Funktion die wir ankundigen, liefern wir auch.
            </p>
          </div>

          {/* FEEDBACK */}
          <div className="feedback-bar">
            <div>
              <p className="fb-title">Spezielle Anforderungen?</p>
              <p className="fb-sub">Teilen Sie sie mit uns - wir priorisieren gemeinsam.</p>
            </div>
            <Link href="/contact" legacyBehavior>
              <a className="btn-sm">Feedback geben →</a>
            </Link>
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
          .iws-page .hero { text-align: center; padding: 80px 0 40px; }
          .iws-page .slabel { font-size: 11px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: #94a3b8; margin-bottom: 14px; }
          .page-headline .grad { font-weight: 800; }
          .iws-page .grad { font-weight: 800; }
          .iws-page .hero-sub { font-size: 15px; color: #475569; max-width: 480px; margin: 0 auto; line-height: 1.65; }
          .iws-page .legend { display: flex; flex-wrap: wrap; justify-content: center; gap: 16px; padding: 12px 24px; border-radius: 14px; background: #ffffff; border: 1px solid #e2e8f0; box-shadow: 0 1px 4px rgba(0,0,0,0.04); margin-bottom: 40px; }
          .iws-page .legend-item { display: flex; align-items: center; gap: 6px; font-size: 12px; font-weight: 600; }
          .iws-page .ldot { width: 8px; height: 8px; border-radius: 50%; display: inline-block; }
          .iws-page .timeline { max-width: 620px; }
          .iws-page .tl-row { display: flex; gap: 20px; }
          .iws-page .tl-spine { display: flex; flex-direction: column; align-items: center; flex-shrink: 0; width: 32px; }
          .iws-page .tl-dot { width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
          .iws-page .tl-dot-inner { width: 10px; height: 10px; border-radius: 50%; display: inline-block; }
          .iws-page .tl-line { width: 1px; flex: 1; min-height: 32px; margin: 5px 0; }
          .iws-page .tl-content { padding-bottom: 32px; flex: 1; }
          .iws-page .tl-meta { display: flex; flex-wrap: wrap; align-items: center; gap: 10px; margin-bottom: 10px; }
          .iws-page .status-badge { display: inline-flex; align-items: center; gap: 5px; padding: 3px 10px; border-radius: 100px; font-size: 11px; font-weight: 700; }
          .iws-page .badge-dot { width: 6px; height: 6px; border-radius: 50%; display: inline-block; }
          .iws-page .quarter { font-size: 11px; font-weight: 600; color: #94a3b8; }
          .iws-page .tl-title { font-size: 15px; font-weight: 800; color: #0f172a; letter-spacing: -0.01em; margin-bottom: 6px; }
          .iws-page .tl-desc { font-size: 13px; color: #475569; line-height: 1.6; margin-bottom: 10px; }
          .iws-page .tl-items { list-style: none; padding: 0; }
          .iws-page .tl-item { display: flex; gap: 8px; font-size: 12px; color: #64748b; padding: 3px 0; }
          .iws-page .approach-box { max-width: 620px; background: rgba(71,85,105,0.04); border: 1px solid #e2e8f0; border-radius: 14px; padding: 24px; margin-bottom: 12px; }
          .iws-page .approach-main { font-size: 14px; font-weight: 500; color: #1e293b; margin-bottom: 8px; }
          .iws-page .approach-sub { font-size: 12px; color: #64748b; line-height: 1.6; }
          .iws-page .feedback-bar { max-width: 620px; display: flex; align-items: center; justify-content: space-between; gap: 16px; padding: 20px 24px; border-radius: 14px; background: #ffffff; border: 1px solid #e2e8f0; box-shadow: 0 1px 4px rgba(0,0,0,0.04); flex-wrap: wrap; margin-top: 16px; }
          .iws-page .fb-title { font-size: 13px; font-weight: 700; color: #0f172a; margin-bottom: 3px; }
          .iws-page .fb-sub { font-size: 12px; color: #64748b; }
          .iws-page .btn-sm { display: inline-flex; align-items: center; padding: 10px 20px; border-radius: 8px; font-size: 13px; font-weight: 700; background: #1e293b; color: #f8fafc; text-decoration: none; white-space: nowrap; }
        `}</style>
      </div>
    </>
  );
}
