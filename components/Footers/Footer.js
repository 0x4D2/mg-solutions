import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="relative bg-blueGray-200 pt-8 pb-6">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-center lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl font-semibold">Bleiben Sie mit uns in Kontakt!</h4>
              <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
                Folgen Sie uns auf unseren Social-Media-Kanälen oder kontaktieren Sie uns direkt.
              </h5>
              <div className="mt-6 lg:mb-0 mb-6 flex justify-center space-x-2">
  <a
    href="https://twitter.com/willsicherheit"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none"
  >
    <i className="fab fa-twitter"></i>
  </a>
  {/* <a
    href="https://facebook.com/ichwillsicherheit"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none"
  >
    <i className="fab fa-facebook-square"></i>
  </a> */}
  <a
    href="https://instagram.com/ichwillsicherheit"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none"
  >
    <i className="fab fa-instagram"></i>
  </a>
  <a
    href="https://www.tiktok.com/@ichwillsicherheit"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white text-black shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none"
  >
    <i className="fab fa-tiktok"></i>
  </a>
  <a
    href="https://linkedin.com/in/ichwillsicherheit"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white text-blue-700 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none"
  >
    <i className="fab fa-linkedin"></i>
  </a>
  {/* <a
    href="https://github.com/ichwillsicherheit"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none"
  >
    <i className="fab fa-github"></i>
  </a> */}
</div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                    Nützliche Links
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="/about"
                      >
                        Über uns
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="/contact"
                      >
                        Kontakt
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="/privacy"
                      >
                        Datenschutz
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
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
          <hr className="my-6 border-blueGray-300" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-blueGray-500 font-semibold py-1">
                © {new Date().getFullYear()} MG Solutions. Alle Rechte vorbehalten.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}