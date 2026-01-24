import React from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import Link from "next/link";

export default function Roadmap() {
  return (
    <div className="flex flex-col min-h-screen relative" style={{ backgroundColor: '#0a192f', fontFamily: 'Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif' }}>
      <IndexNavbar fixed />
      <main className="flex-grow relative z-10">
        <section className="pt-24 pb-20 max-w-4xl mx-auto px-4 sm:px-8 text-white">
          <h1 className="text-4xl font-semibold">Roadmap</h1>
          <p className="mt-4 text-gray-300">Hier finden Sie unsere geplanten Funktionen und Meilensteine. Diese Seite ist ein Platzhalter — Ergänzungen folgen.</p>

          <div className="mt-8 grid gap-4">
            <div className="p-6 rounded-2xl" style={{ backgroundColor: 'rgba(30,41,59,0.8)', border: '1px solid rgba(0,212,255,0.08)' }}>
              <h3 className="font-semibold">Kurzfristig</h3>
              <ul className="mt-2 text-gray-200 list-disc list-inside">
                <li>Public sample report als Download bereitstellen</li>
                <li>Feinschliff an Preisen und CTAs</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl" style={{ backgroundColor: 'rgba(30,41,59,0.75)', border: '1px solid rgba(0,212,255,0.06)' }}>
              <h3 className="font-semibold">Mittelfristig</h3>
              <ul className="mt-2 text-gray-200 list-disc list-inside">
                <li>Abonnements-Dashboard</li>
                <li>Automatische Berichts-Historie</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl" style={{ backgroundColor: 'rgba(30,41,59,0.7)', border: '1px solid rgba(0,212,255,0.04)' }}>
              <h3 className="font-semibold">Langfristig</h3>
              <ul className="mt-2 text-gray-200 list-disc list-inside">
                <li>Integrationen (SIEM, Ticketing)</li>
                <li>Realtime Alerts (opt-in)</li>
              </ul>
            </div>
          </div>

          <div className="mt-8">
            <Link href="/contact" className="cta-button inline-flex items-center justify-center font-semibold px-4 py-2 rounded-2xl" style={{ backgroundColor: '#00d4ff', color: '#001f3f' }}>Kontakt für Feedback</Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
