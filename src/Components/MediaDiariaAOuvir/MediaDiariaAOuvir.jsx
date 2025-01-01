// G6) Ver a media diaria de horas que vocé ouvida ao longo do dia.
import { Card, CardContent, Typography } from '@mui/material';


function MediaDiariaAOuvir({ dados }) {
  
  const diasUnicos = new Set(dados.map((e) => new Date(e.ts).toISOString().split("T")[0]));

  
  const horasPorDia = new Map();

  dados.forEach((registro) => {
    const dia = new Date(registro.ts).toISOString().split("T")[0]; 
    const horas = registro.ms_played / (1000 * 60 * 60);

    if (horasPorDia.has(dia)) {
      horasPorDia.set(dia, horasPorDia.get(dia) + horas);
    } else {
      horasPorDia.set(dia, horas);
    }
  });

 
  const somaHoras = Array.from(horasPorDia.values()).reduce((total, h) => total + h, 0);
  const media = somaHoras / diasUnicos.size;

  return (
    <Card variant='flufyRosa'>
      <CardContent>
 
 <Typography variant="h4">
 {media.toFixed(2)} horas
 </Typography>
 <Typography variant="h5" gutterBottom>
 em média a ouvir música
 </Typography>
</CardContent>
</Card>
  )
}

export default MediaDiariaAOuvir;