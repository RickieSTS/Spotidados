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
        <Card sx={{ 
            alignContent: 'center',
            bgcolor: '#666666', 
            border: '2px solid #808080', 
            borderRadius: '15px',
            color: 'white',
            minWidth: 200,
            margin: 2
           }}>
            <CardContent>
       <Typography variant="h6" gutterBottom>
       A minha hora favorita:
       </Typography>
       <Typography variant="h5">
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