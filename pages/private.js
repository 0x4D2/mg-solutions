import React from "react";
import { motion } from "framer-motion";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import Link from 'next/link';
import { containerVariants, itemVariants, hoverEffect } from "components/framerVariants";

export default function PrivatePage() {
  return (
    <>
      <IndexNavbar fixed />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="cyber-bg min-h-screen"
      >
        {/* Hero Section */}
        <section className="py-16 relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-center overflow-hidden">
          <div className="absolute inset-0 bg-[url('/img/grid-pattern.svg')] opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
            >
              Schützen Sie, was Ihnen lieb ist – bevor es zu spät ist
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-xl text-white max-w-2xl mx-auto mb-8"
            >
              Fotos, Bankdaten & Privatsphäre – sicher vor Hackern, Viren & Datendieben
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <Link href="/contact" passHref legacyBehavior>
                <a className="cyber-direct-btn hover:bg-blue-700 text-white py-3 px-8 rounded-full font-medium transition duration-300 text-center inline-block ">
                  In 5 Minuten wissen Sie, wie gefährdet Sie sind – gratis Check starten
                </a>
              </Link>
            </motion.div>
            <div className="mt-8 text-blue-200 text-sm">Jede Minute wird ein Passwort gestohlen – ist Ihres dabei?</div>
          </div>
        </section>

        {/* Why Security */}
        <section className="py-20 bg-gray-800">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="md:w-1/2"
              >
                <div className="bg-blue-600 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold mb-6">
                  Warum digitale Sicherheit <span className="text-blue-400">unverzichtbar</span> ist
                </h2>
                <p className="text-lg text-white mb-8">
                  Ihre Fotos, Bankdaten und privaten Nachrichten sind wertvoll – und täglich im Visier von Betrügern. Wir schützen, was Ihnen wichtig ist: Ihr WLAN, Ihre Online-Einkäufe, Ihr Banking und Ihre Familie. Ganz ohne Technik-Kauderwelsch.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="md:w-1/2"
              >
                <div className="bg-gray-700 rounded-xl p-8 border border-gray-600">
                  <h3 className="text-xl font-bold text-white mb-4">Aktuelle Bedrohungen</h3>
                  <ul className="space-y-4 text-white">
                    {[
                      "✓ 68% der Cyberangriffe richten sich an Privatpersonen",
                      "✓ Durchschnittlicher Schaden: 5.300€ pro Vorfall",
                      "✓ 43% der Nutzer verwenden Passwörter mehrfach",
                      "✓ Nur 11% haben Zwei-Faktor-Authentifizierung aktiviert"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl font-bold mb-8">Leistungen für Privatkunden</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
              {[
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  ),
                  title: "Rundumschutz für Ihre Geräte",
                  desc: "Schützt Ihre Handys, Tablets & Computer vor Viren, Betrug und Datenklau."
                },
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                  ),
                  title: "Sicheres WLAN & Online-Banking",
                  desc: "Schützt Ihr WLAN vor Nachbarn & Hackern. Sicher einkaufen & Online-Banking nutzen."
                },
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  ),
                  title: "Sichere Backups Ihrer Fotos & Dokumente",
                  desc: "Wir sorgen dafür, dass Ihre Erinnerungen & Unterlagen nie verloren gehen."
                },
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  ),
                  title: "Wir finden gestohlene Passwörter – bevor Diebe sie nutzen",
                  desc: "Sofortige Warnung, wenn Ihre Zugangsdaten im Umlauf sind."
                },
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  ),
                  title: "Soforthilfe bei Hackern & Viren – werktags schnell erreichbar",
                  desc: "Wir sind für Sie da, wenn es darauf ankommt – schnelle Hilfe während der Geschäftszeiten."
                }
              ].map((item, i) => (
                <div key={i} className="backdrop-blur-md p-8 rounded-2xl shadow-2xl border text-center flex flex-col items-center">
                  <div className="text-white w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 via-blue-400 to-blue-600 flex items-center justify-center shadow-lg mb-4">
                    {item.icon}
                  </div>
                  <h2 className="text-xl font-bold mb-2">{item.title}</h2>
                  <p className="text-white mb-2">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="bg-gray-800 rounded-2xl shadow-xl border border-blue-700 p-8 text-center mb-8 max-w-lg mx-auto">
              <div className="text-2xl font-bold mb-2"><h2>Rundum-Schutz-Paket</h2></div>
              <div className="text-4xl font-extrabold text-white mb-2">30€ <span className="text-lg font-normal text-blue-200">/Monat</span></div>
              <div className="text-white mb-4">Monatlich kündbar – keine versteckten Kosten</div>

              <Link href="/contact" passHref legacyBehavior>
                <a className="cyber-direct-btn hover:bg-blue-700 text-white py-3 px-8 rounded-full font-medium transition duration-300 text-center inline-block ">
                  Jetzt Schutz starten
                </a>
              </Link>

            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 bg-gray-800">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold mb-8 ">So einfach funktioniert's</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: (
                    <svg className="w-10 h-10 text-blue-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" strokeWidth="2" />
                      <text x="12" y="16" textAnchor="middle" fontSize="12" fill="currentColor">1</text>
                    </svg>
                  ),
                  title: "Kostenlose Analyse",
                  desc: "Wir besprechen Ihre Situation und identifizieren Risiken – einfach & verständlich."
                },
                {
                  icon: (
                    <svg className="w-10 h-10 text-blue-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" strokeWidth="2" />
                      <text x="12" y="16" textAnchor="middle" fontSize="12" fill="currentColor">2</text>
                    </svg>
                  ),
                  title: "Sicherheits-Paket buchen",
                  desc: "Sie erhalten Ihren persönlichen Schutz – ohne Technikstress."
                },
                {
                  icon: (
                    <svg className="w-10 h-10 text-blue-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" strokeWidth="2" />
                      <text x="12" y="16" textAnchor="middle" fontSize="12" fill="currentColor">3</text>
                    </svg>
                  ),
                  title: "Soforthilfe & Updates",
                  desc: "Wir sind für Sie da, wenn es darauf ankommt – und halten Sie immer auf dem neuesten Stand."
                }
              ].map((step, i) => (
                <div key={i} className="text-white bg-gray-800/60 rounded-2xl shadow-xl border border-blue-700 p-8 text-center flex flex-col items-center">
                  {step.icon}
                  <h2 className="text-xl font-bold mb-2">{step.title}</h2>
                  <p className="text-gray-300">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4 max-w-5xl">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-center mb-16"
            >
              Das sagen unsere Kunden
            </motion.h2>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex gap-8 overflow-x-auto pb-4 snap-x"
            >
              {[
                {
                  quote: "Endlich verstehe ich, wie ich mich schützen kann! Die Erklärungen sind so verständlich - kein Technik-Kauderwelsch.",
                  author: "Helga B., 68 Jahre",
                  rating: 5
                },
                {
                  quote: "Nachdem mein Sohn unser WLAN 'gehackt' hat, haben wir MG Solutions engagiert. Jetzt haben wir Ruhe - und Sicherheit.",
                  author: "Familie Schneider",
                  rating: 5
                },
                {
                  quote: "Die regelmäßigen Update-Erinnerungen sind Gold wert. Ich wusste gar nicht, wie oft ich Updates vergessen habe.",
                  author: "Thomas K., Freiberufler",
                  rating: 4
                },
                {
                  quote: "Der Darknet-Scan hat tatsächlich ein geleaktes Passwort von mir gefunden! Unglaublich wichtiger Service.",
                  author: "Sarah M., Journalistin",
                  rating: 5
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className=" text-white min-w-[320px] bg-gray-800/70 backdrop-blur-md p-8 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-700 snap-center"
                >
                  <div className="flex mb-4">
                    <>
                      {[...Array(5)].map((_, j) => (
                        <svg key={j} className={`w-5 h-5 ${j < item.rating ? 'text-yellow-400' : 'text-gray-600'}`} fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </>
                  </div>
                  <blockquote className="text-gray-300 italic mb-6">"{item.quote}"</blockquote>
                  <div className="flex items-center">
                    <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-3">
                      {item.author.charAt(0)}
                    </div>
                    <p className="text-gray-400 font-medium">{item.author}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-r from-blue-800 to-blue-900 animate-gradient-x text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold mb-6"
            >
              Bereit für sorgenfreie <span className="text-blue-300">Sicherheit</span>?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-xl text-blue-200 max-w-3xl mx-auto mb-10"
            >
              Kontaktieren Sie uns noch heute für eine kostenlose Erstberatung.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              {/* <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
              Jetzt Termin vereinbaren
            </button> */}
              <a
                href="tel:+4917675468985"
                className="bg-transparent hover:bg-white hover:text-blue-800 text-white font-bold px-8 py-4 rounded-full border-2 border-white transition-all duration-300 flex items-center justify-center"
                style={{ textDecoration: "none" }}
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +49 176 75468985
              </a>
            </motion.div>
          </div>

        </section>

      </motion.div>
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