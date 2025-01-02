import React, { useState } from "react";
import { Box, Paper } from "@mui/material";

function Top3ArtistasPorEstacao({ dados, season }) {
  
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
      item.ms_played &&
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

  
  const seasons = ["Inverno", "Primavera", "Verão", "Outono"];

  
  const topArtistsBySeason = seasons.map((season) => {
    const artists = artistsBySeason[season] || {}; 
    const sortedArtists = Object.keys(artists)
      .sort((a, b) => artists[b] - artists[a]) 
      .slice(0, 3); 
    return { season, artists: sortedArtists };
  });

 
  const [currentSeasonIndex, setCurrentSeasonIndex] = useState(0);

 
  React.useMemo(() => {
 
     switch(season){
       default:
       case "Inverno": 
       setCurrentSeasonIndex(0);
       break;
       case "Primavera": 
       setCurrentSeasonIndex(1);
       break;
       case "Verão": 
       setCurrentSeasonIndex(2);
       break;
       case "Outono": 
       setCurrentSeasonIndex(3);
       break;
     }
 
     
  },[season])

  const currentSeason = topArtistsBySeason[currentSeasonIndex];

  return (
   
      <Box className="cards2-container">
        {currentSeason && (
          
            <>
              {currentSeason.artists.map((artist, index) => (
                <>
                <Paper sx={{m:2, p:1, backgroundColor:"transparent", color:"#fff", fontSize:"1.2rem"}} key={artist}>{index+1} - {artist}</Paper>
                
                </>
              ))}
            </>
          
        )}
      </Box>
   
  );
}

export default Top3ArtistasPorEstacao;
