import { Card, CardContent, Typography } from '@mui/material';

function G4() {
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
         Total de Minutos
       </Typography>
       <Typography variant="h4">
         Min: 14440
       </Typography>
     </CardContent>
   </Card>
 );
}

export default G4;