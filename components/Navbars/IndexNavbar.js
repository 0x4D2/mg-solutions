import React, { useState } from "react";
import Link from "next/link";
import IndexDropdown from "components/Dropdowns/IndexDropdown.js";

// Constants
const NAVBAR_STYLES = {
  backgroundColor: "rgba(0, 31, 63, 0.8)",
  borderBottom: "0.5px solid #00FFFF"
};

const SOCIAL_LINKS = [
  { icon: "facebook", label: "Share", href: "..." },
  { icon: "twitter", label: "Tweet", href: "..." },
  { icon: "github", label: "Star", href: "..." }
];

// Subcomponents
const Logo = () => (
  <Link href="/" passHref>
    <div className="flex flex-col cursor-pointer">
      <span className="text-3xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase flex items-center">
        <i className="fa fa-shield-alt text-cyan-400 neon-effect mr-2" />
        <span className="text-white ml-2 mr-2">MG</span>
        <span className="ml-1 text-cyan-400"> Solutions</span>
      </span>
    </div>
  </Link>
);

const SocialIcon = ({ icon, label, href }) => (
  <li className="flex items-center">
    <a
      className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className={`text-blueGray-400 fab fa-${icon} text-lg leading-lg`} />
      <span className="lg:hidden inline-block ml-2">{label}</span>
    </a>
  </li>
);

const MobileMenuButton = ({ onClick }) => (
  <button
    className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
    type="button"
    onClick={onClick}
    aria-label="Toggle menu"
  >
    <i className="fas fa-bars text-white" />
  </button>
);

const DownloadButton = () => (
  <li className="flex items-center">
    <button
      className="bg-blueGray-700 text-white active:bg-blueGray-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
      type="button"
    >
      <i className="fas fa-arrow-alt-circle-down mr-2" />
      Download
    </button>
  </li>
);

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav 
      className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg"
      style={NAVBAR_STYLES}
    >
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <Logo />
          <MobileMenuButton onClick={() => setNavbarOpen(!navbarOpen)} />
        </div>

        <div
          className={`lg:flex flex-grow items-center lg:bg-opacity-0 lg:shadow-none ${
            navbarOpen ? "block" : "hidden"
          }`}
          id="navbar-content"
        >
          <ul className="flex flex-col lg:flex-row list-none mr-auto">
            {/* Main navigation items */}
          </ul>

          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="flex items-center">
              <IndexDropdown />
            </li>

            {SOCIAL_LINKS.map((link) => (
              <SocialIcon key={link.icon} {...link} />
            ))}

            <DownloadButton />
          </ul>
        </div>
      </div>
    </nav>
  );
}