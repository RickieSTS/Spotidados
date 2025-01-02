import * as React from "react";
import { useParams } from "react-router";
import { ThemeProvider } from "@mui/material/styles";
import { Typography } from "@mui/material";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid2";
import MinutosOuvidos from "./Components/MinutosOuvidos/MinutosOuvidos.jsx";
import NavBar from "./Components/appBar.jsx";
import PercentagemPlaysArtista from "./Components/PercentagemPlaysArtista/PercentagemPlaysArtista.jsx";
import Top20MusicasArtista from "./Components/Top20MusicasArtista/Top20MusicasArtista.jsx";
import PosicaoDoArtistaTop100 from "./Components/PosicaoDoArtistaTop100/PosicaoDoArtistaTop100.jsx";
import PlaysTotalArtista from "./Components/PlaysTotalArtista/PlaysTotalArtista.jsx";
import DiferentesMusicas from "./Components/DiferentesMusicas/DiferentesMusicas.jsx";
import MaisOuveArtista from "./Components/MaisOuveArtista/MaisOuveArtista.jsx";
import spotidadosTheme from "./theme.js";
import data from "./spotify_data_history.json";


function ByArtist() {
  const params = useParams(); //params.artistName

  return (
    <ThemeProvider theme={spotidadosTheme}>
      <React.Fragment>
        <CssBaseline />
        <NavBar />
        <Container
          sx={{
            backgroundColor: spotidadosTheme.palette.spotiColors.cinzaFraco,
          }}
          maxWidth="xxl"
        >
          <Box sx={{ p: 1 }}>
            <Grid container columns={12} spacing={2}>
              <Grid sx={{}} size={{ xs: 12 }}>
                <Typography variant="h3" sx={{ color: "#fff" }}>
                  {params.artistName}
                </Typography>
              </Grid>
              <Grid size={{ xs: 6, md: 6 }}>
                <PercentagemPlaysArtista
                  dados={data}
                  artist={params.artistName}
                />
              </Grid>
              <Grid size={{ xs: 6, md: 6 }}>
                <PosicaoDoArtistaTop100
                  dados={data}
                  artist={params.artistName}
                />
              </Grid>
              <Grid size={{ xs: 6, md: 6 }}>
                <DiferentesMusicas dados={data} artist={params.artistName} />
              </Grid>
              <Grid size={{ xs: 6, md: 6 }}>
                <PlaysTotalArtista dados={data} artist={params.artistName} />
              </Grid>
              <Grid size={{ xs: 6, md: 6 }}>
                <MaisOuveArtista dados={data} artist={params.artistName} />
              </Grid>
              <Grid size={{ xs: 6, md: 6 }}>
                <MinutosOuvidos dados={data} artist={params.artistName} />
              </Grid>
              <Grid size={{ xs: 12, md: 12 }}>
                <Top20MusicasArtista dados={data} artist={params.artistName} />
              </Grid>
            </Grid>
          </Box>
        </Container>

        <CssBaseline />
      </React.Fragment>
    </ThemeProvider>
  );
}

export default ByArtist;
