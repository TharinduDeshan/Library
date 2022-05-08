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
import DeleteIcon from '@mui/icons-material/Delete';
import Axios from "axios";
import { useState, useEffect } from "react";

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



export default function StaffMemberDetails() {

  const [posts, setPosts] = useState([]);
  const [searchItems, setSearchItems] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:9000/staffMemberDetails")
      .then((res) => {
        console.log(res.data);
        setPosts(res.data);
      })
      .catch((err) => console.log(err));
  });

  function deleteUser(id){
  
    fetch(`http://localhost:9000/staffMemberDetails/${id}`,{
      method: 'DELETE'
    }).then((result) => {
      result.json().then((res)=>{
        console.log(res);
      })
    })
  }

  return (
    <TableContainer component={Paper}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container>
          <Grid xs={4}>
            <Typography variant="h5">
             Staff Member Details
            </Typography>
          </Grid>
          <Grid xs={5}></Grid>
          <Grid xs={3}>
            <TextField
              id="standard-search"
              label="Search field"
              type="search"
              variant="standard"
              onChange={(event) => {
                setSearchItems(event.target.value);
              }}
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
          {
            posts.filter((post) => {
              if (searchItems == ""){
                return post
              }else if (post.memberName.toLowerCase().includes(searchItems.toLowerCase())){
                return post
              }
            })
          
          .map((post) => (
            <StyledTableRow key={post.memberName}>
              <StyledTableCell component="th" scope="row">
                {post.memberName}
              </StyledTableCell>
              <StyledTableCell align="right">{post.nic}</StyledTableCell>
              <StyledTableCell align="right">{post.contactNo}</StyledTableCell>
              <StyledTableCell align="right">{post.email}</StyledTableCell>
              <StyledTableCell align="right">{post.date}</StyledTableCell>
              <StyledTableCell align="right">{<button onClick={() => deleteUser(post._id)}><DeleteIcon/></button>}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
