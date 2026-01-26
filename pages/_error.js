import React from "react";

export default function Error({ statusCode }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Etwas ist schiefgelaufen</h1>
        <p className="text-lg">{statusCode ? `Fehler ${statusCode}` : "Ein Client- oder Server-Fehler ist aufgetreten."}</p>
        <div className="mt-6">
          <a href="/" className="text-cyan-300 font-semibold">Zur Startseite</a>
        </div>
      </div>
    </div>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};
