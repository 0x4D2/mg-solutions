import React from "react";
import Footer from "components/Footers/Footer.js";

export default function WiderrufPage() {
  return (
    <div className="cyber-bg bg-gray-900 text-white min-h-screen">
      <main className="py-16">
        <div className="container mx-auto px-4 max-w-3xl text-white">
          <section className="rounded-2xl p-8" style={{ backgroundColor: 'rgba(30,41,59,0.8)', border: '1px solid rgba(0,212,255,0.06)' }}>
            <h1 className="site-title gradient-text text-center">Widerrufsbelehrung für MG Solutions</h1>
            <p className="text-gray-400 text-center mt-2">Stand: Januar 2026</p>
            <hr className="my-6 border-gray-700" />

            <h2 className="text-xl font-semibold mt-4">Ihr Widerrufsrecht</h2>
            <p className="text-gray-300">Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen Ihren Vertrag mit uns zu widerrufen. Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag des Vertragsabschlusses.</p>

            <h2 className="text-xl font-semibold mt-4">Widerruf ausüben</h2>
            <p className="text-gray-300">Um Ihr Widerrufsrecht auszuüben, müssen Sie uns (MG Solutions, Inhaber: Memo Güngör, Im Sandkamp 16, 32791 Lage; E-Mail: <a href="mailto:info@ichwillsicherheit.de" className="text-cyan-200 underline">info@ichwillsicherheit.de</a>) mittels einer eindeutigen Erklärung (z. B. Brief, Fax oder E‑Mail) über Ihren Entschluss, diesen Vertrag zu widerrufen, informieren.</p>

            <h2 className="text-xl font-semibold mt-4">Besonderheit bei Exposure-Reports – bitte beachten!</h2>
            <p className="text-gray-300">(1) Für Einmal-Reports (z. B. 490 €): Mit Ihrer Bestellung erklären Sie: „Ich bin damit einverstanden, dass die Erstellung des Exposure-Reports vor Ablauf der Widerrufsfrist beginnt und bestätige, dass ich damit mein Widerrufsrecht verliere, sobald der Report vollständig geliefert wurde.“ Da wir Analysen in der Regel innerhalb von 24 Stunden erstellen, ist die Dienstleistung meist schon vor Ablauf der Widerrufsfrist vollständig erbracht.</p>
            <p className="text-gray-300">(2) Für Abonnements (z. B. 99 €/Monat): Ihr Widerrufsrecht gilt für die erste Zahlungsperiode. Nach Beginn der zweiten Periode kann das Abonnement monatlich gekündigt werden (siehe AGB §4).</p>

            <h2 className="text-xl font-semibold mt-4">Folgen des Widerrufs</h2>
            <p className="text-gray-300">Wenn Sie diesen Vertrag widerrufen, erstatten wir Ihnen alle Zahlungen, die wir von Ihnen erhalten haben, unverzüglich und spätestens binnen vierzehn Tagen nachdem die Mitteilung über Ihren Widerruf bei uns eingegangen ist. Für die Rückzahlung verwenden wir dasselbe Zahlungsmittel, das Sie bei der ursprünglichen Transaktion eingesetzt haben, es sei denn, es wurde etwas anderes vereinbart.</p>

            <h2 className="text-xl font-semibold mt-4">Muster‑Widerrufsformular</h2>
            <p className="text-gray-300">(Wenn Sie den Vertrag widerrufen wollen, füllen Sie bitte dieses Formular aus und senden Sie es zurück.)</p>
            <div className="bg-gray-900 p-4 rounded text-sm text-gray-200 mt-2 whitespace-pre-wrap break-words">
An:
MG Solutions
Im Sandkamp 16
32791 Lage
info@ichwillsicherheit.de

Hiermit widerrufe(n) ich/wir den von mir/uns abgeschlossenen Vertrag über die Erbringung der folgenden Dienstleistung:
• Exposure-Report Einmalanalyse
• Exposure-Report Abonnement (Essential/Professional/Corporate)

Bestellt am: _______________
Name des/der Verbraucher(s): _______________
Anschrift: _______________
Datum: _______________
Unterschrift (nur bei Mitteilung auf Papier): _______________

</div>

            <h2 className="text-xl font-semibold mt-4">Wichtiger Hinweis zur Klarheit</h2>
            <ol className="list-decimal list-inside text-gray-300">
              <li>Für Einmal-Reports: Die Dienstleistung wird so schnell erbracht (z. B. 24 h), dass Sie praktisch auf Ihr Widerrufsrecht verzichten müssen, wenn Sie den Report erhalten möchten.</li>
              <li>Für Abonnements: Sie können die erste Monatszahlung innerhalb von 14 Tagen widerrufen. Danach gilt die monatliche Kündigungsfrist.</li>
              <li>Fairness-Prinzip: Sollten Sie widerrufen, nachdem Sie bereits einen Report erhalten haben, kontaktieren Sie uns bitte persönlich – wir finden eine faire Lösung.</li>
            </ol>

            <p className="text-gray-300 mt-4">Bei Fragen zum Widerruf kontaktieren Sie uns bitte direkt per E‑Mail: <a href="mailto:info@ichwillsicherheit.de" className="text-cyan-200 underline">info@ichwillsicherheit.de</a></p>

            <p className="mt-6 text-sm text-gray-400">Hinweis: Diese Widerrufsbelehrung dient der Klarheit und ersetzt keine rechtliche Beratung. Für verbindliche Formulierungen empfehlen wir die Prüfung durch einen Rechtsanwalt.</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
