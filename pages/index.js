/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect } from "react";
import Link from "next/link";
import TypingEffect from "react-typing-effect";
import { particlesConfig } from "../particles-config";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Index() {
  useEffect(() => {
    // Überprüfen, ob `window` verfügbar ist (nur im Browser)
    if (typeof window !== "undefined") {
      // Importiere `particles.js` dynamisch
      import("particles.js").then(() => {
        // Verwende das globale `particlesJS`-Objekt
        window.particlesJS("particles-js", particlesConfig);
      });
    }
  }, []);

  return (
    <>
      <IndexNavbar fixed />
      <section
        className="header relative pt-16 items-center flex h-screen max-h-860-px"
        style={{
          backgroundColor: "#001f3f", // Dunkelblau als Hintergrundfarbe
        }}
      >
        {/* Particles.js Canvas */}
        <div id="particles-js" className="absolute top-0 left-0 w-full h-full z-0"></div>

        <div className="container mx-auto items-center flex flex-wrap relative z-10">
          <div className="w-full px-4">
            <div className="pt-32 sm:pt-0 text-center">
              <h2 className="hero-title font-semibold text-6xl text-white">
                <TypingEffect
                  text={["Ihre digitale Zukunft sicher gestalten"]}
                  speed={50} // Geschwindigkeit des Tippens
                  eraseDelay={1000000} // Text wird nicht gelöscht
                  cursor={"!"} // Cursor wird angezeigt
                  cursorClassName="hidden-cursor" // Klasse für den Cursor
                />
              </h2>

              <p className="mt-6 text-2xl leading-relaxed text-gray-500 max-w-3xl mx-auto">
                Wir bieten maßgeschneiderte Sicherheitslösungen, um Ihre
                wertvollen digitalen Assets zu schützen. Vertrauen Sie auf
                unsere Expertise und jahrelange Erfahrung in der
                Cybersecurity-Branche.
              </p>

              <div className="mt-16 flex justify-center flex-wrap gap-12 px-4"> {/* gap-12 für 3rem Abstand, px-4 für mobile */}
                <Link
                  href="/business"
                  className="flex flex-col items-center justify-center w-[450px] h-[300px] border-2 text-white hover:bg-transparent hover:text-white transition duration-300 rounded-lg"
                  style={{
                    backgroundColor: "rgba(0, 31, 63, 0.8)",
                    borderColor: "#00FFFF",
                    boxShadow: "0 0 15px rgba(0, 255, 255, 0.3)",
                    transform: "scale(1)",
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.03)"}
                  onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
                >
                  <div className="mb-8 p-6 rounded-full bg-opacity-20" style={{ backgroundColor: "rgba(0, 255, 255, 0.1)" }}>
                    <i className="fas fa-building text-5xl text-cyan-400"></i>
                  </div>
                  <span className="text-2xl font-semibold">Für Unternehmen</span>
                </Link>
                     <div className="w-10 h-10"></div>

                <Link
                  href="/private"
                  className="flex flex-col items-center justify-center w-[450px] h-[300px] border-2 text-white hover:bg-transparent hover:text-white transition duration-300 rounded-lg"
                  style={{
                    backgroundColor: "rgba(0, 31, 63, 0.8)",
                    borderColor: "#00FFFF",
                    boxShadow: "0 0 15px rgba(0, 255, 255, 0.3)",
                    transform: "scale(1)",
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.03)"}
                  onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
                >
                  <div className="mb-8 p-6 rounded-full bg-opacity-20" style={{ backgroundColor: "rgba(0, 255, 255, 0.1)" }}>
                    <i className="fas fa-user-shield text-5xl text-cyan-400"></i>
                  </div>
                  <span className="text-2xl font-semibold">Für Privatkunden</span>
                </Link>

                
              </div>
              
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}