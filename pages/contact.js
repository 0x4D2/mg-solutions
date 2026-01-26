import React, { useState } from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
};

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "", host: "", privacy: false });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [recaptchaError, setRecaptchaError] = useState("");

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setForm(f => ({
      ...f,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = async e => {
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
    const token = await window.grecaptcha.execute("6LeFzm4rAAAAAAVjzEG_0riyYW7dcMdJlOIDWfIJ", { action: "submit" });
    if (!token) {
      setRecaptchaError("reCAPTCHA-Überprüfung fehlgeschlagen. Bitte versuchen Sie es erneut.");
      return;
    }
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      if (response.ok) {
        setSent(true);
        setError("");
      } else {
        const data = await response.json();
        setError(data.message || "Fehler beim Senden der Nachricht. Bitte versuchen Sie es später erneut.");
      }
    } catch {
      setError("Fehler beim Senden der Nachricht. Bitte versuchen Sie es später erneut.");
    }
  };

  return (
    <>
      <Head>
        <script src="https://www.google.com/recaptcha/api.js?render=6LeFzm4rAAAAAAVjzEG_0riyYW7dcMdJlOIDWfIJ"></script>
      </Head>
      <IndexNavbar fixed />
      <main className="cyber-bg bg-gray-900 text-white min-h-screen">

        {/* Header */}
        <section className="relative py-15 bg-gradient-to-br from-blue-900 via-gray-900 to-gray-900 text-center overflow-hidden">
          <div className="absolute inset-0 bg-[url('/img/grid-pattern.svg')] opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="site-title gradient-text"
            >
              Sichere Hilfe – direkt & unkompliziert
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-xl text-blue-200 max-w-2xl mx-auto mb-6"
            >
              Ihre Daten sind bei uns geschützt – wir antworten innerhalb von 24 Stunden.
            </motion.p>
          </div>
        </section>

        {/* Kontaktformular */}
        <section className="py-16 bg-gray-900">
          <div className="container mx-auto px-4 max-w-3xl text-white">
            <motion.div
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-8 rounded-2xl transition text-white"
              style={{ backgroundColor: 'rgba(30,41,59,0.8)', border: '1px solid rgba(0,212,255,0.06)' }}
            >
              {sent ? (
                <div className="text-center py-8">
                  <h2 className="site-title gradient-text text-2xl sm:text-3xl mb-2">Vielen Dank — wir haben Ihre Anfrage erhalten</h2>

                  <div className="mt-3">
                    <div className="mx-auto px-2 sm:px-0 flex flex-wrap items-center justify-center gap-2 text-sm text-gray-200">
                      <span>Sie senden Ihre Anfrage</span>
                      <span className="text-cyan-300">→</span>
                      <span>Wir antworten innerhalb von 24h</span>
                      <span className="text-cyan-300">→</span>
                      <span>Analyse Ihrer Situation</span>
                      <span className="text-cyan-300">→</span>
                      <span>Maßgeschneidertes Report</span>
                    </div>

                    <div className="mt-5 flex justify-center">
                      <a href="/" className="inline-flex items-center justify-center px-4 py-2 rounded-md font-medium bg-cyan-500/10 text-cyan-300 hover:bg-cyan-500/20">Zur Startseite</a>
                    </div>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white font-semibold mb-1" htmlFor="name">
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        className="w-full px-4 py-3 rounded-lg text-white focus:outline-none transition"
                        style={{ backgroundColor: 'rgba(20,28,43,0.65)', border: '1px solid rgba(0,212,255,0.04)' }}
                        type="text"
                        id="name"
                        name="name"
                        required
                        placeholder="Max Mustermann"
                        value={form.name}
                        onChange={handleChange}
                        autoComplete="name"
                        pattern="[A-Za-zÄÖÜäöüß\-\s]+"
                        title="Bitte geben Sie einen gültigen Namen ein."
                      />
                    </div>
                    <div>
                      <label className="block text-white font-semibold mb-1" htmlFor="phone">
                          Telefonnummer
                        </label>
                        <input
                          className="w-full px-4 py-3 rounded-lg text-white focus:outline-none transition"
                          style={{ backgroundColor: 'rgba(20,28,43,0.65)', border: '1px solid rgba(0,212,255,0.04)' }}
                          type="tel"
                          id="phone"
                          name="phone"
                          placeholder="z. B. +49 170 1234567"
                          value={form.phone}
                          onChange={handleChange}
                          autoComplete="tel"
                          pattern="[0-9+ ]{6,20}"
                          title="Bitte geben Sie nur Zahlen und ggf. + ein."
                        />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white font-semibold mb-1" htmlFor="email">
                        E-Mail <span className="text-red-500">*</span>
                      </label>
                      <input
                        className="w-full px-4 py-3 rounded-lg text-white focus:outline-none transition"
                        style={{ backgroundColor: 'rgba(20,28,43,0.65)', border: '1px solid rgba(0,212,255,0.04)' }}
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="name@beispiel.de"
                        value={form.email}
                        onChange={handleChange}
                        autoComplete="email"
                      />
                    </div>
                    <div>
                      <label className="block text-white font-semibold mb-1" htmlFor="subject">
                        Betreff <span className="text-red-500">*</span>
                      </label>
                      <select
                        className="w-full px-4 py-3 rounded-lg text-white focus:outline-none transition"
                        style={{ backgroundColor: 'rgba(20,28,43,0.65)', border: '1px solid rgba(0,212,255,0.04)' }}
                        id="subject"
                        name="subject"
                        required
                        value={form.subject || ''}
                        onChange={handleChange}
                      >
                        <option value="">Bitte wählen…</option>
                        <option value="general" title="Für alles, was nicht spezifisch passt">Allgemeine Anfrage</option>
                        <option value="report" title="Für direkte Anforderung des kostenlosen Exposure-Reports">Kostenlose Ersteinschätzung / Exposure-Report</option>
                        <option value="consulting" title="Für tiefergehende Analyse oder Sicherheitsstrategie">Beratung / Sicherheitsstrategie</option>
                        <option value="pricing" title="Für Anfragen zu Preisen und Angeboten">Angebot / Preisinfos</option>
                        <option value="support" title="Support-Anfragen oder Rückfragen zu Reports">Support / Rückfragen zu Report</option>
                        <option value="other" title="Sonstiges">Sonstiges</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-1" htmlFor="message">
                      Nachricht <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      className="w-full px-4 py-3 rounded-lg text-white focus:outline-none transition min-h-[120px]"
                      style={{ backgroundColor: 'rgba(20,28,43,0.65)', border: '1px solid rgba(0,212,255,0.04)' }}
                      id="message"
                      name="message"
                      required
                      placeholder="Beschreiben Sie kurz Ihr Anliegen oder Vorfall"
                      value={form.message}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-1" htmlFor="host">
                      Hostname / Domain / IP (optional)
                    </label>
                    <input
                      className="w-full px-4 py-3 rounded-lg text-white focus:outline-none transition"
                      style={{ backgroundColor: 'rgba(20,28,43,0.65)', border: '1px solid rgba(0,212,255,0.04)' }}
                      type="text"
                      id="host"
                      name="host"
                      placeholder="z. B. example.com oder 92.113.23.59"
                      value={form.host}
                      onChange={handleChange}
                      autoComplete="off"
                    />
                  </div>

                  {/* Datenschutzerklärung */}
                  <div className="flex items-center rounded-lg p-3 mt-2" style={{ backgroundColor: 'rgba(20,28,43,0.65)', border: '1px solid rgba(0,212,255,0.04)' }}>
                    <input
                      type="checkbox"
                      id="privacy"
                      name="privacy"
                      checked={form.privacy}
                      onChange={handleChange}
                      className="mr-3 accent-cyan-400 w-6 h-6"
                      required
                    />
                    <span className="text-cyan-300 text-xl mr-2">✔</span>
                    <label htmlFor="privacy" className="text-white text-base">
                      Ja, ich möchte Antworten auf meine Frage erhalten und akzeptiere die <a href="/privacy" className="underline text-cyan-300 hover:text-cyan-200" target="_blank" rel="noopener noreferrer">Datenschutzerklärung</a>.
                    </label>
                  </div>

                  {error && <div className="text-red-500 font-semibold mt-1 text-center">{error}</div>}
                  {recaptchaError && <div className="text-red-500 font-semibold text-center mt-2">{recaptchaError}</div>}

                  <div className="mt-4">
                    <button
                      type="submit"
                      className="cta-button w-full text-black font-bold py-3 rounded-2xl transition-all duration-300 text-lg"
                    >
                      Kostenlose Ersteinschätzung anfordern
                    </button>
                  </div>
                </form>
              )}
            </motion.div>

            {/* Trust Badges */}
            <div className="flex justify-center gap-6 mt-8 text-white">
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[rgba(20,28,43,0.65)] mb-2" style={{ border: '1px solid rgba(0,212,255,0.04)' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-200" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                </div>
                <span className="text-xs text-cyan-200 mt-1">SSL-verschlüsselt</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[rgba(20,28,43,0.65)] mb-2" style={{ border: '1px solid rgba(0,212,255,0.04)' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-200" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 15c2.5 0 4.847.655 6.879 1.804M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <span className="text-xs text-cyan-200 mt-1">Keine Weitergabe</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[rgba(20,28,43,0.65)] mb-2" style={{ border: '1px solid rgba(0,212,255,0.04)' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-200" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a10 10 0 11-20 0 10 10 0 0120 0z" /></svg>
                </div>
                <span className="text-xs text-cyan-200 mt-1">DSGVO-konform</span>
              </div>
            </div>

          </div>
        </section>
        

        {/* Kompakter Prozess-Überblick (harmonisiert) */}
        <section className="py-6 bg-gray-900">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="p-8 rounded-2xl text-center" style={{ backgroundColor: 'rgba(30,41,59,0.8)', border: '1px solid rgba(0,212,255,0.06)' }}>
              <h3 className="text-xl sm:text-2xl font-bold text-cyan-300 mb-4">Ablauf nach Ihrer Anfrage</h3>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <div className="flex flex-col items-center min-w-[72px]">
                  <div className="w-9 h-9 aspect-square rounded-full bg-cyan-700 flex-shrink-0 flex items-center justify-center mb-1 border border-cyan-600">
                    <span className="text-white font-semibold">1</span>
                  </div>
                  <div className="text-sm text-white">Anfrage</div>
                </div>

                <div className="text-cyan-300 flex items-center" aria-hidden>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                </div>

                <div className="flex flex-col items-center min-w-[72px]">
                  <div className="w-9 h-9 aspect-square rounded-full bg-cyan-700 flex-shrink-0 flex items-center justify-center mb-1 border border-cyan-600">
                    <span className="text-white font-semibold">2</span>
                  </div>
                  <div className="text-sm text-white">Antwort (24h)</div>
                </div>

                <div className="text-cyan-300 flex items-center" aria-hidden>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                </div>

                <div className="flex flex-col items-center min-w-[72px]">
                  <div className="w-9 h-9 aspect-square rounded-full bg-cyan-700 flex-shrink-0 flex items-center justify-center mb-1 border border-cyan-600">
                    <span className="text-white font-semibold">3</span>
                  </div>
                  <div className="text-sm text-white">Analyse</div>
                </div>

                <div className="text-cyan-300 flex items-center" aria-hidden>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                </div>

                <div className="flex flex-col items-center min-w-[72px]">
                  <div className="w-9 h-9 aspect-square rounded-full bg-cyan-700 flex-shrink-0 flex items-center justify-center mb-1 border border-cyan-600">
                    <span className="text-white font-semibold">4</span>
                  </div>
                  <div className="text-sm text-white">Report</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        

        <div className="text-center text-blue-300 text-sm mt-8">
          Mehr zum Umgang mit Ihren Daten finden Sie in unserer <a href="/privacy" className="underline hover:text-blue-400" target="_blank" rel="noopener noreferrer">Datenschutzerklärung</a>.
        </div>

      </main>
      <Footer />
      <style jsx>{`
        .cta-button {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          background: linear-gradient(90deg, #00d4ff 0%, #00bcd4 100%);
          color: #052331;
          padding: 0.75rem 1rem;
          border-radius: 0.75rem;
          box-shadow: 0 10px 30px rgba(2,6,23,0.6);
          overflow: hidden;
          border: none;
        }
        .cta-button::after {
          content: '';
          position: absolute;
          top: 0;
          left: -120%;
          width: 120%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent);
          transition: left .7s ease;
          pointer-events: none;
        }
        .cta-button:hover::after { left: 100%; }
        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 20px 40px rgba(2,6,23,0.6);
        }

        .card {
          transition: transform .25s ease, box-shadow .25s ease;
        }
        .card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 40px rgba(2,6,23,0.6);
        }
      `}</style>
    </>
  );
}
