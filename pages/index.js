import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import TypeIt from "typeit-react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

// Wiederverwendbare Komponenten
const PartnerLogo = ({ href, src, alt, width = 220, height = 80 }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group transition-opacity hover:opacity-85"
    aria-label={alt}
  >
    <div
      className="flex items-center justify-center"
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <img
        src={src}
        alt={alt}
        className="w-auto h-full object-contain"
        width={width}
        height={height}
        loading="lazy"
      />
    </div>
  </a>
);

const LinkCard = ({ href, iconClass, title, className = "", transparentIcon = false }) => (
  <Link
    href={href}
    className={`flex flex-col items-center justify-center border-2 text-white rounded-2xl p-8 min-w-[280px] max-w-[380px] min-h-[240px] mx-auto transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,212,255,0.06)] ${className}`}
    style={{
      backgroundColor: "rgba(0, 31, 63, 0.78)",
      borderColor: "#00FFFF",
    }}
  >
    <div
      className={transparentIcon ? "mb-6" : "mb-8 p-6 rounded-2xl bg-opacity-20"}
      style={{ backgroundColor: transparentIcon ? "transparent" : "rgba(0, 255, 255, 0.06)" }}
    >
      <i className={`${iconClass} text-4xl text-cyan-400`}></i>
    </div>
    <span className="text-lg sm:text-xl font-semibold text-center leading-tight max-w-[260px] break-words">{title}</span>
  </Link>
);

export default function Index() {
  const [showContent, setShowContent] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const router = useRouter();

  // Preloader-Logik, zeigt Intro nur einmal pro Browser-Session
  useEffect(() => {
    if (typeof window !== "undefined") {
      const hasVisited = localStorage.getItem("hasVisited");
      if (hasVisited || router.asPath !== "/") {
        setIsInitialLoad(false);
        setShowContent(true);
        return;
      }
      localStorage.setItem("hasVisited", "true");
      const timer = setTimeout(() => {
        setIsInitialLoad(false);
        setShowContent(true);
      }, 2200);
      return () => clearTimeout(timer);
    }
  }, [router.asPath]);

  if (!showContent) return null;

  return (
    <div className="flex flex-col min-h-screen relative" style={{ backgroundColor: '#0a192f', fontFamily: 'Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif' }}>
      <IndexNavbar fixed />
      <main className="cyber-bg flex-grow relative z-10">
        <section className="header relative pt-8 items-center text-center px-4 sm:px-0">
          <div className="pt-24 sm:pt-32 pb-20 max-w-6xl mx-auto px-4 sm:px-8">
            
            {/* Hero */}
            <h1 className="hero-title font-semibold text-4xl sm:text-6xl text-white">
              <TypeIt
                options={{
                  strings: ["Sicherheit beginnt mit Transparenz.", "Alles andere ist Hoffnung."],
                  speed: 50,
                  deleteSpeed: 30,
                  breakLines: true,
                  waitUntilVisible: true,
                  cursor: false,
                }}
              />
            </h1>
            <p className="mt-6 leading-relaxed max-w-3xl mx-auto" style={{ fontSize: '18px', color: '#eeeeee' }}>
              <strong style={{ color: '#d8d8d8' }}>Viele Sicherheitslösungen zeigen nur Momentaufnahmen. Wir dokumentieren, wie sich Ihre öffentliche Angriffsfläche über Zeit verändert – objektiv, passiv und nachvollziehbar.</strong>
            </p>
            <p className="mt-3 text-gray-300 max-w-3xl mx-auto" style={{ fontSize: '16px' }}>
              Angreifer arbeiten ausschließlich mit öffentlich sichtbaren Informationen.
            </p>
            <p className="mt-4 text-gray-400 text-sm sm:text-base text-center">
              <em>Für IT-Verantwortliche und Geschäftsführung</em>
            </p>

            {/* CTAs (single primary) */}
            <div className="mt-10 flex justify-center px-4 sm:px-0">
              <Link href="/contact" className="cta-button transition-all duration-300 rounded-2xl inline-flex items-center justify-center font-semibold w-full sm:w-auto max-w-md mx-auto sm:mx-0 px-6 py-3" style={{ backgroundColor: '#00d4ff', color: '#001f3f' }}>
                Kostenlose Ersteinschätzung anfordern
              </Link>
            </div>
            <div className="mt-3 text-sm text-center">
              <Link href="/pricing" className="text-cyan-200 hover:underline" aria-label="Transparente Preise ansehen">
                Transparente Preise ansehen →
              </Link>
            </div>

            {/* Exposure-Report */}
            <section className="mt-20 rounded-2xl p-8 sm:p-10 text-white max-w-4xl mx-auto card" style={{ backgroundColor: 'rgba(30,41,59,0.72)', border: '1px solid rgba(0,212,255,0.18)', backdropFilter: 'blur(10px)', boxShadow: '0 8px 28px rgba(0,212,255,0.04)' }}>
              <h3 className="text-2xl font-semibold">Was ist ein Exposure-Report?</h3>
              <p className="mt-3 text-gray-200"><strong>Ein passiver Blick auf Ihre öffentliche Sichtbarkeit</strong></p>
              <p className="mt-2 text-gray-300">Unsere Ergebnisse werden zusätzlich manuell geprüft und eingeordnet — keine Blackbox-Automation.</p>
              <p className="mt-2 text-gray-300">Unsere Analysen basieren auf etablierten OSINT-Quellen und bewährten Sicherheitsframeworks.</p>
              <ul className="mt-4 grid gap-2 text-gray-200">
                <li>✓ <strong>Keine aktiven Scans</strong> – nur öffentliche Daten</li>
                <li>✓ <strong>In 24 Stunden</strong> geliefert</li>
                <li>✓ <strong>Top-3-Risiken</strong> priorisiert</li>
              </ul>

              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg" style={{ backgroundColor: 'rgba(0,0,0,0.02)' }}>
                  <h4 className="font-semibold text-white ">Was passiert nach der kostenlosen Ersteinschätzung?</h4>
                  <ul className="mt-2 text-gray-200 text-sm list-disc list-inside">
                    <li>Wir werten öffentlich verfügbare Daten aus und identifizieren Top‑Risiken.</li>
                    <li>Wir liefern priorisierte, verständliche Handlungsempfehlungen.</li>
                    <li>Optional: kostenfreies 30‑min Review‑Call zur Besprechung.</li>
                    <li className="mt-2 text-sm text-gray-400">Falls sinnvoll, bieten wir einen einmaligen Exposure‑Report (490 €) an — ohne Abo, ohne Verpflichtung.</li>
                  </ul>
                </div>

                <div className="p-4 rounded-lg" style={{ backgroundColor: 'rgba(0,0,0,0.02)' }}>
                  <h4 className="font-semibold text-white">Was dieser Report nicht ist</h4>
                  <ul className="mt-2 text-gray-200 text-sm list-disc list-inside">
                    <li>Kein Pentest – keine exploitiven Tests.</li>
                    <li>Kein aktiver Scan oder Eingriff in Systeme.</li>
                    <li>Kein dauerhaftes Monitoring (periodische Bestandsaufnahme).</li>
                  </ul>
                </div>
              </div>

              
                <div className="mt-4">
                  <a href="/beispiel-report.pdf" download aria-label="Beispiel-Report herunterladen" className="cta-button inline-flex items-center justify-center font-semibold px-4 py-2 rounded-2xl transition-all duration-300" style={{ backgroundColor: 'rgba(0,212,255,0.12)', color: '#00d4ff' }}>
                    Beispiel-Report ansehen
                  </a>
                </div>
            </section>

            {/* For whom */}
            <section className="mt-20 max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-8 rounded-2xl text-white card" style={{ backgroundColor: 'rgba(30,41,59,0.8)', border: '1px solid rgba(0,212,255,0.12)', backdropFilter: 'blur(6px)' }}>
                <h4 className="font-semibold text-lg">Für wen?</h4>
                <h5 className="mt-3 font-semibold">IT-Verantwortliche</h5>
                <ul className="mt-2 text-gray-200">
                  <li>→ Externe Sichtbarkeit dokumentieren</li>
                  <li>→ Maßnahmen priorisieren</li>
                </ul>
              </div>
              <div className="p-8 rounded-2xl text-white card" style={{ backgroundColor: 'rgba(30,41,59,0.8)', border: '1px solid rgba(0,212,255,0.12)', backdropFilter: 'blur(6px)' }}>
                <h5 className="font-semibold">Geschäftsführung</h5>
                <ul className="mt-2 text-gray-200">
                  <li>→ Sicherheits-ROI sichtbar machen</li>
                  <li>→ Investitionen rechtfertigen</li>
                </ul>
                <div className="mt-4 text-sm">
                  <Link href="/contact" className="cta-button inline-flex items-center justify-center font-semibold px-4 py-2 rounded-2xl transition-all duration-300" style={{ backgroundColor: 'rgba(0,212,255,0.12)', color: '#00d4ff' }}>Kostenlose Ersteinschätzung anfordern</Link>
                </div>
              </div>
            </section>

            {/* FAQ teaser */}
            <section className="mt-20 max-w-4xl mx-auto text-white rounded-2xl p-8 sm:p-10 card" style={{ backgroundColor: 'rgba(30,41,59,0.8)', border: '1px solid rgba(0,212,255,0.12)' }}>
              <h4 className="font-semibold text-xl">Häufige Fragen</h4>
              <div className="mt-4 grid gap-2 text-gray-200">
                <div>
                  <strong>Werden meine Systeme gescannt?</strong>
                  <div className="text-gray-300">→ Nein, 100% passiv</div>
                </div>
                <div>
                  <strong>Wie schnell bekomme ich Ergebnisse?</strong>
                  <div className="text-gray-300">→ In 24 Stunden</div>
                </div>
              </div>
              {/* <div className="mt-4">
                <Link href="/faq" className="text-cyan-200 hover:text-white" style={{ color: '#00d4ff' }}>Alle FAQs ansehen</Link>
              </div> */}
                <div className="mt-4">
                  <Link href="/faq" className="cta-button inline-flex items-center justify-center font-semibold px-4 py-2 rounded-2xl transition-all duration-300" style={{ backgroundColor: 'rgba(0,212,255,0.12)', color: '#00d4ff' }}>Alle FAQs ansehen</Link>
                </div>
            </section>

            <style jsx>{`
              @keyframes subtlePulse {
                0% { box-shadow: 0 8px 30px rgba(0,212,255,0.04); }
                50% { box-shadow: 0 14px 40px rgba(0,212,255,0.06); }
                100% { box-shadow: 0 8px 30px rgba(0,212,255,0.04); }
              }
              .cta-pulse {
                animation: subtlePulse 4s ease-in-out infinite;
              }
              .cta-button {
                position: relative;
                overflow: hidden;
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
              }
              .cta-button::after {
                content: '';
                position: absolute;
                top: 0;
                left: -120%;
                width: 120%;
                height: 100%;
                background: linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent);
                transition: left 0.7s ease;
                pointer-events: none;
              }
              .cta-button:hover::after { left: 100%; }
              .card { transition: transform 0.3s ease, box-shadow 0.3s ease; }
              .card:hover { transform: translateY(-6px); box-shadow: 0 20px 40px rgba(0,212,255,0.06); }
            `}</style>

            {/* Partner Section */}
            <div className="mt-12 mb-8 sm:mb-12">
              <h3 className="text-center text-lg sm:text-xl text-gray-400 mb-8">
                Unsere Partner & Mitgliedschaften
              </h3>
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6 px-4">
                <PartnerLogo
                  href="https://www.cyber-sicherheitsnetzwerk.de"
                  src="/img/csn-logo.png"
                  alt="Mitglied im Cyber-Sicherheitsnetzwerk"
                  width={200}
                  height={70}
                />
              </div>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
