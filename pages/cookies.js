import React from "react";
import LegalLayout, { LegalSection, LegalLink } from "components/LegalLayout.js";

export default function Cookies() {
  return (
    <LegalLayout title="Cookie-Richtlinie">

      <LegalSection title="1. Was sind Cookies?">
        Cookies sind kleine Textdateien, die von Ihrem Browser auf Ihrem Endgerät gespeichert
        werden, wenn Sie unsere Website besuchen. Sie richten keinen Schaden an und enthalten
        keine Viren.
      </LegalSection>

      <LegalSection title="2. Welche Cookies verwenden wir?">
        Wir verwenden technisch notwendige Cookies (z. B. für Seitennavigation und grundlegende
        Funktionen) sowie — sofern Sie zustimmen — optionale Cookies für Analyse und Marketing.
      </LegalSection>

      <LegalSection title="3. Zweck der Cookies">
        <ul style={{ paddingLeft: 16, listStyle: "disc" }}>
          <li>Sicherstellung der Funktionalität der Website</li>
          <li>Analyse des Nutzerverhaltens zur Optimierung unseres Angebots</li>
          <li>Speicherung Ihrer Einstellungen (z. B. Sprache, Cookie-Auswahl)</li>
        </ul>
      </LegalSection>

      <LegalSection title="4. Cookie-Einstellungen ändern">
        Sie können Ihre Cookie-Einstellungen jederzeit in Ihrem Browser anpassen oder bereits
        gesetzte Cookies löschen. Bitte beachten Sie, dass bei der Deaktivierung von Cookies
        die Funktionalität der Website eingeschränkt sein kann.
      </LegalSection>

      <LegalSection title="5. Drittanbieter-Cookies">
        Sofern wir Dienste von Drittanbietern einsetzen (z. B. reCAPTCHA von Google),
        werden Sie beim ersten Besuch der Seite um Ihre Einwilligung gebeten.
      </LegalSection>

      <LegalSection title="6. Weitere Informationen">
        Weitere Informationen zum Umgang mit Ihren Daten finden Sie in unserer{" "}
        <LegalLink href="/privacy">Datenschutzerklärung</LegalLink>.
      </LegalSection>

    </LegalLayout>
  );
}
