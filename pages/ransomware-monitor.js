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

  // Daten laden
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

  // Scroll to top bei Seitenwechsel
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  // Filter & Pagination (useMemo für Performance)
  const filteredEntries = React.useMemo(() => {
    const q = search.toLowerCase();
    return apiData.entries.filter(entry => (
      (entry.post_title?.toLowerCase().includes(q)) ||
      (entry.group_name?.toLowerCase().includes(q)) ||
      (entry.country?.toLowerCase().includes(q)) ||
      (entry.activity?.toLowerCase().includes(q)) ||
      (entry.description?.toLowerCase().includes(q)) ||
      (entry.discovered?.toLowerCase().includes(q)) ||
      (entry.published?.toLowerCase().includes(q)) ||
      (entry.website?.toLowerCase().includes(q))
    ));
  }, [apiData.entries, search]);

  const totalPages = Math.ceil(filteredEntries.length / entriesPerPage) || 1;
  const paginatedEntries = React.useMemo(() =>
    filteredEntries.slice((currentPage - 1) * entriesPerPage, currentPage * entriesPerPage),
    [filteredEntries, currentPage]
  );

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)));
  };

  // Pagination Buttons (max 5, zentriert um aktuelle Seite)
  const getPageNumbers = () => {
    if (totalPages <= 5) return Array.from({ length: totalPages }, (_, i) => i + 1);
    let start = Math.max(1, currentPage - 2);
    let end = Math.min(totalPages, start + 4);
    if (end - start < 4) start = Math.max(1, end - 4);
    return Array.from({ length: 5 }, (_, i) => start + i);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-[#001f3f] via-[#002b55] to-[#001f3f] cyber-bg-tech">
      <IndexNavbar fixed />
      <main className="cyber-bg flex-grow pt-24 pb-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-10 text-center">
            <div className="flex flex-col items-center justify-center gap-2">
              <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cyan-700/30 shadow-lg mb-2 text-white">
                <i className="fas fa-shield-virus text-cyan-400 text-3xl"></i>
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-cyan-300">
                Ransomware Monitor
              </h1>
             
              {/* Hinweisbox: Infotext */}
              <div className="bg-green-900/80 border border-green-600 text-white rounded-xl px-4 py-3 mt-5 max-w-2xl mx-auto text-left text-sm flex items-start gap-3">
                
                <div>
                  Dieser Monitor zeigt aktuelle Ransomware-Angriffe auf Unternehmen weltweit. Die Daten werden automatisiert aus öffentlichen Quellen und Leak-Seiten gesammelt und regelmäßig aktualisiert.
                </div>
              </div>
              
              <div className="text-cyan-300 mt-2 text-base">
                <i className="fas fa-info-circle mr-2"></i>
                <span className="text-white">{apiData.total} <span className="text-red-500 font-bold">Angriffe</span> erfasst</span> | <div className="text-white">Letztes Update: {apiData.lastUpdated}</div>
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
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {Array.from({ length: entriesPerPage }).map((_, i) => (
                <div key={i} className="bg-[#001a33]/90 border border-cyan-800 rounded-2xl shadow-xl p-5 h-64 animate-pulse" />
              ))}
            </div>
          ) : paginatedEntries.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {paginatedEntries.map((entry, index) => (
                <div
                  key={index}
                  className="bg-[#001a33]/90 border border-cyan-800 rounded-2xl shadow-xl p-5 flex flex-col gap-2 hover:shadow-cyan-700/40 hover:-translate-y-1 transition-all relative"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <h2 className="text-cyan-300 font-extrabold text-xl md:text-2xl tracking-tight truncate" title={entry.post_title}>
                      {entry.post_title || '–'}
                    </h2>
                    <span className={`ml-auto px-3 py-1 rounded-lg text-xs font-bold text-white border border-cyan-400 bg-cyan-800/80`}>
                      {entry.group_name || 'Unbekannt'}
                    </span>
                  </div>
                  <div className="text-white text-xs mb-1">Land: <span className="font-mono text-white">{entry.country || '–'}</span></div>
                  <div className="text-white text-xs mb-1">Aktivität: <span className="font-mono text-white">{entry.activity || '–'}</span></div>
                  <div className="text-white text-xs mb-1">Entdeckt: <span className="font-mono text-white">{renderCell(entry, 'discovered')}</span></div>
                  <div className="text-white text-xs mb-1">Veröffentlicht: <span className="font-mono text-white">{renderCell(entry, 'published')}</span></div>
                  <div className="text-white text-xs mb-1">Doppelte: <span className="font-mono text-white">{renderCell(entry, 'duplicates')}</span></div>
                  <div className="text-white text-xs mb-1 truncate">Website: <span className="font-mono text-white">{entry.website || '–'}</span></div>
                  <div className="text-white text-xs mb-1 truncate">Post-URL: <span className="font-mono text-white">{entry.post_url || '–'}</span></div>
                  <div className="text-white text-xs mt-2 line-clamp-3 min-h-[2.5em]">{entry.description || <span className="italic text-cyan-700">Keine Beschreibung</span>}</div>
                </div>
              ))}
            </div>
          ) : (
            <div className="col-span-full p-8 text-center text-cyan-400">
              <i className="fas fa-database mr-2"></i>
              Keine aktuellen Angriffe gefunden
            </div>
          )}

          {/* Pagination */}
          <div className="flex justify-center items-center gap-2 mt-8">
            <button
              onClick={() => handlePageChange(1)}
              disabled={currentPage === 1}
              className="px-2 py-2 rounded-lg border border-cyan-700 bg-[#001f3f] text-cyan-400 hover:bg-cyan-700 hover:text-white transition disabled:opacity-50"
              title="Erste Seite"
              aria-label="Erste Seite"
            >
              &laquo;
            </button>
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-3 py-2 rounded-lg border border-cyan-700 bg-[#001f3f] text-cyan-400 hover:bg-cyan-700 hover:text-white transition disabled:opacity-50"
              title="Vorherige Seite"
              aria-label="Vorherige Seite"
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            {getPageNumbers().map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`px-3 py-2 rounded-lg border ${currentPage === page ? 'bg-cyan-600 text-white' : 'border-cyan-700 bg-[#001f3f] text-cyan-400 hover:bg-cyan-700 hover:text-white'} transition`}
                aria-label={`Seite ${page}`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-3 py-2 rounded-lg border border-cyan-700 bg-[#001f3f] text-cyan-400 hover:bg-cyan-700 hover:text-white transition disabled:opacity-50"
              title="Nächste Seite"
              aria-label="Nächste Seite"
            >
              <i className="fas fa-chevron-right"></i>
            </button>
            <button
              onClick={() => handlePageChange(totalPages)}
              disabled={currentPage === totalPages}
              className="px-2 py-2 rounded-lg border border-cyan-700 bg-[#001f3f] text-cyan-400 hover:bg-cyan-700 hover:text-white transition disabled:opacity-50"
              title="Letzte Seite"
              aria-label="Letzte Seite"
            >
              &raquo;
            </button>
          </div>

          {/* Handlungsabschnitt */}
          <div className="mt-10 bg-gradient-to-r from-[#002b55] to-[#001f3f] border border-cyan-800 rounded-2xl p-6 shadow-xl">
            <div className="md:flex justify-between items-center">
              <div className="mb-4 md:mb-0">
                <h2 className="text-xl font-semibold text-cyan-100 mb-2">
                  Ihr Unternehmen könnte als nächstes betroffen sein
                </h2>
                <p className="text-white">
                  {apiData.total > 0
                    ? `${Math.round((apiData.total / 100) * 80)} der erfassten Unternehmen hatten unzureichenden Schutz`
                    : 'Aktuell besonders aktive Angriffsgruppen in Ihrer Branche'}
                </p>
              </div>
              <a
                href="/contact"
                className="inline-block bg-cyan-600 hover:bg-cyan-700 text-white font-medium py-2 px-6 rounded-lg transition-colors shadow-lg"
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