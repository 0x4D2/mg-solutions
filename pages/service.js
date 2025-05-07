import React from "react";
import Link from "next/link";

// components
import Navbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Service() {
  return (
    <>
      <Navbar transparent />
      <main>
        {/* Hero Section */}
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-white font-semibold text-5xl">
                    Unsere Serviceverträge für Cybersicherheit
                  </h1>
                  <p className="mt-4 text-lg text-blueGray-200">
                    Ob grundlegender Schutz oder umfassende Sicherheitslösungen – wir bieten Ihnen maßgeschneiderte Serviceverträge, die auf die Bedürfnisse Ihres Unternehmens zugeschnitten sind.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>

        {/* Drei Punkte zu den Serviceleveln */}
        <section className="pb-20 bg-blueGray-200 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              {/* Punkt 1 */}
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg hover:scale-105 transition-transform duration-300">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                      <i className="fas fa-shield-alt"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Basis Schutzvertrag</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      - E-Mail / Chat Support<br />
                      - Sicherheitsberatung für einfache IT-Umgebungen<br />
                      - Bedrohungserkennung<br />
                      - Zugriff auf Basis-Ressourcen (z. B. Leitfäden, Checklisten)
                    </p>
                    <div className="text-center mt-6">
                      <button
                        className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                        type="button"
                      >
                        Mehr erfahren
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Punkt 2 */}
              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg hover:scale-105 transition-transform duration-300">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">
                      <i className="fas fa-tools"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Erweiterter Schutzvertrag</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      - Alle Basis-Maßnahmen wie im Basisvertrag<br />
                      - Fernwartung<br />
                      - System Checks (einmalig oder regelmäßig)<br />
                      - Regelmäßige Überwachung der Backups<br />
                      - Sicherheitsbewusstsein-Schulungen für Mitarbeiter<br />
                      - Erweiterte Sicherheitsberatung für mittelkomplexe Umgebungen
                    </p>
                    <div className="text-center mt-6">
                      <button
                        className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                        type="button"
                      >
                        Mehr erfahren
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Punkt 3 */}
              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg hover:scale-105 transition-transform duration-300">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                      <i className="fas fa-user-shield"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Premium Schutzvertrag</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      - Alle Maßnahmen aus den Basis- und erweiterten Verträgen<br />
                      - Erweiterte Fernwartung & schnellere Reaktionszeiten<br />
                      - Krisenmanagement<br />
                      - Monatliche Sicherheits-Checks und regelmäßige Anpassungen<br />
                      - Individuelle Sicherheitsberatung und maßgeschneiderte Lösungen
                    </p>
                    <div className="text-center mt-6">
                      <button
                        className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                        type="button"
                      >
                        Mehr erfahren
                      </button>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Additional Section Above Contact Form */}
        <section className="pb-20 bg-blueGray-800">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold text-white">
                  Unsere Servicelevel im Überblick
                </h2>
                <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-400">
                  Wählen Sie das passende Servicelevel für Ihre Bedürfnisse. Unsere Pakete bieten Schutz, Support und maßgeschneiderte Lösungen.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap mt-12 justify-center">
              {/* Basis Schutzvertrag */}
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-shield-alt text-xl"></i>
                </div>
                <h6 className="text-xl mt-5 font-semibold text-white">
                  Basis Schutzvertrag
                </h6>
                <p className="mt-2 mb-4 text-blueGray-400">
                  Grundlegender Schutz für kleine Unternehmen mit Fokus auf Bedrohungserkennung und Basis-Support.
                </p>
              </div>

              {/* Erweiterter Schutzvertrag */}
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-tools text-xl"></i>
                </div>
                <h6 className="text-xl mt-5 font-semibold text-white">
                  Erweiterter Schutzvertrag
                </h6>
                <p className="mt-2 mb-4 text-blueGray-400">
                  Für Unternehmen, die regelmäßige Systemchecks, erweiterten Support und Schulungen benötigen.
                </p>
              </div>

              {/* Premium Schutzvertrag */}
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-user-shield text-xl"></i>
                </div>
                <h6 className="text-xl mt-5 font-semibold text-white">
                  Premium Schutzvertrag
                </h6>
                <p className="mt-2 mb-4 text-blueGray-400">
                  Umfassender Schutz mit Krisenmanagement, monatlichen Sicherheits-Checks und individuellen Lösungen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="relative block py-24 lg:pt-0 bg-blueGray-800">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200">
                  <div className="flex-auto p-5 lg:p-10">
                    <h4 className="text-2xl font-semibold">
                      Haben Sie Fragen oder Interesse an einem individuellen Angebot?
                    </h4>
                    <p className="leading-relaxed mt-1 mb-4 text-blueGray-500">
                      Füllen Sie dieses Formular aus, und wir melden uns innerhalb von 24 Stunden bei Ihnen.
                    </p>
                    <div className="relative w-full mb-3 mt-8">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="full-name"
                      >
                        Vollständiger Name
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Vollständiger Name"
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="email"
                      >
                        E-Mail
                      </label>
                      <input
                        type="email"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="E-Mail"
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="message"
                      >
                        Nachricht
                      </label>
                      <textarea
                        rows="4"
                        cols="80"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Nachricht eingeben..."
                      />
                    </div>
                    <div className="text-center mt-6">
                      <button
                        className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                      >
                        Nachricht senden
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}