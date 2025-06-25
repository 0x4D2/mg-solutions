import React, { useState } from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function FAQPage() {
  const unternehmenFAQs = [
    {
      question: "Was ist Cybersicherheit und warum ist sie wichtig?",
      answer:
        "Cybersicherheit schützt Netzwerke, Geräte und Daten vor Bedrohungen wie Hacking oder Phishing. Unternehmen sind häufig Ziel solcher Angriffe - Schutzmaßnahmen verhindern Datenverlust, finanzielle Schäden und Imageschäden.",
    },
    {
      question: "Welche Schutzpakete bietet MG Solutions an?",
      answer: (
        <ul className="list-disc pl-5 space-y-1 text-gray-200">
          <li><strong>Basis:</strong> Support via E-Mail/Chat, Bedrohungserkennung, Sicherheitsberatung.</li>
          <li><strong>Erweitert:</strong> Fernwartung, Systemchecks, Mitarbeiterschulungen.</li>
          <li><strong>Premium:</strong> Krisenmanagement, monatliche Audits, individuelle Beratung.</li>
        </ul>
      ),
    },
    {
      question: "Was beinhaltet eine IT-Sicherheitsanalyse?",
      answer:
        "Wir analysieren Ihre IT-Infrastruktur auf Schwachstellen, erstellen einen Bericht und entwickeln passgenaue Schutzmaßnahmen für Ihr Unternehmen.",
    },
  ];

  const privatFAQs = [
    {
      question: "Wie bin ich als Privatperson von Cyberangriffen betroffen?",
      answer:
        "Privatnutzer sind oft Ziel von Phishing, Identitätsdiebstahl oder Ransomware. Unsere Schutzlösungen helfen, Ihre Daten und Geräte abzusichern.",
    },
    {
      question: "Was kostet der Rundum-Schutz für Privatkunden?",
      answer: (
        <span>
          Unser <strong>Rundum-Schutz-Paket</strong> für Privatkunden kostet <strong>30&nbsp;Euro pro Monat</strong> und bietet umfassenden Schutz für Ihre digitale Sicherheit – ohne versteckte Kosten oder Zusatzpakete.
        </span>
      ),
    },
    {
      question: "Welche Sicherheitsmaßnahmen sollte ich treffen?",
      answer: (
        <ul className="list-disc pl-5 space-y-1 text-gray-200">
          <li>Antiviren-Programme</li>
          <li>Starke, einzigartige Passwörter</li>
          <li>Regelmäßige Systemupdates</li>
          <li>Mehrfaktorauthentifizierung</li>
        </ul>
      ),
    },
    {
      question: "Wie helfen Cybersecurity-Schulungen im Alltag?",
      answer:
        "Gut informierte Nutzer erkennen Gefahren frühzeitig und vermeiden typische Fallen wie Phishing, unsichere Netzwerke oder Social Engineering.",
    },
  ];

  const allgemeinFAQs = [
    {
      question: "Was ist ein sicheres Passwort?",
      answer:
        "Ein sicheres Passwort besteht aus mindestens 12 Zeichen, enthält Buchstaben, Zahlen und Sonderzeichen und wird für jeden Dienst individuell gewählt.",
    },
    {
      question: "Wie erkenne ich Phishing-Mails?",
      answer:
        "Phishing-Mails tarnen sich oft als seriöse Absender. Achten Sie auf ungewöhnliche Absenderadressen, Grammatikfehler und Links, die nicht zur offiziellen Domain führen.",
    },
    {
      question: "Wie oft sollte ich meine Software aktualisieren?",
      answer:
        "Regelmäßige Updates schließen Sicherheitslücken. Aktivieren Sie automatische Updates für Betriebssystem, Browser, Antivirensoftware und Apps.",
    },
    {
      question: "Warum genau sollte ich einen Servicevertrag abschließen?",
      answer:
        "Zusätzlich zur anfänglichen Einrichtung sollte die Cybersicherheit als fortlaufender Prozess betrachtet werden, der regelmäßige Audits und Anpassungen erfordert, um mit neuen Bedrohungen Schritt zu halten.",
    },
  ];

  return (
    <>
      <Helmet>
        <h2>Cybersecurity FAQ - MG Solutions</h2>
        <meta
          name="description"
          content="Antworten auf häufige Fragen zur Cybersicherheit für Unternehmen und Privatpersonen. Erfahren Sie, wie Sie sich effektiv schützen können."
        />
      </Helmet>

      <IndexNavbar fixed />

      {/* Hero */}
      <div className="cyber-bg">

        <section className="relative pt-20 items-center flex min-h-[80vh] ">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold">
              Cybersecurity - Häufige Fragen
            </h1>
            <p className="mt-6 text-xl max-w-3xl mx-auto text-white ">
              Antworten rund um digitale Sicherheit - für Unternehmen und Privatpersonen.
            </p>
          </div>
        </section>
      
      {/* FAQ Sektionen */}
      <div className="py-10 ">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-12">
            <FAQSection title="Allgemein" faqs={allgemeinFAQs} />
            <FAQSection title="Für Unternehmen" faqs={unternehmenFAQs} />
            <FAQSection title="Für Privatkunden" faqs={privatFAQs} />
          </div>
        </div>
      </div>
    
      {/* Call to Action */}
      <div className="py-20 text-center">
        <h2 className="text-4xl font-bold ">Noch Fragen offen?</h2>
        <p className="mt-4 text-lg text-white">
          Wir beraten Sie gerne persönlich zu Ihrer Cybersicherheit.
        </p>
        <button
          className="cyber-direct-btn mt-6 text-white text-black px-6 py-3 rounded-lg shadow-lg hover:bg-cyan-600 transition focus:outline-none focus:ring-2 focus:ring-cyan-300"
        >
          Jetzt Kontakt aufnehmen
        </button>
      </div>

      <Footer />
      </div>
    </>
  );
}

// Einzelne FAQ-Sektion
function FAQSection({ title, faqs }) {
  return (
    <div className="p-6 rounded-lg shadow-lg hover:shadow-xl transition bg-gray-800 border border-gray-700">
      <h2 className="text-3xl font-semibold mb-6 text-center">
        {title}
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <FAQCard key={index} question={faq.question}>
            {faq.answer}
          </FAQCard>
        ))}
      </div>
    </div>
  );
}

// Accordion-Komponente
function FAQCard({ question, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-gray-700 rounded-md shadow-md hover:shadow-lg transition">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-4 focus:outline-none flex justify-between items-center"
      >
        <h3 className="text-lg font-semibold text-white">{question}</h3>
        <span className="text-cyan-300 text-2xl">{isOpen ? "−" : "+"}</span>
      </button>
      {isOpen && <div className="px-4 pb-4 text-white font-light">{children}</div>}
    </div>
  );
}