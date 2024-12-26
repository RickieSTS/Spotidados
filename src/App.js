import "./App.css";
import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid2";
import { styled } from "@mui/material/styles";

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="xxl">
          <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }}>
            <Grid container spacing={2} columns={16}>
            <Grid size={{xs:16}}>
               Header
              </Grid>
              <Grid size={{ xs: 6, md: 8 }}>
               1
              </Grid>
              <Grid size={{ xs: 6, md: 8 }}>
                2
              </Grid>
              <Grid size={{ xs: 6, md: 4 }}>
               3
              </Grid>
              <Grid size={{ xs: 6, md: 8 }}>
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
