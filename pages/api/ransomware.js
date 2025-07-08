import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), 'public/data/ransomware_victims.json');
  //const filePath = '/opt/ransomwatch/api_victims.json';
  
  try {
    // 1. Datei einlesen
    const rawData = fs.readFileSync(filePath, 'utf8');
    const allData = JSON.parse(rawData);
    
    // 2. Keine Filterung mehr, alle Einträge verwenden
    const processedData = allData.map(entry => ({
      ...entry,
      discovered: new Date(entry.discovered).toLocaleDateString('de-DE')
    }));

    res.status(200).json({
      data: processedData,
      lastUpdated: new Date().toLocaleString('de-DE'),
      total: allData.length
    });

  } catch (err) {
    console.error('API Fehler:', err);
    res.status(500).json({ 
      error: 'Daten konnten nicht geladen werden',
      debug: { filePath }
    });
  }
}