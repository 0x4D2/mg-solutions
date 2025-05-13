import React from "react";

export default function Footer() {
  return (
    <>
      {/* Obere Linie mit Farbverlauf */}
      <div
        className="h-2 w-full"
        style={{
          background: "linear-gradient(to right, #000000, #00FFFF)", // Farbverlauf von Schwarz zu Neonblau
        }}
      ></div>

      <footer
        className="relative pt-8 pb-6"
        style={{
          backgroundColor: "#000000", // Schwarzer Hintergrund
        }}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-center lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl font-semibold text-white">
                Bleiben Sie mit uns in Kontakt!
              </h4>
              <h5 className="text-lg mt-0 mb-2 text-white">
                Folgen Sie uns auf unseren Social-Media-Kanälen oder
                kontaktieren Sie uns direkt.
              </h5>
              <div className="mt-6 lg:mb-0 mb-6 flex justify-center space-x-2">
                <a
                  href="https://twitter.com/willsicherheit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-transparent text-white shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="https://instagram.com/ichwillsicherheit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-transparent text-white shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="https://www.tiktok.com/@ichwillsicherheit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-transparent text-white shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none"
                >
                  <i className="fab fa-tiktok"></i>
                </a>
                <a
                  href="https://linkedin.com/in/ichwillsicherheit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-transparent text-white shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a
                  href="https://www.youtube.com/@ichwillsicherheit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-transparent text-white shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none"
                >
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-white text-sm font-semibold mb-2">
                    Nützliche Links
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-white hover:text-gray-300 font-semibold block pb-2 text-sm"
                        href="/about"
                      >
                        Über uns
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-white hover:text-gray-300 font-semibold block pb-2 text-sm"
                        href="/contact"
                      >
                        Kontakt
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-white hover:text-gray-300 font-semibold block pb-2 text-sm"
                        href="/privacy"
                      >
                        Datenschutz
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-white hover:text-gray-300 font-semibold block pb-2 text-sm"
                        href="/imprint"
                      >
                        Impressum
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr
            className="my-6 border-0 h-1"
            style={{
              background: "linear-gradient(to right, #000000, #00FFFF)", // Farbverlauf von Schwarz zu Neonblau
            }}
          />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-white font-semibold py-1">
                © {new Date().getFullYear()} MG Solutions. Alle Rechte
                vorbehalten.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}