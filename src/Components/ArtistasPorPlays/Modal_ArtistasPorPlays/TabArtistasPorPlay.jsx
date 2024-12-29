import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from '@mui/material/NativeSelect';
import TableTabArtistasPorPlay from "./TableTabArtistasPorPlay";

function TabArtistasPorPlays({ dados }) {
  const [timeStamp, setTimeStamp] = React.useState(1);

  const handleChangeDropTabArtistas = (event) => {
    setTimeStamp(event.target.value);
  };


  return (
    <>
      
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="ordenar-por">Ordenar Por</InputLabel>
        <NativeSelect
         // labelId="demo-simple-select-label"
          //id="demo-simple-select"
          //value={timeStamp}
          defaultValue={1}
          //label="Ordenar Por"
          onChange={handleChangeDropTabArtistas}
          inputProps={{
            name: 'Ordenar Por',
            id: 'ordenar-por',
          }}
        >
          <option  value={1}>Últimas 4 semanas</option>
          <option  value={2}>Últimos 6 meses</option>
          <option  value={3}>Último ano</option>
          <option  value={4}>Desde sempre</option>
        </NativeSelect>
      </FormControl>
      <TableTabArtistasPorPlay dados={dados} sortBy={timeStamp}/>
    </>
  );
}

export default TabArtistasPorPlays;
