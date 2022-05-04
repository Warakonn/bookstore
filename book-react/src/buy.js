import React, { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useParams } from "react-router-dom";



export default function Buybook() { 
   
    const { id } = useParams();
    useEffect(() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch("http://localhost:3000/book/"+id, requestOptions)
          
            .then(response => response.json())
            .then(result => {
                if (result['status'] === 'ok') {
                    setFname(result['book']['fname'])
                    setPrice(result['book']['price'])
                    
                }
            })
            .catch(error => console.log('error', error));
            
    }, [id])
const BUY = id => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
      'id': id
    });
    
    var requestOptions = {
      method: 'DELETE',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch("http://localhost:3000/book/delete/", requestOptions)
      .then(response => response.json())
      .then(result => {
        alert("successfully!!!!")
        if (result['status'] === 'ok') {
            window.location.href = '/'
        }
      })
      .catch(error => console.log('error', error));
    }

  const [i, setId] = useState('');
  const [f, setFname] = useState('');
  const [p, setPrice] = useState('');
  return (
    <Container maxWidth="sm" sx={{ p:2 }}>
    <Typography variant="h6" gutterBottom component="div">
      buy book
    </Typography>

      <Grid container spacing={2}>
      <Grid item xs={10} sx={{ p:2 }}><TextField id="i" label="id" variant="outlined" fullWidth required onChange={(event) => setId(event.target.value)} value={id}></TextField> </Grid>
      <Grid item xs={10} sx={{ p:2 }}><TextField id="f" label="book name" variant="outlined" fullWidth required onChange={(event) => setFname(event.target.value)} value={f}></TextField></Grid>
      <Grid item xs={10} sx={{ p:2 }}><TextField id="p" label="Price" variant="outlined" fullWidth required onChange={(event) => setPrice(event.target.value)} value={p}></TextField></Grid>
       
    </Grid>
    <Grid item xs={10} ><Button onClick={() => BUY(id)} variant="contained">confirm</Button></Grid>

</Container>
  );
}