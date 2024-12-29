import * as React from "react";
import { useParams } from "react-router";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid2";

import NavBar from "./Components/appBar.jsx";


function ByArtist() {
  const params = useParams(); //params.artistName

  return (
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
                <span sx={{ display: "flex" }}>
                  {" "}
                  {params.artistName}
                </span>
              </Box>
            </Grid>
            <Grid sx={{ border: "black solid 5px" }} size={{ xs: 12, md: 6 }}>
             A
            </Grid>
            <Grid sx={{ border: "black solid 5px" }} size={{ xs: 12, md: 6 }}>
             B
            </Grid>
            <Grid sx={{ border: "black solid 5px" }} size={{ xs: 12, md: 6 }}>
            C
            </Grid>
            <Grid sx={{ border: "black solid 5px" }} size={{ xs: 12, md: 6 }}>
             D
            </Grid>
            <Grid sx={{ border: "black solid 5px" }} size={{ xs: 12, md: 12 }}>
           E
            </Grid>
          </Grid>
        </Box>
      </Container>

      <CssBaseline />
    </React.Fragment>
  );
}

export default ByArtist;
