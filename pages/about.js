import React from "react";
import { motion } from "framer-motion";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
};

export default function AboutPage() {
  return (
    <>
      <IndexNavbar fixed />
      <main className="cyber-bg pt-20 bg-gray-900 text-white min-h-screen">
        {/* Headline & Untertitel */}
        <section className="relative py-24 bg-gradient-to-br from-blue-900 via-gray-900 to-gray-900 text-center overflow-hidden">
          <div className="absolute inset-0 bg-[url('/img/grid-pattern.svg')] opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-white"
            >
              Cybersicherheit mit Leidenschaft – Ihr Schutz ist meine Berufung
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-xl text-blue-200 max-w-2xl mx-auto mb-8"
            >
              Ich bin Memo Güngör. Seit 2025 schütze ich Privathaushalte und Unternehmen vor digitalen Bedrohungen – mit Lösungen, die wirklich wirken.
            </motion.p>
          </div>
        </section>

        {/* Motivation */}
        <section className="py-12 bg-gray-800/80">
          <div className="container mx-auto px-4 max-w-3xl">
            <motion.div
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-8 rounded-2xl shadow-2xl border border-gray-700"
            >
              <h2 className="text-3xl font-bold mb-4 text-blue-400">Meine Antriebskraft: Lernen & Schützen</h2>
              <p className="text-gray-200 text-lg mb-4">
                Deutschland hat meiner Familie Chancen gegeben – heute gebe ich Sicherheit zurück. Jedes 'Danke' meiner Kunden zeigt mir: Der Weg lohnt sich.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-3">
                  {/* Zertifikate Icon: Academic Cap */}
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-800">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0v6" />
                    </svg>
                  </span>
                  <span className="text-blue-100">Zertifikate im Aufbau → Praxiswissen täglich erweitert</span>
                </div>
                <div className="flex items-center gap-3">
                  {/* User Icon: Shield Check for Schutz */}
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-800">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4l7 4v4c0 5.25-3.5 9.74-7 12-3.5-2.26-7-6.75-7-12V8l7-4z" />
                    </svg>
                  </span>
                  <span className="text-blue-100">Privatpersonen geschützt → Echte Probleme gelöst</span>
                </div>
                <div className="flex items-center gap-3">
                  {/* Office/Business Icon: Briefcase */}
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-800">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <rect x="2" y="7" width="20" height="13" rx="2" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 3v4M8 3v4" />
                    </svg>
                  </span>
                  <span className="text-blue-100">KMU abgesichert → Lokale Wirtschaft gestärkt</span>
                </div>
                <div className="flex items-center gap-3">
                  {/* Behörden/Shield Icon: Government/Building */}
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-800">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21h18M6 21V9m12 12V9M4 9l8-6 8 6" />
                    </svg>
                  </span>
                  <span className="text-blue-100">Behörden beraten → Kritische Infrastrukturen verteidigt</span>
                </div>
              </div>
              <p className="text-blue-200">Jeder Tag ist eine neue Chance zu lernen – für eine digitale Welt, in der Sicherheit für alle erreichbar ist.</p>
            </motion.div>
          </div>
        </section>

        {/* Expertise */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-3xl">
            <motion.div
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-8 rounded-2xl shadow-2xl border border-gray-700 bg-gray-800/60"
            >
              <h2 className="text-3xl font-bold mb-4 text-blue-400">Mein Ansatz: Praxisnahes Wissen, das wirkt</h2>
              <ul className="space-y-2 text-blue-100 text-lg mb-4">
                <li className="flex items-center gap-2"><span className="text-green-400">✔</span>Ausgebildeter Fachinformatiker für Anwendungsentwicklung & Systemintegration</li>
                <li className="flex items-center gap-2"><span className="text-green-400">✔</span>Praxiserfahrung durch Data Center-Aufbau und Cyberangriffs-Bewältigung</li>
                <li className="flex items-center gap-2"><span className="text-green-400">✔</span>Ständige Weiterbildung durch:</li>
              </ul>
              <ul className="space-y-1 text-blue-200 ml-6 mb-4">
                <li className="flex items-center gap-2"><span className="inline-block w-6 h-6"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 20v-6m0 0V4m0 10l3-3m-3 3l-3-3" /></svg></span>Cybersecurity-Podcasts</li>
                <li className="flex items-center gap-2"><span className="inline-block w-6 h-6"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="10" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12l2 2 4-4" /></svg></span>HackTheBox-Challenges</li>
                <li className="flex items-center gap-2"><span className="inline-block w-6 h-6"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="4" y="4" width="16" height="16" rx="2" /></svg></span>Digitale Ersthelfer-Zertifikate</li>
              </ul>
              <p className="text-blue-200">Jedes neue Wissen wende ich sofort bei Kunden an – für echte Lösungen.</p>
            </motion.div>
          </div>
        </section>

        {/* Werdegang als Story */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-3xl">
            <motion.div
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-8 rounded-2xl shadow-2xl border border-gray-700 bg-gray-800/60"
            >
              <h2 className="text-3xl font-bold mb-4 text-blue-400">Wie ich Cybersecurity zu meiner Mission machte</h2>
              <p className="text-gray-200 text-lg mb-4">
                Mit 14 Jahren knackte ich aus Neugier ein WLAN – eine dumme Spielerei, die mich ins Darknet führte. Dort sah ich, wie einfach Identitäten gestohlen werden. Diese Erkenntnis ließ mich nicht los.
              </p>
              <p className="text-gray-200 text-lg mb-4">
                Nach meiner Ausbildung in Softwareentwicklung half ich beim Aufbau eines Data Centers. Als es dann zu einem Cyberangriff kam, entwickelte ich Sicherheitslösungen – und verstand: Das ist meine Berufung.
              </p>
              <p className="text-blue-200 mb-4">
                2025 kündigte ich, um MG Solutions zu gründen. Seitdem lerne ich täglich dazu – weil echte Sicherheit nie stehen bleibt.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Vision */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-3xl">
            <motion.div
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-8 rounded-2xl shadow-2xl border border-gray-700 bg-gray-800/60"
            >
              <h2 className="text-3xl font-bold mb-4 text-blue-400">Meine Vision: Sicherheit als Gemeinschaftsaufgabe</h2>
              <p className="text-gray-200 text-lg mb-4">Cybersicherheit ist wie ein Muskel – man muss ihn trainieren.</p>
              <ul className="space-y-2 text-blue-100 text-lg mb-4">
                <li className="flex items-center gap-2">
                  <span className="inline-block w-6 h-6">
                    {/* Krankenhaus/Shield Heart Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 21C12 21 4 13.5 4 8.5C4 5.42 6.42 3 9.5 3C11.24 3 12.91 3.81 14 5.08C15.09 3.81 16.76 3 18.5 3C21.58 3 24 5.42 24 8.5C24 13.5 16 21 16 21H12Z" />
                    </svg>
                  </span>
                  Krankenhäuser & kritische Infrastrukturen schützen
                </li>
                <li className="flex items-center gap-2">
                  <span className="inline-block w-6 h-6">
                    {/* Search/Shield Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <circle cx="11" cy="11" r="8" />
                      <line x1="21" y1="21" x2="16.65" y2="16.65" strokeWidth={2} stroke="currentColor" strokeLinecap="round" />
                    </svg>
                  </span>
                  Cyberangriffe aufklären & vorbeugen
                </li>
                <li className="flex items-center gap-2">
                  <span className="inline-block w-6 h-6">
                    {/* People/Community Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87M6.13 11a4 4 0 017.74 0" />
                    </svg>
                  </span>
                  Deutschland gemeinsam sicherer machen
                </li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Trust-Elemente & Kundenstimme */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-3xl">
            <motion.div
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-8 rounded-2xl shadow-2xl border border-gray-700 bg-gray-800/60"
            >
              <h2 className="text-3xl font-bold mb-4 text-blue-400">Warum Kunden mich schätzen</h2>
              <ul className="space-y-2 text-blue-100 text-lg mb-6">
                <li className="flex items-center gap-2">
                  <span className="inline-block w-6 h-6">
                    {/* Lightbulb/Idea Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-3-3v6m0-6a6 6 0 100 12 6 6 0 000-12z" />
                    </svg>
                  </span>
                  Ehrlich gesagt: Ich weiß nicht alles – aber ich finde jede Lösung
                </li>
                <li className="flex items-center gap-2">
                  <span className="inline-block w-6 h-6">
                    {/* Chat/Message Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.77 9.77 0 01-4-.8l-4 1 1-4A8.96 8.96 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </span>
                  Kein Technik-Kauderwelsch, nur klare Worte
                </li>
                <li className="flex items-center gap-2">
                  <span className="inline-block w-6 h-6">
                    {/* Lock/Shield Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <rect x="3" y="11" width="18" height="10" rx="2" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11V7a5 5 0 0110 0v4" />
                    </svg>
                  </span>
                  DSGVO-konform – Ihre Daten sind sicher
                </li>
              </ul>
              <div className="bg-blue-900/60 rounded-xl p-6 text-blue-100 text-lg italic shadow flex flex-col md:flex-row items-center gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21H5a2 2 0 01-2-2V7a2 2 0 012-2h2l2-2h6l2 2h2a2 2 0 012 2v12a2 2 0 01-2 2z" /></svg>
                <span>„Memo gibt nicht vor, alles zu wissen – aber er findet immer eine Lösung!“<br /><span className="not-italic font-semibold">- Thomas K., Freiberufler</span></span>
              </div>
            </motion.div>
          </div>
        </section>
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