import React from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Privacy() {
    return (
        <>
            <IndexNavbar fixed />
            <div className="cyber-bg">
            <div className="container mx-auto px-4 pt-16 pb-40">
                <h1 className="text-4xl font-bold text-center mt-12">
                    Datenschutzerklärung
                </h1>
                <div className="mt-8 text-white text-lg leading-relaxed">
                    <p>
                        <strong>1. Allgemeine Hinweise:</strong><br />
                        Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                    </p>
                    <p className="mt-4">
                        <strong>2. Verantwortliche Stelle:</strong><br />
                        Memo Güngör (Inhaber von MG Solutions)<br />
                        Im Sandkamp 16, 32791 Lage<br />
                        E-Mail: info@ichwillsicherheit.de
                    </p>
                    <p className="mt-4">
                        <strong>3. Gesammelte personenbezogene Daten:</strong><br />
                        Wir erheben und verarbeiten folgende personenbezogene Daten:<br />
                        - Name<br />
                        - E-Mail-Adresse<br />
                        - Telefonnummer<br />
                        - IP-Adresse (bei Nutzung der Website)<br />
                        - (Falls relevant) Zahlungsdaten
                    </p>
                    <p className="mt-4">
                        <strong>4. Zweck der Datenerhebung:</strong><br />
                        Die Erhebung und Verarbeitung Ihrer Daten erfolgt zu folgenden Zwecken:<br />
                        - Kontaktaufnahme<br />
                        - Vertragsabwicklung<br />
                        - Rechnungsstellung<br />
                        - Marketing<br />
                        - Newsletterversand
                    </p>
                    <p className="mt-4">
                        <strong>5. Ihre Rechte:</strong><br />
                        Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung Ihrer Daten. Zudem können Sie der Verarbeitung widersprechen und Ihr Recht auf Datenübertragbarkeit geltend machen.
                    </p>
                    <p className="mt-4">
                        <strong>6. Kontakt:</strong><br />
                        Bei Fragen zum Datenschutz können Sie uns unter info@ichwillsicherheit.de kontaktieren.
                    </p>
                    <p className="mt-4">
                        <strong>7. Rechtsgrundlage der Datenverarbeitung:</strong><br />
                        Die Verarbeitung Ihrer Daten erfolgt auf Grundlage von Art. 6 Abs. 1 DSGVO:<br />
                        - Zur Erfüllung eines Vertrags oder vorvertraglicher Maßnahmen (lit. b).<br />
                        - Zur Erfüllung rechtlicher Verpflichtungen (lit. c).<br />
                        - Aufgrund Ihrer Einwilligung (lit. a).<br />
                        - Zur Wahrung berechtigter Interessen (lit. f), sofern Ihre Interessen oder Grundrechte nicht überwiegen.
                    </p>
                    <p className="mt-4">
                        <strong>8. Speicherdauer:</strong><br />
                        Ihre personenbezogenen Daten werden nur so lange gespeichert, wie es für die Erfüllung der oben genannten Zwecke erforderlich ist oder wie es gesetzliche Aufbewahrungsfristen vorsehen. Nach Ablauf dieser Fristen werden die Daten gelöscht.
                    </p>
                    <p className="mt-4">
                        <strong>9. Cookies und Tracking:</strong><br />
                        Unsere Website verwendet Cookies, um die Benutzerfreundlichkeit zu verbessern und bestimmte Funktionen bereitzustellen. Weitere Informationen finden Sie in unserer{" "}
                        <a href="/cookies" className="text-blue-500 hover:underline">
                            Cookie-Richtlinie
                        </a>.
                    </p>
                    <p className="mt-4">
                        <strong>10. Weitergabe von Daten an Dritte:</strong><br />
                        Ihre Daten werden nur an Dritte weitergegeben, wenn dies zur Erfüllung eines Vertrags erforderlich ist, Sie ausdrücklich eingewilligt haben oder wir gesetzlich dazu verpflichtet sind. Beispiele hierfür sind:<br />
                        - Zahlungsdienstleister<br />
                        - Hosting-Anbieter<br />
                        - Versanddienstleister
                    </p>
                    <p className="mt-4">
                        <strong>11. Sicherheit Ihrer Daten:</strong><br />
                        Wir setzen technische und organisatorische Maßnahmen ein, um Ihre Daten vor unbefugtem Zugriff, Verlust oder Missbrauch zu schützen. Unsere Sicherheitsmaßnahmen werden regelmäßig überprüft und an den Stand der Technik angepasst.
                    </p>
                    <p className="mt-4">
                        <strong>12. Aktualisierung der Datenschutzerklärung:</strong><br />
                        Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf anzupassen, um sie an geänderte rechtliche oder technische Anforderungen anzupassen. Die aktuelle Version finden Sie stets auf unserer Website.
                    </p>
                </div>
            </div>
            </div>
            <Footer />
            
        </>
    );
}