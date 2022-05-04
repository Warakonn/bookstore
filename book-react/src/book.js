import React, { useState, useEffect} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  const buy = id => {
    window.location = '/buy/' + id
  }
export default function SimpleContainer() {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/book/")
          .then(res => res.json())
          .then(
            (result) => {
              setItems(result);
            },
          )
      }, [])
return (
    <React.Fragment>
    <CssBaseline />
    <Container maxWidth="">
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableBody>
          {items.map((row) => (
            <StyledTableRow key={row.name} >
               
              <StyledTableCell component="th" scope="row">
                  <img alt="" src={row.IMG} width="140" ></img>
                </StyledTableCell>
                <StyledTableCell align="">
                <Typography sx={{ fontSize: 50 }} color="text.secondary" gutterBottom>
                {row.fname}
                </Typography>
                <Typography sx={{ fontSize: 20}} color="text.secondary" gutterBottom>
                {row.price}฿
                </Typography>
               <Button onClick={() => buy(row.id)} variant="contained">
                 Buy book
                </Button>
                </StyledTableCell>
                <StyledTableCell align="">
                  <Typography gutterBottom variant="h5" component="div">
                  </Typography>
              </StyledTableCell>
              
              <StyledTableCell component="th" scope="row">
                  </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                </StyledTableCell>
                <StyledTableCell align="">
                  <Typography gutterBottom variant="h5" component="div">
                  </Typography>
              </StyledTableCell>
              {/* <StyledTableCell align=""><Link href="create" variant="body2"><Button variant="contained">Button</Button></Link></StyledTableCell> */}
              <StyledTableCell align=""></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Container>
    </React.Fragment>
  );
          }
