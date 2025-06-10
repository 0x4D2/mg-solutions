import React, { useState } from "react";
import { motion } from "framer-motion";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
};

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "", privacy: false, captcha: "" });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [captchaValue, setCaptchaValue] = useState(() => {
    // Simple math captcha
    const a = Math.floor(Math.random() * 10) + 1;
    const b = Math.floor(Math.random() * 10) + 1;
    return { question: `${a} + ${b}`, answer: (a + b).toString() };
  });

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setForm(f => ({
      ...f,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    setError("");
    if (!form.privacy) {
      setError("Bitte akzeptieren Sie die Datenschutzerklärung.");
      return;
    }
    if (form.captcha.trim() !== captchaValue.answer) {
      setError("Captcha falsch gelöst. Bitte versuchen Sie es erneut.");
      return;
    }
    // Hier könnte ein API-Call erfolgen
    setSent(true);
  };

  return (
    <>
      <IndexNavbar fixed />
      <main className="pt-20 bg-gray-900 text-white min-h-screen">
        <section className="relative py-24 bg-gradient-to-br from-blue-900 via-gray-900 to-gray-900 text-center overflow-hidden">
          <div className="absolute inset-0 bg-[url('/img/grid-pattern.svg')] opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-white"
            >
              Kontakt aufnehmen
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-xl text-blue-200 max-w-2xl mx-auto mb-8"
            >
              Sie haben Fragen, wünschen eine Beratung oder möchten ein Angebot? Schreiben Sie mir – ich melde mich schnellstmöglich zurück.
            </motion.p>
          </div>
        </section>

        <section className="py-20 bg-gray-900">
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
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div>
                    <label className="block text-blue-200 font-semibold mb-2" htmlFor="name">
                      Name
                    </label>
                    <input
                      className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:border-blue-500 transition"
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      autoComplete="name"
                    />
                  </div>
                  <div>
                    <label className="block text-blue-200 font-semibold mb-2" htmlFor="email">
                      E-Mail
                    </label>
                    <input
                      className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:border-blue-500 transition"
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      autoComplete="email"
                    />
                  </div>
                  <div>
                    <label className="block text-blue-200 font-semibold mb-2" htmlFor="message">
                      Nachricht
                    </label>
                    <textarea
                      className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:border-blue-500 transition min-h-[120px]"
                      id="message"
                      name="message"
                      required
                      value={form.message}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="block text-blue-200 font-semibold mb-2" htmlFor="captcha">
                      Spamschutz: Was ist {captchaValue.question}?
                    </label>
                    <input
                      className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:border-blue-500 transition"
                      type="text"
                      id="captcha"
                      name="captcha"
                      required
                      value={form.captcha}
                      onChange={handleChange}
                      autoComplete="off"
                      inputMode="numeric"
                    />
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="privacy"
                      name="privacy"
                      checked={form.privacy}
                      onChange={handleChange}
                      className="mr-3 accent-blue-600 w-5 h-5"
                      required
                    />
                    <label htmlFor="privacy" className="text-gray-300 text-sm">
                      Ich habe die{" "}
                      <a
                        href="#datenschutz"
                        className="underline text-blue-400 hover:text-blue-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Datenschutzerklärung
                      </a>{" "}
                      gelesen und akzeptiere sie.
                    </label>
                  </div>
                  {error && (
                    <div className="text-red-400 font-semibold text-center">{error}</div>
                  )}
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-full shadow-lg transition-all duration-300 text-lg"
                  >
                    Nachricht senden
                  </button>
                </form>
              )}
            </motion.div>
            <div className="text-center mt-12 text-blue-200">
              <p>Oder direkt per E-Mail: <a href="mailto:kontakt@ichwillsicherheit.de" className="underline hover:text-blue-400">kontakt@ichwillsicherheit.de</a></p>
              <p className="mt-2">Telefonisch: <a href="tel:+491234567890" className="underline hover:text-blue-400">+49 123 4567890</a></p>
            </div>
          </div>
        </section>

              <div className="text-center mt-12 text-blue-200 space-y-8">
              <motion.div
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-gray-900/80 p-6 rounded-2xl shadow border border-blue-800 max-w-xl mx-auto"
              >
                <h3 className="text-2xl font-bold mb-2 text-blue-400">Was passiert nach dem Absenden?</h3>
                <p className="mb-4">
                  Nach dem Absenden Ihrer Anfrage meldet sich unser Team innerhalb von 24 Stunden, um Ihr Anliegen persönlich zu besprechen und gemeinsam eine Lösung zu finden.
                </p>
                <h4 className="font-semibold text-blue-300 mb-1">Datenschutz ist uns wichtig</h4>
                <p className="mb-4 text-blue-200">
                  Ihre Daten werden streng vertraulich behandelt und ausschließlich zur Bearbeitung Ihrer Anfrage genutzt. Mehr dazu finden Sie in unserer <a href="#datenschutz" className="underline hover:text-blue-400">Datenschutzerklärung</a>.
                </p>
                <h4 className="font-semibold text-blue-300 mb-1">Kostenlose Erstberatung</h4>
                <p>
                  Nutzen Sie die Möglichkeit einer unverbindlichen Erstberatung!<br />
                  <span className="block mt-2">E-Mail: <a href="mailto:info@ichwillsicherheit.de" className="underline hover:text-blue-400">info@ichwillsicherheit.de</a></span>
                  <span>Telefon: <a href="tel:+4917675468985" className="underline hover:text-blue-400">+49 176 754 689 85</a></span>
                </p>
                <p className="mt-4">Wir freuen uns darauf, Ihnen mit maßgeschneiderten Cybersecurity-Lösungen zu helfen.</p>
              </motion.div>
            </div>

        {/* Datenschutzerklärung */}
        <section id="datenschutz" className="py-20 bg-gray-800">
          <div className="container mx-auto px-4 max-w-3xl">
            <motion.div
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-gray-900/80 p-8 rounded-2xl shadow-2xl border border-gray-700"
            >
              <h2 className="text-2xl font-bold mb-4 text-blue-400">Datenschutzerklärung</h2>
              <p className="text-gray-300 mb-4">
                Ihre Daten werden ausschließlich zur Bearbeitung Ihrer Anfrage verwendet und nicht an Dritte weitergegeben. Die Übertragung erfolgt verschlüsselt. Sie können jederzeit Auskunft über die gespeicherten Daten verlangen oder deren Löschung beantragen.
              </p>
              <ul className="list-disc list-inside text-blue-200 space-y-2 mb-4 text-sm">
                <li>Verantwortlicher: Max Mustermann, kontakt@ichwillsicherheit.de</li>
                <li>Verarbeitete Daten: Name, E-Mail, Nachricht</li>
                <li>Zweck: Kontaktaufnahme und Beantwortung Ihrer Anfrage</li>
                <li>Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)</li>
                <li>Speicherdauer: Bis zur abschließenden Bearbeitung Ihrer Anfrage</li>
              </ul>
              <p className="text-gray-400 text-xs">
                Weitere Informationen finden Sie in der vollständigen Datenschutzerklärung auf Anfrage.
              </p>
            </motion.div>
          </div>
        </section>
        <Footer />
      </main>
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