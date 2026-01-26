import React from "react";
import Link from "next/link";
import Footer from "components/Footers/Footer.js";

export default function AGBPage() {
  return (
    <div className="cyber-bg bg-gray-900 text-white min-h-screen">
      <main className="py-16 flex-grow">
        <div className="container mx-auto px-4 max-w-4xl text-white">
          <section className="rounded-2xl p-8" style={{ backgroundColor: 'rgba(30,41,59,0.8)', border: '1px solid rgba(0,212,255,0.06)' }}>
            <h1 className="site-title gradient-text text-center">Allgemeine Geschäftsbedingungen (AGB) für MG Solutions</h1>
            <p className="text-gray-400 text-center mt-2">Stand: Januar 2026</p>
            <hr className="my-6 border-gray-700" />

            <h2 className="text-xl font-semibold mt-4">§ 1 Geltungsbereich</h2>
            <p className="text-gray-300">Diese AGB gelten für alle Verträge zwischen der <strong>MG Solutions, Inhaber Memo Güngör</strong> (nachfolgend "Anbieter") und seinen Kunden über Exposure-Reports und Sicherheitsanalysedienstleistungen. Der Anbieter ist Kleinunternehmer gemäß § 19 UStG und weist keine Umsatzsteuer aus.</p>

            <h2 className="text-xl font-semibold mt-4">§ 2 Vertragsgegenstand &amp; Besonderheit der Dienstleistung</h2>
            <p className="text-gray-300">(1) Der Anbieter erbringt <strong>passive Sicherheitsanalysen</strong> auf Basis öffentlich zugänglicher Informationen (OSINT).<br/>
            (2) <strong>Wichtig:</strong> Dies ist <strong>kein aktiver Security-Scan</strong>, <strong>kein Penetrationstest</strong> und <strong>keine Sicherheitsgarantie</strong>. Wir zeigen nur, was öffentlich sichtbar ist.<br/>
            (3) Die konkreten Leistungen ergeben sich aus der gebuchten Dienstleistung (Einzelreport oder Abonnement).</p>

            <h2 className="text-xl font-semibold mt-4">§ 3 Vertragsschluss &amp; Preise</h2>
            <p className="text-gray-300">(1) Der Vertrag kommt durch Online-Bestellung und unsere Bestätigung per E-Mail zustande.<br/>
            (2) <strong>Alle Preise sind Endpreise.</strong> Da wir Kleinunternehmer sind, wird keine Umsatzsteuer ausgewiesen (§ 19 UStG).<br/>
            (3) Einmal-Reports: Vorabzahlung. Abonnements: Monatliche Vorabzahlung per Lastschrift/Überweisung.</p>

            <h2 className="text-xl font-semibold mt-4">§ 4 Laufzeit &amp; Kündigung – einfach &amp; fair</h2>
            <p className="text-gray-300">(1) Abonnements laufen <strong>monatlich</strong> und verlängern sich automatisch.<br/>
            (2) <strong>Kündigung:</strong> Jederzeit per E-Mail an <a href="mailto:info@ichwillsicherheit.de" className="text-cyan-200 underline">info@ichwillsicherheit.de</a> mit 14 Tagen Frist zum Monatsende.<br/>
            (3) Nach Kündigung erstellen wir noch den bereits bezahlten Report für den laufenden Monat.</p>

            <h2 className="text-xl font-semibold mt-4">§ 5 Was wir leisten – und was nicht</h2>
            <h3 className="text-lg font-semibold mt-3">5.1 Unsere Leistung:</h3>
            <ul className="list-disc list-inside text-gray-300">
              <li>Wir sammeln <strong>öffentlich verfügbare Informationen</strong> über Ihre Systeme</li>
              <li>Wir werten diese aus und priorisieren Risiken</li>
              <li>Wir liefern einen verständlichen Report mit Handlungsempfehlungen</li>
            </ul>
            <h3 className="text-lg font-semibold mt-3">5.2 Was wir NICHT leisten (wichtig!)</h3>
            <ul className="list-disc list-inside text-gray-300">
              <li><strong>Keine aktiven Scans</strong> Ihrer Systeme</li>
              <li><strong>Keine Penetrationstests</strong> (wir testen nichts aus)</li>
              <li><strong>Keine Live-Überwachung</strong> (periodische Momentaufnahmen)</li>
              <li><strong>Keine Garantie</strong>, dass alle Risiken erkannt werden</li>
              <li><strong>Keine Implementierung</strong> von Maßnahmen</li>
            </ul>

            <h2 className="text-xl font-semibold mt-4">§ 6 Haftung – klar &amp; fair begrenzt</h2>
            <p className="text-gray-300">(1) Wir haften nur für <strong>Vorsatz und grobe Fahrlässigkeit</strong>. Bei einfacher Fahrlässigkeit nur bei Verletzung wesentlicher Vertragspflichten, maximal bis zur Höhe des letzten Monatsbeitrags.</p>
            <p className="text-gray-300">(2) Ein Exposure-Report ist <strong>eine Analyse, keine Versicherung</strong>. Wir übernehmen keine Haftung für Angriffe, übersehene Schwachstellen, Ausfälle oder Schäden oder falsche Entscheidungen basierend auf unseren Reports.</p>
            <p className="text-gray-300">(3) Trotz Haftungsbegrenzung stehen wir für qualitativ hochwertige Arbeit und transparente Kommunikation.</p>

            <h2 className="text-xl font-semibold mt-4">§ 7 Ihre Pflichten – kurz &amp; wichtig</h2>
            <p className="text-gray-300">(1) Sie dürfen <strong>nur eigene Systeme</strong> analysieren lassen.<br/>
            (2) Scannen fremder Systeme ist <strong>verboten</strong> und führt zur sofortigen Kündigung.<br/>
            (3) Sie stellen uns von Ansprüchen Dritter frei, falls Sie gegen (1) oder (2) verstoßen.</p>

            <h2 className="text-xl font-semibold mt-4">§ 8 Umgang mit Ihren Daten</h2>
            <p className="text-gray-300">(1) Wir behandeln Ihre Daten vertraulich. Details in unserer <Link href="/privacy" className="text-cyan-200">Datenschutzerklärung</Link>.<br/>
            (2) Für die Analyse benötigen wir: Domain/IP-Adresse, Ihren Namen &amp; E-Mail für die Kommunikation.<br/>
            (3) <strong>Nach Vertragsende</strong> löschen wir Ihre Daten nach 30 Tagen.</p>

            <h2 className="text-xl font-semibold mt-4">§ 9 Feedback &amp; Verbesserung</h2>
            <p className="text-gray-300">(1) Wir entwickeln unseren Service kontinuierlich weiter.<br/>
            (2) Bei Problemen: <strong>Schreiben Sie uns direkt</strong> – wir lösen es persönlich.<br/>
            (3) Feature-Wünsche? <strong>Teilen Sie sie mit</strong> – wir priorisieren nach Kundenfeedback.</p>

            <h2 className="text-xl font-semibold mt-4">§ 10 Schlussbestimmungen</h2>
            <p className="text-gray-300">(1) Es gilt <strong>deutsches Recht</strong>. Gerichtsstand ist <strong>32791 Lage, Lippe</strong>.<br/>
            (2) Sollte eine Klausel unwirksam sein, bleibt der Rest gültig.<br/>
            (3) Änderungen dieser AGB teilen wir <strong>4 Wochen vorher</strong> per E-Mail mit.</p>

            <hr className="my-6 border-gray-700" />
            <h3 className="text-lg font-semibold">Ihr direkter Kontakt bei Fragen</h3>
            <p className="text-gray-300">MG Solutions<br/>Memo Güngör<br/>Im Sandkamp 16, 32791 Lage, Lippe<br/>
            <a href="mailto:info@ichwillsicherheit.de" className="text-cyan-200 underline">info@ichwillsicherheit.de</a></p>
            <p className="text-gray-300 mt-2">Geschäftszeiten: Mo–Fr, 9–17 Uhr<br/>Antwortzeit: Innerhalb von 24h an Werktagen</p>

            <p className="mt-6 text-sm text-gray-400">Hinweis: Diese AGB stellen eine Vorlage dar und ersetzen keine rechtliche Beratung. Bitte lassen Sie die AGB final von einem Rechtsanwalt prüfen.</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
