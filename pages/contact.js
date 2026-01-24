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
        <section className="relative py-20 bg-gradient-to-br from-blue-900 via-gray-900 to-gray-900 text-center overflow-hidden">
          <div className="absolute inset-0 bg-[url('/img/grid-pattern.svg')] opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-white"
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
          <div className="container mx-auto px-4 max-w-2xl">
            <motion.div
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="card bg-gray-800/60 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-gray-700"
            >
              {sent ? (
                <div className="text-center py-16">
                  <h2 className="text-3xl font-bold mb-4 text-blue-400">Vielen Dank!</h2>
                  <p className="text-blue-200 text-lg">Ihre Nachricht wurde erfolgreich übermittelt.<br />Wir melden uns zeitnah bei Ihnen.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-blue-200 font-semibold mb-1" htmlFor="name">
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-black focus:outline-none focus:border-blue-500 transition"
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
                      <label className="block text-blue-200 font-semibold mb-1" htmlFor="phone">
                          Telefonnummer
                        </label>
                        <input
                          className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-black focus:outline-none focus:border-blue-500 transition"
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
                      <label className="block text-blue-200 font-semibold mb-1" htmlFor="email">
                        E-Mail <span className="text-red-500">*</span>
                      </label>
                      <input
                        className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-black focus:outline-none focus:border-blue-500 transition"
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
                      <label className="block text-blue-200 font-semibold mb-1" htmlFor="subject">
                        Betreff <span className="text-red-500">*</span>
                      </label>
                      <select
                        className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-black focus:outline-none focus:border-blue-500 transition"
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
                    <label className="block text-blue-200 font-semibold mb-1" htmlFor="message">
                      Nachricht <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-black focus:outline-none focus:border-blue-500 transition min-h-[120px]"
                      id="message"
                      name="message"
                      required
                      placeholder="Beschreiben Sie kurz Ihr Anliegen oder Vorfall"
                      value={form.message}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <label className="block text-blue-200 font-semibold mb-1" htmlFor="host">
                      Hostname / Domain / IP (optional)
                    </label>
                    <input
                      className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-black focus:outline-none focus:border-blue-500 transition"
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
                  <div className="flex items-center bg-gray-700 rounded-lg p-3 border border-green-500 mt-2">
                    <input
                      type="checkbox"
                      id="privacy"
                      name="privacy"
                      checked={form.privacy}
                      onChange={handleChange}
                      className="mr-3 accent-green-500 w-6 h-6"
                      required
                    />
                    <span className="text-green-400 text-xl mr-2">✔</span>
                    <label htmlFor="privacy" className="text-gray-200 text-base">
                      Ja, ich möchte Antworten auf meine Frage erhalten und akzeptiere die <a href="/privacy" className="underline text-blue-400 hover:text-blue-300" target="_blank" rel="noopener noreferrer">Datenschutzerklärung</a>.
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
            <div className="flex justify-center gap-6 mt-8">
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-800 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-200" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                </div>
                <span className="text-xs text-blue-200 mt-1">SSL-verschlüsselt</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-800 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-200" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 15c2.5 0 4.847.655 6.879 1.804M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <span className="text-xs text-blue-200 mt-1">Keine Weitergabe</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-800 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-200" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a10 10 0 11-20 0 10 10 0 0120 0z" /></svg>
                </div>
                <span className="text-xs text-blue-200 mt-1">DSGVO-konform</span>
              </div>
            </div>

          </div>
        </section>

        {/* Schritt-für-Schritt Grafik */}
        <section className="py-12 bg-gray-900">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="bg-gray-900/80 p-8 rounded-2xl shadow-2xl border border-blue-800">
              <h3 className="text-2xl font-bold mb-8 text-blue-400 text-center">Was passiert nach dem Absenden?</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 via-blue-400 to-blue-600 mb-4 shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 10l9-6 9 6-9 6-9-6zm0 0v6a9 9 0 009 9 9 9 0 009-9v-6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <span className="font-semibold text-blue-100">Sie senden Ihre Anfrage</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 via-blue-400 to-blue-600 mb-4 shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 6v6l4 2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="12" r="10" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <span className="font-semibold text-blue-100">Wir antworten innerhalb von 24h</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 via-blue-400 to-blue-600 mb-4 shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="11" cy="11" r="8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M21 21l-4.35-4.35" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <span className="font-semibold text-blue-100">Kostenlose Analyse Ihrer Situation</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 via-blue-400 to-blue-600 mb-4 shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M9 12l2 2 4-4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <span className="font-semibold text-blue-100">Maßgeschneiderte Lösung</span>
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
