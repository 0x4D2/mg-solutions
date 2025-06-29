import React, { useState } from "react";
import Link from "next/link";

const ALL_NAV_LINKS = [
  { name: "Startseite", path: "/" },
  { name: "Für Unternehmen", path: "/business" },
  { name: "Für Privatkunden", path: "/private" },
  { name: "Über uns", path: "/about" },
  { name: "FAQ", path: "/faq" },
  { name: "Kontakt", path: "/contact" },
  { name: "Impressum", path: "/imprint" },
  { name: "Datenschutz", path: "/privacy" }
];

export const NavLinksDesktop = ({ navLinkClassName = "", alwaysShowAbout }) => {
  // Immer die ersten 4 Links anzeigen, inkl. Über uns
  const maxVisible = alwaysShowAbout ? 4 : 3;
  const visibleLinks = ALL_NAV_LINKS.slice(0, maxVisible);
  const extraLinks = ALL_NAV_LINKS.slice(maxVisible);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="hidden lg:flex space-x-4 items-center relative">
      {visibleLinks.map((link) => (
        <Link
          key={link.path}
          href={link.path}
          className={navLinkClassName + " px-3 py-2 text-lg font-bold"}
        >
          {link.name}
        </Link>
      ))}

      {extraLinks.length > 0 && (
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className={navLinkClassName + " px-3 py-2 text-lg font-bold"}
          >
            Mehr ▾
          </button>

          {dropdownOpen && (
            <div className=" dropdown-fixed absolute right-0 top-full mt-2 w-48 bg-gray-800 rounded-lg py-2 z-[9999] shadow-lg">
              {extraLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  style={{ textAlign: "left" }}
                  className={"block px-4 py-2 " + navLinkClassName + " transition-colors duration-150 hover:bg-gray-700"}
                  onClick={() => setDropdownOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export const NavLinksMobile = ({ isOpen, navLinkClassName = "" }) => {
  if (!isOpen) return null;

  return (
    <div className="lg:hidden flex flex-col space-y-3 mt-4 pl-4 bg-blue-900">
      {ALL_NAV_LINKS.map((link) => (
        <Link
          key={link.path}
          href={link.path}
          className={navLinkClassName + " py-3 text-lg font-medium border-b border-blue-700"}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
};

const IndexDropdown = (props) => <NavLinksDesktop {...props} />;

export default IndexDropdown;