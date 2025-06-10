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
              Vom Sicherheitsrisiko zum Sicherheitsexperten
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-xl text-blue-200 max-w-2xl mx-auto mb-8"
            >
              Mein professioneller Werdegang in der Cybersicherheit – heute setze ich mein Wissen für Ihren Schutz ein
            </motion.p>
          </div>
        </section>

        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4 max-w-4xl space-y-16">
            {/* Abschnitt: Erfahrung */}
            <motion.div
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-gray-800/60 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-gray-700"
            >
              <h2 className="text-3xl font-bold mb-4 text-blue-400">Umfassende Expertise</h2>
              <p className="text-gray-200 text-lg">
                Mit fundierter Ausbildung und praktischer Erfahrung in der IT-Sicherheit für internationale Unternehmen verfüge ich über ein tiefgreifendes Verständnis beider Seiten der Cybersicherheit: Angriffsvektoren und Schutzmechanismen. Dieses Wissen setze ich gezielt zum Schutz von Unternehmen und Privatpersonen ein.
              </p>
              <p className="text-blue-200 mt-4">
                Mein einzigartiger Hintergrund ermöglicht es mir, Sicherheitslücken aus der Perspektive potenzieller Angreifer zu identifizieren, um daraus robuste Schutzstrategien zu entwickeln.
              </p>
            </motion.div>

            {/* Abschnitt: Mission */}
            <motion.div
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-gray-800/60 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-gray-700"
            >
              <h2 className="text-3xl font-bold mb-4 text-blue-400">Professionelle Ethik</h2>
              <p className="text-gray-200 text-lg">
                Mein Engagement gilt dem Aufbau einer sicheren digitalen Infrastruktur. Durch präventive Sicherheitsmaßnahmen und kontinuierliche Weiterbildung schaffe ich nachhaltigen Schutz für Ihre digitalen Assets.
              </p>
            </motion.div>

            {/* Abschnitt: Werdegang */}
            <motion.div
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-gray-800/60 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-gray-700"
            >
              <h2 className="text-3xl font-bold mb-4 text-blue-400">Beruflicher Werdegang</h2>
              <p className="text-gray-200 text-lg mb-4">
                Meine berufliche Laufbahn begann mit einer fundierten Ausbildung im Bereich Informationstechnologie, gefolgt von Spezialisierungen in Anwendungsentwicklung und Systemintegration. Die Faszination für IT-Sicherheit entwickelte sich früh durch intensive Auseinandersetzung mit Sicherheitsmechanismen und penetrationsorientierten Ansätzen.
              </p>
              <p className="text-gray-200 text-lg mb-4">
                Als zertifizierter IT-Spezialist verantwortete ich die unternehmensweite Implementierung von Sicherheitslösungen und fungierte als primärer Ansprechpartner für Sicherheitsfragen. Die Verbindung von Systemintegration und Softwareentwicklung bildet die ideale Grundlage für meine ganzheitliche Herangehensweise an Cybersicherheit.
              </p>
              <p className="text-blue-200">
                Durch kontinuierliche Weiterbildung und Zertifizierungen baue ich meine Expertise systematisch aus. Mein Übergang in die selbständige Tätigkeit ermöglicht es mir, dieses Wissen flexibel und maßgeschneidert für verschiedene Sicherheitsanforderungen einzusetzen.
              </p>
            </motion.div>

            {/* Abschnitt: Vision */}
            <motion.div
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-gray-800/60 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-gray-700"
            >
              <h2 className="text-3xl font-bold mb-4 text-blue-400">Professionelle Vision</h2>
              <p className="text-gray-200 text-lg mb-4">
                Mein strategisches Ziel ist der Aufbau einer skalierbaren Sicherheitskompetenz. Beginnend mit individuellen Sicherheitsberatungen für Privatkunden und kleine Unternehmen strebe ich die Erweiterung meiner Dienstleistungen auf komplexe Unternehmensinfrastrukturen an. Langfristig zielt meine Arbeit auf den Schutz kritischer Infrastrukturen und öffentlicher Einrichtungen ab.
              </p>
              <p className="text-blue-200">
                Mein Antrieb basiert auf dem Prinzip der gesellschaftlichen Verantwortung. Die Möglichkeit, durch technische Expertise einen Beitrag zur allgemeinen Sicherheit zu leisten, stellt für mich die höchste Form professioneller Erfüllung dar.
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