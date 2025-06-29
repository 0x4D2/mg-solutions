import React from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Imprint() {
  return (
    <>
      <IndexNavbar fixed />
      <div className="cyber-bg min-h-screen">
        <section className="py-16">
          <div className="container mx-auto px-4 pb-40">
            <h1 className="text-4xl font-bold text-center mt-12">
              Impressum
            </h1>
            <div className="mt-8 text-white text-lg leading-relaxed">
              <p>
                <strong>Name des Unternehmens:</strong><br />
                MG Solutions<br />
                Inhaber: Memo Güngör
              </p>
              <p className="mt-4">
                <strong>Anschrift:</strong><br />
                Im Sandkamp 16<br />
                32791 Lage<br />
                Deutschland
              </p>
              <p className="mt-4">
                <strong>Kontaktinformationen:</strong><br />
                E-Mail: info@ichwillsicherheit.de<br />
                Telefon: {['+49',' 176',' 754',' 68985'].join(' ')}
              </p>
              <p className="mt-4">
                <strong>Umsatzsteuer-Nr.:</strong><br />
                Als Kleinunternehmer im Sinne von § 19 UStG wird keine Umsatzsteuer ausgewiesen.
              </p>
              <p className="mt-4">
                <strong>Haftungsausschluss:</strong><br />
                Die Informationen auf dieser Website sind allgemeiner Natur und stellen keine rechtliche Beratung dar.
                MG Solutions übernimmt keine Haftung für die Richtigkeit, Vollständigkeit oder Aktualität der bereitgestellten Informationen.
                Die Nutzung der Informationen erfolgt auf eigene Gefahr.
              </p>
              <p className="mt-4">
                <strong>Haftung für Links:</strong><br />
                Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links.
                Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
              </p>
              <p className="mt-4">
                <strong>Datenschutzerklärung:</strong><br />
                Weitere Informationen zum Datenschutz finden Sie in unserer{" "}
                <a href="/privacy" className="text-blue-500 hover:underline">
                  Datenschutzerklärung
                </a>.
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}