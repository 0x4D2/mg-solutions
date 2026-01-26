import React from "react";
import Link from "next/link";

export default function Exposure() {
  return (
    <main className="container mx-auto px-4 py-16">
      <h1 className="site-title gradient-text text-4xl font-bold mb-6">
        Exposure
      </h1>
      <p className="text-lg text-gray-200">
        Diese Seite ist vorübergehend ein Platzhalter.
      </p>
      <div className="mt-6">
        <Link href="/" legacyBehavior>
          <a className="text-cyan-300 font-semibold">Zur Startseite</a>
        </Link>
      </div>
    </main>
  );
}
