import { Card, CardContent, Typography } from "@mui/material";

function PlaysTotalArtista({ dados, artista }) {
  
  const playsDoArtista = dados.filter(
    (item) => item.master_metadata_album_artist_name === artista
  );

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
          Total de Plays - {artista}
        </Typography>
        <Typography variant="h5">
          Plays: {playsDoArtista.length}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default PlaysTotalArtista;
