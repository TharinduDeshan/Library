import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import { Divider } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

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

function createData(name, nic, contactno, email, date, action) {
  return { name, nic, contactno, email, date, action };
}

const rows = [
  createData(
    "Thanuvi Perera",
    parseInt("98088656565V"),
    parseInt("0771234567", 8),
    "abc@gmail.com",
    parseInt("2012/01/15", 8),
    <button>fda</button>
  ),
  createData(
    "Thanuvi Perera",
    parseInt("98088656565V"),
    parseInt("0771234567", 8),
    "abc@gmail.com",
    parseInt("2012/01/15", 8),
    <button>fda</button>
  ),
  createData(
    "Thanuvi Perera",
    parseInt("98088656565V"),
    parseInt("0771234567", 8),
    "abc@gmail.com",
    parseInt("2012/01/15", 8),
    <button>fda</button>
  ),
];

export default function StaffMemberRequest() {
  return (
    <TableContainer component={Paper}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container>
          <Grid xs={4}>
            <Typography variant="h5">Staff Member Details</Typography>
          </Grid>
          <Grid xs={5}></Grid>
          <Grid xs={3}>
            <TextField
              id="standard-search"
              label="Search field"
              type="search"
              variant="standard"
            />
          </Grid>
        </Grid>
      </Box>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Member Name</StyledTableCell>
            <StyledTableCell align="right">NIC</StyledTableCell>
            <StyledTableCell align="right">Contact No</StyledTableCell>
            <StyledTableCell align="right">Email</StyledTableCell>
            <StyledTableCell align="right">Date</StyledTableCell>
            <StyledTableCell align="right">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.nic}</StyledTableCell>
              <StyledTableCell align="right">{row.contactno}</StyledTableCell>
              <StyledTableCell align="right">{row.email}</StyledTableCell>
              <StyledTableCell align="right">{row.date}</StyledTableCell>
              <StyledTableCell align="right">{row.action}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
