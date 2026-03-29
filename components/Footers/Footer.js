import React from "react";
import Link from "next/link";

const NAV_LINKS = [
  { text: "Startseite", href: "/" },
  { text: "Preise", href: "/pricing" },
  { text: "Über uns", href: "/about" },
  { text: "Exposure-Report", href: "/exposure" },
  { text: "Roadmap", href: "/roadmap" },
  { text: "FAQ", href: "/faq" },
];

const LEGAL_LINKS = [
  { text: "Kontakt", href: "/contact" },
  { text: "Datenschutz", href: "/privacy" },
  { text: "Impressum", href: "/imprint" },
  { text: "AGB", href: "/agb" },
  { text: "Widerruf", href: "/widerruf" },
  { text: "Cookies", href: "/cookies" },
];

const SOCIAL_LINKS = [
  {
    href: "https://www.youtube.com/@ichwillsicherheit",
    label: "YouTube",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    href: "https://www.instagram.com/ichwillsicherheit/",
    label: "Instagram",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    href: "https://www.tiktok.com/@ichwillsicherheit",
    label: "TikTok",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
      </svg>
    ),
  },
  {
    href: "https://www.linkedin.com/company/ichwillsicherheit/",
    label: "LinkedIn",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <>
      <footer className="iws-footer">
        <div className="iws-footer-accent" />

        <div className="iws-footer-inner">
          {/* Brand */}
          <div className="iws-footer-brand">
            <div className="iws-footer-logo">
              ich<span>will</span>sicherheit<span>.</span>
            </div>
            <p className="iws-footer-tagline">
              Passive Sicherheitsanalysen für Unternehmen —<br />
              wir zeigen, was Angreifer sehen.
            </p>
            <div className="iws-footer-social">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="iws-footer-social-link"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="iws-footer-col">
            <span className="iws-footer-col-title">Navigation</span>
            <ul className="iws-footer-list">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} legacyBehavior>
                    <a className="iws-footer-link">{l.text}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="iws-footer-col">
            <span className="iws-footer-col-title">Rechtliches</span>
            <ul className="iws-footer-list">
              {LEGAL_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} legacyBehavior>
                    <a className="iws-footer-link">{l.text}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="iws-footer-bottom">
          <span>© {new Date().getFullYear()} MG Solutions. Alle Rechte vorbehalten.</span>
          <span>ichwillsicherheit.de · Lage, Deutschland</span>
        </div>
      </footer>

      <style jsx global>{`
        .iws-footer {
          background: #060f1e;
          border-top: 1px solid rgba(0,212,255,0.1);
          font-family: 'Segoe UI', system-ui, sans-serif;
        }
        .iws-footer-accent {
          height: 2px;
          background: linear-gradient(90deg, #000d1a, #00d4ff, #0077ff, #000d1a);
        }
        .iws-footer-inner {
          max-width: 960px;
          margin: 0 auto;
          padding: 52px 24px 40px;
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: 48px;
        }
        .iws-footer-logo {
          font-size: 16px;
          font-weight: 800;
          color: #fff;
          margin-bottom: 12px;
          letter-spacing: -0.02em;
        }
        .iws-footer-logo span { color: #00d4ff; }
        .iws-footer-tagline {
          font-size: 12px;
          color: #475569;
          line-height: 1.65;
          margin-bottom: 20px;
        }
        .iws-footer-social {
          display: flex;
          gap: 12px;
          align-items: center;
        }
        .iws-footer-social-link {
          color: #334155;
          transition: color 0.2s;
          display: flex;
          align-items: center;
        }
        .iws-footer-social-link:hover { color: #00d4ff; }
        .iws-footer-col-title {
          display: block;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #475569;
          margin-bottom: 16px;
        }
        .iws-footer-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .iws-footer-list li { margin-bottom: 10px; }
        .iws-footer-link {
          font-size: 13px;
          color: #64748b;
          text-decoration: none;
          transition: color 0.2s;
        }
        .iws-footer-link:hover { color: #e2e8f0; }
        .iws-footer-bottom {
          max-width: 960px;
          margin: 0 auto;
          padding: 18px 24px;
          border-top: 1px solid rgba(255,255,255,0.04);
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 8px;
          font-size: 11px;
          color: #334155;
        }
        @media (max-width: 680px) {
          .iws-footer-inner {
            grid-template-columns: 1fr 1fr;
            gap: 32px;
          }
          .iws-footer-brand {
            grid-column: 1 / -1;
          }
          .iws-footer-bottom {
            flex-direction: column;
            align-items: flex-start;
            gap: 4px;
          }
        }
      `}</style>
    </>
  );
}
