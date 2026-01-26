import React from "react";
import { motion } from "framer-motion";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export default function AboutPage() {
  return (
    <>
      <IndexNavbar fixed />
      <main className="cyber-bg pt-16 bg-gray-900 text-white min-h-screen">
        <section className="relative py-16 text-center overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10 max-w-7xl text-white">
            <motion.h1
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="site-title gradient-text"
            >
              Über MG Solutions
            </motion.h1>

            <div
              className="max-w-4xl mx-auto p-8 rounded-2xl"
              style={{
                backgroundColor: "rgba(30,41,59,0.8)",
                border: "1px solid rgba(0,212,255,0.06)",
              }}
            >
              <div className="text-left text-lg text-gray-300 space-y-6">
                <h2 className="text-2xl font-semibold cyan-text mb-4">
                  Über uns
                </h2>

                <p className="mt-2">
                  Wir sind kein großes Security-Unternehmen mit Hunderten
                  Mitarbeitern. Wir sind ein kleines, fokussiertes Team, das
                  genau eine Sache wirklich gut macht:
                </p>

                <p className="text-gray-300">
                  Die externe Sichtbarkeit Ihrer Systeme objektiv und wiederholt
                  sichtbar zu machen – so, wie ein Angreifer sie sieht, bevor er
                  zuschlägt.
                </p>

                <h3 className="text-xl font-semibold cyan-text mt-4">
                  Unsere Motivation
                </h3>
                <p className="text-gray-300">
                  Viele Unternehmen wissen nicht, ob ihre Sicherheitsmaßnahmen
                  wirklich greifen. Einmalige Scans oder Tools liefern
                  Momentaufnahmen. Wir dokumentieren monatlich die Entwicklung
                  Ihrer öffentlichen Angriffsfläche – messbar, nachvollziehbar,
                  ohne Risiko für Ihre Systeme.
                </p>

                <h3 className="text-xl font-semibold cyan-text mt-4">
                  Was uns ausmacht
                </h3>
                <ul className="list-disc list-inside ml-4 space-y-2 text-gray-200">
                  <li>
                    <strong>Radikale Transparenz:</strong> Wir erklären jede
                    Grenze unserer Analyse offen und ehrlich.
                  </li>
                  <li>
                    <strong>Passiv & risikofrei:</strong> Keine aktiven Scans,
                    keine Simulationen, keine Angriffe.
                  </li>
                  <li>
                    <strong>Fokus statt Alleskönnerei:</strong> Wir ersetzen
                    keinen Pentest, keine EDR, keine SIEM – wir liefern die
                    externe Sicht, die sonst fehlt.
                  </li>
                  <li>
                    <strong>Persönlicher Ansatz:</strong> Jeder Report wird
                    manuell geprüft, priorisiert und in einem kurzen Call
                    besprochen.
                  </li>
                  <li>
                    <strong>Kein Hype, kein Alarmismus:</strong> Wir zeigen
                    Fakten, keine Panikmache.
                  </li>
                </ul>

                <h3 className="text-xl font-semibold cyan-text mt-4">
                  Unsere Haltung
                </h3>
                <p className="text-gray-300">
                  Sicherheit beginnt mit Klarheit. Wir glauben nicht an
                  Blackbox-Tools oder endlose Feature-Listen. Wir glauben daran,
                  dass ein Unternehmen Fortschritte braucht, die es wirklich
                  nachweisen kann – für den Vorstand, für Auditoren, für sich
                  selbst.
                </p>

                <p className="mt-2 text-gray-300">
                  <strong>Deshalb gibt es uns:</strong> Damit Sie nicht nur
                  hoffen, dass es besser wird, sondern es sehen können.
                </p>

                <p className="mt-4 text-gray-300">
                  Wenn Sie Klarheit statt Versprechen wollen –{" "}
                  <a href="/contact" className="text-cyan-200 hover:underline">
                    schreiben Sie uns
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
