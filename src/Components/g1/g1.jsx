import { Card, CardContent, Typography } from '@mui/material';
//G1) Ver quantas plays no total.

function PlayCount({dados}) {
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
         Plays: {dados.length}
       </Typography>
     </CardContent>
   </Card>
 );
}

export default PlayCount;