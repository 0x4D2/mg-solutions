import React, { useState } from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import Footer from "components/Footers/Footer.js";

const RECAPTCHA_KEY = "6LeFzm4rAAAAAAVjzEG_0riyYW7dcMdJlOIDWfIJ";

// ─── Success State ────────────────────────────────────────────────────────────

function SuccessState() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="success-state"
    >
      <div className="success-icon">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h2 className="success-title">Anfrage erhalten — danke.</h2>
      <p className="success-sub">Wir melden uns innerhalb von 24 Stunden bei Ihnen.</p>
      <div className="success-steps">
        <span className="s-step done">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 13l4 4L19 7" /></svg>
          Anfrage eingegangen
        </span>
        <span className="s-arrow">→</span>
        <span className="s-step pending">OSINT-Analyse</span>
        <span className="s-arrow">→</span>
        <span className="s-step pending">Report in 24h</span>
      </div>
      <Link href="/" legacyBehavior>
        <a className="back-btn">Zurück zur Startseite</a>
      </Link>
    </motion.div>
  );
}

// ─── Hauptkomponente ──────────────────────────────────────────────────────────

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    host: "",
    privacy: false,
  });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [recaptchaError, setRecaptchaError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setRecaptchaError("");
    if (!form.privacy) {
      setError("Bitte akzeptieren Sie die Datenschutzerklärung.");
      return;
    }
    if (typeof window.grecaptcha === "undefined") {
      setRecaptchaError("reCAPTCHA konnte nicht geladen werden. Bitte versuchen Sie es später erneut.");
      return;
    }
    setLoading(true);
    try {
      const token = await window.grecaptcha.execute(RECAPTCHA_KEY, { action: "submit" });
      if (!token) {
        setRecaptchaError("reCAPTCHA-Überprüfung fehlgeschlagen. Bitte versuchen Sie es erneut.");
        setLoading(false);
        return;
      }
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, token }),
      });
      if (response.ok) {
        setSent(true);
      } else {
        const data = await response.json();
        setError(data.message || "Fehler beim Senden. Bitte versuchen Sie es später erneut.");
      }
    } catch {
      setError("Fehler beim Senden. Bitte versuchen Sie es später erneut.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Kontakt – ichwillsicherheit.de</title>
        <meta name="description" content="Kostenlose Ersteinschätzung anfordern — wir antworten innerhalb von 24 Stunden." />
        <script src={`https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_KEY}`} />
      </Head>

      <div className="iws-page cyber-bg">

        <div className="wrap">

          {/* ── HERO ────────────────────────────────────────────────────── */}
          <div className="hero">
            <div className="slabel">Kontakt</div>
            <h1>Kostenlos starten.</h1>
            <p className="hero-sub">
              Wir prüfen Ihren Scope und schicken Ihnen eine erste Einschätzung —
              innerhalb eines Werktags, ohne Verpflichtung.
            </p>
          </div>

          {/* ── LAYOUT ──────────────────────────────────────────────────── */}
          <div className="contact-layout">

            {/* Linke Spalte */}
            <div>
              <div className="process-label">Was passiert danach</div>

              {[
                { num: "01", title: "Anfrage eingegangen", body: "Wir bestätigen innerhalb weniger Stunden." },
                { num: "02", title: "Scope-Prüfung",       body: "Wir klären ob und wie wir helfen können." },
                { num: "03", title: "OSINT-Analyse",       body: "Shodan, NVD, CISA KEV, DNS, TLS — passiv." },
                { num: "04", title: "Report in 24h",       body: "PDF mit Executive Summary + technischem Anhang." },
              ].map(({ num, title, body }, i, arr) => (
                <div key={num} className="step-row">
                  <div className="step-line-wrap">
                    <div className="step-circle">{num}</div>
                    {i < arr.length - 1 && <div className="step-connector" />}
                  </div>
                  <div className="step-content">
                    <div className="step-title">{title}</div>
                    <div className="step-body">{body}</div>
                  </div>
                </div>
              ))}

              {/* Trust badges */}
              <div className="trust-items">
                <div className="trust-row">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                  SSL-verschlüsselt
                </div>
                <div className="trust-row">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  Keine Datenweitergabe
                </div>
                <div className="trust-row">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="10"/></svg>
                  DSGVO-konform
                </div>
                <div className="trust-row">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  Antwort innerhalb 24h
                </div>
              </div>
            </div>

            {/* Rechte Spalte: Formular */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="form-card"
              >
                <div className="form-accent" />

                {sent ? <SuccessState /> : (
                  <form onSubmit={handleSubmit} className="form-inner">

                    {/* Name + E-Mail */}
                    <div className="field-grid2">
                      <div>
                        <label className="field-label">Name<span className="req">*</span></label>
                        <input type="text" name="name" required placeholder="Max Mustermann"
                          value={form.name} onChange={handleChange} autoComplete="name"
                          className="field-input"
                          onFocus={e => e.target.style.borderColor = "rgba(0,212,255,0.5)"}
                          onBlur={e  => e.target.style.borderColor = "rgba(0,212,255,0.18)"}
                        />
                      </div>
                      <div>
                        <label className="field-label">E-Mail<span className="req">*</span></label>
                        <input type="email" name="email" required placeholder="name@firma.de"
                          value={form.email} onChange={handleChange} autoComplete="email"
                          className="field-input"
                          onFocus={e => e.target.style.borderColor = "rgba(0,212,255,0.5)"}
                          onBlur={e  => e.target.style.borderColor = "rgba(0,212,255,0.18)"}
                        />
                      </div>
                    </div>

                    {/* Telefon + Betreff */}
                    <div className="field-grid2">
                      <div>
                        <label className="field-label">Telefon (optional)</label>
                        <input type="tel" name="phone" placeholder="+49 170 1234567"
                          value={form.phone} onChange={handleChange} autoComplete="tel"
                          className="field-input"
                          onFocus={e => e.target.style.borderColor = "rgba(0,212,255,0.5)"}
                          onBlur={e  => e.target.style.borderColor = "rgba(0,212,255,0.18)"}
                        />
                      </div>
                      <div>
                        <label className="field-label">Betreff<span className="req">*</span></label>
                        <select name="subject" required value={form.subject} onChange={handleChange}
                          className="field-input"
                          onFocus={e => e.target.style.borderColor = "rgba(0,212,255,0.5)"}
                          onBlur={e  => e.target.style.borderColor = "rgba(0,212,255,0.18)"}
                        >
                          <option value="">Bitte wählen…</option>
                          <option value="report">Kostenlose Ersteinschätzung</option>
                          <option value="pricing">Angebot / Preisinfos</option>
                          <option value="consulting">Beratung / Sicherheitsstrategie</option>
                          <option value="support">Support / Rückfragen zu Report</option>
                          <option value="general">Allgemeine Anfrage</option>
                          <option value="other">Sonstiges</option>
                        </select>
                      </div>
                    </div>

                    {/* Hostname */}
                    <div className="field-grid1">
                      <label className="field-label">Hostname / Domain / IP (optional)</label>
                      <input type="text" name="host" placeholder="z. B. example.com oder 92.113.23.59"
                        value={form.host} onChange={handleChange} autoComplete="off"
                        className="field-input"
                        onFocus={e => e.target.style.borderColor = "rgba(0,212,255,0.5)"}
                        onBlur={e  => e.target.style.borderColor = "rgba(0,212,255,0.18)"}
                      />
                    </div>

                    {/* Nachricht */}
                    <div className="field-grid1">
                      <label className="field-label">Nachricht<span className="req">*</span></label>
                      <textarea name="message" required placeholder="Beschreiben Sie kurz Ihr Anliegen…"
                        value={form.message} onChange={handleChange}
                        className="field-input field-textarea"
                        onFocus={e => e.target.style.borderColor = "rgba(0,212,255,0.5)"}
                        onBlur={e  => e.target.style.borderColor = "rgba(0,212,255,0.18)"}
                      />
                    </div>

                    {/* Datenschutz */}
                    <div className="privacy-box">
                      <input type="checkbox" id="privacy" name="privacy"
                        checked={form.privacy} onChange={handleChange} required
                        className="privacy-check"
                      />
                      <label htmlFor="privacy" className="privacy-label">
                        Ich möchte eine Antwort erhalten und akzeptiere die{" "}
                        <Link href="/privacy" legacyBehavior>
                          <a target="_blank" rel="noopener noreferrer" className="privacy-link">
                            Datenschutzerklärung
                          </a>
                        </Link>
                        .
                      </label>
                    </div>

                    {/* Fehler */}
                    {(error || recaptchaError) && (
                      <div className="form-error">{error || recaptchaError}</div>
                    )}

                    {/* Submit */}
                    <button type="submit" disabled={loading} className="submit-btn">
                      {loading ? "Wird gesendet…" : "Kostenlose Ersteinschätzung anfordern →"}
                    </button>

                    <p className="recaptcha-note">
                      Geschützt durch reCAPTCHA ·{" "}
                      <Link href="/privacy" legacyBehavior>
                        <a className="recaptcha-link">Datenschutz</a>
                      </Link>
                    </p>

                  </form>
                )}
              </motion.div>
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
            max-width: 900px;
            margin: 0 auto;
            padding: 64px 24px 64px;
          }
          .iws-page .hero { text-align: center; padding: 56px 0 40px; }
          .iws-page .slabel { font-size: 11px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: #00d4ff; margin-bottom: 14px; }
          .iws-page .hero h1 { font-size: clamp(26px,4vw,42px) !important; font-weight: 800 !important; line-height: 1.1 !important; letter-spacing: -0.03em !important; color: #fff !important; margin-bottom: 20px !important; -webkit-text-fill-color: unset !important; background: none !important; }
          .iws-page .hero-sub { font-size: 15px; color: #cbd5e1; max-width: 440px; margin: 0 auto; line-height: 1.65; }

          /* Layout */
          .iws-page .contact-layout { display: grid; grid-template-columns: 2fr 3fr; gap: 40px; align-items: start; }

          /* Process steps */
          .iws-page .process-label { font-size: 11px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #475569; margin-bottom: 20px; }
          .iws-page .step-row { display: flex; gap: 14px; }
          .iws-page .step-line-wrap { display: flex; flex-direction: column; align-items: center; }
          .iws-page .step-circle { width: 32px; height: 32px; border-radius: 50%; background: rgba(15,23,42,0.9); border: 1px solid rgba(0,212,255,0.2); color: #00d4ff; font-size: 11px; font-weight: 800; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
          .iws-page .step-connector { width: 1px; flex: 1; min-height: 24px; background: rgba(0,212,255,0.1); margin: 4px 0; }
          .iws-page .step-content { padding-bottom: 22px; }
          .iws-page .step-title { font-size: 13px; font-weight: 600; color: #e2e8f0; margin-bottom: 3px; }
          .iws-page .step-body { font-size: 12px; color: #64748b; line-height: 1.5; }

          /* Trust */
          .iws-page .trust-items { margin-top: 24px; display: flex; flex-direction: column; gap: 10px; }
          .iws-page .trust-row { display: flex; align-items: center; gap: 10px; font-size: 12px; color: #64748b; }

          /* Form card */
          .iws-page .form-card { background: rgba(20,30,48,0.8); border: 1px solid rgba(0,212,255,0.15); border-radius: 18px; padding: 32px; position: relative; overflow: hidden; }
          .iws-page .form-accent { position: absolute; top: 0; left: 0; right: 0; height: 2px; background: linear-gradient(90deg,#00d4ff,#0077ff); }
          .iws-page .form-inner { display: flex; flex-direction: column; gap: 14px; }
          .iws-page .field-grid2 { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
          .iws-page .field-grid1 {}
          .iws-page .field-label { display: block; font-size: 11px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: #94a3b8; margin-bottom: 8px; }
          .iws-page .req { color: #ff6b35; margin-left: 3px; }
          .iws-page .field-input { width: 100%; padding: 12px 16px; border-radius: 10px; background: rgba(15,23,42,0.8); border: 1px solid rgba(0,212,255,0.18); color: #e2e8f0; font-size: 14px; font-family: inherit; outline: none; transition: border-color 0.2s; }
          .iws-page .field-input::placeholder { color: #334155; }
          .iws-page select.field-input option { background: #0a192f; }
          .iws-page .field-textarea { min-height: 110px; resize: vertical; }
          .iws-page .privacy-box { display: flex; align-items: flex-start; gap: 12px; padding: 14px 16px; border-radius: 12px; background: rgba(15,23,42,0.6); border: 1px solid rgba(0,212,255,0.08); }
          .iws-page .privacy-check { width: 18px; height: 18px; margin-top: 2px; accent-color: #00d4ff; flex-shrink: 0; cursor: pointer; }
          .iws-page .privacy-label { font-size: 12px; color: #94a3b8; line-height: 1.55; cursor: pointer; }
          .iws-page .privacy-link { color: #00d4ff; text-decoration: none; }
          .iws-page .form-error { font-size: 13px; text-align: center; padding: 12px; border-radius: 10px; background: rgba(255,77,77,0.08); border: 1px solid rgba(255,77,77,0.2); color: #ff4d4d; }
          .iws-page .submit-btn { width: 100%; padding: 16px; border-radius: 14px; background: #00d4ff; color: #001f3f; font-size: 15px; font-weight: 800; border: none; cursor: pointer; position: relative; overflow: hidden; transition: all 0.2s; }
          .iws-page .submit-btn:disabled { background: rgba(0,212,255,0.45); cursor: not-allowed; }
          .iws-page .submit-btn:not(:disabled):hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,212,255,0.2); }
          .iws-page .submit-btn::after { content: ""; position: absolute; top: 0; left: -120%; width: 120%; height: 100%; background: linear-gradient(90deg,transparent,rgba(255,255,255,0.18),transparent); transition: left 0.7s ease; pointer-events: none; }
          .iws-page .submit-btn:not(:disabled):hover::after { left: 100%; }
          .iws-page .recaptcha-note { font-size: 11px; color: #334155; text-align: center; }
          .iws-page .recaptcha-link { color: #475569; text-decoration: none; }

          /* Success state */
          .iws-page .success-state { text-align: center; padding: 48px 0; }
          .iws-page .success-icon { width: 64px; height: 64px; border-radius: 50%; background: rgba(0,212,255,0.1); border: 2px solid rgba(0,212,255,0.3); display: flex; align-items: center; justify-content: center; margin: 0 auto 24px; }
          .iws-page .success-title { font-size: 22px; font-weight: 800; color: #e2e8f0; letter-spacing: -0.02em; margin-bottom: 10px; }
          .iws-page .success-sub { font-size: 14px; color: #64748b; margin-bottom: 28px; }
          .iws-page .success-steps { display: flex; flex-wrap: wrap; align-items: center; justify-content: center; gap: 8px; font-size: 12px; margin-bottom: 32px; }
          .iws-page .s-step { display: inline-flex; align-items: center; gap: 5px; padding: 6px 12px; border-radius: 100px; }
          .iws-page .s-step.done { background: rgba(0,212,255,0.1); border: 1px solid rgba(0,212,255,0.25); color: #00d4ff; }
          .iws-page .s-step.pending { background: rgba(15,23,42,0.6); border: 1px solid rgba(0,212,255,0.08); color: #475569; }
          .iws-page .s-arrow { color: #334155; }
          .iws-page .back-btn { display: inline-flex; align-items: center; padding: 10px 20px; border-radius: 12px; font-size: 13px; font-weight: 600; background: rgba(0,212,255,0.08); border: 1px solid rgba(0,212,255,0.2); color: #00d4ff; text-decoration: none; }

          @media (max-width: 640px) {
            .iws-page .contact-layout { grid-template-columns: 1fr; }
            .iws-page .field-grid2 { grid-template-columns: 1fr; }
          }
        `}</style>
      </div>
    </>
  );
}
