import React, { useState } from "react";
import Link from "next/link";
import IndexDropdown, { NavLinksMobile } from "components/Dropdowns/IndexDropdown.js";

const NAVBAR_STYLES = {
  backgroundColor: "rgba(0, 31, 63, 0.8)",
  borderBottom: "0.5px solid #00FFFF"
};

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
          <ul className="flex flex-col lg:flex-row list-none lg:mr-auto">
            <li className="flex items-center">
              <div className="hidden lg:flex space-x-4 items-center relative">
                <IndexDropdown />
              </div>
            </li>
          </ul>

          <NavLinksMobile isOpen={navbarOpen} />
        </div>
      </div>
    </nav>
  );
}