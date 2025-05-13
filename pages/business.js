import React from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function BusinessPage() {
  return (
    <>
      {/* Navbar einfügen */}
      <IndexNavbar fixed />
      <div className="pt-16 bg-blueGray-100">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="flex flex-wrap items-center justify-center text-center py-12">
            <div className="w-full lg:w-8/12">
              <h1 className="text-4xl font-semibold text-blueGray-700">
                🛡️ IT-Sicherheit für Ihr Unternehmen – mit MG Solutions
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                Sicherheit beginnt mit Vertrauen. MG Solutions schützt Ihr Unternehmen vor digitalen Bedrohungen – individuell, zuverlässig und DSGVO-konform. 
                Von moderner Netzwerksicherheit über E-Mail-Schutz bis hin zu praxisnahen Mitarbeiterschulungen: 
                Wir bieten ganzheitliche Lösungen für eine sichere digitale Zukunft.
              </p>
            </div>
          </div>

          {/* Leistungen Section */}
          <div className="flex flex-wrap items-center justify-center py-12">
            {/* Netzwerkschutz */}
            <div className="w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                    <i className="fas fa-network-wired"></i>
                  </div>
                  <h6 className="text-xl font-semibold">🔐 Netzwerkschutz</h6>
                  <p className="mt-2 mb-4 text-blueGray-500">
                    Verteidigen Sie Ihr Unternehmen mit intelligenter Infrastruktur: Firewalls, VPN, Zero Trust, sichere Router – alles auf dem neuesten Stand der Technik.
                  </p>
                </div>
              </div>
            </div>

            {/* E-Mail-Sicherheit */}
            <div className="w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <h6 className="text-xl font-semibold">📧 E-Mail-Sicherheit</h6>
                  <p className="mt-2 mb-4 text-blueGray-500">
                    Blockieren Sie Phishing, Ransomware und Datenlecks, bevor sie entstehen: Unsere KI-gestützten Filterlösungen sorgen für eine saubere Kommunikation.
                  </p>
                </div>
              </div>
            </div>

            {/* Awareness-Schulungen */}
            <div className="w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                    <i className="fas fa-user-shield"></i>
                  </div>
                  <h6 className="text-xl font-semibold">🎓 Awareness-Schulungen</h6>
                  <p className="mt-2 mb-4 text-blueGray-500">
                    Ihre Mitarbeiter sind Ihre erste Verteidigungslinie: Mit interaktiven Trainings sensibilisieren wir Ihr Team für reale Cyberbedrohungen.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Warum MG Solutions Section */}
          <div className="flex flex-wrap items-center justify-center py-12">
            <div className="w-full lg:w-8/12 text-center">
              <h2 className="text-3xl font-semibold text-blueGray-700">
                💡 Warum MG Solutions?
              </h2>
              <ul className="mt-4 text-lg leading-relaxed text-blueGray-500 list-disc list-inside">
                <li>✔ Individuelle Sicherheitskonzepte – keine Standardlösungen</li>
                <li>✔ Reaktionsschneller Support & persönliche Ansprechpartner</li>
                <li>✔ DSGVO- und branchenspezifische Compliance</li>
                <li>✔ Mitglied der Allianz für Cybersicherheit (BSI)</li>
              </ul>
            </div>
          </div>

          {/* NIS-2 Section */}
          <div className="flex flex-wrap items-center justify-center py-12 bg-white">
            <div className="w-full lg:w-8/12 text-center">
              <h2 className="text-3xl font-semibold text-blueGray-700">🏛️ NIS-2: Sind Sie vorbereitet?</h2>
              <p className="mt-4 text-lg text-blueGray-500">
                Ab Oktober 2024 verpflichtet die EU-Richtlinie <strong>NIS-2</strong> viele Unternehmen zu strengeren IT-Sicherheitsmaßnahmen.
                Wer nicht handelt, riskiert Bußgelder von bis zu <strong>10 Millionen Euro</strong> oder 2 % des Jahresumsatzes.
              </p>
              <ul className="mt-6 text-blueGray-500 text-left list-disc list-inside mx-auto max-w-2xl">
                <li>✅ Pflicht zur Vorfallmeldung und Risikoanalyse</li>
                <li>✅ Einführung technischer & organisatorischer Schutzmaßnahmen</li>
                <li>✅ Schulungspflichten für Mitarbeitende</li>
              </ul>
              <p className="mt-6 text-lg text-blueGray-500">
                <strong>MG Solutions</strong> unterstützt Sie umfassend bei der Umsetzung – von der Gap-Analyse bis zur NIS-2-konformen Dokumentation.
              </p>
              <button
                className="mt-6 bg-emerald-500 text-white font-bold px-6 py-3 rounded shadow hover:shadow-lg transition-all duration-150"
                type="button"
              >
                Jetzt NIS-2-Check anfragen
              </button>
            </div>
          </div>

          {/* Beratung Section */}
          <div className="flex flex-wrap items-center justify-center py-12">
            <div className="w-full lg:w-8/12 text-center">
              <h2 className="text-3xl font-semibold text-blueGray-700">
                📈 Beratung statt Verkaufsdruck
              </h2>
              <p className="mt-4 text-lg text-blueGray-500">
                Sie erhalten eine kostenfreie Ersteinschätzung Ihrer aktuellen Sicherheitslage – ohne Verpflichtung, aber mit echtem Mehrwert.
              </p>
            </div>
          </div>

          {/* Call-to-Action Section */}
          <div className="text-center py-12">
            <h2 className="text-3xl font-semibold text-blueGray-700">
              Bereit, Ihr Unternehmen zu schützen?
            </h2>
            <p className="mt-4 text-lg text-blueGray-500">
              Kontaktieren Sie uns noch heute und erfahren Sie, wie wir Ihr Unternehmen sicherer machen können.
            </p>
            <button
              className="mt-6 bg-blueGray-800 text-white font-bold px-6 py-3 rounded shadow hover:shadow-lg transition-all duration-150"
              type="button"
            >
              Jetzt Kontakt aufnehmen
            </button>
          </div>
        </div>
      </div>
      {/* Footer einfügen */}
      <Footer />
    </>
  );
}