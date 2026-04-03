import React from "react";

export default function Error({ statusCode }) {
  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#f4f7fa", fontFamily: "'Inter','DM Sans',sans-serif" }}>
      <div style={{ textAlign: "center", padding: "2rem" }}>
        <p style={{ fontSize: "0.75rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#94a3b8", marginBottom: "1rem" }}>
          {statusCode ? `Fehler ${statusCode}` : "Client-Fehler"}
        </p>
        <h1 style={{ fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 700, color: "#0f172a", margin: "0 0 1rem", lineHeight: 1.1 }}>Etwas ist schiefgelaufen.</h1>
        <p style={{ color: "#64748b", marginBottom: "2rem", fontSize: "1rem" }}>Bitte versuchen Sie es später erneut.</p>
        <a href="/" style={{ display: "inline-block", padding: "0.7rem 1.5rem", background: "#1e293b", color: "#f8fafc", borderRadius: "8px", fontWeight: 600, fontSize: "0.9rem", textDecoration: "none" }}>
          Zur Startseite
        </a>
      </div>
    </div>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};
