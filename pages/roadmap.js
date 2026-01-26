import React from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import Link from "next/link";

export default function Roadmap() {
  return (
    <div className="flex flex-col min-h-screen relative" style={{ backgroundColor: '#0a192f', fontFamily: 'Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif' }}>
      <IndexNavbar fixed />
      <main className="cyber-bg bg-gray-900 text-white min-h-screen flex-grow relative z-10">
        <section className="pt-16 sm:pt-20 pb-20 sm:pb-28 max-w-4xl mx-auto px-4 sm:px-8">
          <h1 className="site-title gradient-text text-center">Unsere Roadmap – Schritt für Schritt zum Überblick</h1>

          <div className="space-y-16">
            <div className="max-w-4xl mx-auto rounded-2xl p-8 sm:p-10 text-white card" style={{ backgroundColor: 'rgba(30,41,59,0.8)', border: '1px solid rgba(0,212,255,0.12)', boxShadow: '0 8px 28px rgba(0,212,255,0.04)' }}>
              <h3 className="font-semibold text-lg cyan-text">Exposure-Reports</h3>
              <p className="mt-2 text-gray-300">Monatliche Analysen Ihrer externen Sichtbarkeit – objektiv, passiv, sofort nutzbar.</p>
              <ul className="mt-3 text-gray-200 list-disc list-inside">
                <li>Top‑Risiken priorisiert</li>
                <li>Externer Exposure‑Score (1‑5)</li>
                <li>24‑h Lieferung</li>
              </ul>
            </div>

            <div className="max-w-4xl mx-auto rounded-2xl p-8 sm:p-10 text-white card" style={{ backgroundColor: 'rgba(30,41,59,0.8)', border: '1px solid rgba(0,212,255,0.12)', boxShadow: '0 8px 28px rgba(0,212,255,0.04)' }}>
              <h3 className="font-semibold text-lg cyan-text">IN ENTWICKLUNG — Erweiterte Insights & Trends</h3>
              <p className="mt-2 text-gray-300">Langfristige Entwicklung Ihrer Sicherheitslage nachvollziehbar machen.</p>
              <ul className="mt-3 text-gray-200 list-disc list-inside">
                <li>Historische Trends</li>
                <li>Subdomain- und Zertifikatsauswertung</li>
                <li>Fokus auf relevante Indikatoren</li>
              </ul>
            </div>

            <div className="max-w-4xl mx-auto rounded-2xl p-8 sm:p-10 text-white card" style={{ backgroundColor: 'rgba(30,41,59,0.8)', border: '1px solid rgba(0,212,255,0.12)', boxShadow: '0 8px 28px rgba(0,212,255,0.04)' }}>
              <h3 className="font-semibold text-lg cyan-text">IN PLANUNG — Dashboard & Automation</h3>
              <p className="mt-2 text-gray-300">Alles auf einen Blick – Entwicklungen, Reports und Warnungen optional automatisiert.</p>
              <ul className="mt-3 text-gray-200 list-disc list-inside">
                <li>Visuelle Trends</li>
                <li>Automatische Reports per E‑Mail / Slack</li>
                <li>Persönliche Historie</li>
              </ul>
            </div>

            <div className="max-w-4xl mx-auto rounded-2xl p-8 sm:p-10 text-white card" style={{ backgroundColor: 'rgba(30,41,59,0.8)', border: '1px solid rgba(0,212,255,0.12)', boxShadow: '0 8px 28px rgba(0,212,255,0.04)' }}>
              <h3 className="font-semibold text-lg cyan-text">Unser Ansatz</h3>
              <p className="mt-2 text-gray-300">Schrittweise, transparent und praxisnah. Keine leeren Versprechen, kein Security‑Theater. Wir zeigen nur, was wirklich sichtbar ist – nicht, was theoretisch möglich wäre.</p>
              <blockquote className="mt-3 italic text-gray-200">„Wir liefern Klarheit statt Komplexität.“</blockquote>
            </div>

            <div className="max-w-4xl mx-auto rounded-2xl p-8 sm:p-10 text-white card" style={{ backgroundColor: 'rgba(30,41,59,0.8)', border: '1px solid rgba(0,212,255,0.12)', boxShadow: '0 8px 28px rgba(0,212,255,0.04)' }}>
              <h4 className="font-semibold">Spezielle Anforderungen?</h4>
              <p className="mt-2 text-gray-300">Teilen Sie sie mit uns – wir priorisieren gemeinsam.</p>
              <div className="mt-4">
                <Link href="/contact" className="cta-button inline-flex items-center justify-center px-6 py-2 rounded-2xl font-semibold" style={{ backgroundColor: '#00d4ff', color: '#001f3f' }}>Kontakt für Feedback</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
