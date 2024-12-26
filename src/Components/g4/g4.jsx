import { Card, CardContent, Typography } from '@mui/material';

function MinutesCount() {
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
         Total de Minutos
       </Typography>
       <Typography variant="h4">
         Min: 14440
       </Typography>
     </CardContent>
   </Card>
 );
}

export default MinutesCount;