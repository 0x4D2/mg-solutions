import React from "react";
import Head from "next/head";
import Link from "next/link";
import Footer from "components/Footers/Footer.js";

export function LegalSection({ title, children }) {
  return (
    <div className="legal-section">
      <h2 className="legal-section-title">{title}</h2>
      <div className="legal-section-body">{children}</div>
    </div>
  );
}

export function LegalLink({ href, children }) {
  return (
    <a href={href} className="legal-link">{children}</a>
  );
}

export default function LegalLayout({ title, subtitle, children }) {
  return (
    <>
      <Head>
        <title>{title} - ichwillsicherheit.de</title>
      </Head>

      <div className="iws-page cyber-bg">

        <div className="legal-wrap">
          <div className="legal-header">
            <div className="slabel-muted">Rechtliches</div>
            <h1 className="legal-title">{title}</h1>
            {subtitle && <p className="legal-subtitle">{subtitle}</p>}
          </div>

          <div className="legal-card">{children}</div>

          <div className="legal-nav">
            <Link href="/" legacyBehavior><a className="legal-nav-link">← Startseite</a></Link>
            <Link href="/privacy" legacyBehavior><a className="legal-nav-link">Datenschutz</a></Link>
            <Link href="/imprint" legacyBehavior><a className="legal-nav-link">Impressum</a></Link>
            <Link href="/agb" legacyBehavior><a className="legal-nav-link">AGB</a></Link>
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
          .iws-page .legal-wrap {
            max-width: 1100px;
            margin: 0 auto;
            padding: 80px 24px 80px;
          }
          .iws-page .legal-header { margin-bottom: 40px; }
          .iws-page .slabel-muted { font-size: 11px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: #94a3b8; margin-bottom: 14px; }
          .iws-page .legal-title { font-family: 'Inter', 'DM Sans', sans-serif; font-size: clamp(22px,3vw,32px) !important; font-weight: 800 !important; letter-spacing: -0.02em !important; color: #0f172a !important; margin-bottom: 8px !important; -webkit-text-fill-color: unset !important; background: none !important; }
          .iws-page .legal-subtitle { font-size: 13px; color: #64748b; }
          .iws-page .legal-card { background: #ffffff; border: 1px solid #e2e8f0; border-radius: 18px; padding: 40px; box-shadow: 0 1px 8px rgba(0,0,0,0.06); }
          .iws-page .legal-section { margin-bottom: 32px; }
          .iws-page .legal-section-title { font-family: 'Inter', 'DM Sans', sans-serif; font-size: 14px; font-weight: 700; color: #0f172a; border-bottom: 1px solid #e2e8f0; padding-bottom: 10px; margin-bottom: 12px; }
          .iws-page .legal-section-body { font-size: 13px; color: #475569; line-height: 1.75; }
          .iws-page .legal-section-body p { margin-bottom: 10px; }
          .iws-page .legal-section-body ul { padding-left: 20px; margin-bottom: 10px; }
          .iws-page .legal-section-body li { margin-bottom: 4px; }
          .iws-page .legal-link { color: #334155; text-decoration: underline; }
          .iws-page .legal-link:hover { color: #0f172a; }
          .iws-page .legal-nav { margin-top: 28px; display: flex; gap: 24px; flex-wrap: wrap; }
          .iws-page .legal-nav-link { font-size: 12px; color: #64748b; text-decoration: none; transition: color 0.2s; }
          .iws-page .legal-nav-link:hover { color: #0f172a; }
          .iws-page .legal-section-body strong { color: #1e293b; }
        `}</style>
      </div>
    </>
  );
}
