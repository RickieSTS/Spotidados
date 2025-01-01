import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(rank, musica, tempoTotal) {
  return { rank, musica, tempoTotal };
}

function converterMilisegundos(ms) {
  const totalSeconds = ms / 1000;
  const totalMinutes = totalSeconds / 60;
  const hours = Math.floor(totalMinutes / 60);

  const minutes = Math.floor(totalMinutes % 60);
  const seconds = Math.floor(totalSeconds % 60);

  const formattedHours = String(hours).padStart(2, "0");
  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(seconds).padStart(2, "0");

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;

 
}

function CalcularTimeFrame(sortByData) {
  const today = Date.parse(new Date("2023-12-19"));

  const fourWeeks = 2419200000;
  const sixMonths = 15778476000;
  const oneYear = 31556952000;

  switch (sortByData) {
    default:
    case "1":
      //Últimas 4 semanas
      //console.log(today - fourWeeks + "Ultimas 4 Semanas");

      return today - fourWeeks;

    case "2":
      //Últimos 6 meses
      //console.log(today - sixMonths + "Ultimos 6 Meses");
      return today - sixMonths;

    case "3":
      //Último ano
      //console.log(today - oneYear + "Ultimo ano");
      return today - oneYear;

    case "4":
      //Desde sempre
      //console.log(today + "Desde Sempre");
      return 0;
  }
}

function TableTabMusicasPorMilisegundos({ dados, sortBy }) {
  const rows = [];
  const musicasPorMilisegundosMap = new Map();

  React.useMemo(() => {
    //  console.log(CalcularTimeFrame(sortBy))

    const ordenarPor = CalcularTimeFrame(sortBy);

    dados.map((e) => {
      const songDate = Date.parse(e.ts);

      if (songDate >= ordenarPor) {
        if (musicasPorMilisegundosMap.has(e.master_metadata_track_name)) {
          musicasPorMilisegundosMap.set(
            e.master_metadata_track_name,
            musicasPorMilisegundosMap.get(e.master_metadata_track_name) +
              e.ms_played
          );
        } else {
          musicasPorMilisegundosMap.set(
            e.master_metadata_track_name,
            e.ms_played
          );
        }
      }
      return "";
    });

    const orderedMusicasPorMilisegundosMap = new Map(
      [...musicasPorMilisegundosMap.entries()].sort((a, b) => b[1] - a[1])
    );

    let index = 1;
    orderedMusicasPorMilisegundosMap.forEach((val, key) => {
      if (key) {
        if (index <= 100) {
          rows.push(createData(index, key, val));
          index++;
        }
      }
    });
  }, [sortBy, rows]);

  return (
    <TableContainer
      component={Paper}
      sx={{
        height: "500px",
        overflowY: "scroll",
        overflowX: "hidden",
      }}
    >
      <Table sx={{ minWidth: 200 }} aria-label="Tabela Artistas por Plays">
        <TableHead>
          <TableRow>
            <StyledTableCell>#</StyledTableCell>
            <StyledTableCell align="right">Musica</StyledTableCell>
            <StyledTableCell align="right">Tempo Total</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.rank}>
              <StyledTableCell component="th" scope="row">
                {row.rank}
              </StyledTableCell>
              <StyledTableCell align="right">{row.musica}</StyledTableCell>

              <StyledTableCell align="right">
                {converterMilisegundos(row.tempoTotal)}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableTabMusicasPorMilisegundos;
