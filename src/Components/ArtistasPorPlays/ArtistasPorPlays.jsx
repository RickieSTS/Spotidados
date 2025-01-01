import { Card, CardContent, Typography, Box, Modal } from "@mui/material";
import * as React from "react";
import ModalArtistasPorPlays from "./Modal_ArtistasPorPlays/ModalArtistasPorPlays";

function ArtistasPorPlays({ dados }) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
   
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    borderRadius: 5,
    py: 2,
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
 
  return (
    <>
      <Card variant="verdeMusga"
        onClick={handleOpen}
        
      >
        <CardContent>
          <Typography variant="h5" gutterBottom>
            TOP 100
          </Typography>
          <Box
            component="img"
            sx={{
              height: 100,
              width: 100,
              borderRadius: "10px",
            }}
            alt="Duck avatar"
            src="/path-to-duck-image.png"
          />
        </CardContent>
      </Card>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="Modal Top 100"
        aria-describedby="Modals com Tabs Artistas por Plays e Muscias por Milisegundos"
      >
        <Box sx={style}>
          <Typography id="Top 100" variant="h6" component="h2">
            Top 100
          </Typography>
          <Box id="Tabs" sx={{ mt: 2 }}>
            <ModalArtistasPorPlays dados={dados} />
          </Box>
        </Box>
      </Modal>
    </>
  );
}

export default ArtistasPorPlays;
