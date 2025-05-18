import React from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function PrivatePage() {
  return (
    <>
      <IndexNavbar fixed />
      <main className="pt-20 bg-blue-50">
        {/* Hero Section */}
        <section className="relative py-32 bg-gradient-to-r from-blue-600 to-blue-800 text-center overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Sicherheit für Ihr digitales Leben
            </h2>
            <p className="text-xl text-white max-w-2xl mx-auto">
              Professioneller Schutz ohne technischen Aufwand - damit Sie sich sicher fühlen können
            </p>
          </div>
        </section>

        {/* Why Security */}
        <section className="">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                </div>
                <h2 className="text-3xl font-bold mb-6">
                  Warum digitale Sicherheit <span className="text-blue-600">unverzichtbar</span> ist
                </h2>
                <p className="text-lg text-white mb-8">
                  In einer immer vernetzteren Welt sind unsere persönlichen Daten und Geräte ständig Gefahren ausgesetzt. MG Solutions schützt Sie zuverlässig und sorgt dafür, dass Sie sich sicher fühlen können – ganz ohne technisches Fachwissen.
                </p>
              </div>
       
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">
                Unsere <span className="text-blue-600">Leistungen</span> für Sie
              </h2>
              <p className="text-xl text-white max-w-3xl mx-auto">
                Maßgeschneiderter Schutz für Ihre digitalen Bedürfnisse
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  ),
                  title: "Rundumschutz für Ihre Geräte",
                  desc: "Beratung zu Viren-, Malware- und Zugriffsschutz für PCs, Smartphones und Tablets.",
                  highlight: "Gerätesicherheit"
                },
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                  ),
                  title: "Sicheres Heimnetzwerk",
                  desc: "Unterstützung bei Firewall, VPN, Passwortänderungen und sicherer Nutzung Ihrer Smart Devices.",
                  highlight: "Netzwerksicherheit"
                },
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  ),
                  title: "Datensicherung & Verschlüsselung",
                  desc: "Beratung zu Backups und sicherer Speicherung – unterstützt durch unser Know-how.",
                  highlight: "Datenmanagement"
                },
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  ),
                  title: "Persönliche Beratung & Support",
                  desc: "Unkomplizierte, schnelle Hilfe bei Sicherheitsproblemen – direkt und persönlich.",
                  highlight: "24/7 Support"
                },
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  title: "Update-Erinnerungen & Sicherheitschecks",
                  desc: "Regelmäßige Hinweise auf notwendige Software-Updates und Unterstützung bei der Umsetzung.",
                  highlight: "Proaktiver Schutz"
                },
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  ),
                  title: "Frühwarnsystem für Datenlecks",
                  desc: "Monitoring Ihrer Daten im Darknet – bei Vorfällen werden Sie direkt informiert.",
                  highlight: "Darknet-Scan"
                }
              ].map((item, i) => (
                <div key={i} className="group relative bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-blueGray-100 overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-700"></div>
                  <div className="text-blue-600 mb-6 group-hover:text-blue-700 transition-colors duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-blueGray-800 mb-3">{item.title}</h3>
                  <p className="text-blueGray-600 mb-4">{item.desc}</p>
                  {item.highlight && (
                    <span className="inline-block bg-blue-50 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full">
                      {item.highlight}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-center mb-16">
              So einfach <span className="text-blue-600">funktioniert's</span>
            </h2>

            <div className="relative">
              <div className="hidden md:block absolute left-1/2 h-full w-0.5 bg-blue-200 transform -translate-x-1/2"></div>

              <div className="space-y-12 md:space-y-0">
                {[
                  {
                    title: "Kostenlose Analyse",
                    desc: "Wir besprechen Ihre Situation und identifizieren Risiken",

                  },
                  {
                    title: "Maßgeschneiderter Plan",
                    desc: "Sie erhalten ein auf Sie zugeschnittenes Sicherheitskonzept",

                  },
                  {
                    title: "Umsetzung",
                    desc: "Wir implementieren alle Schutzmaßnahmen für Sie",

                  },
                  {
                    title: "Laufender Schutz",
                    desc: "Regelmäßige Updates und Anpassungen an neue Bedrohungen",

                  }
                ].map((item, i) => (
                  <div key={i} className={`relative flex flex-col md:flex-row items-center ${i % 2 === 0 ? 'md:text-right md:flex-row-reverse' : 'md:text-left'}`}>
                    <div className={`md:w-1/2 p-6 ${i % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                      <div className="bg-blue-100 text-white w-14 h-14 rounded-full flex items-center justify-center mb-4 mx-auto md:mx-0">
                        {item.icon}
                      </div>
                   <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                      <p className="text-white">{item.desc}</p>
                    </div>
                    <div className="hidden md:block absolute left-1/2 w-8 h-8 bg-blue-600 rounded-full transform -translate-x-1/2 flex items-center justify-center text-white font-bold shadow-md">
                      {item.step}
                    </div>
                    <div className="md:w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-20 bg-gradient-to-br from-blueGray-800 to-blueGray-700 text-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">
                Transparente <span className="text-emerald-300">Preise</span>
              </h2>
              <p className="py-10 text-xl text-white max-w-3xl mx-auto">
                Keine versteckten Kosten, keine langen Vertragslaufzeiten
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white text-blueGray-800 rounded-xl shadow-lg overflow-hidden relative">
               
                <div className="bg-blueGray-100 p-6">
                  <h3 className="text-xl font-bold">Grundumsorglos Paket</h3>
                  <div className="mt-4">
                    <span className="text-3xl font-bold">€30</span>
                    <span className="text-blueGray-500">/Monat</span>
                  </div>
                </div>

                <div className="p-6">
                  <ul className="space-y-3">
                    {[
                      "Alle Geräte geschützt",
                      "Monatliche Sicherheitschecks",
                      "E-Mail Support",
                      "24/7 Monitoring",
                      "Darknet-Scan inklusive",
                      "Regelmäßige Sicherheitsupdates",
                      "Persönliche Beratung & Support"
                    ].map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <svg
                          className="w-5 h-5 text-emerald-500 mr-2 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                </div>
              </div>
            </div>

            <div className="mt-12 text-center text-blueGray-300">
              <p>
                Sollten Ihre Anforderungen den Umfang des Grundumsorglos Pakets überschreiten,
                erstellen wir Ihnen gerne ein individuelles Angebot. In solchen Fällen kann eine separate Abrechnung erfolgen.
              </p>
              <p>Alle Pakete monatlich kündbar. Individuelle Lösungen auf Anfrage.</p>
            </div>
          </div>
        </section>

        <div className="py-10 text-xl text-white text-center">
          <p>
            Sollten Sie weitere Fragen haben, schauen Sie gern in unser{' '}
            <a href="/faq" className="underline hover:underline">
              FAQ
            </a>.
          </p>
        </div>

        {/* Testimonials */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="py-2 text-3xl font-bold text-center text-white mb-16">
              Das sagen unsere <span className="text-blue-600">Kunden</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"> 
              {[
                {
                  quote: "Endlich verstehe ich, wie ich mich schützen kann! Die Erklärungen sind so verständlich - kein Technik-Kauderwelsch.",
                  author: "Helga B., 68 Jahre",
                  rating: 5
                },
                {
                  quote: "Nachdem mein Sohn unser WLAN 'gehackt' hat, haben wir MG Solutions engagiert. Jetzt haben wir Ruhe - und Sicherheit.",
                  author: "Familie Schneider",
                  rating: 5
                },
                {
                  quote: "Die regelmäßigen Update-Erinnerungen sind Gold wert. Ich wusste gar nicht, wie oft ich Updates vergessen habe.",
                  author: "Thomas K., Freiberufler",
                  rating: 4
                },
                {
                  quote: "Der Darknet-Scan hat tatsächlich ein geleaktes Passwort von mir gefunden! Unglaublich wichtiger Service.",
                  author: "Sarah M., Journalistin",
                  rating: 5
                }
              ].map((item, i) => (
                <div key={i} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, j) => (
                      <svg key={j} className={`w-5 h-5 ${j < item.rating ? 'text-amber-400' : 'text-blueGray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="text-blueGray-700 italic mb-6">"{item.quote}"</blockquote>
                  <div className="flex items-center">
                    <div className="bg-blue-100 text-blue-600 w-10 h-10 rounded-full flex items-center justify-center font-bold mr-3">
                      {item.author.charAt(0)}
                    </div>
                    <p className="text-blueGray-600 font-medium">{item.author}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Bereit für sorgenfreie <span className="text-blue-300">Sicherheit</span>?</h2>
            <p className="text-xl text-blueGray-200 max-w-3xl mx-auto mb-10">
              Kontaktieren Sie uns noch heute für eine kostenlose Erstberatung.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
                Jetzt Termin vereinbaren
              </button>
              <button className="bg-transparent hover:bg-white hover:text-blue-800 text-white font-bold px-8 py-4 rounded-full border-2 border-white transition-all duration-300">
                <span className="flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  0800 123 456 789
                </span>
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}