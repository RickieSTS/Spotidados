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
      <Card
        onClick={handleOpen}
        sx={{
          bgcolor: "#666666",
          border: "2px solid #808080",
          borderRadius: "15px",
          color: "white",
          minWidth: 200,
          margin: 2,
        }}
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
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Top 100
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <ModalArtistasPorPlays dados={dados} />
          </Typography>
        </Box>
      </Modal>
    </>
  );
}

export default ArtistasPorPlays;
