import React from "react";
import LegalLayout, { LegalSection, LegalLink } from "components/LegalLayout.js";

export default function WiderrufPage() {
  return (
    <LegalLayout title="Widerrufsbelehrung" subtitle="Stand: Januar 2026">

      <LegalSection title="Ihr Widerrufsrecht">
        Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen Ihren Vertrag mit uns
        zu widerrufen. Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag des Vertragsabschlusses.
      </LegalSection>

      <LegalSection title="Widerruf ausüben">
        Um Ihr Widerrufsrecht auszuüben, müssen Sie uns mittels einer eindeutigen Erklärung
        (z. B. Brief oder E-Mail) über Ihren Entschluss informieren:
        <div style={{ marginTop: 12, padding: "12px 16px", background: "#f8fafc", borderRadius: 8, border: "1px solid #e2e8f0" }}>
          <p>MG Solutions · Memo Güngör</p>
          <p>Im Sandkamp 16, 32791 Lage</p>
          <p><LegalLink href="mailto:info@ichwillsicherheit.de">info@ichwillsicherheit.de</LegalLink></p>
        </div>
      </LegalSection>

      <LegalSection title="Besonderheit bei Exposure-Reports — bitte beachten">
        <p><strong style={{ color: "#1e293b" }}>(1) Einmal-Reports (z. B. 490 €):</strong> Mit Ihrer Bestellung
        erklären Sie Ihr Einverständnis, dass die Erstellung des Reports vor Ablauf der
        Widerrufsfrist beginnt. Sie bestätigen damit, dass Sie Ihr Widerrufsrecht verlieren,
        sobald der Report vollständig geliefert wurde. Da wir Analysen in der Regel innerhalb
        von 24 Stunden erstellen, ist die Dienstleistung meist vor Ablauf der Widerrufsfrist
        erbracht.</p>
        <p style={{ marginTop: 8 }}><strong style={{ color: "#1e293b" }}>(2) Abonnements:</strong> Ihr Widerrufsrecht
        gilt für die erste Zahlungsperiode. Nach Beginn der zweiten Periode kann das Abonnement
        monatlich gekündigt werden (siehe AGB § 4).</p>
      </LegalSection>

      <LegalSection title="Folgen des Widerrufs">
        Wenn Sie diesen Vertrag widerrufen, erstatten wir Ihnen alle Zahlungen unverzüglich
        und spätestens binnen vierzehn Tagen nach Eingang Ihrer Widerrufsmitteilung. Für die
        Rückzahlung verwenden wir dasselbe Zahlungsmittel wie bei der ursprünglichen Transaktion.
      </LegalSection>

      <LegalSection title="Muster-Widerrufsformular">
        <p style={{ marginBottom: 10 }}>Wenn Sie den Vertrag widerrufen wollen, füllen Sie bitte dieses Formular aus:</p>
        <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 8, padding: "16px 20px", fontSize: "0.8rem", lineHeight: 2, color: "#64748b" }}>
          <p>An: MG Solutions, Im Sandkamp 16, 32791 Lage · info@ichwillsicherheit.de</p>
          <p>Hiermit widerrufe(n) ich/wir den von mir/uns abgeschlossenen Vertrag über:</p>
          <p>☐ Exposure-Report Einmalanalyse</p>
          <p>☐ Exposure-Report Abonnement (Essential / Professional / Corporate)</p>
          <p>Bestellt am: _______________</p>
          <p>Name: _______________</p>
          <p>Anschrift: _______________</p>
          <p>Datum: _______________</p>
          <p>Unterschrift (nur bei Mitteilung auf Papier): _______________</p>
        </div>
      </LegalSection>

      <LegalSection title="Wichtige Hinweise zur Klarheit">
        <ol style={{ paddingLeft: 16, listStyle: "decimal" }}>
          <li style={{ marginBottom: 8 }}>
            <strong style={{ color: "#1e293b" }}>Einmal-Reports:</strong> Die Dienstleistung wird so schnell erbracht
            (24h), dass Sie praktisch auf Ihr Widerrufsrecht verzichten müssen, wenn Sie den
            Report erhalten möchten.
          </li>
          <li style={{ marginBottom: 8 }}>
            <strong style={{ color: "#1e293b" }}>Abonnements:</strong> Sie können die erste Monatszahlung innerhalb
            von 14 Tagen widerrufen. Danach gilt die monatliche Kündigungsfrist.
          </li>
          <li>
            <strong style={{ color: "#1e293b" }}>Fairness-Prinzip:</strong> Sollten Sie widerrufen, nachdem Sie bereits
            einen Report erhalten haben, kontaktieren Sie uns bitte persönlich — wir finden eine
            faire Lösung.
          </li>
        </ol>
      </LegalSection>

      <LegalSection title="Kontakt bei Fragen">
        <LegalLink href="mailto:info@ichwillsicherheit.de">info@ichwillsicherheit.de</LegalLink>
        <p style={{ marginTop: 12, fontSize: "0.8rem", color: "#475569" }}>
          Diese Widerrufsbelehrung dient der Klarheit und ersetzt keine rechtliche Beratung.
        </p>
      </LegalSection>

    </LegalLayout>
  );
}


