import React, { useEffect } from "react";
import Link from "next/link";
import TypingEffect from "react-typing-effect";
import { particlesConfig } from "../particles-config";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";


const LinkCard = ({ href, iconClass, title }) => {
  return (
    <Link
      href={href}
      className="flex flex-col items-center justify-center w-[450px] h-[300px] border-2 text-white hover:bg-transparent hover:text-white transition duration-300 rounded-lg p-6"
      style={{
        backgroundColor: "rgba(0, 31, 63, 0.8)",
        borderColor: "#00FFFF",
        boxShadow: "0 0 15px rgba(0, 255, 255, 0.3)",
        transform: "scale(1)",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <div
        className="mb-8 p-6 rounded-full bg-opacity-20"
        style={{ backgroundColor: "rgba(0, 255, 255, 0.1)" }}
      >
        <i className={`${iconClass} text-5xl text-cyan-400`}></i>
      </div>
      <span className="text-2xl font-semibold">{title}</span>
    </Link>
  );
};

export default function Index() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("particles.js").then(() => {
        window.particlesJS("particles-js", particlesConfig);
      });
    }
  }, []);

  return (
    <>
      <IndexNavbar fixed />
      <section
        className="header relative pt-16 items-center flex h-screen max-h-860-px"
        style={{ backgroundColor: "#001f3f" }}
      >
        {/* Particles.js Canvas */}
        <div id="particles-js" className="absolute top-0 left-0 w-full h-full z-0"></div>

        <div className="container mx-auto items-center flex flex-wrap relative z-10">
          <div className="w-full px-4">
            <div className="pt-32 sm:pt-0 text-center">
              <h2 className="hero-title font-semibold text-6xl text-white">
                <TypingEffect
                  text={["Ihre digitale Zukunft sicher gestalten"]}
                  speed={50}
                  eraseDelay={1000000}
                  cursor={"!"}
                  cursorClassName="hidden-cursor"
                />
              </h2>

              <p className="mt-6 text-2xl leading-relaxed text-gray-500 max-w-3xl mx-auto">
                Wir bieten maßgeschneiderte Sicherheitslösungen, um Ihre
                wertvollen digitalen Assets zu schützen. Vertrauen Sie auf
                unsere Expertise und jahrelange Erfahrung in der
                Cybersecurity-Branche.
              </p>

              <div className="mt-16 flex justify-center flex-wrap gap-12 px-4">
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
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}