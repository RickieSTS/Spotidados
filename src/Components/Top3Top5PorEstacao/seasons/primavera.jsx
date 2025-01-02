import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Top5MusicasPorEstacao from './../Top5MusicasPorEstacao'
import Top3ArtistasPorEstacao from './../Top3ArtistasPorEstacao'
import { Card } from '@mui/material';


  function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
      </div>
    );
  }
  
  CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  
  export default function Primavera({dados, season}) {
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

  return (
    <Card sx={{ width: '100%' }} variant="verdeMusga">
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Top 5 Músicas" {...a11yProps(0)} />
          <Tab label="Top 3 Artistas" {...a11yProps(1)} />
          
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Top5MusicasPorEstacao dados={ dados } season={season}/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      <Top3ArtistasPorEstacao dados={ dados } season={season}/>
      </CustomTabPanel>
      
    </Card>
  );
}