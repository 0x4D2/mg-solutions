import React from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function WiderrufPage() {
  return (
    <div className="flex flex-col min-h-screen relative" style={{ backgroundColor: '#0a192f' }}>
      <IndexNavbar fixed />
      <main className="py-20 flex-grow">
        <div className="container mx-auto px-4 max-w-4xl text-white">
          <section className="rounded-2xl p-8" style={{ backgroundColor: 'rgba(30,41,59,0.8)', border: '1px solid rgba(0,212,255,0.06)' }}>
            <h1 className="text-3xl font-bold mb-4">Widerrufsbelehrung</h1>

            <p className="text-gray-300">Verbrauchern steht grundsätzlich ein Widerrufsrecht zu. Nachfolgend informieren wir Sie über Ihr Widerrufsrecht und die Folgen des Widerrufs.</p>

            <h2 className="text-xl font-semibold mt-4">Widerrufsrecht</h2>
            <p className="text-gray-300">Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen. Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag des Vertragsschlusses.</p>

            <h2 className="text-xl font-semibold mt-4">Widerrufsfolgen</h2>
            <p className="text-gray-300">Wenn Sie diesen Vertrag widerrufen, erstatten wir Ihnen alle Zahlungen, die wir von Ihnen erhalten haben, unverzüglich und spätestens binnen vierzehn Tagen nach dem Zugang Ihrer Widerrufserklärung.</p>

            <h2 className="text-xl font-semibold mt-4">Ausschluss / Erlöschen des Widerrufsrechts</h2>
            <p className="text-gray-300">Das Widerrufsrecht erlischt u. a., wenn die Dienstleistung vollständig erbracht wurde und Sie ausdrücklich zugestimmt haben, dass die Ausführung vor Ablauf der Widerrufsfrist beginnt und Sie zur Kenntnis genommen haben, dass Sie durch Ihre Zustimmung Ihr Widerrufsrecht verlieren.</p>

            <h2 className="text-xl font-semibold mt-4">Muster‑Widerrufsformular</h2>
            <p className="text-gray-300">Sie können das folgende Musterformular verwenden (muss nicht verwendet werden):</p>
            <pre className="bg-gray-900 p-4 rounded text-sm text-gray-200 mt-2">An: MG Solutions
Adresse: Musterstraße 1, 12345 Stadt
E-Mail: support@deinedomain.de

Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*) abgeschlossenen Vertrag über die Erbringung der folgenden Dienstleistung: ______________________

Bestellt am: __________________

Name des/der Verbraucher(s): __________________
Anschrift: __________________

Datum: __________________

Unterschrift (bei Mitteilung auf Papier): __________________
            </pre>

            <p className="mt-6 text-sm text-gray-400">Hinweis: Diese Vorlage ist informativ. Für verbindliche Formulierungen empfehlen wir die Prüfung durch einen Rechtsanwalt.</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
