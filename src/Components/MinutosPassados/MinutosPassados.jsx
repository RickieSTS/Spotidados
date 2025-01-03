import { Card, CardContent, Typography } from '@mui/material';
//G4) Ver quantos minutos já se passou a ouvir.



function MinutosPassados ({dados}) {

    const totalMillisegundos = dados.reduce((acc, cur)=> acc+=cur.ms_played, 0)
    const totalMinutos = Math.round(totalMillisegundos/1000)

 return (
   <Card variant='flufyRosa'>
     <CardContent>
       <Typography variant="h4" gutterBottom>
         {totalMinutos} min
       </Typography>
       <Typography variant="h5">
         a ouvir música
       </Typography>
     </CardContent>
   </Card>
 );
}

export default MinutosPassados;