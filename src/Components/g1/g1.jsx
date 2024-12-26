import { Card, CardContent, Typography } from '@mui/material';

function PlayCount() {
 return (
   <Card sx={{ 
     bgcolor: '#424242',
     borderRadius: '15px',
     color: 'white',
     minWidth: 200,
     margin: 2
   }}>
     <CardContent>
       <Typography variant="h5" gutterBottom>
         Total de Plays
       </Typography>
       <Typography variant="h4">
         Plays: 1500
       </Typography>
     </CardContent>
   </Card>
 );
}

export default PlayCount;