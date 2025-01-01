import React, { useState } from "react";

function TabButton({ label, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "10px",
        margin: "5px",
        backgroundColor: isActive ? "#ccc" : "#fff",
        border: "1px solid #000",
        cursor: "pointer",
      }}
    >
      {label}
    </button>
  );
}

const getSeason = (date) => {
  const parsedDate = new Date(date);
  if (isNaN(parsedDate)) {
    console.warn("Data inválida encontrada:", date);
    return null;
  }
  const month = parsedDate.getMonth();
  if (month === 11 || month < 2) return "Inverno";
  if (month >= 2 && month < 5) return "Primavera";
  if (month >= 5 && month < 8) return "Verão";
  return "Outono";
};

function Top5MusicasPorEstacao({ dados, selectedSeason }) {
  const validData = dados.filter(
    (item) => item.ts && item.master_metadata_track_name && item.ms_played
  );

  const tracksBySeason = validData.reduce((acc, item) => {
    const season = getSeason(item.ts);
    if (!season) return acc;

    const track = item.master_metadata_track_name;

    if (!acc[season]) {
      acc[season] = {};
    }

    if (!acc[season][track]) {
      acc[season][track] = 0;
    }

    acc[season][track] += 1;

    return acc;
  }, {});

  const topTracks = tracksBySeason[selectedSeason]
    ? Object.keys(tracksBySeason[selectedSeason])
        .sort((a, b) => tracksBySeason[selectedSeason][b] - tracksBySeason[selectedSeason][a])
        .slice(0, 5)
    : [];

  return (
    <div>
      <h3>Top 5 Músicas</h3>
      {topTracks.length === 0 ? (
        <p>Nenhuma música encontrada para {selectedSeason}.</p>
      ) : (
        topTracks.map((track) => (
          <p
            key={track}
            style={{
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            {track}
          </p>
        ))
      )}
    </div>
  );
}

function Top3ArtistasPorEstacao({ dados, selectedSeason }) {
  const validData = dados.filter(
    (item) =>
      item.ts &&
      item.master_metadata_album_artist_name &&
      item.master_metadata_album_artist_name !== null
  );

  const artistsBySeason = validData.reduce((acc, item) => {
    const season = getSeason(item.ts);
    if (!season) return acc;

    const artist = item.master_metadata_album_artist_name;

    if (!acc[season]) {
      acc[season] = {};
    }

    if (!acc[season][artist]) {
      acc[season][artist] = 0;
    }

    acc[season][artist] += 1;

    return acc;
  }, {});

  const topArtists = artistsBySeason[selectedSeason]
    ? Object.keys(artistsBySeason[selectedSeason])
        .sort((a, b) => artistsBySeason[selectedSeason][b] - artistsBySeason[selectedSeason][a])
        .slice(0, 3)
    : [];

  return (
    <div>
      <h3>Top 3 Artistas</h3>
      {topArtists.length === 0 ? (
        <p>Nenhum artista encontrado para {selectedSeason}.</p>
      ) : (
        topArtists.map((artist) => (
          <p
            key={artist}
            style={{
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            {artist}
          </p>
        ))
      )}
    </div>
  );
}

function Dashboard({ dados }) {
  const [activeTab, setActiveTab] = useState("musicas");
  const [selectedSeason, setSelectedSeason] = useState("Inverno");

  const seasons = ["Inverno", "Primavera", "Verão", "Outono"];

  return (
    <div>
      <div className="season-selector">
        {seasons.map((season) => (
          <TabButton
            key={season}
            label={season}
            isActive={selectedSeason === season}
            onClick={() => setSelectedSeason(season)}
          />
        ))}
      </div>

      <div className="tabs">
        <TabButton
          label="Top 5 Músicas"
          isActive={activeTab === "musicas"}
          onClick={() => setActiveTab("musicas")}
        />
        <TabButton
          label="Top 3 Artistas"
          isActive={activeTab === "artistas"}
          onClick={() => setActiveTab("artistas")}
        />
      </div>

      <div className="content">
        {activeTab === "musicas" && (
          <Top5MusicasPorEstacao dados={dados} selectedSeason={selectedSeason} />
        )}
        {activeTab === "artistas" && (
          <Top3ArtistasPorEstacao dados={dados} selectedSeason={selectedSeason} />
        )}
      </div>
    </div>
  );
}

export default Dashboard;
