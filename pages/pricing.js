import React from "react";
import Link from "next/link";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import ParticlesBg from "components/ParticlesBg";

export default function Pricing() {
  return (
    <div className="flex flex-col min-h-screen relative" style={{ backgroundColor: '#0a192f', fontFamily: 'Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif' }}>
      <IndexNavbar fixed />
      <main className="cyber-bg flex-grow relative z-10 py-20">
        <div className="container mx-auto px-4 max-w-5xl text-white">
          <section className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-semibold mb-3">Preise</h1>
            <p className="text-gray-300 max-w-2xl mx-auto">Klare, transparente Preise — ohne Abo‑Fallen. Wähle zwischen einmaligem Report oder unserem Abo.</p>
          </section>


            <section className="grid gap-16 lg:gap-20 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
              {/* Free Assessment - Lead Magnet (compact) */}
              <div className="p-6 rounded-2xl card text-center" style={{ backgroundColor: 'rgba(30,41,59,0.8)', border: '1px solid rgba(0,212,255,0.06)' }}>
                <h3 className="text-lg font-semibold mb-2 text-center">Kostenlose Ersteinschätzung (einmalig)</h3>
                <div className="text-sm text-gray-300 mb-4 text-center">Limitierte Einführung (kein Abo)</div>
                <ul className="text-gray-200 text-sm mb-6 space-y-2 text-left list-disc list-inside mx-auto max-w-[280px]">
                  <li>• 1 Asset/IP</li>
                  <li>• Exposure‑Level + Top 3 Risiken</li>
                  <li>• 1‑seitige Management Summary</li>
                  <li>• Keine historischen Daten</li>
                </ul>
                <Link href="/contact?assessment=free" className="cta-button inline-flex items-center justify-center px-4 py-2 rounded-2xl font-semibold cta-pulse" style={{ backgroundColor: '#00d4ff', color: '#001f3f' }} aria-label="Kostenlose Analyse starten">
                  Kostenlos testen
                </Link>
              </div>

              {/* Essential (5 Assets) - Entry */}
              <div className="p-6 rounded-2xl card text-center" style={{ backgroundColor: 'rgba(30,41,59,0.8)', border: '1px solid rgba(0,212,255,0.06)' }}>
                <h3 className="text-lg font-semibold mb-2">Essential</h3>
                <div className="text-2xl font-bold mb-2 text-center">99 € / Monat</div>
                <div className="text-sm text-gray-300 mb-4 text-center">Bis zu 5 Assets — Für kleine Teams</div>
                <ul className="text-gray-200 text-sm mb-6 space-y-2 text-left list-disc list-inside mx-auto max-w-[280px]">
                  <li>• Vollständiger Exposure‑Report (~9 Seiten)</li>
                  <li>• Monatliche Trendanalyse</li>
                  <li>• E‑Mail‑Benachrichtigungen</li>
                  <li>• 1×/Quartal Review‑Call (30min)</li>
                </ul>
                <Link href="/contact?plan=essential" className="cta-button inline-flex items-center justify-center px-4 py-3 rounded-2xl font-semibold" style={{ backgroundColor: '#00d4ff', color: '#001f3f' }}>
                  Für kleine Teams
                </Link>
              </div>

              {/* Professional - Most Popular (20 Assets) */}
              <div className="p-6 rounded-2xl card text-center featured-card" style={{ backgroundColor: 'rgba(30,41,59,0.8)', border: '1px solid rgba(0,212,255,0.06)' }}>
                <div className="feature-badge">🔥 MEISTGEWÄHLT</div>
                <h3 className="text-lg font-semibold mb-2 text-center">Professional</h3>
                <div className="text-2xl font-bold mb-2 text-center">199 € / Monat</div>
                <div className="text-sm text-gray-300 mb-4 text-center">Bis zu 20 Assets — Empfohlen für KMU</div>
                <ul className="text-gray-200 text-sm mb-6 space-y-2 text-left list-disc list-inside mx-auto max-w-[280px]">
                  <li>• Vollständiger Exposure‑Report (~9 Seiten)</li>
                  <li>• Monatliche Trendanalyse</li>
                  <li>• E‑Mail‑Benachrichtigungen</li>
                  <li>• Monatlicher Review‑Call (30min)</li>
                </ul>
                <Link href="/contact?plan=professional" className="cta-button inline-flex items-center justify-center px-4 py-3 rounded-2xl font-semibold" style={{ backgroundColor: '#00d4ff', color: '#001f3f' }}>
                  Professional wählen
                </Link>
              </div>

              {/* Corporate (50 Assets) */}
              <div className="p-6 rounded-2xl card text-center" style={{ backgroundColor: 'rgba(30,41,59,0.8)', border: '1px solid rgba(0,212,255,0.06)' }}>
                <h3 className="text-lg font-semibold mb-2 text-center">Corporate</h3>
                <div className="text-2xl font-bold mb-2 text-center">349 € / Monat</div>
                <div className="text-sm text-gray-300 mb-4 text-center">Bis zu 50 Assets — Für Compliance‑anforderungen</div>
                <ul className="text-gray-200 text-sm mb-6 space-y-2 text-left list-disc list-inside mx-auto max-w-[280px]">
                  <li>• Vollständiger Exposure‑Report (~9 Seiten)</li>
                  <li>• Monatliche Trendanalyse</li>
                  <li>• E‑Mail‑Benachrichtigungen</li>
                  <li>• Monatlicher Review‑Call (30min)</li>
                </ul>
                <Link href="/contact?plan=corporate" className="cta-button inline-flex items-center justify-center px-4 py-2 rounded-2xl font-semibold" style={{ backgroundColor: '#00d4ff', color: '#001f3f' }}>
                  Für Unternehmen
                </Link>
              </div>
            </section>

            {/* Usage note and de-emphasized one-off report */}
            <section className="mt-6 text-gray-300 text-sm text-center">
              <p>Basis: 99€/Monat inkl. 5 Assets — zusätzliches Asset: <strong>+15€/Monat</strong> (optional)</p>
            </section>

            {/* Einmal-Report de-emphasized and moved down */}
            <section className="mt-8">
              <div className="p-6 rounded-2xl card text-center max-w-3xl mx-auto" style={{ backgroundColor: 'rgba(20,28,43,0.65)', border: '1px solid rgba(0,212,255,0.04)' }}>
                <h3 className="text-lg font-semibold mb-2">Einmaliger Report</h3>
                <div className="text-2xl font-bold mb-2">490 €</div>
                <div className="text-sm text-gray-300 mb-4">Für spezielle Anlässe – Audit & Compliance</div>
                <ul className="text-gray-200 text-sm mb-6 space-y-2 text-left list-disc list-inside mx-auto max-w-[520px]">
                  <li>Einmalige, manuell geprüfte Analyse</li>
                  <li>Priorisierte Handlungsempfehlungen</li>
                  <li>Keine Abo-Verpflichtung</li>
                </ul>
                <Link href="/contact?product=oneoff" className="inline-flex items-center justify-center px-4 py-2 rounded-2xl font-semibold" style={{ backgroundColor: 'transparent', color: '#00d4ff', border: '1px solid rgba(0,212,255,0.12)' }}>
                  Für Audit/Compliance anfragen
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
        .cta-button { position: relative; overflow: hidden; transition: all 0.28s cubic-bezier(0.4,0,0.2,1); }
        .cta-button::after { content: ''; position: absolute; top: 0; left: -120%; width: 120%; height: 100%; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent); transition: left 0.7s ease; pointer-events: none; }
        .cta-button:hover::after { left: 100%; }
        .cta-button:hover { transform: translateY(-4px) scale(1.02); box-shadow: 0 10px 30px rgba(0,0,0,0.18); }
        .card { transition: transform 0.3s ease, box-shadow 0.3s ease; display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; }
        .card:hover { transform: translateY(-6px); box-shadow: 0 20px 40px rgba(0,212,255,0.06); }
        .featured-card { border-color: rgba(0,212,255,0.18); box-shadow: 0 28px 60px rgba(0,212,255,0.08); transform: translateY(-2px); background: linear-gradient(180deg, rgba(0,212,255,0.02), rgba(30,41,59,0.86)); padding-top: 1.25rem; }
        .featured-card .text-2xl { font-weight: 800; }
        .feature-badge { display: inline-block; align-self: flex-start; margin: 0 0 0.6rem 0; background: linear-gradient(90deg,#ffb84d,#ff9f1a); color: #001f3f; padding: 6px 12px; border-radius: 999px; font-weight: 800; font-size: 12px; box-shadow: 0 8px 24px rgba(255,160,64,0.14); }
        /* removed .featured-plan to keep all cards visually equal */
      `}</style>
    </div>
  );
}

// Use the same particle/background component as the homepage
Pricing.background = ParticlesBg;
