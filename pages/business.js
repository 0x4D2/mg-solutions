import React from "react";
import { motion } from "framer-motion";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

// Animationen wie auf der Privat-Seite
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
};
const hoverEffect = {
  scale: 1.03,
  transition: { type: "spring", stiffness: 400, damping: 10 }
};

export default function BusinessPage() {
  return (
    <>
      <IndexNavbar fixed />
      <main className="pt-20 bg-gray-900 cyber-bg">
        {/* Hero Section */}
        <section className="relative py-32 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-center overflow-hidden">
          <div className="absolute inset-0 bg-[url('/img/grid-pattern.svg')] opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
            >
              Sicherheit, die Business stabilisiert
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mt-6 text-xl text-white max-w-3xl mx-auto"
            >
              Messbar · Nachvollziehbar · Wirtschaftlich
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
            >

              <button className="cyber-direct-btn">
              Direkt zum Experten
            </button>

            </motion.div>
            
          </div>
        </section>

        {/* Value Proposition */}
        <section className="py-20 bg-gray-800">
          <div className="container mx-auto px-4 max-w-6xl">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-12"
            >
              {[
                {
                  icon: (
                    <span className="inline-block rounded-full p-3">
                      {/* Shield Icon */}
                      <svg className="text-white w-8 h-8 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V7l-8-4-8 4v5c0 6 8 10 8 10z" />
                      </svg>
                    </span>
                  ),
                  title: "87% weniger Sicherheitsvorfälle",
                  desc: "Weniger IT-Ausfälle = höhere Produktionsverfügbarkeit"
                },
                {
                  icon: (
                    <span className="inline-block bg-blue-700/20 rounded-full p-3">
                      {/* Chart Down Icon */}
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 17l6-6 4 4 8-8" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 7h7v7" />
                      </svg>
                    </span>
                  ),
                  title: "60% geringere Gesamtkosten",
                  desc: "Geringere Ausgaben = mehr Budget für Innovation"
                },
                {
                  icon: (
                    <span className="inline-block rounded-full p-3">
                      {/* Compliance/Scale Icon */}
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2m6 4a6 6 0 01-12 0M5 7h14M7 21h10M12 17v4" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a2 2 0 01-2-2v-2a2 2 0 012-2h10a2 2 0 012 2v2a2 2 0 01-2 2" />
                      </svg>
                    </span>
                  ),
                  title: "100% Compliance",
                  desc: "Keine Strafen = ruhiger Schlaf für Geschäftsführung"
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="bg-gray-800/60 backdrop-blur-md p-8 rounded-2xl shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 border text-center"
                >
                  <div className="w-14 h-14 rounded-full from-blue-500 via-blue-400 to-blue-600 flex items-center justify-center shadow-lg text-3xl mx-auto mb-4">
                    {item.icon}
                  </div>
                  <h1 className="text-2xl font-extrabold mb-3 tracking-tight">{item.title}</h1>
                  <p className="text-white">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Startup-Pakete für Gründerteams */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4 max-w-6xl">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold mb-4">
                Startup-Sicherheitspakete <span className="text-blue-400">ohne Risiko</span>
              </h2>
              <p className="text-xl text-white max-w-3xl mx-auto">
                Flexible IT-Security für jede Wachstumsphase – monatlich kündbar
              </p>
              <br></br>
            </motion.div>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-8"
            >
              {/* Starter-Paket */}
              <motion.div
                variants={itemVariants}
                whileHover={hoverEffect}
                className="relative bg-gray-800/60 backdrop-blur-md p-8 rounded-2xl shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 border border-gray-700 text-left flex flex-col"
              >
                <div className="mb-2">
                  <span className="bg-blue-500/20 text-white text-xs font-bold px-3 py-1 rounded-full">Starter-Paket</span>
                </div>
                <div className="text-3xl font-bold text-white mb-2">ab 149&nbsp;€/Monat</div>
                <div className="text-white mb-4 text-sm">oder 1.490&nbsp;€/Jahr – 2 Monate geschenkt</div>
                <div className="text-white font-medium mb-4">Für: Startups in der Gründungsphase mit Basis-IT</div>
                <ul className="text-white mb-6">
                  <li>✔ E-Mail-Support (Mo-Fr, 9-18 Uhr)</li>
                  <li>✔ 1h Sicherheits-Check pro Quartal (Remote)</li>
                  <li>✔ Notfall-Checkliste für IT-Vorfälle</li>
                  <li>✔ Zugriff auf Basis-Ressourcen (z. B. Leitfäden, Checklisten)</li>
                  <li>✔ Selbstbewertungs-Tool für Compliance</li>
                </ul>
                <div className="text-white italic text-sm mb-6">
                  Geeignet für Teams bis 5 Personen, die erste Sicherheitsstrukturen aufbauen möchten.
                </div>
                <button className="cyber-direct-btn mt-auto bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-full font-medium transition duration-300 w-full">
                  Jetzt starten
                </button>
              </motion.div>
              {/* Growth-Paket */}
              <motion.div
                variants={itemVariants}
                whileHover={hoverEffect}
                className="relative bg-gray-800/60 backdrop-blur-md p-8 rounded-2xl shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 border-2 border-blue-500 scale-105 z-10 text-left flex flex-col"
              >
                <div className="mb-2 flex items-center gap-2">
                  <span className="bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">Growth-Paket</span>
                  <span className="bg-blue-700/80  text-xs font-bold px-2 py-1 rounded-full" style={{ color: 'rgb(34,197,94)' }}>Beliebteste Option</span>
                </div>
                <div className="text-3xl font-bold text-white mb-2">ab 399&nbsp;€/Monat</div>
                <div className="text-white font-medium mb-4">Für: Startups mit ersten Kunden/Investoren</div>
                <ul className="space-y-3 text-white mb-6">
                  <li>✔ Schnellere Reaktion (Chat + E-Mail innerhalb 8h)</li>
                  <li>✔ 4h Beratung/Monat (flexibel einteilbar)</li>
                  <li>✔ Backup-Check 1x monatlich</li>
                  <li>✔ Mitarbeiter-Schulung (1x jährlich, 60min)</li>
                  <li>✔ NIS-2 Gap-Analyse (einmalig im 1. Jahr)</li>
                </ul>
                <div className="text-white italic text-sm mb-6">
                  Für Teams bis 20 Personen, die Compliance-Anforderungen erfüllen müssen.
                </div>
                <button className="cyber-direct-btn mt-auto bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-full font-medium transition duration-300 w-full">
                  Jetzt upgraden
                </button>
              </motion.div>
              {/* Enterprise-Paket */}
              <motion.div
                variants={itemVariants}
                whileHover={hoverEffect}
                className="relative bg-gray-800/60 backdrop-blur-md p-8 rounded-2xl shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 border border-gray-700 text-left flex flex-col"
              >
                <div className="mb-2">
                  <span className="bg-blue-500/20 text-white text-xs font-bold px-3 py-1 rounded-full">Enterprise-Paket</span>
                </div>
                <div className="text-3xl font-bold text-white mb-2">Individueller Preis</div>
                <div className="text-white mb-4 text-sm">ab 1.200&nbsp;€/Monat</div>
                <div className="text-white font-medium mb-4">Für: Startups mit kritischer Infrastruktur</div>
                <ul className="space-y-3 text-white mb-6">
                  <li>✔ 24/7-Notfallnummer</li>
                  <li>✔ Dedizierter Security Coach</li>
                  <li>✔ Penetrationstest (1x jährlich)</li>
                  <li>✔ Monatliche Reports für Investoren</li>
                  <li>✔ Vor-Ort-Besuche (nach Bedarf)</li>
                </ul>
                <div className="text-white italic text-sm mb-6">
                  Für regulierte Branchen (Fintech, Healthtech etc.) mit hohem Sicherheitsbedarf.
                </div>
                <button className="cyber-direct-btn mt-auto bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-full font-medium transition duration-300 w-full">
                  Angebot anfragen
                </button>
              </motion.div>
            </motion.div>

            {/* Zusatzoptionen */}
            <div className="mt-12 bg-gray-800/70 p-8 rounded-xl shadow border border-blue-800 max-w-3xl mx-auto">
              <h3 className="text-xl font-bold mb-4 text-white">Transparente Zusatzoptionen</h3>
              <ul className="space-y-2 text-blue-200">
                <li className="text-white">▸ <span className="font-semibold text-white">Onboarding-Crashkurs:</span> +290&nbsp;€ (einmalig)</li>
                <li className="text-white">▸ <span className="font-semibold text-white">Dokumenten-Templates:</span> +49&nbsp;€/Monat</li>
                <li className="text-white">▸ <span className="font-semibold text-white">Priority-Support:</span> +199&nbsp;€/Monat</li>
              </ul>
            </div>

            {/* Warum uns Startups vertrauen */}
            <div className="mt-16 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-4">Warum uns Startups vertrauen:</h2>
                <ul className="space-y-3 text-white">
                  <li>✓ Keine langen Verträge (monatlich kündbar)</li>
                  <li>✓ Klare Erfolgskriterien (z. B. "100% Backup-Überprüfung")</li>
                  <li>✓ Pay-as-you-grow (Paketwechsel jederzeit)</li>
                  <li>✓ Ehrliche Risikokommunikation (wir zeigen Schwachstellen ohne Panikmache)</li>
                </ul>
                <div className="mt-6 text-white italic">
                  Wir beginnen mit einer kostenlosen 30-minütigen IT-Sicherheitsbewertung – kein Sales-Gespräch, nur Fakten.
                </div>
              </div>
              <div className="flex flex-col items-center justify-center mt-8 mb-4">
                <a
                  href="contact"
                  className="cyber-direct-btn bg-cyan-500 hover:bg-cyan-600 text-white font-bold px-10 py-5 rounded-full shadow-xl transition-all duration-300 text-lg mt-8 mb-4"
                >
                  Termin buchen
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ROI-Sektion */}
        <section className="py-20 bg-gray-800">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="bg-blue-900/40 backdrop-blur-md p-12 rounded-2xl shadow-2xl border border-blue-800">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-6">
                    <span className="text-blue-400">Wie viel Geld</span> verlieren Sie ohne Security?
                  </h2>
                  <p className="text-lg text-white mb-8">
                    Unser Rechner zeigt konkrete Risiken für Ihr Unternehmen:
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="bg-blue-700 p-3 rounded-full mr-4">
                        <svg className="w-6 h-6 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                      </div>
                      <span className="text-white">Beispiel bei 100 Mitarbeitern: <span className="font-bold text-white">3 Ausfalltage = 42.000€ Verlust</span></span>
                    </div>
                    <div className="flex items-center">
                      <div className="bg-blue-700 p-3 rounded-full mr-4">
                        <svg className="w-6 h-6 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <span className="text-white">Durchschnittliche Versicherungserhöhung nach Vorfall: <span className="font-bold text-white">+22%</span></span>
                    </div>
                  </div>
                  <br></br>
                </div>
                <div className="bg-gray-900/70 p-8 rounded-xl shadow border border-blue-800">
                  <h3 className="text-xl font-bold mb-6 text-center text-white">Was Unternehmen wirklich verlieren</h3>
                  <div className="space-y-6 text-white">
                    {[
                      { label: "Produktivitätsausfall", value: "85%", color: "bg-red-500", width: "85%" },
                      { label: "Reputationsschaden", value: "72%", color: "bg-orange-500", width: "72%" },
                      { label: "Kundenvertrauen", value: "68%", color: "bg-yellow-400", width: "68%" },
                      { label: "Versicherungskosten", value: "+22%", color: "bg-blue-500", width: "22%" }
                    ].map((item, index) => (
                      <div key={index}>
                        <div className="flex justify-between mb-2 text-gray-200">
                          <span>{item.label}</span>
                          <span className="font-bold">{item.value}</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2.5">
                          <div className={`${item.color} h-2.5 rounded-full`} style={{ width: item.width }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Compliance */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4 max-w-6xl">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-center mb-4"
            >
              Was <span className="text-blue-400">NIS-2 kostet</span>, wenn Sie es nicht erfüllen
            </motion.h2>
            <p className="text-xl text-white text-center mb-16 max-w-3xl mx-auto">
              Und wie wir Sie vor den finanziellen Folgen schützen
            </p>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="bg-gray-800/70 p-6 rounded-xl shadow-md mb-6 border-l-4 border-red-500">
                  <h3 className="text-xl font-bold text-red-500 mb-3">Risiko ohne Maßnahmen</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-red-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span className="text-white">Bußgelder bis zu <strong>10 Mio. € oder 2% des Jahresumsatzes</strong></span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-red-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span className="text-white">Persönliche Haftung der Geschäftsführung</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-800/70 p-6 rounded-xl shadow-md border-l-4 border-green-500">
                  <h3 className="text-xl font-bold" style={{ color: 'rgb(34,197,94)' }}>Unsere Absicherung</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 mr-2 mt-0.5" style={{ color: 'rgb(34,197,94)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-white"><strong>Haftungsübernahme</strong> für Compliance-Fragen</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 mr-2 mt-0.5" style={{ color: 'rgb(34,197,94)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-white"><strong>Behördliche Kommunikation</strong> inklusive</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <br></br>
                <h3 className="text-xl font-bold mb-4 text-white">So machen wir Sie NIS-2 konform:</h3>
                <div className="space-y-6">
                  {[
                    { title: "1. Gap-Analyse", text: "Identifizierung kritischer Lücken in 48h" },
                    { title: "2. Maßnahmenplan", text: "Priorisierte To-Do-Liste mit Zeitplan" },
                    { title: "3. Umsetzung", text: "Technische + organisatorische Anpassungen" },
                    { title: "4. Dokumentation", text: "Vorlagen für behördliche Nachweise" }
                  ].map((step, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-blue-700 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-0.5">

                      </div>
                      <div>
                        <h4 className="font-bold text-white">{step.title}</h4>
                        <p className="text-white">{step.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="cyber-direct-btn mt-8 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full inline-flex center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  NIS-2 Compliance-Checkliste
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        {/* <section className="py-20 bg-gradient-to-r from-blue-800 to-blue-900 animate-gradient-x text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold mb-6"
            >
              In 15 Minuten wissen Sie, wo Sie <span className="text-blue-300">Sicherheitsrisiken verlieren</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-xl text-blue-200 max-w-3xl mx-auto mb-10"
            >
              Und wie Sie mit klaren Maßnahmen gegensteuern können
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-full shadow-lg transition-all duration-300 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                Selbst-Check starten (kostenlos)
              </button>
              <button className="bg-transparent alig border-2 border-white hover:bg-white hover:text-blue-800 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Direktberatung buchen
              </button>
            </motion.div>
          </div>
        </section> */}

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