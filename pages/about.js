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
        <section className="relative py-24 text-center overflow-hidden">
          <div className="absolute inset-0 bg-[url('/img/grid-pattern.svg')] opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10 max-w-7xl text-white">
            <motion.h1
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-5xl font-bold mb-6 text-white"
            >
              Über MG Solutions
            </motion.h1>

            <div className="max-w-4xl mx-auto p-8 rounded-2xl" style={{ backgroundColor: 'rgba(30,41,59,0.8)', border: '1px solid rgba(0,212,255,0.06)' }}>
              <div className="text-left text-lg text-white space-y-6">
              <div>
                <h2 className="text-2xl font-semibold text-white mb-2">Sicherheit braucht Klarheit, nicht mehr Komplexität</h2>
                <p>
                  Die Security-Branche lebt von Unklarheit: teure Tools, unverständliche Reports, endlose To-Do-Listen. KMU bleiben mit der Frage zurück: "Was muss ich JETZT tun?"
                </p>
                <p className="mt-2">
                  MG Solutions entwirrt das Chaos. Statt neuer Technologie zeigen wir, was bereits sichtbar ist – mit klaren, priorisierten Exposure-Reports, die IT und Geschäftsführung verstehen.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Praxis statt Theorie</h3>
                <p>
                  Unser Team kombiniert Jahre praktischer Security-Erfahrung mit dem Verständnis für KMU-Realitäten. Wir wissen, was im Betrieb funktioniert – und was nur auf dem Papier steht.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Manuell geprüft, nicht automatisiert</h3>
                <p>
                  Jeder Exposure-Report wird von unseren Experten validiert. Keine Blackbox-Algorithmen, keine ungeprüften Befunde – nur klare, umsetzbare Erkenntnisse.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Für wen wir arbeiten</h3>
                <p>
                  Mit IT-Verantwortlichen, die ihre Maßnahmen priorisieren müssen.<br />
                  Mit Geschäftsführern, die Sicherheits-Investitionen rechtfertigen wollen.<br />
                  Mit allen, die Klarheit über ihre externe Sicherheit brauchen.
                </p>
              </div>

              <div className="pt-4">
                <hr className="border-gray-700 mb-4" />
                <p className="text-lg font-medium">
                  <strong>Sie wollen wissen, wie Ihre externe Sichtbarkeit wirklich aussieht?</strong>
                </p>
                <a href="/contact" className="cta-button inline-flex items-center justify-center mt-4 px-6 py-3 font-semibold rounded-2xl" style={{ backgroundColor: '#00d4ff', color: '#001f3f' }}>
                  Kostenlose Ersteinschätzung anfordern
                </a>
              </div>
            </div>
            </div>
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