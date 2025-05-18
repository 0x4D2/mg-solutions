import React from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function BusinessPage() {
  return (
    <>
      <IndexNavbar fixed />
      <main className="pt-20 bg-gray-50">
        {/* Hero Section */}
        <section className="relative py-32 bg-gradient-to-r from-blue-800 to-blue-600 text-center overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="text-blue-200">MG Solutions</span> - IT-Sicherheit für Unternehmen
            </h1>
            <p className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto">
              Sicherheit beginnt mit Vertrauen. Wir schützen Ihr Unternehmen vor digitalen Bedrohungen – individuell, zuverlässig und DSGVO-konform.
            </p>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Netzwerkschutz */}
              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Netzwerkschutz</h3>
                <p className="text-gray-600">
                  Verteidigen Sie Ihr Unternehmen mit intelligenter Infrastruktur: Firewalls, VPN, Zero Trust, sichere Router – alles auf dem neuesten Stand der Technik.
                </p>
              </div>
              
              {/* E-Mail-Sicherheit */}
              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="text-4xl mb-4">📧</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">E-Mail-Sicherheit</h3>
                <p className="text-gray-600">
                  Blockieren Sie Phishing, Ransomware und Datenlecks: Unsere KI-gestützten Filterlösungen sorgen für eine saubere Kommunikation.
                </p>
              </div>
              
              {/* Awareness-Schulungen */}
              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="text-4xl mb-4">🎓</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Awareness-Schulungen</h3>
                <p className="text-gray-600">
                  Mit interaktiven Trainings sensibilisieren wir Ihr Team für reale Cyberbedrohungen - Ihre Mitarbeiter sind die erste Verteidigungslinie.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
              Warum <span className="text-blue-600">MG Solutions</span>?
            </h2>
            <ul className="grid md:grid-cols-2 gap-6 text-gray-700">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Individuelle Sicherheitskonzepte – keine Standardlösungen</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Reaktionsschneller Support & persönliche Ansprechpartner</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>DSGVO- und branchenspezifische Compliance</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Mitglied der Allianz für Cybersicherheit (BSI)</span>
              </li>
            </ul>
          </div>
        </section>

        {/* NIS-2 Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  <span className="text-blue-600">NIS-2</span>: Sind Sie vorbereitet?
                </h2>
                <p className="text-gray-600 mb-8">
                  Ab Oktober 2024 verpflichtet die EU-Richtlinie NIS-2 viele Unternehmen zu strengeren IT-Sicherheitsmaßnahmen. Wer nicht handelt, riskiert Bußgelder von bis zu 10 Millionen Euro oder 2 % des Jahresumsatzes.
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Pflicht zur Vorfallmeldung und Risikoanalyse</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Einführung technischer & organisatorischer Schutzmaßnahmen</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Schulungspflichten für Mitarbeitende</span>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2 bg-blue-50 p-8 rounded-lg border-l-4 border-blue-500">
                <p className="text-gray-700 mb-4">
                  MG Solutions unterstützt Sie umfassend bei der Umsetzung – von der Gap-Analyse bis zur NIS-2-konformen Dokumentation.
                </p>
                <p className="text-blue-600 font-medium">
                  Sie erhalten eine kostenfreie Ersteinschätzung Ihrer aktuellen Sicherheitslage – ohne Verpflichtung.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-blue-800 to-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Bereit, Ihr Unternehmen zu schützen?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-10">
              Kontaktieren Sie uns noch heute und erfahren Sie, wie wir Ihr Unternehmen sicherer machen können.
            </p>
            <button className="bg-white text-blue-800 hover:bg-blue-50 font-bold px-8 py-4 rounded-lg shadow-lg transition-all duration-300">
              Jetzt Beratungstermin vereinbaren
            </button>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}