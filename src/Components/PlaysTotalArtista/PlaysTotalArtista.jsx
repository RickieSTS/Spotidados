import { Card, CardContent, Typography } from "@mui/material";
import "../../theme";
function PlaysTotalArtista({ dados, artist }) {
  const playsDoArtista = dados.filter(
    (item) => item.master_metadata_album_artist_name === artist
  );

  return (
    <Card variant="flufyRosa">
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Ouviste 
        </Typography>
        <Typography variant="h4">{playsDoArtista.length} vezes</Typography>
      </CardContent>
    </Card>
  );
}

export default PlaysTotalArtista;
