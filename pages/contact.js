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
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "", privacy: false, customerType: "" });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [recaptchaError, setRecaptchaError] = useState("");
  const captchaWord = "sicher";

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
    // reCAPTCHA v3 Token holen
    if (typeof window.grecaptcha === "undefined") {
      setRecaptchaError("reCAPTCHA konnte nicht geladen werden. Bitte versuchen Sie es später erneut.");
      return;
    }
    const token = await window.grecaptcha.execute("6LeFzm4rAAAAAAVjzEG_0riyYW7dcMdJlOIDWfIJ", { action: "submit" });
    if (!token) {
      setRecaptchaError("reCAPTCHA-Überprüfung fehlgeschlagen. Bitte versuchen Sie es erneut.");
      return;
    }
    // Formulardaten an die API senden
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
    } catch (err) {
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

        <section className="py-16 bg-gray-900">
          <div className="container mx-auto px-4 max-w-2xl">
            <motion.div
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-gray-800/60 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-gray-700"
            >
              {sent ? (
                <div className="text-center py-16">
                  <h2 className="text-3xl font-bold mb-4 text-blue-400">Vielen Dank!</h2>
                  <p className="text-blue-200 text-lg">Ihre Nachricht wurde erfolgreich übermittelt.<br />Ich melde mich zeitnah bei Ihnen.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Kundentyp Auswahl */}
                  <div>
                    <label className="block text-blue-200 font-semibold mb-1">
                      Ich bin <span className="text-red-500">*</span>
                    </label>
                    <div className="flex gap-6">
                      <label className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="customerType"
                          value="Privatkunde"
                          checked={form.customerType === 'Privatkunde'}
                          onChange={handleChange}
                          required
                          className="accent-blue-600 w-5 h-5 mr-2"
                        />
                        <span className="text-white">Privatkunde</span>
                      </label>
                      <label className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="customerType"
                          value="Unternehmen"
                          checked={form.customerType === 'Unternehmen'}
                          onChange={handleChange}
                          required
                          className="accent-blue-600 w-5 h-5 mr-2"
                        />
                        <span className="text-white">Unternehmen</span>
                      </label>
                    </div>
                    {error && !form.customerType && (
                      <div className="text-red-500 font-semibold mt-1">Bitte wählen Sie einen Kundentyp.</div>
                    )}
                  </div>
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
                        value={form.name}
                        onChange={handleChange}
                        autoComplete="name"
                        pattern="[A-Za-zÄÖÜäöüß\-\s]+"
                        title="Bitte geben Sie einen gültigen Namen ein."
                      />
                      {error && !form.name && (
                        <div className="text-red-500 font-semibold mt-1">Bitte geben Sie Ihren Namen ein.</div>
                      )}
                    </div>
                    <div>
                      <label className="block text-blue-200 font-semibold mb-1" htmlFor="phone">
                        Telefonnummer <span className="text-red-500">*</span>
                      </label>
                      <input
                        className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-black focus:outline-none focus:border-blue-500 transition"
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        autoComplete="tel"
                        pattern="[0-9+ ]{6,20}"
                        title="Bitte geben Sie nur Zahlen und ggf. + ein."
                      />
                      {error && !form.phone && (
                        <div className="text-red-500 font-semibold mt-1">Bitte geben Sie Ihre Telefonnummer ein.</div>
                      )}
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
                        value={form.email}
                        onChange={handleChange}
                        autoComplete="email"
                        pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                        title="Bitte geben Sie eine gültige E-Mail-Adresse ein."
                      />
                      {error && !form.email && (
                        <div className="text-red-500 font-semibold mt-1">Bitte geben Sie Ihre E-Mail-Adresse ein.</div>
                      )}
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
                        <option value="Anfrage">Allgemeine Anfrage</option>
                        <option value="Beratung">Beratung</option>
                        <option value="Angebot">Angebot</option>
                        <option value="Support">Support</option>
                      </select>
                      {error && !form.subject && (
                        <div className="text-red-500 font-semibold mt-1">Bitte wählen Sie einen Betreff.</div>
                      )}
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
                      value={form.message}
                      onChange={handleChange}
                    />
                    {error && !form.message && (
                      <div className="text-red-500 font-semibold mt-1">Bitte geben Sie eine Nachricht ein.</div>
                    )}
                  </div>
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
                  {error && !form.privacy && (
                    <div className="text-red-500 font-semibold mt-1">Bitte akzeptieren Sie die Datenschutzerklärung.</div>
                  )}
                  {recaptchaError && (
                    <div className="text-red-500 font-semibold text-center mt-2">{recaptchaError}</div>
                  )}
                  <div className="mt-4">
                    <button
                      type="submit"
                      className="cyber-direct-btn w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-full shadow-lg transition-all duration-300 text-lg"
                    >
                      Nachricht senden
                    </button>
                  </div>
                </form>
              )}
              {error && (
                <div className="text-red-500 font-semibold text-center mt-4">{error}</div>
              )}
              {sent && !error && (
                <div className="text-green-400 font-semibold text-center mt-4">Nachricht erfolgreich übermittelt!</div>
              )}
              {/* Trust Badges */}
              <div className="flex justify-center gap-6 mt-8">
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-800 mb-2">
                    {/* Shield Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-200" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                  </div>
                  <span className="text-xs text-blue-200 mt-1">SSL-verschlüsselt</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-800 mb-2">
                    {/* User Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-200" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 15c2.5 0 4.847.655 6.879 1.804M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <span className="text-xs text-blue-200 mt-1">Keine Weitergabe</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-800 mb-2">
                    {/* CheckCircle Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-200" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a10 10 0 11-20 0 10 10 0 0120 0z" /></svg>
                  </div>
                  <span className="text-xs text-blue-200 mt-1">DSGVO-konform</span>
                </div>
              </div>
            </motion.div>
            {/* Alternative Kontaktwege als Buttons mit Icon-Kreis wie auf Business/Privatseite */}
            <div className="text-center mt-12 flex flex-col md:flex-row gap-6 justify-center items-center">
              <a href="mailto:info@ichwillsicherheit.de" className="flex items-center bg-blue-900/80 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-xl shadow transition-all duration-300 text-lg gap-3">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-700 mr-2">
                  {/* Envelope Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-200" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12l-4-4-4 4m8 0v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6m16 0V6a2 2 0 00-2-2H6a2 2 0 00-2 2v6" /></svg>
                </span>
                <span>E-Mail: info@ichwillsicherheit.de</span>
              </a>
              <a href="tel:+4917675468985" className="flex items-center bg-blue-900/80 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-xl shadow transition-all duration-300 text-lg gap-3">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-700 mr-2">
                  {/* Phone Icon modern */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-200" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </span>
                <span>Telefon: +49 176 754 689 85 <span className="ml-2 text-base text-blue-200">(Mo-Fr, 9-18 Uhr)</span></span>
              </a>
            </div>
          </div>
        </section>

        {/* Schritt-für-Schritt Grafik: Was passiert nach dem Absenden? */}
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

        {/* Datenschutzerklärung nur verlinken */}
        <div className="text-center text-blue-300 text-sm mt-8">
          Mehr zum Umgang mit Ihren Daten finden Sie in unserer <a href="/privacy" className="underline hover:text-blue-400" target="_blank" rel="noopener noreferrer">Datenschutzerklärung</a>.
        </div>
      </main>
      <Footer />
      <style jsx global>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 8s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}