import { useParams } from "react-router-dom";
import { Card, CardContent, Typography } from "@mui/material";

function DiferentesMusicas({ dados }) {
  const { artistName } = useParams();

  // Se não houver dados ou artista selecionado, retorna null
  if (!dados || !artistName) return null;

  // Conta quantas vezes músicas do artista foram tocadas
  const plays = dados.filter(
    (item) => item.master_metadata_album_artist_name === artistName
  ).length;

  return (
    <Card variant="verdeMusga">
      <CardContent sx={{display: "in-line"}}>
        <Typography variant="h4">{plays} Musicas</Typography>
        <Typography variant="h6">Diferentes Ouvidas</Typography>
      </CardContent>
    </Card>
  );
}

export default DiferentesMusicas;
