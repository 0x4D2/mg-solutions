import React from "react";
import Link from "next/link";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Pricing() {
  return (
    <div className="flex flex-col min-h-screen" style={{ backgroundColor: '#0a192f' }}>
      <IndexNavbar fixed />
      <main className="flex-grow py-20">
        <div className="container mx-auto px-4 max-w-5xl text-white">
          <section className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-semibold mb-3">Preise</h1>
            <p className="text-gray-300 max-w-2xl mx-auto">Klare, transparente Preise — ohne Abo‑Fallen. Wähle zwischen einmaligem Report oder unserem Abo.</p>
          </section>

          <section className="grid gap-8 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
            <div className="p-6 rounded-2xl card text-center" style={{ backgroundColor: 'rgba(30,41,59,0.8)', border: '1px solid rgba(0,212,255,0.08)' }}>
              <h3 className="text-xl font-semibold mb-2">Einmal-Report</h3>
              <div className="text-3xl font-bold mb-2">490 €</div>
              <div className="text-sm text-gray-300 mb-4">Einmalig, manuell geprüft</div>
              <ul className="text-gray-200 text-sm mb-6 space-y-2">
                <li>✓ Passiver Exposure-Report</li>
                <li>✓ Top‑3 Risiken</li>
                <li>✓ Priorisierte Handlungsempfehlungen</li>
              </ul>
              <Link href="/contact" className="cta-button inline-flex items-center justify-center px-4 py-2 rounded-2xl font-semibold" style={{ backgroundColor: '#00d4ff', color: '#001f3f' }}>
                Report anfordern
              </Link>
            </div>

            <div className="p-6 rounded-2xl card text-center" style={{ backgroundColor: 'rgba(30,41,59,0.8)', border: '1px solid rgba(0,212,255,0.06)' }}>
              <h3 className="text-lg font-semibold mb-2">Starter</h3>
              <div className="text-2xl font-bold mb-2">99 € / Monat</div>
              <div className="text-sm text-gray-300 mb-4">Für kleinere Teams</div>
              <ul className="text-gray-200 text-sm mb-6 space-y-2">
                <li>✓ Monatliche Übersicht</li>
                <li>✓ E-Mail‑Support</li>
                <li>✓ Basis‑Priorisierung</li>
              </ul>
              <Link href="/contact" className="cta-button inline-flex items-center justify-center px-4 py-2 rounded-2xl font-semibold" style={{ backgroundColor: '#00d4ff', color: '#001f3f' }}>
                Jetzt anfragen
              </Link>
            </div>

            <div className="p-6 rounded-2xl card text-center" style={{ backgroundColor: 'rgba(30,41,59,0.8)', border: '1px solid rgba(0,212,255,0.06)' }}>
              <h3 className="text-lg font-semibold mb-2">Business</h3>
              <div className="text-2xl font-bold mb-2">199 € / Monat</div>
              <div className="text-sm text-gray-300 mb-4">Für wachsende Teams</div>
              <ul className="text-gray-200 text-sm mb-6 space-y-2">
                <li>✓ Bi‑monatliche Checks</li>
                <li>✓ Priorisierte Empfehlungen</li>
                <li>✓ 30‑min Review‑Call</li>
              </ul>
              <Link href="/contact" className="cta-button inline-flex items-center justify-center px-4 py-2 rounded-2xl font-semibold" style={{ backgroundColor: '#00d4ff', color: '#001f3f' }}>
                Jetzt anfragen
              </Link>
            </div>

            <div className="p-6 rounded-2xl card text-center" style={{ backgroundColor: 'rgba(30,41,59,0.8)', border: '1px solid rgba(0,212,255,0.06)' }}>
              <h3 className="text-lg font-semibold mb-2">Pro</h3>
              <div className="text-2xl font-bold mb-2">349 € / Monat</div>
              <div className="text-sm text-gray-300 mb-4">Für größere Organisationen</div>
              <ul className="text-gray-200 text-sm mb-6 space-y-2">
                <li>✓ Wöchentliche Checks</li>
                <li>✓ Dedizierter Support</li>
                <li>✓ Priorisierung & Handlungssupport</li>
              </ul>
              <Link href="/contact" className="cta-button inline-flex items-center justify-center px-4 py-2 rounded-2xl font-semibold" style={{ backgroundColor: '#00d4ff', color: '#001f3f' }}>
                Jetzt anfragen
              </Link>
            </div>
          </section>

          <section className="mt-12 text-gray-300 text-sm">
            <p>Bei Fragen zu individuellen Anforderungen oder Volumenstaffelungen kontaktieren Sie uns bitte.</p>
          </section>
        </div>
      </main>
      <Footer />

      <style jsx>{`
        .cta-button { position: relative; overflow: hidden; transition: all 0.3s cubic-bezier(0.4,0,0.2,1); }
        .cta-button::after { content: ''; position: absolute; top: 0; left: -120%; width: 120%; height: 100%; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent); transition: left 0.7s ease; pointer-events: none; }
        .cta-button:hover::after { left: 100%; }
        .card { transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .card:hover { transform: translateY(-6px); box-shadow: 0 20px 40px rgba(0,212,255,0.06); }
      `}</style>
    </div>
  );
}
