import React from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function PrivatePage() {
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
                Sicherheit für Ihr digitales Leben
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                MG Solutions schützt Ihre persönlichen Daten und Geräte vor digitalen Bedrohungen. 
                Mit unseren maßgeschneiderten Lösungen können Sie sich auf das Wesentliche konzentrieren – 
                wir kümmern uns um Ihre Sicherheit.
              </p>
            </div>
          </div>

          {/* Services Section */}
          <div className="flex flex-wrap items-center justify-center py-12">
            {/* Service 1 */}
            <div className="w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                    <i className="fas fa-shield-alt"></i>
                  </div>
                  <h6 className="text-xl font-semibold">PC- und Smartphone-Sicherheit</h6>
                  <p className="mt-2 mb-4 text-blueGray-500">
                    Schutz Ihrer persönlichen Geräte vor Viren, Malware und anderen digitalen Bedrohungen.
                  </p>
                </div>
              </div>
            </div>

            {/* Service 2 */}
            <div className="w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">
                    <i className="fas fa-network-wired"></i>
                  </div>
                  <h6 className="text-xl font-semibold">Netzwerkschutz</h6>
                  <p className="mt-2 mb-4 text-blueGray-500">
                    Sichern Sie Ihr Heimnetzwerk mit fortschrittlichen Sicherheitsmaßnahmen wie Firewall und VPN.
                  </p>
                </div>
              </div>
            </div>

            {/* Service 3 */}
            <div className="w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                    <i className="fas fa-lock"></i>
                  </div>
                  <h6 className="text-xl font-semibold">Datensicherung & Verschlüsselung</h6>
                  <p className="mt-2 mb-4 text-blueGray-500">
                    Schützen Sie Ihre Daten durch regelmäßige Backups und sichere Verschlüsselung.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Training Section */}
          <div className="flex flex-wrap items-center justify-center py-12">
            <div className="w-full lg:w-8/12 text-center">
              <h2 className="text-3xl font-semibold text-blueGray-700">
                Schulungen und Sensibilisierung
              </h2>
              <p className="mt-4 text-lg text-blueGray-500">
                Lernen Sie, wie Sie sich vor Phishing-Angriffen, unsicheren Passwörtern und anderen digitalen Gefahren schützen können. 
                Unsere praxisorientierten Schulungen machen Sie fit für die digitale Welt.
              </p>
            </div>
          </div>

          {/* Call-to-Action Section */}
          <div className="text-center py-12">
            <h2 className="text-3xl font-semibold text-blueGray-700">
              Bereit, Ihre digitale Sicherheit zu verbessern?
            </h2>
            <p className="mt-4 text-lg text-blueGray-500">
              Kontaktieren Sie uns noch heute und erfahren Sie, wie wir Ihnen helfen können.
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