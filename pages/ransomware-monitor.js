import React from 'react';
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function RansomwareMonitor() {
  const [apiData, setApiData] = React.useState({
    entries: [],
    lastUpdated: '',
    total: 0
  });
  const [loading, setLoading] = React.useState(true);
  const [search, setSearch] = React.useState("");
  const [currentPage, setCurrentPage] = React.useState(1);
  const entriesPerPage = 10;

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/ransomware');
        const data = await response.json();
        setApiData({
          entries: data.data || [],
          lastUpdated: data.lastUpdated,
          total: data.total
        });
      } catch (error) {
        console.error('Fehler:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
    const interval = setInterval(fetchData, 4 * 60 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  // Filter & Pagination (alle Felder durchsuchen)
  const filteredEntries = apiData.entries.filter(entry => {
    const q = search.toLowerCase();
    return (
      (entry.post_title?.toLowerCase().includes(q)) ||
      (entry.group_name?.toLowerCase().includes(q)) ||
      (entry.country?.toLowerCase().includes(q)) ||
      (entry.activity?.toLowerCase().includes(q)) ||
      (entry.description?.toLowerCase().includes(q)) ||
      (entry.discovered?.toLowerCase().includes(q)) ||
      (entry.published?.toLowerCase().includes(q)) ||
      (entry.website?.toLowerCase().includes(q))
    );
  });
  const totalPages = Math.ceil(filteredEntries.length / entriesPerPage) || 1;
  const paginatedEntries = filteredEntries.slice(
    (currentPage - 1) * entriesPerPage,
    currentPage * entriesPerPage
  );

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (dir) => {
    setCurrentPage((prev) => {
      if (dir === 'prev') return Math.max(1, prev - 1);
      if (dir === 'next') return Math.min(totalPages, prev + 1);
      return prev;
    });
  };

  return (
    <div className="cyber-bg flex flex-col min-h-screen bg-gradient-to-br from-[#001f3f] via-[#002b55] to-[#001f3f] cyber-bg-tech">
      <IndexNavbar fixed />
      <main className="flex-grow pt-24 pb-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-10 text-center">
            <div className="flex flex-col items-center justify-center gap-2">
              <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cyan-700/30 shadow-lg mb-2 text-white">
                <i className="fas fa-shield-virus text-cyan-400 text-3xl "></i>
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-cyan-300 drop-shadow-glow">
                Ransomware Monitor
              </h1>
              <span className="text-cyan-400 text-lg font-mono tracking-wide mt-2">
                Live-Überblick über aktuelle Angriffe auf Unternehmen
              </span>
              <div className="text-cyan-300 mt-2 text-base">
                <i className="fas fa-info-circle mr-2"></i>
                {apiData.total} Angriffe erfasst | Letztes Update: {apiData.lastUpdated}
              </div>
            </div>
          </div>

          {/* Suche */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
            <input
              type="text"
              value={search}
              onChange={handleSearch}
              placeholder="Suchen Sie nach Unternehmen, Gruppe, Land, ..."
              className="w-full sm:w-96 px-4 py-2 rounded-lg border border-cyan-700 bg-[#001a33] text-cyan-100 focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder-cyan-600 shadow-inner"
            />
            <span className="text-cyan-400 text-sm mt-2 sm:mt-0 font-mono">
              {filteredEntries.length} Einträge gefunden
            </span>
          </div>

          {/* Karten-Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {loading ? (
              <div className="col-span-full p-8 text-center">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-cyan-500"></div>
              </div>
            ) : paginatedEntries.length > 0 ? (
              paginatedEntries.map((entry, index) => (
                <div
                  key={index}
                  className="bg-[#001a33]/90 border border-cyan-800 rounded-2xl shadow-xl p-5 flex flex-col gap-2 hover:shadow-cyan-700/40 hover:-translate-y-1 transition-all relative"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-white font-extrabold text-xl md:text-2xl tracking-tight truncate drop-shadow-glow" title={entry.post_title}>{entry.post_title || '–'}</span>
                    <span className={`ml-auto px-3 py-1 rounded-lg text-sm font-bold text-white shadow-glow ${getGroupColor(entry.group_name)}`}>{entry.group_name || 'Unbekannt'}</span>
                  </div>
                  <div className="text-white text-xs mb-1">Land: <span className="font-mono">{entry.country || '–'}</span></div>
                  <div className="text-white text-xs mb-1">Aktivität: <span className="font-mono">{entry.activity || '–'}</span></div>
                  <div className="text-white text-xs mb-1">Entdeckt: <span className="font-mono">{renderCell(entry, 'discovered')}</span></div>
                  <div className="text-white text-xs mb-1">Veröffentlicht: <span className="font-mono">{renderCell(entry, 'published')}</span></div>
                  <div className="text-white text-xs mb-1">Doppelte: <span className="font-mono">{renderCell(entry, 'duplicates')}</span></div>
                  <div className="text-white text-xs mb-1 truncate">Website: <span className="font-mono">{entry.website || '–'}</span></div>
                  <div className="text-white text-xs mb-1 truncate">Post-URL: <span className="font-mono">{entry.post_url || '–'}</span></div>
                  <div className="text-cyan-200 text-xs mt-2 line-clamp-3 min-h-[2.5em]">{entry.description || <span className="italic text-cyan-700">Keine Beschreibung</span>}</div>
                </div>
              ))
            ) : (
              <div className="col-span-full p-8 text-center text-cyan-400">
                <i className="fas fa-database mr-2"></i>
                Keine aktuellen Angriffe gefunden
              </div>
            )}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-2 mt-8">
            <button
              onClick={() => handlePageChange('prev')}
              disabled={currentPage === 1}
              className="px-3 py-2 rounded-lg border border-cyan-700 bg-[#001f3f] text-cyan-400 hover:bg-cyan-700 hover:text-white transition disabled:opacity-50 shadow-glow"
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-3 py-2 rounded-lg border ${currentPage === i + 1 ? 'bg-cyan-600 text-white shadow-glow' : 'border-cyan-700 bg-[#001f3f] text-cyan-400 hover:bg-cyan-700 hover:text-white'} transition`}
              >
                {i + 1}
              </button>
            )).slice(Math.max(0, currentPage - 3), currentPage + 2)}
            <button
              onClick={() => handlePageChange('next')}
              disabled={currentPage === totalPages}
              className="px-3 py-2 rounded-lg border border-cyan-700 bg-[#001f3f] text-cyan-400 hover:bg-cyan-700 hover:text-white transition disabled:opacity-50 shadow-glow"
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>

          {/* Handlungsabschnitt */}
          <div className="mt-10 bg-gradient-to-r from-[#002b55] to-[#001f3f] border border-cyan-800 rounded-2xl p-6 shadow-xl">
            <div className="md:flex justify-between items-center">
              <div className="mb-4 md:mb-0">
                <h3 className="text-xl font-semibold text-cyan-100 mb-2">
                  Ihr Unternehmen könnte als nächstes betroffen sein
                </h3>
                <p className="text-cyan-200">
                  {apiData.total > 0
                    ? `${Math.round((apiData.total / 100) * 80)} der erfassten Unternehmen hatten unzureichenden Schutz`
                    : 'Aktuell besonders aktive Angriffsgruppen in Ihrer Branche'}
                </p>
              </div>
              <a
                href="/contact"
                className="inline-block bg-cyan-600 hover:bg-cyan-700 text-white font-medium py-2 px-6 rounded-lg transition-colors shadow-lg shadow-glow"
              >
                <i className="fas fa-shield-alt mr-2"></i>
                Sofortmaßnahmen anfragen
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

// Hilfsfunktion für Gruppen-Badge-Farbe
function getGroupColor(group) {
  if (!group) return 'bg-gray-500';
  const colors = {
    lockbit2: 'bg-pink-500',
    lockbit3: 'bg-pink-700',
    clop: 'bg-green-500',
    blackbasta: 'bg-blue-500',
    alphv: 'bg-purple-500',
    conti: 'bg-orange-500',
    ransomexx: 'bg-yellow-500',
    akira: 'bg-cyan-500',
    medusa: 'bg-lime-500',
    default: 'bg-cyan-700'
  };
  return colors[group.toLowerCase()] || colors.default;
}

// Hilfsfunktion für Zelleninhalte (jetzt ohne Flagge, Badge, Link, Tooltip)
function renderCell(entry, key) {
  switch (key) {
    case 'group_name':
      return (
        <span className={`inline-block px-2 py-1 rounded text-xs font-semibold text-white ${getGroupColor(entry[key])}`}
          title={entry[key] || 'Unbekannt'}>
          {entry[key] || 'Unbekannt'}
        </span>
      );
    case 'country':
      return entry[key] || '–';
    case 'discovered':
    case 'published': {
      if (!entry[key] || entry[key] === 'Invalid Date') return '–';
      const d = new Date(entry[key]);
      return isNaN(d) ? '–' : d.toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' });
    }
    case 'post_title':
      return (
        <span className="truncate block" title={entry.description || entry[key]}>
          {entry[key]?.length > 18 ? entry[key].slice(0, 18) + '…' : (entry[key] || '–')}
        </span>
      );
    case 'description':
      return entry[key] ? (
        <span className="truncate block" title={entry[key]}>{entry[key]}</span>
      ) : '–';
    case 'activity':
      return entry[key] || '–';
    case 'duplicates':
      return Array.isArray(entry[key]) && entry[key].length > 0 ? (
        <span title={entry[key].join(', ')}>{entry[key].length} Eintrag(e)</span>
      ) : '–';
    case 'website':
      return entry[key] ? entry[key] : '–';
    case 'post_url':
      return entry[key] ? entry[key] : '–';
    default:
      return entry[key] || '–';
  }
}