import React from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

// SVG Icons
const IconSearch = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
  </svg>
);
const IconShield = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);
const IconTarget = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
  </svg>
);
const IconUser = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
  </svg>
);
const IconBarChart = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
  </svg>
);
const IconTrendingUp = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
  </svg>
);

function ValueCard({ icon, title, body }) {
  return (
    <div className="val-card">
      <div className="val-icon">{icon}</div>
      <h3 className="val-title">{title}</h3>
      <p className="val-body">{body}</p>
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>Uber uns - ichwillsicherheit.de</title>
        <meta name="description" content="Wer wir sind, was uns antreibt und warum wir genau eine Sache wirklich gut machen." />
      </Head>

      <div className="iws-page">
        <IndexNavbar fixed />

        <div className="wrap">

          {/* HERO */}
          <div className="hero">
            <div className="slabel">Uber uns</div>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Wir machen genau <span className="grad">eine Sache wirklich gut.</span>
            </motion.h1>
            <p className="hero-sub">
              Die externe Sichtbarkeit Ihrer Systeme objektiv sichtbar machen -
              so, wie ein Angreifer sie sieht, bevor er handelt.
            </p>
          </div>

          {/* INTRO SPLIT */}
          <div className="about-split">
            <div className="about-intro">
              <div className="section-label">Wer wir sind</div>
              <p className="about-big">Wir sind kein grosses Security-Unternehmen mit Hunderten Mitarbeitern.</p>
              <p className="about-p">
                Wir sind ein kleines, fokussiertes Team das genau weiss, was wir
                konnen - und was nicht. Kein Hype, keine endlosen Feature-Listen,
                kein Security-Theater.
              </p>
              <p className="about-p">
                Stattdessen: Ein klar definiertes Produkt, das einen blinden Fleck
                schliesst, den die meisten Unternehmen haben - die Aussenperspektive
                auf die eigene Infrastruktur.
              </p>
            </div>

            <div className="stats-grid">
              {[
                { num: "24h",    label: "Report-Lieferzeit" },
                { num: "9",      label: "Abschnitte pro Report" },
                { num: "100%",   label: "Passiv - kein Eingriff" },
                { num: "SHA256", label: "Revisionssichere Archivierung" },
              ].map(({ num, label }) => (
                <div key={label} className="stat-card">
                  <div className="stat-num">{num}</div>
                  <div className="stat-label">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* MOTIVATION */}
          <div className="about-section">
            <div className="section-label">Unsere Motivation</div>
            <div className="motivation-box">
              <p className="about-big about-big-muted">
                Viele Unternehmen wissen nicht, ob ihre Sicherheitsmassnahmen wirklich greifen.
              </p>
              <p className="about-p">
                Einmalige Scans oder Tools liefern Momentaufnahmen. Was fehlt:
                eine kontinuierliche, nachvollziehbare Dokumentation der
                Entwicklung. Etwas das IT und Geschaftsfuhrung gemeinsam lesen
                konnen - ohne Ubersetzungsaufwand.
              </p>
              <p className="about-p">
                Deshalb gibt es uns: Damit Sie nicht nur hoffen, dass es besser
                wird - sondern es{" "}
                <em className="em-muted">sehen</em>{" "}
                konnen.
              </p>
            </div>
          </div>

          {/* WERTE */}
          <div className="about-section">
            <div className="section-label">Was uns ausmacht</div>
            <div className="values-grid">
              <ValueCard
                icon={<IconSearch />}
                title="Radikale Transparenz"
                body="Wir erklaren jede Grenze unserer Analyse offen und ehrlich. Was wir nicht konnen, sagen wir - bevor Sie fragen."
              />
              <ValueCard
                icon={<IconShield />}
                title="Passiv & risikofrei"
                body="Keine aktiven Scans, keine Simulationen, keine Angriffe. Ausschliesslich offentliche Datenquellen - rechtlich und technisch sauber."
              />
              <ValueCard
                icon={<IconTarget />}
                title="Fokus statt Alleskönnerei"
                body="Wir ersetzen keinen Pentest, keine EDR, keine SIEM. Wir liefern die externe Sicht, die sonst fehlt - und das wirklich gut."
              />
              <ValueCard
                icon={<IconUser />}
                title="Personlicher Ansatz"
                body="Jeder Report wird manuell gepruft. Kein Kunde ist eine Ticket-Nummer. Der optionale Review-Call ist kein Upsell, sondern Teil des Produkts."
              />
              <ValueCard
                icon={<IconBarChart />}
                title="Kein Hype, keine Panikmache"
                body="Wir zeigen Fakten. Wenn etwas unklar ist, sagen wir das. Ein falscher Alarm schadet Ihnen genauso wie ein ubersehenes Risiko."
              />
              <ValueCard
                icon={<IconTrendingUp />}
                title="Kontinuitat schlagt Momentaufnahme"
                body="Einmal hinschauen reicht nicht. Wir dokumentieren monatlich - weil sich Angriffsflachen laufend verandern."
              />
            </div>
          </div>

          {/* QUOTE */}
          <div className="about-section">
            <div className="quote-box">
              <p className="quote-text">Sicherheit beginnt mit Klarheit.</p>
              <p className="quote-sub">
                Wir glauben nicht an Blackbox-Tools oder endlose Feature-Listen.
                Wir glauben daran, dass ein Unternehmen Fortschritte braucht,
                die es wirklich nachweisen kann - fur den Vorstand, fur Auditoren,
                fur sich selbst.
              </p>
            </div>
          </div>

          {/* PARTNER */}
          <div className="about-section partner-section">
            <div className="section-label">Partner & Mitgliedschaften</div>
            <div className="partner-logos">
              <a href="https://www.cyber-sicherheitsnetzwerk.de" target="_blank" rel="noopener noreferrer" className="partner-logo-link">
                <img src="/img/csn-logo.png" alt="Mitglied im Cyber-Sicherheitsnetzwerk Deutschland (BSI)" className="partner-logo-img" />
              </a>
            </div>
          </div>

          {/* CTA */}
          <div className="final-cta">
            <h2>Wenn Sie Klarheit statt Versprechen wollen -</h2>
            <p className="cta-sub">schreiben Sie uns. Kostenlos, unverbindlich, innerhalb eines Werktags.</p>
            <Link href="/contact" legacyBehavior>
              <a className="btn-primary">Kontakt aufnehmen →</a>
            </Link>
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
            max-width: 900px;
            margin: 0 auto;
            padding: 0 24px 80px;
          }
          .iws-page .hero { text-align: center; padding: 80px 0 48px; }
          .iws-page .slabel { font-size: 11px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: #00d4ff; margin-bottom: 14px; }
          .iws-page .hero h1 { font-size: clamp(26px,4vw,42px) !important; font-weight: 800 !important; line-height: 1.1 !important; letter-spacing: -0.03em !important; color: #fff !important; margin-bottom: 18px !important; -webkit-text-fill-color: unset !important; background: none !important; }
          .iws-page .grad { background: linear-gradient(90deg, #00d4ff, #4fa3ff); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
          .iws-page .hero-sub { font-size: 15px; color: #64748b; max-width: 500px; margin: 0 auto; line-height: 1.65; }
          .iws-page .about-section { margin-bottom: 48px; }
          .iws-page .section-label { font-size: 11px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #475569; margin-bottom: 16px; }
          .iws-page .about-split { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; align-items: center; margin-bottom: 48px; }
          .iws-page .about-big { font-size: 16px; font-weight: 600; color: #e2e8f0; line-height: 1.5; margin-bottom: 14px; letter-spacing: -0.01em; }
          .iws-page .about-big-muted { color: #cbd5e1; }
          .iws-page .about-p { font-size: 13px; color: #94a3b8; line-height: 1.7; margin-bottom: 12px; }
          .iws-page .em-muted { color: #94a3b8; font-style: italic; }
          .iws-page .stats-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
          .iws-page .stat-card { background: rgba(15,23,42,0.8); border: 1px solid rgba(0,212,255,0.1); border-radius: 14px; padding: 18px; text-align: center; }
          .iws-page .stat-num { font-size: 22px; font-weight: 800; color: #00d4ff; letter-spacing: -0.03em; margin-bottom: 4px; }
          .iws-page .stat-label { font-size: 11px; color: #64748b; }
          .iws-page .motivation-box { background: rgba(0,212,255,0.04); border: 1px solid rgba(0,212,255,0.1); border-radius: 16px; padding: 32px; }
          .iws-page .values-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
          .iws-page .val-card { background: rgba(20,30,48,0.75); border: 1px solid rgba(0,212,255,0.1); border-radius: 14px; padding: 20px; }
          .iws-page .val-icon { color: #00d4ff; margin-bottom: 12px; }
          .iws-page .val-title { font-size: 13px; font-weight: 700; color: #e2e8f0; margin-bottom: 6px; }
          .iws-page .val-body { font-size: 12px; color: #64748b; line-height: 1.55; }
          .iws-page .quote-box { background: rgba(15,23,42,0.7); border: 1px solid rgba(0,212,255,0.08); border-radius: 16px; padding: 40px; text-align: center; }
          .iws-page .quote-text { font-size: 18px; font-weight: 600; color: #e2e8f0; letter-spacing: -0.02em; margin-bottom: 12px; }
          .iws-page .quote-sub { font-size: 13px; color: #64748b; line-height: 1.65; }
          .iws-page .partner-section { text-align: center; }
          .iws-page .partner-logos { display: flex; flex-wrap: wrap; justify-content: center; gap: 16px 24px; padding: 0 16px; margin-top: 8px; }
          .iws-page .partner-logo-link { display: inline-block; transition: opacity 0.2s; }
          .iws-page .partner-logo-link:hover { opacity: 0.75; }
          .iws-page .partner-logo-img { height: 70px; width: auto; display: block; }
          .iws-page .final-cta { background: linear-gradient(135deg, rgba(0,212,255,0.06), rgba(0,119,255,0.04)); border: 1px solid rgba(0,212,255,0.14); border-radius: 18px; padding: 48px 32px; text-align: center; }
          .iws-page .final-cta h2 { font-size: clamp(20px,3vw,28px) !important; font-weight: 800 !important; letter-spacing: -0.03em !important; color: #fff !important; margin-bottom: 10px !important; -webkit-text-fill-color: unset !important; background: none !important; }
          .iws-page .cta-sub { color: #64748b; font-size: 14px; margin-bottom: 24px; }
          .iws-page .btn-primary { display: inline-flex; align-items: center; padding: 14px 28px; border-radius: 12px; font-weight: 800; font-size: 14px; background: #00d4ff; color: #001f3f; text-decoration: none; }
          @media (max-width: 768px) {
            .iws-page .about-split { grid-template-columns: 1fr; }
            .iws-page .values-grid { grid-template-columns: 1fr 1fr; }
          }
          @media (max-width: 480px) {
            .iws-page .values-grid { grid-template-columns: 1fr; }
          }
        `}</style>
      </div>
    </>
  );
}
