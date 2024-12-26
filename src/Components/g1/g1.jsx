import { Card, CardContent, Typography } from '@mui/material';
//G1) Ver quantas plays no total.


function G1() {


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
         Total de Plays
       </Typography>
       <Typography variant="h4">
         Plays: 1500
         Plays: {dados.length}
       </Typography>
     </CardContent>
   </Card>
 );
}

export default G1;