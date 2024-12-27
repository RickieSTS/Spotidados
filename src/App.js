import "./App.css";
import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid2";

import MusicasDiferentesOuvidasT from "./Components/MusicasDiferentesOuvidasT/MusicasDiferentesOuvidasT.jsx";
import ArtistasDiferentesOuvidosT from "./Components/ArtistasDiferentesOuvidosT/ArtistasDiferentesOuvidosT.jsx";
import PlaysTotais from "./Components/PlaysTotais/PlaysTotais.jsx";
import G4 from "./Components/MinutosPassados/MinutosPassados.jsx";
import G11 from "./Components/g11/g11.jsx";
import data from "../src/spotify_data_history.json";
import NavBar from "../src/Components/appBar.jsx";

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <CssBaseline />
        <NavBar/>
        <Container maxWidth="xxl">
         
          <Box sx={{ bgcolor: "#cfe8fc", height: "100vh", m: 1 }}>
            <Grid
              sx={{ border: "black solid 5px" }}
              container
              spacing={2}
              columns={12}
            >
              <Grid
                sx={{
                  border: "black solid 5px",
                  display: "flex",
                  alignItems: "center",
                }}
                size={{ xs: 12 }}
              >
                

                <Box>
                  <span sx={{ display: "flex" }}>
                    {" "}
                    O meu histórico do Spotify
                  </span>
                </Box>
              </Grid>
              <Grid sx={{ border: "black solid 5px" }} size={{ xs: 12, md: 6 }}>
                <PlaysTotais dados={data} />
              </Grid>
              <Grid sx={{ border: "black solid 5px" }} size={{ xs: 12, md: 6 }}>
                <MusicasDiferentesOuvidasT dados={data} />
              </Grid>
              <Grid sx={{ border: "black solid 5px" }} size={{ xs: 12, md: 6 }}>
                <ArtistasDiferentesOuvidosT dados={data} />
              </Grid>
              <Grid sx={{ border: "black solid 5px" }} size={{ xs: 12, md: 6 }}>
                <G4 dados={data} />
              </Grid>
              <Grid sx={{ border: "black solid 5px" }} size={{ xs: 12, md: 12 }}>
                <G11 />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </React.Fragment>
    </div>
  );
}

export default App;
