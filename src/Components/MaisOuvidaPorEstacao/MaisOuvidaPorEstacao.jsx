import { Card, CardContent, Typography } from '@mui/material';


function MaisOuvidaPorEstacao({ dados }) {
    
    const obterEstacao = (data) => {
      const mes = data.getMonth() + 1; 
  
      if ([12, 1, 2].includes(mes)) return "Inverno";
      if ([3, 4, 5].includes(mes)) return "Primavera";
      if ([6, 7, 8].includes(mes)) return "Verão";
      return "Outono"; 
    };
  
   
    const tempoPorEstacao = {
      Inverno: 0,
      Primavera: 0,
      Verão: 0,
      Outono: 0,
    };
  
    dados.forEach((registro) => {
      const data = new Date(registro.ts); 
      const estacao = obterEstacao(data);
      const horas = registro.ms_played / (1000 * 60 * 60); 
      tempoPorEstacao[estacao] += horas; 
    });
  
  
    const estacaoMaisMusica = Object.entries(tempoPorEstacao).reduce(
      (max, [estacao, tempo]) => (tempo > max.tempo ? { estacao, tempo } : max),
      { estacao: "", tempo: 0 }
    );
  
    return (
      <Card variant='verdeMusga'>
        <CardContent>
   <Typography variant="h6" gutterBottom>
   Estação do Ano mais ouvida:
   </Typography>
   <Typography variant="h5">
   {estacaoMaisMusica.estacao.toUpperCase()}
   </Typography>
  </CardContent>
  </Card>
    );
  }
  
  export default MaisOuvidaPorEstacao;
  