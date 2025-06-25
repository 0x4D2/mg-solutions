import React from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Cookies() {
  return (
    <>
      <IndexNavbar fixed />
      <div className="cyber-bg">
        <div className="container mx-auto px-4 pt-16 pb-40">
          <h1 className="text-4xl font-bold text-center mt-12">
            Cookie-Richtlinie
          </h1>
          <div className="mt-8 text-white text-lg leading-relaxed">
            <p>
              <strong>1. Was sind Cookies?</strong><br />
              Cookies sind kleine Textdateien, die von Ihrem Browser auf Ihrem Endgerät gespeichert werden, wenn Sie unsere Website besuchen. Sie richten keinen Schaden an und enthalten keine Viren.
            </p>
            <p className="mt-4">
              <strong>2. Welche Cookies verwenden wir?</strong><br />
              Wir verwenden sowohl technisch notwendige Cookies (z.B. für die Seitennavigation und grundlegende Funktionen) als auch – sofern Sie zustimmen – optionale Cookies für Analyse und Marketing.
            </p>
            <p className="mt-4">
              <strong>3. Zweck der Cookies:</strong><br />
              - Sicherstellung der Funktionalität der Website<br />
              - Analyse des Nutzerverhaltens zur Optimierung unseres Angebots<br />
              - Speicherung Ihrer Einstellungen (z.B. Sprache, Cookie-Auswahl)
            </p>
            <p className="mt-4">
              <strong>4. Cookie-Einstellungen ändern:</strong><br />
              Sie können Ihre Cookie-Einstellungen jederzeit in Ihrem Browser anpassen oder bereits gesetzte Cookies löschen. Die Vorgehensweise ist je nach Browser unterschiedlich. Bitte beachten Sie, dass bei der Deaktivierung von Cookies die Funktionalität der Website eingeschränkt sein kann.
            </p>
            <p className="mt-4">
              <strong>5. Drittanbieter-Cookies:</strong><br />
              Sofern wir Dienste von Drittanbietern (z.B. Google Analytics) einsetzen, werden Sie beim ersten Besuch der Seite um Ihre Einwilligung gebeten. Details finden Sie ggf. in dieser Richtlinie oder in unserer Datenschutzerklärung.
            </p>
            <p className="mt-4">
              <strong>6. Weitere Informationen:</strong><br />
              Weitere Informationen zum Umgang mit Ihren Daten finden Sie in unserer {" "}
              <a href="/privacy" className="text-blue-500 hover:underline">Datenschutzerklärung</a>.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
