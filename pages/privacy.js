import React from "react";
import LegalLayout, { LegalSection, LegalLink } from "components/LegalLayout.js";

export default function Privacy() {
  return (
    <LegalLayout title="Datenschutzerklärung" subtitle="Stand: Januar 2026">

      <LegalSection title="1. Allgemeine Hinweise">
        Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir behandeln Ihre
        personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften
        sowie dieser Datenschutzerklärung.
      </LegalSection>

      <LegalSection title="2. Verantwortliche Stelle">
        <p>Memo Güngör (Inhaber von MG Solutions)</p>
        <p>Im Sandkamp 16, 32791 Lage</p>
        <p>E-Mail: <LegalLink href="mailto:info@ichwillsicherheit.de">info@ichwillsicherheit.de</LegalLink></p>
      </LegalSection>

      <LegalSection title="3. Gesammelte personenbezogene Daten">
        <p>Wir erheben und verarbeiten folgende personenbezogene Daten:</p>
        <ul style={{ marginTop: 8, paddingLeft: 16, listStyle: "disc" }}>
          <li>Name</li>
          <li>E-Mail-Adresse</li>
          <li>Telefonnummer</li>
          <li>IP-Adresse (bei Nutzung der Website)</li>
          <li>Zahlungsdaten (falls relevant)</li>
        </ul>
      </LegalSection>

      <LegalSection title="4. Zweck der Datenerhebung">
        <p>Die Erhebung und Verarbeitung Ihrer Daten erfolgt zu folgenden Zwecken:</p>
        <ul style={{ marginTop: 8, paddingLeft: 16, listStyle: "disc" }}>
          <li>Kontaktaufnahme und Vertragsabwicklung</li>
          <li>Rechnungsstellung</li>
          <li>Marketing und Newsletterversand (nur mit Einwilligung)</li>
        </ul>
      </LegalSection>

      <LegalSection title="5. Ihre Rechte">
        Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung
        Ihrer Daten. Zudem können Sie der Verarbeitung widersprechen und Ihr Recht auf
        Datenübertragbarkeit geltend machen.
      </LegalSection>

      <LegalSection title="6. Kontakt">
        Bei Fragen zum Datenschutz kontaktieren Sie uns unter{" "}
        <LegalLink href="mailto:info@ichwillsicherheit.de">info@ichwillsicherheit.de</LegalLink>.
      </LegalSection>

      <LegalSection title="7. Rechtsgrundlage der Datenverarbeitung">
        <p>Die Verarbeitung Ihrer Daten erfolgt auf Grundlage von Art. 6 Abs. 1 DSGVO:</p>
        <ul style={{ marginTop: 8, paddingLeft: 16, listStyle: "disc" }}>
          <li>Zur Erfüllung eines Vertrags oder vorvertraglicher Maßnahmen (lit. b)</li>
          <li>Zur Erfüllung rechtlicher Verpflichtungen (lit. c)</li>
          <li>Aufgrund Ihrer Einwilligung (lit. a)</li>
          <li>Zur Wahrung berechtigter Interessen (lit. f)</li>
        </ul>
      </LegalSection>

      <LegalSection title="8. Speicherdauer">
        Ihre personenbezogenen Daten werden nur so lange gespeichert, wie es für die Erfüllung
        der genannten Zwecke erforderlich ist oder wie es gesetzliche Aufbewahrungsfristen vorsehen.
        Nach Ablauf dieser Fristen werden die Daten gelöscht.
      </LegalSection>

      <LegalSection title="9. Cookies und Tracking">
        Unsere Website verwendet Cookies, um die Benutzerfreundlichkeit zu verbessern. Weitere
        Informationen finden Sie in unserer{" "}
        <LegalLink href="/cookies">Cookie-Richtlinie</LegalLink>.
      </LegalSection>

      <LegalSection title="10. Weitergabe von Daten an Dritte">
        <p>Ihre Daten werden nur an Dritte weitergegeben, wenn dies zur Erfüllung eines Vertrags
        erforderlich ist, Sie ausdrücklich eingewilligt haben oder wir gesetzlich dazu verpflichtet sind.
        Beispiele:</p>
        <ul style={{ marginTop: 8, paddingLeft: 16, listStyle: "disc" }}>
          <li>Zahlungsdienstleister</li>
          <li>Hosting-Anbieter</li>
        </ul>
      </LegalSection>

      <LegalSection title="11. Sicherheit Ihrer Daten">
        Wir setzen technische und organisatorische Maßnahmen ein, um Ihre Daten vor unbefugtem
        Zugriff, Verlust oder Missbrauch zu schützen. Unsere Sicherheitsmaßnahmen werden regelmäßig
        überprüft und an den Stand der Technik angepasst.
      </LegalSection>

      <LegalSection title="12. Aktualisierung">
        Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf anzupassen. Die aktuelle
        Version finden Sie stets auf unserer Website.
      </LegalSection>

    </LegalLayout>
  );
}
