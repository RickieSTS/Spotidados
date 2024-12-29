import * as React from "react";
import { Card, CardContent, Typography } from "@mui/material";

function PercentagemPlaysArtista({ dados, artist }) {
  const artistasPorPlayMap = new Map();

  dados.map((e) => {
    if (artistasPorPlayMap.has(e.master_metadata_album_artist_name)) {
      artistasPorPlayMap.set(
        e.master_metadata_album_artist_name,
        artistasPorPlayMap.get(e.master_metadata_album_artist_name) + 1
      );
    } else {
      artistasPorPlayMap.set(e.master_metadata_album_artist_name, 1);
    }
  });

  const playsTotais = dados.reduce((acc, cur) => {
    if (cur.master_metadata_track_name) {
      acc++;
    }
    return acc;
  }, 0);
  const playsArtista = artistasPorPlayMap.get(artist)
  const percentage = ((playsArtista)/(playsTotais)*100).toFixed(2)

  return (
    <Card
      sx={{
        bgcolor: "#666666",
        border: "2px solid #808080",
        borderRadius: "15px",
        color: "white",
        minWidth: 200,
        margin: 2,
      }}
    >
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Percentagem
        </Typography>
        <Typography variant="h4">{percentage}%</Typography>
      </CardContent>
    </Card>
  );
}

export default PercentagemPlaysArtista;
