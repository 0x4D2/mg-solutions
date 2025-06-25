import React from "react";

export default function Footer() {
  return (
    <>
      {/* Obere Linie mit Farbverlauf */}
      <div
        className="h-2 w-full"
        style={{
          background: "linear-gradient(to right, #000000, #00FFFF)",
        }}
      ></div>

      <footer className="bg-black pt-8 pb-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-center lg:text-left">
            {/* Linke Seite */}
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl font-semibold text-white">
                Bleiben Sie mit uns in Kontakt!
              </h4>
              <h5 className="text-lg mt-0 mb-2 text-white">
                Folgen Sie uns auf unseren Social-Media-Kanälen oder
                kontaktieren Sie uns direkt.
              </h5>
              <div className="mt-6 flex justify-center lg:justify-start space-x-2">
                {[
                  { href: "https://twitter.com/willsicherheit", icon: "fab fa-twitter" },
                  { href: "https://instagram.com/ichwillsicherheit", icon: "fab fa-instagram" },
                  { href: "https://www.tiktok.com/@ichwillsicherheit", icon: "fab fa-tiktok" },
                  { href: "https://linkedin.com/company/ichwillsicherheit", icon: "fab fa-linkedin" },
                  { href: "https://www.youtube.com/@ichwillsicherheit", icon: "fab fa-youtube" },
                ].map((link, idx) => (
                  <a
                    key={idx}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-transparent text-white shadow-lg h-10 w-10 flex items-center justify-center rounded-full"
                  >
                    <i className={link.icon}></i>
                  </a>
                ))}
              </div>
            </div>

            {/* Rechte Seite */}
            <div className="w-full lg:w-6/12 px-4 mt-10 lg:mt-0">
              <div className="flex flex-wrap justify-center lg:justify-end">
                <div className="w-full lg:w-4/12">
                  <span className="block uppercase text-white text-sm font-semibold mb-2">
                    Nützliche Links
                  </span>
                  <ul className="list-none">
                    {[
                      { text: "Über uns", href: "/about" },
                      { text: "Kontakt", href: "/contact" },
                      { text: "Datenschutz", href: "/privacy" },
                      { text: "Impressum", href: "/imprint" },
                    ].map((link, idx) => (
                      <li key={idx}>
                        <a
                          href={link.href}
                          className="text-white hover:text-gray-300 font-semibold block pb-2 text-sm"
                        >
                          {link.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Trennlinie */}
          <hr
            className="my-6 border-0 h-1"
            style={{
              background: "linear-gradient(to right, #000000, #00FFFF)",
            }}
          />

          {/* Copyright */}
          <div className="flex flex-wrap items-center justify-center">
            <div className="w-full md:w-4/12 px-4 text-center">
              <p className="text-sm text-white font-semibold py-1">
                © {new Date().getFullYear()} MG Solutions. Alle Rechte vorbehalten.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
