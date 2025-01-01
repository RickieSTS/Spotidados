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
    return ""
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
    <Card variant="flufyRosa">
      <CardContent>
        <Typography variant="h4" gutterBottom>
          {percentage} %
        </Typography>
        <Typography variant="h5"> de plays</Typography>
      </CardContent>
    </Card>
  );
}

export default PercentagemPlaysArtista;
