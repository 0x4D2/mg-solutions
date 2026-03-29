import React, { useEffect, useState } from "react";
import LegalLayout, { LegalSection, LegalLink } from "components/LegalLayout.js";

function ProtectedEmail() {
  const [link, setLink] = useState(null);
  useEffect(() => {
    const u = "info";
    const d = "ichwillsicherheit";
    const t = "de";
    const addr = `${u}@${d}.${t}`;
    setLink(addr);
  }, []);
  if (!link) return <span>E-Mail wird geladen…</span>;
  return <a href={`mailto:${link}`} className="legal-link">{link}</a>;
}

export default function Imprint() {
  return (
    <LegalLayout title="Impressum">

      <LegalSection title="Angaben gemäß § 5 TMG">
        <p>MG Solutions</p>
        <p>Inhaber: Memo Güngör</p>
        <p>Im Sandkamp 16</p>
        <p>32791 Lage</p>
        <p>Deutschland</p>
      </LegalSection>

      <LegalSection title="Kontakt">
        <p>E-Mail: <ProtectedEmail /></p>
        <p>Telefon: {["+49", " 176", " 754", " 68985"].join(" ")}</p>
      </LegalSection>

      <LegalSection title="Umsatzsteuer">
        Als Kleinunternehmer im Sinne von § 19 UStG wird keine Umsatzsteuer ausgewiesen.
      </LegalSection>

      <LegalSection title="Haftungsausschluss">
        Die Informationen auf dieser Website sind allgemeiner Natur und stellen keine rechtliche
        Beratung dar. MG Solutions übernimmt keine Haftung für die Richtigkeit, Vollständigkeit
        oder Aktualität der bereitgestellten Informationen. Die Nutzung der Informationen erfolgt
        auf eigene Gefahr.
      </LegalSection>

      <LegalSection title="Haftung für Links">
        Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte
        externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber
        verantwortlich.
      </LegalSection>

      <LegalSection title="Datenschutz">
        Weitere Informationen zum Datenschutz finden Sie in unserer{" "}
        <LegalLink href="/privacy">Datenschutzerklärung</LegalLink>.
      </LegalSection>

    </LegalLayout>
  );
}
