import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";

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

function createData(rank, artista, totalPlays) {
  return { rank, artista, totalPlays };
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

function TableTabArtistasPorPlay({ dados, sortBy }) {
  const rows = [];
  const artistasPorPlayMap = new Map();

  React.useMemo(() => {
    //  console.log(CalcularTimeFrame(sortBy))

    const ordenarPor = CalcularTimeFrame(sortBy);

    dados.map((e) => {
      const songDate = Date.parse(e.ts);

      if (songDate >= ordenarPor) {
        if (artistasPorPlayMap.has(e.master_metadata_album_artist_name)) {
          artistasPorPlayMap.set(
            e.master_metadata_album_artist_name,
            artistasPorPlayMap.get(e.master_metadata_album_artist_name) + 1
          );
        } else {
          artistasPorPlayMap.set(e.master_metadata_album_artist_name, 1);
        }
      }
      return "";
    });

    const orderedArtistasPorPlayMap = new Map(
      [...artistasPorPlayMap.entries()].sort((a, b) => b[1] - a[1])
    );

    let index = 1;
    orderedArtistasPorPlayMap.forEach((val, key) => {
      if (key) {
        rows.push(createData(index, key, val));
        index++;
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
            <StyledTableCell>Rank</StyledTableCell>
            <StyledTableCell align="right">Artista</StyledTableCell>
            <StyledTableCell align="right">Total Plays</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.rank}>
              <StyledTableCell component="th" scope="row">
                {row.rank}
              </StyledTableCell>
              <StyledTableCell align="right">
                <Link href={"/byArtist/" + row.artista}>{row.artista}</Link>
              </StyledTableCell>
              <StyledTableCell align="right">{row.totalPlays}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableTabArtistasPorPlay;
