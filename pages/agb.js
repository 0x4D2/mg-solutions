import React from "react";
import LegalLayout, { LegalSection, LegalLink } from "components/LegalLayout.js";

export default function AGBPage() {
  return (
    <LegalLayout title="Allgemeine Geschäftsbedingungen" subtitle="Stand: Januar 2026">

      <LegalSection title="§ 1 Geltungsbereich">
        Diese AGB gelten für alle Verträge zwischen <strong style={{ color: "#e2e8f0" }}>MG Solutions,
        Inhaber Memo Güngör</strong> und seinen Kunden über Exposure-Reports und
        Sicherheitsanalysedienstleistungen. Der Anbieter ist Kleinunternehmer gemäß § 19 UStG
        und weist keine Umsatzsteuer aus.
      </LegalSection>

      <LegalSection title="§ 2 Vertragsgegenstand & Besonderheit der Dienstleistung">
        <p>(1) Der Anbieter erbringt <strong style={{ color: "#e2e8f0" }}>passive Sicherheitsanalysen</strong> auf
        Basis öffentlich zugänglicher Informationen (OSINT).</p>
        <p style={{ marginTop: 8 }}>(2) <strong style={{ color: "#e2e8f0" }}>Wichtig:</strong> Dies ist kein aktiver
        Security-Scan, kein Penetrationstest und keine Sicherheitsgarantie. Wir zeigen nur, was
        öffentlich sichtbar ist.</p>
        <p style={{ marginTop: 8 }}>(3) Die konkreten Leistungen ergeben sich aus der gebuchten
        Dienstleistung (Einzelreport oder Abonnement).</p>
      </LegalSection>

      <LegalSection title="§ 3 Vertragsschluss & Preise">
        <p>(1) Der Vertrag kommt durch Online-Bestellung und unsere Bestätigung per E-Mail zustande.</p>
        <p style={{ marginTop: 8 }}>(2) <strong style={{ color: "#e2e8f0" }}>Alle Preise sind Endpreise.</strong> Da wir
        Kleinunternehmer sind, wird keine Umsatzsteuer ausgewiesen (§ 19 UStG).</p>
        <p style={{ marginTop: 8 }}>(3) Einmal-Reports: Vorabzahlung. Abonnements: Monatliche Vorabzahlung
        per Lastschrift/Überweisung.</p>
      </LegalSection>

      <LegalSection title="§ 4 Laufzeit & Kündigung">
        <p>(1) Abonnements laufen <strong style={{ color: "#e2e8f0" }}>monatlich</strong> und verlängern sich automatisch.</p>
        <p style={{ marginTop: 8 }}>(2) Kündigung: Jederzeit per E-Mail an{" "}
        <LegalLink href="mailto:info@ichwillsicherheit.de">info@ichwillsicherheit.de</LegalLink>{" "}
        mit 14 Tagen Frist zum Monatsende.</p>
        <p style={{ marginTop: 8 }}>(3) Nach Kündigung erstellen wir noch den bereits bezahlten Report
        für den laufenden Monat.</p>
      </LegalSection>

      <LegalSection title="§ 5 Was wir leisten — und was nicht">
        <p style={{ marginBottom: 8 }}><strong style={{ color: "#e2e8f0" }}>5.1 Unsere Leistung:</strong></p>
        <ul style={{ paddingLeft: 16, listStyle: "disc", marginBottom: 12 }}>
          <li>Wir sammeln öffentlich verfügbare Informationen über Ihre Systeme</li>
          <li>Wir werten diese aus und priorisieren Risiken</li>
          <li>Wir liefern einen verständlichen Report mit Handlungsempfehlungen</li>
        </ul>
        <p style={{ marginBottom: 8 }}><strong style={{ color: "#e2e8f0" }}>5.2 Was wir nicht leisten:</strong></p>
        <ul style={{ paddingLeft: 16, listStyle: "disc" }}>
          <li>Keine aktiven Scans Ihrer Systeme</li>
          <li>Keine Penetrationstests</li>
          <li>Keine Live-Überwachung (periodische Momentaufnahmen)</li>
          <li>Keine Garantie, dass alle Risiken erkannt werden</li>
          <li>Keine Implementierung von Maßnahmen</li>
        </ul>
      </LegalSection>

      <LegalSection title="§ 6 Haftung">
        <p>(1) Wir haften nur für Vorsatz und grobe Fahrlässigkeit. Bei einfacher Fahrlässigkeit
        nur bei Verletzung wesentlicher Vertragspflichten, maximal bis zur Höhe des letzten
        Monatsbeitrags.</p>
        <p style={{ marginTop: 8 }}>(2) Ein Exposure-Report ist eine Analyse, keine Versicherung.
        Wir übernehmen keine Haftung für Angriffe, übersehene Schwachstellen oder Schäden
        basierend auf unseren Reports.</p>
      </LegalSection>

      <LegalSection title="§ 7 Ihre Pflichten">
        <p>(1) Sie dürfen <strong style={{ color: "#e2e8f0" }}>nur eigene Systeme</strong> analysieren lassen.</p>
        <p style={{ marginTop: 8 }}>(2) Das Analysieren fremder Systeme ist verboten und führt zur sofortigen Kündigung.</p>
        <p style={{ marginTop: 8 }}>(3) Sie stellen uns von Ansprüchen Dritter frei, falls Sie gegen (1) oder (2) verstoßen.</p>
      </LegalSection>

      <LegalSection title="§ 8 Umgang mit Ihren Daten">
        <p>(1) Wir behandeln Ihre Daten vertraulich. Details in unserer{" "}
        <LegalLink href="/privacy">Datenschutzerklärung</LegalLink>.</p>
        <p style={{ marginTop: 8 }}>(2) Für die Analyse benötigen wir: Domain/IP-Adresse, Name & E-Mail
        für die Kommunikation.</p>
        <p style={{ marginTop: 8 }}>(3) Nach Vertragsende löschen wir Ihre Daten nach 30 Tagen.</p>
      </LegalSection>

      <LegalSection title="§ 9 Feedback & Verbesserung">
        <p>(1) Wir entwickeln unseren Service kontinuierlich weiter.</p>
        <p style={{ marginTop: 8 }}>(2) Bei Problemen: Schreiben Sie uns direkt — wir lösen es persönlich.</p>
        <p style={{ marginTop: 8 }}>(3) Feature-Wünsche? Teilen Sie sie mit — wir priorisieren nach Kundenfeedback.</p>
      </LegalSection>

      <LegalSection title="§ 10 Schlussbestimmungen">
        <p>(1) Es gilt <strong style={{ color: "#e2e8f0" }}>deutsches Recht</strong>. Gerichtsstand ist 32791 Lage, Lippe.</p>
        <p style={{ marginTop: 8 }}>(2) Sollte eine Klausel unwirksam sein, bleibt der Rest gültig.</p>
        <p style={{ marginTop: 8 }}>(3) Änderungen dieser AGB teilen wir 4 Wochen vorher per E-Mail mit.</p>
      </LegalSection>

      <LegalSection title="Direkter Kontakt">
        <p>MG Solutions · Memo Güngör</p>
        <p>Im Sandkamp 16, 32791 Lage</p>
        <p><LegalLink href="mailto:info@ichwillsicherheit.de">info@ichwillsicherheit.de</LegalLink></p>
        <p style={{ marginTop: 8 }}>Geschäftszeiten: Mo–Fr, 9–17 Uhr · Antwortzeit: innerhalb von 24h an Werktagen</p>
        <p style={{ marginTop: 12, fontSize: "0.8rem", color: "#475569" }}>
          Hinweis: Diese AGB ersetzen keine rechtliche Beratung. Bitte lassen Sie die AGB
          final von einem Rechtsanwalt prüfen.
        </p>
      </LegalSection>

    </LegalLayout>
  );
}
