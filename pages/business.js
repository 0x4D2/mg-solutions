import React from "react";
import { motion } from "framer-motion";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import Link from 'next/link';
import { containerVariants, itemVariants } from "components/framerVariants";

export default function BusinessPage() {
  return (
    <>
      <IndexNavbar fixed />
      <div className="cyber-bg min-h-screen">
        {/* Hero Section - Angepasst an Exposure Report */}
        <section className="relative bg-gradient-to-br from-[#0a192f] via-[#0f2848] to-[#0a192f] text-center overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-64 h-64 rounded-full" style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%)' }} />
            <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full" style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.05) 0%, transparent 70%)' }} />
          </div>
          
          <div className="pt-24 sm:pt-32 pb-20 max-w-6xl mx-auto px-4 sm:px-8 relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-[56px] sm:text-[72px] font-bold mb-6 leading-tight text-white"
            >
              Exposure-Reports: Was Ihre Angreifer sehen – bevor es teuer wird
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mt-6 text-xl text-[#c7d2fe] max-w-3xl mx-auto leading-relaxed"
            >
              Passive Analysen Ihrer externen Angriffsfläche. Objektiv, risikofrei und mit messbaren Fortschritten.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-10 flex flex-col sm:flex-row justify-center gap-4 items-center"
            >
              <Link
                href="/contact"
                className="cta-button rounded-2xl inline-flex items-center justify-center font-semibold w-full sm:w-auto max-w-md mx-auto sm:mx-0 px-6 py-3"
                style={{ backgroundColor: '#00d4ff', color: '#001f3f' }}
              >
                Jetzt kostenlose Analyse starten
                <svg className="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              
              <Link href="/faq" className="inline-flex items-center justify-center font-semibold px-4 py-2 rounded-lg transition-colors" style={{ color: '#00d4ff' }}>
                FAQ lesen →
              </Link>
            </motion.div>
            
            <div className="mt-8 text-sm text-[#9ee9ff]">
              <span>Für IT-Verantwortliche, Geschäftsführung und IT-Dienstleister</span>
            </div>
          </div>
        </section>

        {/* Value Proposition - Exposure Report spezifisch */}
        <section className="py-20" style={{ backgroundColor: '#0a192f' }}>
          <div className="container mx-auto px-4 max-w-6xl">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-8"
            >
              {[
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  ),
                  title: "100% passiv",
                  desc: "Keine aktiven Scans – Ihre Systeme bleiben unberührt"
                },
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  ),
                  title: "Messbare Trends",
                  desc: "Dokumentieren Sie Ihren Sicherheitsfortschritt objektiv"
                },
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  ),
                  title: "In 24 Stunden",
                  desc: "Schnelle Ergebnisse ohne lange Wartezeiten"
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="p-8 rounded-2xl transition-all duration-300 text-center card"
                  style={{ 
                    backgroundColor: 'rgba(30,41,59,0.8)', 
                    border: '1px solid rgba(0,212,255,0.12)',
                    backdropFilter: 'blur(10px)'
                  }}
                >
                  <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: 'rgba(0,212,255,0.1)' }}>
                    <span className="text-[#00d4ff]" style={{ color: '#00d4ff' }}>
                      {item.icon}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-white">{item.title}</h3>
                  <p className="text-[#c7d2fe]">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
            
            <div className="mt-8 text-center text-sm text-[#9ee9ff]">
              * Basierend auf öffentlich zugänglichen OSINT-Daten
            </div>
          </div>
        </section>

        {/* Pakete für Exposure-Reports */}
        <section className="py-20" style={{ backgroundColor: '#0f2848' }}>
          <div className="container mx-auto px-4 max-w-6xl">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">
                Exposure-Report Pakete
              </h2>
              <p className="text-xl text-[#c7d2fe] max-w-3xl mx-auto">
                Einmalige Analysen oder regelmäßige Monitoring-Pakete
              </p>
            </motion.div>
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            >
              {/* Einzelner Report */}
              <motion.div
                variants={itemVariants}
                className="p-8 rounded-2xl transition-all duration-300 card"
                style={{ 
                  backgroundColor: 'rgba(30,41,59,0.8)', 
                  border: '1px solid rgba(0,212,255,0.12)',
                  backdropFilter: 'blur(6px)'
                }}
              >
                <div className="mb-6">
                  <span className="inline-block px-4 py-2 rounded-full text-sm font-bold mb-4" style={{ backgroundColor: 'rgba(0,212,255,0.15)', color: '#00d4ff' }}>
                    Einzelner Report
                  </span>
                  <div className="text-3xl font-bold text-white mb-2">490€</div>
                  <div className="text-[#c7d2fe] mb-4">Einmalig | 30-Tage-Geld-zurück</div>
                </div>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mt-0.5 mr-3 flex-shrink-0" style={{ color: '#00d4ff' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white">Umfassende Analyse Ihrer Angriffsfläche</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mt-0.5 mr-3 flex-shrink-0" style={{ color: '#00d4ff' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white">Top-3-Risiken priorisiert</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mt-0.5 mr-3 flex-shrink-0" style={{ color: '#00d4ff' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white">Konkrete Handlungsempfehlungen</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mt-0.5 mr-3 flex-shrink-0" style={{ color: '#00d4ff' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white">30-minütiges Review-Call</span>
                  </li>
                </ul>
                
                <Link href="/contact" className="block w-full text-center py-3 px-4 rounded-2xl font-semibold transition-all duration-300 hover:shadow-lg" style={{ backgroundColor: '#00d4ff', color: '#001f3f' }}>
                  Einzelnen Report buchen
                </Link>
              </motion.div>

              {/* Unternehmen-Paket */}
              <motion.div
                variants={itemVariants}
                className="p-8 rounded-2xl transition-all duration-300 relative card"
                style={{ 
                  backgroundColor: 'rgba(30,41,59,0.8)', 
                  border: '2px solid rgba(0,212,255,0.3)',
                  backdropFilter: 'blur(6px)',
                  boxShadow: '0 20px 40px rgba(0,212,255,0.1)'
                }}
              >
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="px-4 py-1 rounded-full text-sm font-bold" style={{ backgroundColor: '#00d4ff', color: '#001f3f' }}>
                    Beliebt
                  </span>
                </div>
                
                <div className="mb-6">
                  <span className="inline-block px-4 py-2 rounded-full text-sm font-bold mb-4" style={{ backgroundColor: 'rgba(0,212,255,0.2)', color: '#00d4ff' }}>
                    Unternehmen-Paket
                  </span>
                  <div className="text-3xl font-bold text-white mb-2">ab 1.990€</div>
                  <div className="text-[#c7d2fe] mb-4">Für bis zu 5 Assets/IPs</div>
                </div>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mt-0.5 mr-3 flex-shrink-0" style={{ color: '#00d4ff' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white">Konsolidierter Gesamtbericht</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mt-0.5 mr-3 flex-shrink-0" style={{ color: '#00d4ff' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white">Monatliche Trendanalyse</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mt-0.5 mr-3 flex-shrink-0" style={{ color: '#00d4ff' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white">White-Label für IT-Dienstleister</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mt-0.5 mr-3 flex-shrink-0" style={{ color: '#00d4ff' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white">Volume Discounts ab 10 Assets</span>
                  </li>
                </ul>
                
                <Link href="/contact" className="block w-full text-center py-3 px-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg" style={{ backgroundColor: '#00d4ff', color: '#001f3f', border: '1px solid rgba(0,212,255,0.3)' }}>
                  Unternehmenspaket anfragen
                </Link>
              </motion.div>
            </motion.div>

            {/* Zusatzoptionen */}
            <div className="mt-12 max-w-3xl mx-auto p-8 rounded-2xl card" style={{ backgroundColor: 'rgba(30,41,59,0.8)', border: '1px solid rgba(0,212,255,0.12)' }}>
              <h3 className="text-xl font-bold mb-4 text-white">Optionale Erweiterungen</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-6 rounded-lg card" style={{ backgroundColor: 'rgba(0,212,255,0.05)' }}>
                  <div className="font-semibold text-white">Englischer Report</div>
                  <div className="text-[#00d4ff] mt-1">+49€</div>
                </div>
                <div className="p-6 rounded-lg card" style={{ backgroundColor: 'rgba(0,212,255,0.05)' }}>
                  <div className="font-semibold text-white">Detaillierte CVE-Analyse</div>
                  <div className="text-[#00d4ff] mt-1">+99€</div>
                </div>
                <div className="p-6 rounded-lg card" style={{ backgroundColor: 'rgba(0,212,255,0.05)' }}>
                  <div className="font-semibold text-white">Priority Support</div>
                  <div className="text-[#00d4ff] mt-1">+149€</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ROI und Nutzen */}
        <section className="py-20" style={{ backgroundColor: '#0a192f' }}>
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="p-8 rounded-2xl card" style={{ backgroundColor: 'rgba(30,41,59,0.8)', border: '1px solid rgba(0,212,255,0.2)' }}>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-white">
                    Was Sie mit einem Exposure-Report gewinnen
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0" style={{ backgroundColor: 'rgba(0,212,255,0.1)' }}>
                        <svg className="w-5 h-5" style={{ color: '#00d4ff' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-white mb-1">Compliance-Dokumentation</h4>
                        <p className="text-[#c7d2fe]">Nachweis für ISO 27001, BSI-Grundschutz, NIS-2</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0" style={{ backgroundColor: 'rgba(0,212,255,0.1)' }}>
                        <svg className="w-5 h-5" style={{ color: '#00d4ff' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-white mb-1">Priorisierung von Maßnahmen</h4>
                        <p className="text-[#c7d2fe]">Wissen, was zuerst abgesichert werden muss</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0" style={{ backgroundColor: 'rgba(0,212,255,0.1)' }}>
                        <svg className="w-5 h-5" style={{ color: '#00d4ff' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-white mb-1">Messbare Fortschritte</h4>
                        <p className="text-[#c7d2fe]">Objektive Dokumentation Ihrer Sicherheitsentwicklung</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="p-8 rounded-2xl card" style={{ backgroundColor: 'rgba(15,40,72,0.6)', border: '1px solid rgba(0,212,255,0.15)' }}>
                    <h3 className="text-xl font-bold mb-4 text-white">Typische Einsparungen</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <svg className="w-5 h-5 mr-3 flex-shrink-0" style={{ color: '#00d4ff' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-white"><strong>50-70% weniger False Positives</strong> als bei aktiven Scannern</span>
                      </li>
                      <li className="flex items-center">
                        <svg className="w-5 h-5 mr-3 flex-shrink-0" style={{ color: '#00d4ff' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-white"><strong>80% Zeitersparnis</strong> bei der Priorisierung</span>
                      </li>
                      <li className="flex items-center">
                        <svg className="w-5 h-5 mr-3 flex-shrink-0" style={{ color: '#00d4ff' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-white"><strong>0€ Ausfallkosten</strong> – 100% passive Methode</span>
                      </li>
                    </ul>
                    
                    <div className="mt-6 pt-6 border-t" style={{ borderColor: 'rgba(0,212,255,0.1)' }}>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-white mb-2">490€ Investition</div>
                        <div className="text-[#c7d2fe]">vs. durchschnittliche Pentest-Kosten: 5.000€+</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Finale CTA */}
        <section className="py-20 text-center">
          <div className="pt-12 pb-12 max-w-3xl mx-auto px-4 sm:px-8">
            <h2 className="text-3xl font-bold mb-6 text-white">
              Starten Sie mit Klarheit, nicht mit Komplexität
            </h2>
            
            <p className="text-xl text-[#c7d2fe] mb-8">
              Sie müssen nicht alles absichern – nur das, was wirklich sichtbar ist. 
              Lassen Sie uns das gemeinsam herausfinden.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="cta-button rounded-2xl inline-flex items-center justify-center font-semibold w-full sm:w-auto max-w-md mx-auto sm:mx-0 px-6 py-3"
                style={{ backgroundColor: '#00d4ff', color: '#001f3f' }}
              >
                Kostenlose Ersteinschätzung anfordern
              </Link>
              
              <Link
                href="/faq"
                className="inline-flex items-center justify-center font-semibold px-4 py-2 rounded-lg transition-all duration-300"
                style={{ border: '1px solid rgba(0,212,255,0.3)', color: '#00d4ff' }}
              >
                Häufige Fragen
              </Link>
            </div>
          </div>
        </section>
        <style jsx>{`
          @keyframes subtlePulse {
            0% { box-shadow: 0 8px 30px rgba(0,212,255,0.04); }
            50% { box-shadow: 0 14px 40px rgba(0,212,255,0.06); }
            100% { box-shadow: 0 8px 30px rgba(0,212,255,0.04); }
          }
          .cta-pulse { animation: subtlePulse 4s ease-in-out infinite; }
          .cta-button { position: relative; overflow: hidden; transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); }
          .cta-button::after { content: ''; position: absolute; top: 0; left: -120%; width: 120%; height: 100%; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent); transition: left 0.7s ease; pointer-events: none; }
          .cta-button:hover::after { left: 100%; }
          .card { transition: transform 0.3s ease, box-shadow 0.3s ease; }
          .card:hover { transform: translateY(-6px); box-shadow: 0 20px 40px rgba(0,212,255,0.06); }
        `}</style>
      </div>
      <Footer />
    </>
  );
}