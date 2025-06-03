import React from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function BusinessPage() {
  return (
    <>
      <IndexNavbar fixed />
      <main className="pt-20 bg-gray-50">
        {/* Hero Section - Entscheiderfokus */}
        <section className="relative py-32 bg-gradient-to-r from-blue-800 to-blue-600 text-center overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Sicherheit, die <span className="text-blue-200">Business stabilisiert</span>
            </h1>
            <p className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto">
              Messbar · Nachvollziehbar · Wirtschaftlich
            </p>
            <div className="mt-10">
              <button className="bg-white text-blue-800 hover:bg-blue-50 font-bold px-8 py-4 rounded-lg mr-4 shadow-lg transition-all duration-300">
                Jetzt Risikoanalyse starten →
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-800 font-bold px-8 py-4 rounded-lg shadow-lg transition-all duration-300">
                Direkt zum Experten
              </button>
            </div>
          </div>
        </section>

        {/* Value Proposition mit Business-Kontext */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="text-5xl text-blue-600 mb-4">🛡️</div>
                <h3 className="text-2xl font-bold mb-4">87% weniger Sicherheitsvorfälle</h3>
                <p className="text-gray-600">
                  Weniger IT-Ausfälle = <span className="font-semibold">höhere Produktionsverfügbarkeit</span>
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl text-blue-600 mb-4">📉</div>
                <h3 className="text-2xl font-bold mb-4">60% geringere Gesamtkosten</h3>
                <p className="text-gray-600">
                  Geringere Ausgaben = <span className="font-semibold">mehr Budget für Innovation</span>
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl text-blue-600 mb-4">⚖️</div>
                <h3 className="text-2xl font-bold mb-4">100% Compliance</h3>
                <p className="text-gray-600">
                  Keine Strafen = <span className="font-semibold">ruhiger Schlaf für Geschäftsführung</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pakete mit klarem Nutzenversprechen */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">Sicherheitsstufen mit klarem ROI</h2>
            <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
              Drei Wege zu weniger Risiko – wissenschaftlich belegt
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Essential Protect */}
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Essential Protect</h3>
                  <p className="text-blue-600 font-medium mb-6">Absicherung für KMU mit begrenztem IT-Budget</p>
                  <div className="text-4xl font-bold mb-6">ab 299€<span className="text-lg font-normal">/Monat</span></div>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Grundschutz gegen 95% der Cyberangriffe</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Vermeidet bis zu 3 Ausfalltage/Jahr</span>
                  </li>
                </ul>
                <button className="w-full bg-gray-800 hover:bg-gray-700 text-white py-3 rounded-lg font-medium transition duration-300">
                  Für Starter
                </button>
              </div>

              {/* Business Secure */}
              <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-blue-500 transform scale-105 z-10">
                <div className="text-center">
                  <div className="bg-blue-500 text-white text-sm font-bold px-4 py-1 rounded-full inline-block mb-4">
                    OPTIMALE WIRTSCHAFTLICHKEIT
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Business Secure</h3>
                  <p className="text-blue-600 font-medium mb-6">Die wirtschaftliche Wahl für resilienten Mittelstand</p>
                  <div className="text-4xl font-bold mb-6">ab 799€<span className="text-lg font-normal">/Monat</span></div>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>+24/7 Überwachung</strong> (vermeidet 7+ Ausfalltage)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Senkt Versicherungskosten um ~15%</span>
                  </li>
                </ul>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition duration-300">
                  Für Entscheider
                </button>
              </div>

              {/* Enterprise Shield */}
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Enterprise Shield</h3>
                  <p className="text-blue-600 font-medium mb-6">Maximale Sicherheit für kritische Abläufe</p>
                  <div className="text-4xl font-bold mb-6">ab 1.999€<span className="text-lg font-normal">/Monat</span></div>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>+Notfallmanagement</strong> (vermeidet 6-stellige Schäden)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Vermeidet Compliance-Strafen (bis zu 250.000€)</span>
                  </li>
                </ul>
                <button className="w-full bg-gray-800 hover:bg-gray-700 text-white py-3 rounded-lg font-medium transition duration-300">
                  Für Verantwortliche
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ROI-Sektion mit Dringlichkeit */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="bg-blue-50 p-12 rounded-xl">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-6">
                    <span className="text-blue-600">Wie viel Geld</span> verlieren Sie ohne Security?
                  </h2>
                  <p className="text-lg text-gray-600 mb-8">
                    Unser Rechner zeigt konkrete Risiken für Ihr Unternehmen:
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="bg-blue-100 p-3 rounded-full mr-4">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                      </div>
                      <span>Beispiel bei 100 Mitarbeitern: <span className="font-bold">3 Ausfalltage = 42.000€ Verlust</span></span>
                    </div>
                    <div className="flex items-center">
                      <div className="bg-blue-100 p-3 rounded-full mr-4">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <span>Durchschnittliche Versicherungserhöhung nach Vorfall: <span className="font-bold">+22%</span></span>
                    </div>
                  </div>
                  <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
                    Jetzt individuelle Risiken berechnen
                  </button>
                </div>
                <div className="bg-white p-8 rounded-lg shadow">
                  <h3 className="text-xl font-bold mb-6 text-center">Was Unternehmen wirklich verlieren</h3>
                  <div className="space-y-6">
                    {[
                      {label: "Produktivitätsausfall", value: "85%", color: "bg-red-500", width: "85%"},
                      {label: "Reputationsschaden", value: "72%", color: "bg-orange-500", width: "72%"},
                      {label: "Kundenvertrauen", value: "68%", color: "bg-yellow-500", width: "68%"},
                      {label: "Versicherungskosten", value: "+22%", color: "bg-blue-500", width: "22%"}
                    ].map((item, index) => (
                      <div key={index}>
                        <div className="flex justify-between mb-2">
                          <span>{item.label}</span>
                          <span className="font-bold">{item.value}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div className={`${item.color} h-2.5 rounded-full`} style={{width: item.width}}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Compliance mit Risikofokus */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-4">
              Was <span className="text-blue-600">NIS-2 kostet</span>, wenn Sie es nicht erfüllen
            </h2>
            <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
              Und wie wir Sie vor den finanziellen Folgen schützen
            </p>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="bg-white p-6 rounded-lg shadow-md mb-6 border-l-4 border-red-500">
                  <h3 className="text-xl font-bold text-red-600 mb-3">Risiko ohne Maßnahmen</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-red-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span>Bußgelder bis zu <strong>10 Mio. € oder 2% des Jahresumsatzes</strong></span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-red-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span>Persönliche Haftung der Geschäftsführung</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
                  <h3 className="text-xl font-bold text-green-600 mb-3">Unsere Absicherung</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span><strong>Haftungsübernahme</strong> für Compliance-Fragen</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span><strong>Behördliche Kommunikation</strong> inklusive</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">So machen wir Sie NIS-2 konform:</h3>
                <div className="space-y-6">
                  {[
                    {title: "1. Gap-Analyse", text: "Identifizierung kritischer Lücken in 48h"},
                    {title: "2. Maßnahmenplan", text: "Priorisierte To-Do-Liste mit Zeitplan"},
                    {title: "3. Umsetzung", text: "Technische + organisatorische Anpassungen"},
                    {title: "4. Dokumentation", text: "Vorlagen für behördliche Nachweise"}
                  ].map((step, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-blue-100 text-blue-800 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-0.5">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800">{step.title}</h4>
                        <p className="text-gray-600">{step.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg inline-flex items-center transition duration-300">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  NIS-2 Compliance-Checkliste
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA mit klarem Erkenntnisversprechen */}
        <section className="py-20 bg-gradient-to-br from-blue-800 to-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">
              In 15 Minuten wissen Sie, wo Sie <span className="text-blue-200">Sicherheitsrisiken verlieren</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-10">
              Und wie Sie mit klaren Maßnahmen gegensteuern können
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <button className="bg-white text-blue-800 hover:bg-blue-50 font-bold px-8 py-4 rounded-lg shadow-lg transition-all duration-300 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                Selbst-Check starten (kostenlos)
              </button>
              <button className="bg-transparent border-2 border-white hover:bg-blue-700 font-bold px-8 py-4 rounded-lg shadow-lg transition-all duration-300 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Direktberatung buchen
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}