import { createTheme } from "@mui/material/styles";
import sourceSansPro from "@fontsource/source-sans-pro";
import inter from "@fontsource/inter";

const spotidadosTheme = createTheme({
  palette: {
    primary: {
      main: "#5B21B6",
      //dark: green[500]
    },
    secondary: {
      main: "#CD88FF",
      // dark: purple[800]
    },
    primaryLight: {
      //main: green[50],
      //contrastText: "#616161"
    },
    spotiColors: {
      roxoGalaxia: "#5B21B6",
      brancoGelo: "#FFF",
      pretoFundo: "#000",
      flufyRosa: "#CD88FF",
      verdeAgua: "#63BAAB",
      verdeMusga: "#005246",
      cinzaFraco: "#282828",
      cinzaCinzento: "#666666",
      cinzaForte: "#808080",
    },
  },
  typography: {
    fontFamily: '"Source Sans Pro", "Roboto", sans-serif',
    h1: {
      fontFamily: '"Source Sans Pro", "Roboto", sans-serif',
      fontWeight: 700,
      fontSize: "3.75rem",
    },
    h2: {
      fontFamily: '"Source Sans Pro", "Roboto", sans-serif',
      fontWeight: 500,
      fontSize: "3rem",
    },
    h3: {
      fontFamily: '"Source Sans Pro", "Roboto", sans-serif',
      fontWeight: 700,
      fontSize: "2.125rem",
    },
    h4: {
      fontFamily: '"Source Sans Pro", "Roboto", sans-serif',
      fontWeight: 700,
      fontSize: "1.5rem",
    },
    s1: {
      fontFamily: '"Source Sans Pro", "Roboto", sans-serif',
      fontWeight: 600,
      fontSize: "1.25rem",
    },
    p: {
      fontFamily: '"inter", "Roboto", sans-serif',
      fontWeight: 500,
      fontSize: "1rem",
    },
    pB: {
      fontFamily: '"inter", "Roboto", sans-serif',
      fontWeight: 700,
      fontSize: "1rem",
    },
    button: {
      fontFamily: '"Source Sans Pro", "Roboto", sans-serif',
      fontWeight: 700,
      fontSize: "1rem",
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          variants: [
            {
              props: { variant: "flufyRosa" },
              style: {
                border: "5px solid #CD88FF",
                backgroundColor: "#CD88FF",
                color: "#FFF",
                borderRadius: "15px",
              },
            },
            {
              props: { variant: "verdeMusga" },
              style: {
                border: "5px solid #63BAAB",
                backgroundColor: "#63BAAB",
                color: "#FFF",
                borderRadius: "15px",

                height: "100%",
              },
            },
          ],
        },
      },
    },
  },
});

export default spotidadosTheme;
