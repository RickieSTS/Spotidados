import { useParams } from 'react-router-dom';
import { Card, CardContent, Typography } from '@mui/material';

function DiferentesMusicas({dados}) {
     const { artistName } = useParams();
    
    // Se não houver dados ou artista selecionado, retorna null
    if (!dados || !artistName) return null;

    // Conta quantas vezes músicas do artista foram tocadas
    const plays = dados.filter(item => 
        item.master_metadata_album_artist_name === artistName
    ).length;

    return (
        <Card sx={{
            bgcolor: '#666666',
            border: '2px solid #808080',
            borderRadius: '15px',
            color: 'white',
            minWidth: 200,
            margin: 2
        }}>
            <CardContent>
                <Typography variant="h5" gutterBottom>
                    {artistName}
                </Typography>
                <Typography variant="h4">
                    Plays: {plays}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default DiferentesMusicas;