import "./App.css";
import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid2";
import { ThemeProvider } from "@mui/material/styles";

import MusicasDiferentesOuvidasT from "./Components/MusicasDiferentesOuvidasT/MusicasDiferentesOuvidasT.jsx";
import ArtistasDiferentesOuvidosT from "./Components/ArtistasDiferentesOuvidosT/ArtistasDiferentesOuvidosT.jsx";
import PlaysTotais from "./Components/PlaysTotais/PlaysTotais.jsx";
import MinutosPassados from "./Components/MinutosPassados/MinutosPassados.jsx";
import ArtistasPorPlays from "./Components/ArtistasPorPlays/ArtistasPorPlays.jsx";
import MusicaMaisOuvidaPorPlays from "./Components/MusicaMaisOuvidaPorPlays/MusicaMaisOuvidaPorPlays.jsx";
import data from "./spotify_data_history.json";
import NavBar from "./Components/appBar.jsx";
import MediaDiariaAOuvir from "./Components/MediaDiariaAOuvir/MediaDiariaAOuvir.jsx";
import HoraDoDia from "./Components/HoraDoDia/HoraDoDia.jsx";
import MaisOuvidaPorEstacao from "./Components/MaisOuvidaPorEstacao/MaisOuvidaPorEstacao.jsx";
import Top3Top5PorEstacao from "./Components/Top3Top5PorEstacao/Top3Top5PorEstacao.jsx";
import spotidadosTheme from "./theme.js";

function Home() {
  return (
    <ThemeProvider theme={spotidadosTheme}>
      <CssBaseline />
      <NavBar />
      <Container maxWidth="xxl">
        <Box sx={{ bgcolor: "#cfe8fc", m: 1 }}>
          <Grid container columns={12} spacing={2}>
            <Grid item size={{ xs: 6, md: 6 }}>
              <ArtistasPorPlays dados={data} />
            </Grid>
            <Grid item size={{ xs: 6, md: 6 }}>
              <Grid container direction="column" spacing={2}>
                <Grid item>
                  <PlaysTotais dados={data} />
                </Grid>
                <Grid item>
                  <MinutosPassados dados={data} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container columns={18} spacing={2}>
            <Grid item size={{ xs: 18, md: 18 }} spacing={2}>
              <MusicasDiferentesOuvidasT dados={data} />
            </Grid>
            <Grid item size={{ xs: 18, md: 18 }}>
              <ArtistasDiferentesOuvidosT dados={data} />
            </Grid>
            <Grid item size={{ xs: 8, md: 6 }}>
              <MusicaMaisOuvidaPorPlays dados={data} />
            </Grid>
            <Grid item size={{ xs: 8, md: 6 }}>
              <MediaDiariaAOuvir dados={data} />
            </Grid>
            <Grid item size={{ xs: 8, md: 6 }}>
              <HoraDoDia dados={data} />
            </Grid>
            <Grid item size={{ xs: 8, md: 18 }}>
              <MaisOuvidaPorEstacao dados={data} />
            </Grid>
            <Grid item size={{ xs: 18, md: 18 }}>
              <Top3Top5PorEstacao dados={data} />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default Home;
