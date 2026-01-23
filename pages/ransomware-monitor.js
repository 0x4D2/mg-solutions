// Page removed — redirecting to home
import React from 'react';

export default function RansomwareMonitor() {
  return null;
}

export async function getServerSideProps() {
  return {
    redirect: {
      destination: '/',
      permanent: false,
    },
  };
}

// Hilfsfunktion für Zelleninhalte (wie Original)
function renderCell(entry, key) {
  switch (key) {
    case 'discovered':
    case 'published': {
      if (!entry[key] || entry[key] === 'Invalid Date') return '–';
      const d = new Date(entry[key]);
      return isNaN(d) ? '–' : d.toLocaleDateString('de-DE', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    }
    case 'duplicates':
      return Array.isArray(entry[key]) && entry[key].length > 0
        ? `${entry[key].length} Eintrag(e)`
        : '–';
    default:
      return entry[key] || '–';
  }
}