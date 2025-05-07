import React from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Head from "next/head";

<Head>
  <title>MG Solutions - Privatpersonen</title>
  <meta name="description" content="Sicherheitslösungen für Privatpersonen" />
</Head>

export default function BusinessPage() {
  return (
    <>
      {/* Navbar einfügen */}
      <IndexNavbar fixed />
      <div className="flex items-center justify-center h-screen bg-blueGray-100">
        <h1 className="text-3xl font-bold text-blueGray-700">
          Willkommen im Bereich für Privatpersonen.
        </h1>
        
      </div>
    </>
  );
}