import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import TypeIt from "typeit-react";
import { particlesConfig } from "../particles-config";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

// Wiederverwendbare Logo-Komponente
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

const LinkCard = ({ href, iconClass, title, className = "" }) => {
  return (
    <Link
      href={href}
      className={`flex flex-col items-center justify-center border-2 text-white 
                 hover:bg-transparent hover:text-white transition duration-300 
                 rounded-2xl p-8 min-w-[280px] max-w-[360px] min-h-[260px] 
                 mx-auto ${className}`}
      style={{
        backgroundColor: "rgba(0, 31, 63, 0.85)",
        borderColor: "#00FFFF",
        boxShadow: "0 0 15px rgba(0, 255, 255, 0.3)",
        transform: "scale(1)",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <div
        className="mb-8 p-6 rounded-2xl bg-opacity-20"
        style={{ backgroundColor: "rgba(0, 255, 255, 0.1)" }}
      >
        <i className={`${iconClass} text-5xl text-cyan-400`}></i>
      </div>
      <span className="text-2xl font-semibold">{title}</span>
    </Link>
  );
};

export default function Index() {
  const [showContent, setShowContent] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const router = useRouter();

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

  useEffect(() => {
    if (showContent && typeof window !== "undefined") {
      import("particles.js").then(() => {
        if (document.getElementById("particles-js")) {
          window.particlesJS("particles-js", particlesConfig);
        }
      });
    }
  }, [showContent]);

  // Remove Preloader logic: always show content
  if (!showContent) {
    return null;
  }

  return (
    <>
      {showContent && (
        <div className="flex flex-col min-h-screen">
          <IndexNavbar fixed />
          <main className="flex-grow">
            <section
              className="header relative pt-16 items-center"
              style={{ backgroundColor: "#001f3f" }}
            >
              <div id="particles-js" className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden"></div>
              <div className="container mx-auto px-4 relative z-10">
                <div className="pt-32 sm:pt-0 text-center pb-12">
                  <h2 className="hero-title font-semibold text-4xl sm:text-6xl text-white">
                    <TypeIt
                      options={{
                        strings: ["Ihre digitale Zukunft sicher gestalten"],
                        speed: 50,
                        waitUntilVisible: true,
                        cursor: true
                      }}
                    />
                  </h2>
                  <p className="mt-6 text-xl sm:text-2xl leading-relaxed text-gray-500 max-w-3xl mx-auto">
                    Wir bieten maßgeschneiderte Sicherheitslösungen, um Ihre
                    wertvollen digitalen Assets zu schützen.
                  </p>

                  <div className="mt-16 grid gap-8 sm:gap-10 justify-center"
                    style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
                    <LinkCard
                      href="/business"
                      iconClass="fas fa-building"
                      title="Für Unternehmen"
                    />
                    <LinkCard
                      href="/private"
                      iconClass="fas fa-user-shield"
                      title="Für Privatkunden"
                    />
                  </div>

                  <div className="mt-12 mb-8 sm:mb-12">
                    <h3 className="text-center text-lg sm:text-xl text-gray-500 mb-6">
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
              </div>
            </section>
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}