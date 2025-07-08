import React from 'react';

export default function VictimsList() {
  const [apiData, setApiData] = React.useState({
    victims: [],
    lastUpdated: '',
    stats: { total: 0, filtered: 0 }
  });
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/victims');
        if (!res.ok) throw new Error(`API-Fehler (Status: ${res.status})`);
        
        const data = await res.json();
        setApiData({
          victims: data.data || [],
          lastUpdated: data.lastUpdated || new Date().toISOString(),
          stats: {
            total: data.stats?.total || 0,
            filtered: data.stats?.filtered || 0
          }
        });
      } catch (err) {
        console.error('Fetch error:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    
    // Auto-Refresh alle 5 Minuten
    const interval = setInterval(fetchData, 300000);
    return () => clearInterval(interval);
  }, []);

  // Render-Funktionen
  const renderLoading = () => (
    <div className="flex justify-center py-8">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cyan-500"></div>
    </div>
  );

  const renderError = () => (
    <div className="bg-red-900/20 border border-red-700 rounded-lg p-4 my-4">
      <h3 className="text-red-300 font-medium mb-2">
        <i className="fas fa-exclamation-triangle mr-2"></i>
        Fehler beim Laden der Daten
      </h3>
      <p className="text-red-200 text-sm">{error}</p>
      <p className="text-gray-400 text-xs mt-2">Demo-Daten werden angezeigt</p>
    </div>
  );

  const renderVictimItem = (victim, index) => {
    const companyName = victim.company || victim.victim || 'Unbekannte Firma';
    const isNameRedacted = companyName.includes('*');
    const isActive = victim.status === 'Aktiv';

    return (
      <li key={index} className="py-3 border-b border-gray-700 last:border-0">
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <div className="mb-2 md:mb-0">
            <h3 className="font-medium text-white">
              {isNameRedacted ? (
                <span className="text-gray-400">Name geschwärzt</span>
              ) : (
                companyName
              )}
            </h3>
            <div className="flex items-center mt-1">
              <span className={`inline-block w-2 h-2 rounded-full mr-2 ${
                isActive ? 'bg-red-500' : 'bg-gray-500'
              }`}></span>
              <span className="text-sm text-cyan-400">
                {victim.group || 'Unbekannte Gruppe'}
              </span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-sm">
            <div className={`px-2 py-1 rounded text-xs ${
              isActive ? 'bg-red-900/50 text-red-200' : 'bg-gray-800 text-gray-400'
            }`}>
              {victim.status || 'Status unbekannt'}
            </div>
            <div className="text-gray-400">
              <i className="far fa-calendar-alt mr-1"></i>
              {victim.discovered || 'Datum unbekannt'}
            </div>
          </div>
        </div>
        
        {victim.data_size && (
          <div className="mt-2 text-xs bg-gray-800/50 inline-block px-2 py-1 rounded">
            <i className="fas fa-database mr-1"></i>
            {victim.data_size} Daten betroffen
          </div>
        )}
      </li>
    );
  };

  return (
    <div className="bg-[#002b55]/50 border border-cyan-800/30 rounded-lg p-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <h2 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-0">
          <i className="fas fa-shield-virus mr-2 text-cyan-400"></i>
          Aktuelle Ransomware-Opfer in Deutschland
        </h2>
        <div className="text-sm text-gray-400">
          <i className="fas fa-clock mr-1"></i>
          {apiData.lastUpdated 
            ? `Aktualisiert: ${new Date(apiData.lastUpdated).toLocaleString('de-DE')}`
            : 'Aktualisierung läuft...'}
        </div>
      </div>

      {loading ? renderLoading() : error ? renderError() : (
        <>
          <div className="mb-4 text-sm text-gray-400">
            <span className="text-cyan-400">{apiData.stats.filtered}</span> von {apiData.stats.total} Angriffen
          </div>
          
          {apiData.victims.length > 0 ? (
            <ul className="divide-y divide-gray-700/50">
              {apiData.victims.map(renderVictimItem)}
            </ul>
          ) : (
            <div className="text-center py-8 text-gray-500">
              <i className="fas fa-check-circle text-green-400 text-2xl mb-2"></i>
              <p>Keine aktuellen Angriffe gemeldet</p>
            </div>
          )}
        </>
      )}

      <div className="mt-6 pt-4 border-t border-gray-700/30 text-xs text-gray-500">
        <p>
          <i className="fas fa-info-circle mr-1"></i>
          Datenquelle: ransomware.live API | Angezeigt werden nur Angriffe auf deutsche Unternehmen
        </p>
      </div>
    </div>
  );
}