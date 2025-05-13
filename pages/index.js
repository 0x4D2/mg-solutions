/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Link from "next/link";
import TypingEffect from "react-typing-effect";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Index() {
  return (
    <>
      <IndexNavbar fixed />
      {/* Hero Section */}
      <section
        className="header relative pt-16 items-center flex h-screen max-h-860-px"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), 
            url('https://cdn.pixabay.com/photo/2018/05/04/15/49/cyber-security-3374252_1280.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
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

              <div className="mt-16 flex justify-center items-center gap-10 flex-wrap">
                <Link
                  href="/business"
                  className="flex flex-col items-center justify-center w-80 h-60 border border-cyan-400 text-white hover:bg-cyan-400 hover:text-white transition duration-300 rounded-md"
                >
                  <i className="fas fa-building text-4xl text-cyan-400 mb-6"></i>
                  <span className="text-2xl font-semibold">Für Unternehmen</span>
                </Link>

                {/* Unsichtbare Box für Abstand */}
                <div className="w-10 h-10"></div>

                <Link
                  href="/private"
                  className="flex flex-col items-center justify-center w-80 h-60 border border-cyan-400 text-white hover:bg-cyan-400 hover:text-white transition duration-300 rounded-md"
                >
                  <i className="fas fa-user-shield text-4xl text-cyan-400 mb-6"></i>
                  <span className="text-2xl font-semibold">Für Privatkunden</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kundenvertrauen Section */}
      <div className="py-20 bg-gray-900">
        <h2 className="text-4xl font-bold text-center text-cyan-400 mb-6">
          UNSERE KUNDEN VERTRAUEN UNS
        </h2>
        <p className="text-center text-gray-400 mb-12">
          Wir sind stolz auf die Zusammenarbeit mit führenden Unternehmen und Organisationen.
        </p>
        <div className="flex justify-center items-center gap-8 flex-wrap">
          {/* Kundenlogos */}
          <div className="w-32 h-16 bg-gray-800 rounded-md flex items-center justify-center">
            <span className="text-gray-500">Kundenlogo 1</span>
          </div>
          <div className="w-32 h-16 bg-gray-800 rounded-md flex items-center justify-center">
            <span className="text-gray-500">Kundenlogo 2</span>
          </div>
          <div className="w-32 h-16 bg-gray-800 rounded-md flex items-center justify-center">
            <span className="text-gray-500">Kundenlogo 3</span>
          </div>
          <div className="w-32 h-16 bg-gray-800 rounded-md flex items-center justify-center">
            <span className="text-gray-500">Kundenlogo 4</span>
          </div>
          <div className="w-32 h-16 bg-gray-800 rounded-md flex items-center justify-center">
            <span className="text-gray-500">Kundenlogo 5</span>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}