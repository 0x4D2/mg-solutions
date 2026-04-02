// SichtVergleich.js
// Drop-in für index.js — direkt nach dem PAIN-Abschnitt einfügen.
// Basiert auf echten Report-Befunden (anonymisiert).

export default function SichtVergleich() {
  return (
    <div className="section">
      <div className="slabel">Perspektive</div>
      <h2 style={{ marginBottom: "10px" }}>Was Sie sehen —<br />was Angreifer sehen.</h2>
      <p style={{ fontSize: "14px", color: "#64748b", marginBottom: "36px" }}>
        Dieselbe Infrastruktur. Zwei völlig verschiedene Blickwinkel.
      </p>

      <div className="sv-split">
        {/* IHRE SICHT */}
        <div className="sv-panel sv-yours">
          <div className="sv-head">
            <div className="sv-pill sv-pill-yours">
              <span className="sv-dot sv-dot-y" />
              Ihre Sicht
            </div>
          </div>

          {[
            {
              icon: (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M9 9h6M9 13h6" />
                </svg>
              ),
              label: "Website",
              val: "ihredomain.de — live, funktioniert",
            },
            {
              icon: (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2">
                  <path d="M4 4h16v12H4z" /><path d="M8 20h8M12 16v4" />
                </svg>
              ),
              label: "Server",
              val: "Hosting läuft, Mails kommen an",
            },
            {
              icon: (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              ),
              label: "Sicherheit",
              val: "HTTPS aktiv, Zertifikat gültig",
            },
            {
              icon: (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                </svg>
              ),
              label: "Sichtbarkeit",
              val: "1 Domain, 1 IP — überschaubar",
            },
          ].map(({ icon, label, val }) => (
            <div className="sv-row" key={label}>
              <div className="sv-icon sv-icon-y">{icon}</div>
              <div>
                <div className="sv-row-label">{label}</div>
                <div className="sv-row-val sv-ok">{val}</div>
              </div>
            </div>
          ))}

          <div className="sv-tags">
            <span className="sv-tag sv-tag-safe">Kein Alarm</span>
            <span className="sv-tag sv-tag-safe">Alles grün</span>
            <span className="sv-tag sv-tag-safe">Keine Meldungen</span>
          </div>
        </div>

        {/* VS badge */}
        <div className="sv-vs-wrap">
          <div className="sv-vs">VS</div>
        </div>

        {/* ANGREIFER SICHT */}
        <div className="sv-panel sv-attacker">
          <div className="sv-head">
            <div className="sv-pill sv-pill-attacker">
              <span className="sv-dot sv-dot-a" />
              Angreifer-Sicht
            </div>
          </div>

          {[
            {
              icon: (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              ),
              label: "11 exponierte IPs entdeckt",
              val: "shop, mail, awareness, firewall, Nameserver — alle öffentlich",
              danger: true,
            },
            {
              icon: (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2">
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                  <line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
              ),
              label: "SSH Port 22 öffentlich erreichbar",
              val: "Direkter Admin-Zugang — kein VPN, kein IP-Filter",
              danger: true,
            },
            {
              icon: (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2">
                  <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
                  <rect x="9" y="3" width="6" height="4" rx="1" />
                </svg>
              ),
              label: "TLS-Zertifikat läuft in 60 Tagen ab",
              val: "Port 443 · Aussteller R12 · Ablauf 02.06.2026",
              danger: true,
            },
            {
              icon: (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2">
                  <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8m-4-4v4" />
                </svg>
              ),
              label: "Apache-Stack identifiziert",
              val: "Version sichtbar · Technologie-Fingerprint komplett",
              danger: true,
            },
          ].map(({ icon, label, val, danger }) => (
            <div className="sv-row" key={label}>
              <div className="sv-icon sv-icon-a">{icon}</div>
              <div>
                <div className="sv-row-label">{label}</div>
                <div className={`sv-row-val${danger ? " sv-danger" : ""}`}>{val}</div>
              </div>
            </div>
          ))}

          <div className="sv-tags">
            <span className="sv-tag sv-tag-danger">SSH exponiert</span>
            <span className="sv-tag sv-tag-warn">Zertifikat läuft ab</span>
            <span className="sv-tag sv-tag-danger">8 offene Ports</span>
          </div>
        </div>
      </div>

      {/* CTA strip */}
      <div className="sv-cta">
        <p className="sv-cta-text">
          <strong>Das ist kein Worst-Case-Szenario.</strong> Das sind echte Befunde aus einem unserer Reports — anonymisiert.
        </p>
        <a href="/contact" className="btn-primary" style={{ fontSize: "13px", padding: "10px 20px", borderRadius: "12px", display: "inline-flex", whiteSpace: "nowrap" }}>
          Mein Risiko prüfen lassen →
        </a>
      </div>

      <style jsx>{`
        .sv-split {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          gap: 0;
          align-items: stretch;
          position: relative;
        }
        .sv-panel {
          border-radius: 16px;
          padding: 22px 20px;
        }
        .sv-yours {
          background: #ffffff;
          border: 1px solid rgba(71, 85, 105, 0.18);
          box-shadow: 0 1px 8px rgba(0,0,0,0.05);
        }
        .sv-attacker {
          background: #fff8f8;
          border: 1px solid rgba(220, 38, 38, 0.22);
          box-shadow: 0 1px 8px rgba(248,113,113,0.06);
        }
        .sv-head {
          margin-bottom: 18px;
          padding-bottom: 14px;
        }
        .sv-yours .sv-head { border-bottom: 1px solid rgba(71, 85, 105, 0.1); }
        .sv-attacker .sv-head { border-bottom: 1px solid rgba(220, 38, 38, 0.12); }
        .sv-pill {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.09em;
          text-transform: uppercase;
          padding: 4px 12px;
          border-radius: 100px;
        }
        .sv-pill-yours {
          background: rgba(71, 85, 105, 0.07);
          border: 1px solid rgba(71, 85, 105, 0.2);
          color: #64748b;
        }
        .sv-pill-attacker {
          background: rgba(220, 38, 38, 0.08);
          border: 1px solid rgba(220, 38, 38, 0.28);
          color: #dc2626;
        }
        .sv-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          display: inline-block;
          flex-shrink: 0;
        }
        .sv-dot-y { background: #64748b; }
        .sv-dot-a {
          background: #dc2626;
          animation: svPulse 1.8s infinite;
        }
        @keyframes svPulse { 0%,100%{opacity:1} 50%{opacity:0.25} }
        .sv-row {
          display: flex;
          align-items: flex-start;
          gap: 11px;
          padding: 10px 0;
          border-bottom: 1px solid rgba(0, 0, 0, 0.06);
        }
        .sv-row:last-of-type { border-bottom: none; }
        .sv-icon {
          width: 28px;
          height: 28px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 1px;
        }
        .sv-icon-y { background: rgba(100,116,139,0.1); border: 1px solid rgba(100,116,139,0.18); }
        .sv-icon-a { background: rgba(248,113,113,0.07); border: 1px solid rgba(248,113,113,0.18); }
        .sv-row-label { font-size: 12px; font-weight: 700; color: #1e293b; margin-bottom: 2px; }
        .sv-row-val { font-size: 12px; color: #475569; line-height: 1.45; }
        .sv-ok { color: #64748b; }
        .sv-danger { color: #fca5a5; }
        .sv-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: 16px;
          padding-top: 14px;
          border-top: 1px solid rgba(0, 0, 0, 0.07);
        }
        .sv-tag {
          font-size: 10px;
          font-weight: 700;
          padding: 3px 9px;
          border-radius: 100px;
        }
        .sv-tag-safe {
          background: rgba(16, 185, 129, 0.07);
          border: 1px solid rgba(16, 185, 129, 0.22);
          color: #047857;
        }
        .sv-tag-warn {
          background: rgba(146, 64, 14, 0.06);
          border: 1px solid rgba(146, 64, 14, 0.2);
          color: #92400e;
        }
        .sv-tag-danger {
          background: rgba(220, 38, 38, 0.08);
          border: 1px solid rgba(220, 38, 38, 0.22);
          color: #dc2626;
        }
        /* VS divider column */
        .sv-vs-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          position: relative;
          z-index: 2;
        }
        .sv-vs {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: #f1f5f9;
          border: 2px solid rgba(71, 85, 105, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 11px;
          font-weight: 800;
          color: #334155;
        }
        /* CTA strip */
        .sv-cta {
          margin-top: 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          flex-wrap: wrap;
          background: #f1f5f9;
          border: 1px solid #cbd5e1;
          border-radius: 12px;
          padding: 14px 20px;
        }
        .sv-cta-text {
          font-size: 13px;
          color: #475569;
          margin: 0;
        }
        .sv-cta-text strong {
          color: #0f172a;
          font-weight: 700;
        }
        @media (max-width: 640px) {
          .sv-split {
            grid-template-columns: 1fr;
          }
          .sv-vs-wrap {
            width: 100%;
            height: 40px;
          }
        }
      `}</style>
    </div>
  );
}


