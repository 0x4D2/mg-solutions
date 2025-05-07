import React from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function BusinessPage() {
  return (
    <>
      {/* Navbar einfügen */}
      <IndexNavbar fixed />
      <div className="flex items-center justify-center h-screen bg-blueGray-100">
        <h1 className="text-3xl font-bold text-blueGray-700">
          Willkommen im Bereich für Unternehmen
        </h1>
      </div>
      {/* Footer einfügen */}
      <Footer />
    </>
  );
}