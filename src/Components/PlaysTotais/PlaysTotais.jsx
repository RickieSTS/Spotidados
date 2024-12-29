import { Card, CardContent, Typography } from "@mui/material";
//G1) Ver quantas plays no total.

function PlaysTotais({ dados }) {
  //Verifica se a musica não é NULL para contar, se for NULL é um podcast
  const playsTotais = dados.reduce((acc, cur) => {
      if(cur.master_metadata_track_name){
        acc++
      }
    return acc;
  }, 0);
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
          Total de Plays
        </Typography>
        <Typography variant="h5">Plays: {playsTotais}</Typography>
      </CardContent>
    </Card>
  );
}

export default PlaysTotais;
