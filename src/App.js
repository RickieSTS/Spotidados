import "./App.css";
import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid2";
import { G2 } from "./Components/g2/g2";
import MyCard from './Components/g1/g1.jsx';
import MinutesCount from "./Components/g4/g4.jsx";


function App() {
  return (
    <div className="App">
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="xxl">

          <Box sx={{ bgcolor: "#cfe8fc", height: "100vh", m: 1}}>
            <Grid
              sx={{ border: "black solid 5px" }}
              container
              spacing={2}
              columns={16}
            >
              <Grid sx={{ border: "black solid 5px", display:"flex",  alignItems: 'center' }} size={{ xs: 16 }}>
               
                 <box>
                   <svg 
                  width="90"
                  height="90"
                  viewBox="0 0 90 90"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    d="M0 0H45C69.8528 0 90 20.1472 90 45C90 69.8528 69.8528 90 45 90C20.1472 90 0 69.8528 0 45V0Z"
                    fill="url(#paint0_linear_1_13)"
                  />
                  <path
                    d="M25.5005 61.5001L41.0004 30.5001L55.5 54.0001L64 40.0002L77.4997 54.0001"
                    stroke="white"
                    stroke-width="4"
                    stroke-linecap="round"
                  />
                  <circle cx="74.5" cy="29.5" r="5.5" fill="#005246" />
                  <ellipse cx="42" cy="77.5" rx="3" ry="2.5" fill="#CD88FF" />
                  <circle cx="26" cy="39" r="10" fill="#5B21B6" />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1_13"
                      x1="45"
                      y1="0"
                      x2="45"
                      y2="90"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#005246" />
                      <stop offset="1" stop-color="#5B21B6" />
                    </linearGradient>
                  </defs>
                </svg>
                 </box>
               

                <box>
                  <span sx={{display: "flex"}}> O meu histórico do Spotify</span>
                </box>
                 
                
              </Grid>
              <Grid sx={{ border: "black solid 5px" }} size={{ xs: 6, md: 8 }}>
              <MinutesCount />
              </Grid>
              <Grid sx={{ border: "black solid 5px" }} size={{ xs: 6, md: 8 }}>
                <G2/>
              </Grid>
              <Grid sx={{ border: "black solid 5px" }} size={{ xs: 6, md: 4 }}>
              <MyCard />
              </Grid>
              <Grid sx={{ border: "black solid 5px" }} size={{ xs: 6, md: 12 }}>

      
                4
              </Grid>
            </Grid>
          </Box>
        </Container>
      </React.Fragment>
    </div>
  );
}

export default App;