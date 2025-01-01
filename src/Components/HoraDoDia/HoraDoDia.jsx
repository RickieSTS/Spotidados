import { Card, CardContent, Typography } from '@mui/material';



function HoraDoDia({ dados }) {
    
    const hoursData = dados.reduce((acc, item) => {
      const hour = new Date(item.ts).getHours();
      acc[hour] = (acc[hour] || 0) + item.ms_played;
      return acc;
    }, {});
  
   
    const sortedHours = Object.entries(hoursData)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 1); 
  
    return (
        <Card variant='flufyRosa'>
            <CardContent>
       <Typography variant="h5" gutterBottom>
       Ouço mais música às 
       </Typography>
       <Typography variant="h4">
          {sortedHours.map(([hour, msPlayed]) => (<>
              {hour}h00
              </>
          ))}
       
       </Typography>
     </CardContent>
   </Card>
    );
  }
  
  export default HoraDoDia;