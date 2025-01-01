import { useParams } from 'react-router-dom';
import { Card, CardContent, Typography } from '@mui/material';

function DiferentesMusicas({ dados }) {
  const { artistName } = useParams();

  if (!dados || !artistName) return null;

  
  const uniqueSongs = new Set(
    dados
      .filter(item => item.master_metadata_album_artist_name === artistName && item.master_metadata_track_name)
      .map(item => item.master_metadata_track_name) 
  );

  
  const uniqueSongCount = uniqueSongs.size;

  return (
    <Card
      sx={{
        bgcolor: '#666666',
        border: '2px solid #808080',
        borderRadius: '15px',
        color: 'white',
        minWidth: 200,
        margin: 2,
      }}
    >
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {artistName}
        </Typography>
        <Typography variant="h4">
          Músicas Únicas: {uniqueSongCount}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default DiferentesMusicas;
