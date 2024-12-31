import * as React from "react";
import { Card, CardContent, Typography } from "@mui/material";

function PosicaoDoArtistaTop100({ dados, artist }) {
  const artistasPorPlayMap = new Map();
  const listaArtistasTop100 = [];
  React.useMemo(() => {
    //  console.log(CalcularTimeFrame(sortBy))

    dados.map((e) => {
      const songDate = Date.parse(e.ts);

      if (artistasPorPlayMap.has(e.master_metadata_album_artist_name)) {
        artistasPorPlayMap.set(
          e.master_metadata_album_artist_name,
          artistasPorPlayMap.get(e.master_metadata_album_artist_name) + 1
        );
      } else {
        artistasPorPlayMap.set(e.master_metadata_album_artist_name, 1);
      }

      return "";
    });

    const orderedArtistasPorPlayMap = new Map(
      [...artistasPorPlayMap.entries()].sort((a, b) => b[1] - a[1])
    );

    let index = 1;
    orderedArtistasPorPlayMap.forEach((val, key) => {
      if (key) {
        if (index <= 100) {
          //listaArtistasTop100.push(index, key, val));

          listaArtistasTop100.push({ index: index, artist: key, noPlays: val });

          index++;
        }
      }
    });
  }, []);

  const rankInTop100 = listaArtistasTop100.reduce((acc, cur) => {
    if (cur.artist === artist) {
      acc = cur.index;
    }
    return acc;
  }, 0);

  console.log(rankInTop100);

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
        <Typography variant="h6" gutterBottom>
          Posição no Top 100
        </Typography>
        <Typography variant="h5">{rankInTop100!==0?("Rank: #"+rankInTop100):"Ainda não está no Top 100"}</Typography>
      </CardContent>
    </Card>
  );
}

export default PosicaoDoArtistaTop100;
