import React, { useState } from "react";
import Link from "next/link";
import IndexDropdown, { NavLinksMobile } from "components/Dropdowns/IndexDropdown.js";

const NAVBAR_STYLES = {
  backgroundColor: "rgba(0, 31, 63, 0.8)",
  borderBottom: "0.5px solid #00FFFF"
};

const NAV_LINK_STYLES =
  "glow-link font-semibold px-3 py-2 text-lg block cursor-pointer";

const Logo = () => (
  <Link href="/" passHref legacyBehavior>
    <a className="flex items-center cursor-pointer" aria-label="Zur Startseite">
      <img
        src="/img/mg-solutions-logo.png"
        alt="MG Solutions Logo"
        className="h-12 w-auto mr-2 drop-shadow-lg"
        style={{ maxHeight: 48 }}
      />
    </a>
  </Link>
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

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav
      className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg"
      style={NAVBAR_STYLES}
    >
      <div className="container px-4 mx-auto flex flex-row items-center justify-between">
        {/* Logo immer ganz links */}
        <div className="flex items-center flex-shrink-0 mr-4">
          <Logo />
        </div>
        {/* Desktop-Links immer ganz rechts */}
        <div className="hidden lg:flex flex-1 justify-end items-center">
          <IndexDropdown navLinkClassName={NAV_LINK_STYLES} alwaysShowAbout />
        </div>
        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <MobileMenuButton onClick={() => setNavbarOpen(!navbarOpen)} />
        </div>
      </div>
      {/* Mobile Nav (unterhalb der Navbar) */}
      <div className={`lg:hidden w-full ${navbarOpen ? "block" : "hidden"}`}>
        <NavLinksMobile isOpen={navbarOpen} navLinkClassName={NAV_LINK_STYLES} />
      </div>
    </nav>
  );
}