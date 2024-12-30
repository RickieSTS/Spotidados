import "./App.css";
import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid2";

import MusicasDiferentesOuvidasT from "./Components/MusicasDiferentesOuvidasT/MusicasDiferentesOuvidasT.jsx";
import ArtistasDiferentesOuvidosT from "./Components/ArtistasDiferentesOuvidosT/ArtistasDiferentesOuvidosT.jsx";
import PlaysTotais from "./Components/PlaysTotais/PlaysTotais.jsx";
import MinutosPassados from "./Components/MinutosPassados/MinutosPassados.jsx";
import ArtistasPorPlays from "./Components/ArtistasPorPlays/ArtistasPorPlays.jsx";
import MusicaMaisOuvidaPorPlays from "./Components/MusicaMaisOuvidaPorPlays/MusicaMaisOuvidaPorPlays.jsx";
import data from "./spotify_data_history.json";
import NavBar from "./Components/appBar.jsx";


function Home() {
  
  return (
    
      <>
        <CssBaseline />
        <NavBar />
        <Container maxWidth="xxl">
          <Box sx={{ bgcolor: "#cfe8fc", height: "100vh", m: 1 }}>
            <Grid
              sx={{ border: "black solid 5px" }}
              container
              
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
                <MinutosPassados dados={data} />
              </Grid>
              <Grid sx={{ border: "black solid 5px" }} size={{ xs: 12, md: 6 }}>
                <MusicaMaisOuvidaPorPlays dados={data} />
              </Grid>
              <Grid
                sx={{ border: "black solid 5px" }}
                size={{ xs: 12, md: 12 }}
              >
                <ArtistasPorPlays dados={data} />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </>
    
  );
}

export default Home;
