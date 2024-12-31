import * as React from "react";
import { useParams } from "react-router";
import { ThemeProvider } from "@mui/material/styles";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid2";
import MinutosOuvidos from "./Components/MinutosOuvidos/MinutosOuvidos.jsx";
import NavBar from "./Components/appBar.jsx";
import PercentagemPlaysArtista from "./Components/PercentagemPlaysArtista/PercentagemPlaysArtista.jsx";
import data from "./spotify_data_history.json";
import Top20MusicasArtista from "./Components/Top20MusicasArtista/Top20MusicasArtista.jsx";
import PosicaoDoArtistaTop100 from "./Components/PosicaoDoArtistaTop100/PosicaoDoArtistaTop100.jsx";
import PlaysTotalArtista from "./Components/PlaysTotalArtista/PlaysTotalArtista.jsx";
import spotidadosTheme from "./theme.js"


function ByArtist() {
  const params = useParams(); //params.artistName

  return (
    <ThemeProvider theme={spotidadosTheme}>
      <React.Fragment>
        <CssBaseline />
        <NavBar />
        <Container maxWidth="xxl">
          <Box sx={{ bgcolor: "#cfe8fc", height: "100vh", m: 1 }}>
            <Grid sx={{ border: "black solid 5px" }} container columns={12}>
              <Grid
                sx={{
                  border: "black solid 5px",
                  display: "flex",
                  alignItems: "center",
                }}
                size={{ xs: 12 }}
              >
                <Box>
                  <span sx={{ display: "flex" }}> {params.artistName}</span>
                </Box>
              </Grid>
              <Grid sx={{ border: "black solid 5px" }} size={{ xs: 12, md: 6 }}>
                <PercentagemPlaysArtista
                  dados={data}
                  artist={params.artistName}
                />
              </Grid>
              <Grid sx={{ border: "black solid 5px" }} size={{ xs: 12, md: 6 }}>
                <PosicaoDoArtistaTop100
                  dados={data}
                  artist={params.artistName}
                />
              </Grid>
              <Grid sx={{ border: "black solid 5px" }} size={{ xs: 12, md: 6 }}>
                <PlaysTotalArtista dados={data} artist={params.artistName} />
              </Grid>
              <Grid sx={{ border: "black solid 5px" }} size={{ xs: 12, md: 6 }}>
                <MinutosOuvidos dados={data} artist={params.artistName} />
              </Grid>
              <Grid
                sx={{ border: "black solid 5px" }}
                size={{ xs: 12, md: 12 }}
              >
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
