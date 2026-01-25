import React from "react";
import Link from "next/link";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function AGBPage() {
  return (
    <div className="flex flex-col min-h-screen relative" style={{ backgroundColor: '#0a192f' }}>
      <IndexNavbar fixed />
      <main className="py-20 flex-grow">
        <div className="container mx-auto px-4 max-w-4xl text-white">
          <section className="rounded-2xl p-8" style={{ backgroundColor: 'rgba(30,41,59,0.8)', border: '1px solid rgba(0,212,255,0.06)' }}>
            <h1 className="text-3xl font-bold mb-4">Allgemeine Geschäftsbedingungen (AGB)</h1>
            <p className="text-gray-300 mb-4">Nachfolgend finden Sie unsere standardmäßigen Vertragsbedingungen. Diese regeln das Vertragsverhältnis zwischen Ihnen und der MG Solutions (nachfolgend „Anbieter“).</p>

            <h2 className="text-xl font-semibold mt-4">1. Geltungsbereich</h2>
            <p className="text-gray-300">Diese AGB gelten für alle Verträge über unsere Dienstleistungen, sofern nicht gesondert schriftlich abweichend vereinbart.</p>

            <h2 className="text-xl font-semibold mt-4">2. Vertragsgegenstand</h2>
            <p className="text-gray-300">Gegenstand sind passive Exposure‑Reports und dazugehörige Analysen sowie optionale Beratungsleistungen. Details ergeben sich aus der Leistungsbeschreibung im jeweiligen Angebot.</p>

            <h2 className="text-xl font-semibold mt-4">3. Preise & Zahlung</h2>
            <p className="text-gray-300">Preise sind wie im Angebot ausgewiesen. Monatsprodukte werden im Voraus berechnet. Zahlungen per Banküberweisung oder andere vereinbarte Zahlungsmittel.</p>

            <h2 className="text-xl font-semibold mt-4">4. Laufzeit & Kündigung</h2>
            <p className="text-gray-300">Sofern nicht anders vereinbart, gelten unsere Verträge mit monatlicher Laufzeit und sind monatlich kündbar. Die Kündigung ist per E‑Mail an <strong>support@deinedomain.de</strong> oder über das Kundenkonto möglich. Die Kündigung wird zum Ende des laufenden Abrechnungszeitraums wirksam.</p>

            <h2 className="text-xl font-semibold mt-4">5. Leistungsumfang & Haftung</h2>
            <p className="text-gray-300">Unsere Leistungen basieren auf öffentlich verfügbaren Quellen (OSINT) und manueller Analyse. Wir haften nur für vorsätzliches oder grob fahrlässiges Verhalten im gesetzlich zulässigen Umfang.</p>

            <h2 className="text-xl font-semibold mt-4">6. Datenschutz</h2>
            <p className="text-gray-300">Informationen zum Umgang mit personenbezogenen Daten finden Sie in unserer <Link href="/privacy" className="text-cyan-200">Datenschutzerklärung</Link>.</p>

            <h2 className="text-xl font-semibold mt-4">7. Anwendbares Recht</h2>
            <p className="text-gray-300">Es gilt deutsches Recht. Gerichtsstand ist, soweit zulässig, der Sitz des Anbieters.</p>

            <p className="mt-6 text-sm text-gray-400">Hinweis: Diese Vorlage ersetzt keine rechtliche Beratung. Bitte lassen Sie die AGB final von einem Rechtsanwalt prüfen.</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
