import { Card, CardContent, Typography } from "@mui/material";
//G1) Ver quantas plays no total.

function PlaysTotais({ dados }) {
  //Verifica se a musica não é NULL para contar, se for NULL é um podcast
  const playsTotais = dados.reduce((acc, cur) => {
    if (cur.master_metadata_track_name) {
      acc++;
    }
    return acc;
  }, 0);
  return (
    <Card variant="flufyRosa">
      <CardContent>
        <Typography variant="h4" gutterBottom>
          {playsTotais}
        </Typography>
        <Typography variant="h5">Músicas Ouvidas</Typography>
      </CardContent>
    </Card>
  );
}

export default PlaysTotais;
