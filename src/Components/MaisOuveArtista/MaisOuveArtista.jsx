import { Card, CardContent, Typography } from "@mui/material";

function MaisOuveArtista({ dados, artist }) {
  const obterEstacao = (data) => {
    const mes = data.getMonth() + 1;

    if ([12, 1, 2].includes(mes)) return "Inverno";
    if ([3, 4, 5].includes(mes)) return "Primavera";
    if ([6, 7, 8].includes(mes)) return "Verão";
    return "Outono";
  };

  const tempoPorEstacao = {
    Inverno: 0,
    Primavera: 0,
    Verão: 0,
    Outono: 0
  };

  dados
    .filter((registro) => registro.master_metadata_album_artist_name === artist) 
    .forEach((registro) => {
      const data = new Date(registro.ts);
      const estacao = obterEstacao(data);
      const horas = registro.ms_played / (1000 * 60 * 60);
      tempoPorEstacao[estacao] += horas;
    });

  const estacaoMaisMusica = Object.entries(tempoPorEstacao).reduce(
    (max, [estacao, tempo]) => (tempo > max.tempo ? { estacao, tempo } : max),
    { estacao: "", tempo: 0 }
  );

  return (
    <Card variant="flufyRosa" >
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Mais ouvido no
        </Typography>
        <Typography variant="h4">
          {estacaoMaisMusica.estacao}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default MaisOuveArtista;
