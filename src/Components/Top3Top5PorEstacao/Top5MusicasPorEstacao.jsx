
import React, { useState} from 'react';
import { Box, Paper } from "@mui/material";


function Top5MusicasPorEstacao({ dados, season  }) {

  
  
 
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
      item.master_metadata_track_name &&
      item.ms_played &&
      item.master_metadata_track_name !== null
  );

  
  const tracksBySeason = validData.reduce((acc, item) => {
    const season1 = getSeason(item.ts);
    const track = item.master_metadata_track_name;

    if (!acc[season1]) {
      acc[season1] = {};
    }

    if (!acc[season1][track]) {
      acc[season1][track] = 0;
    }

    acc[season1][track] += 1; 

    return acc;
  }, {});

  
  const seasons = ["Inverno", "Primavera", "Verão", "Outono"];

  
  const topTracksBySeason = seasons.map((season1) => {
    const tracks = tracksBySeason[season1] || {}; 
    const sortedTracks = Object.keys(tracks)
      .sort((a, b) => tracks[b] - tracks[a]) 
      .slice(0, 5); 
    return { season1, tracks: sortedTracks };
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

  const currentSeason = topTracksBySeason[currentSeasonIndex];

  return (
    
      <Box className="cards2-container">
        {currentSeason && (
          <>
            
              {currentSeason.tracks.map((track, index) => (
                <Paper sx={{m:2, p:1, backgroundColor:"transparent", color:"#fff", fontSize:"1.2rem"}} key={track}>{index+1} - {track}</Paper>
              ))}
            
          </>
        )}
      </Box>
    
  );
}

export default Top5MusicasPorEstacao;
