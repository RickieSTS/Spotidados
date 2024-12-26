import { Card, CardContent, Typography, Box } from '@mui/material';

function G11() {
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
         TOP 100
       </Typography>
       <Box
         component="img"
         sx={{
           height: 100,
           width: 100,
           borderRadius: '10px'
         }}
         alt="Duck avatar"
         src="/path-to-duck-image.png"
       />
     </CardContent>
   </Card>
 );
}

export default G11;