import { useParams } from 'react-router-dom';
import { Card, CardContent, Typography } from '@mui/material';
// A3) Ver quantos minutos já se passou a ouvir.
function MinutosOuvidos({dados}) {
  const { artistName } = useParams();

  const minutosPorArtista = dados.reduce((acc, cur) => {
    const artista = cur.master_metadata_album_artist_name;
    if (artista !== artistName) return acc;
    
    const minutos = Math.round(cur.ms_played / 60000);
    acc[artista] = (acc[artista] || 0) + minutos;
    return acc;
  }, {});

  return (
    <>
      {Object.entries(minutosPorArtista).map(([artista, minutos]) => (
        <Card key={artista} sx={{
          bgcolor: '#666666',
          border: '2px solid #808080',
          borderRadius: '15px',
          color: 'white',
          minWidth: 200,
          margin: 2
        }}>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              {artista}
            </Typography>
            <Typography variant="h4">
              Min: {minutos}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </>
  );
}

export default MinutosOuvidos;