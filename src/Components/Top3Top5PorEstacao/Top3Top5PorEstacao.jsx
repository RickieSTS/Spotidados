import React, { useState } from "react";

function Top5MusicasPorEstacao({ dados, selectedSeason }) {
  const getSeason = (date) => {
    const month = new Date(date).getMonth();
    if (month === 11 || month < 2) {
      return "Inverno";
    } else if (month >= 2 && month < 5) {
      return "Primavera";
    } else if (month >= 5 && month < 8) {
      return "Verão";
    } else {
      return "Outono";
    }
  };

  const validData = dados.filter(
    (item) => item.ts && item.master_metadata_track_name && item.ms_played
  );

  const tracksBySeason = validData.reduce((acc, item) => {
    const season = getSeason(item.ts);
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
        {topTracks.map((track) => (
          <p key={track} style={{
             displayflex: "column",
            flexwrap: "wrap"
          }}
          >{track}</p>
        ))}
    </div>
  );
}

function Top3ArtistasPorEstacao({ dados, selectedSeason }) {
  const getSeason = (date) => {
    const month = new Date(date).getMonth();
    if (month === 11 || month < 2) {
      return "Inverno";
    } else if (month >= 2 && month < 5) {
      return "Primavera";
    } else if (month >= 5 && month < 8) {
      return "Verão";
    } else {
      return "Outono";
    }
  };

  const validData = dados.filter(
    (item) =>
      item.ts &&
      item.master_metadata_album_artist_name &&
      item.master_metadata_album_artist_name !== null
  );

  const artistsBySeason = validData.reduce((acc, item) => {
    const season = getSeason(item.ts);
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
      <h3>Top 3 Artistas </h3>
   
        {topArtists.map((artist) => (
          <p key={artist} style={{
            displayflex: "column",
            flexwrap: "wrap"
           
          }}
          >{artist}</p>
        ))}
     
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
          <button
            key={season}
            onClick={() => setSelectedSeason(season)}
            style={{
              padding: "10px",
              margin: "5px",
              backgroundColor: selectedSeason === season ? "#ccc" : "#fff",
              border: "1px solid #000",
              cursor: "pointer",
            }}
          >
            {season}
          </button>
        ))}
      </div>

      <div className="tabs">
        <button
          onClick={() => setActiveTab("musicas")}
          style={{
            padding: "10px",
            backgroundColor: activeTab === "musicas" ? "#ccc" : "#fff",
            border: "1px solid #000",
            cursor: "pointer",
          }}
        >
          Top 5 Músicas
        </button>
        <button
          onClick={() => setActiveTab("artistas")}
          style={{
            padding: "10px",
            backgroundColor: activeTab === "artistas" ? "#ccc" : "#fff",
            border: "1px solid #000",
            cursor: "pointer",
          }}
        >
          Top 3 Artistas
        </button>
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
