import * as React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import TabArtistasPorPlays from "./TabArtistasPorPlay";
import TabMusicasPorMilisegundos from "./TabMusicasPorMilisegundos";

function ModalArtistasPorPlays({ dados }) {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
 
  // const mapTop100 = new Map()

  // const a = data.map((cur) => {
  //     if(mapTop100.has(cur)){
  //         return mapTop100.set(cur, mapTop100.get(cur)+1)
  //     }
  //     else{
  //         return mapTop100.set(cur, 1)
  //     }
  // },0)


  


  return (
    <Box sx={{ bgcolor: "background.paper", width: "100%" }}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="2 Tabs"
         
        >
          <Tab label="Artistas por Plays" {...a11yProps(0)} />
          <Tab label="Musicas por Tempo" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} dir={theme.direction}>
        <TabArtistasPorPlays dados={dados} />
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
        <TabMusicasPorMilisegundos dados={dados}/>
      </TabPanel>
    </Box>
  );
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `tab-panel-${index}`,
  };
}

export default ModalArtistasPorPlays;
