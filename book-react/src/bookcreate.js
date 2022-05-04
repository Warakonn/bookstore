import React, { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';


export default function UserCreate() {  
    
    const handleSubmit = event => {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      
      var raw = JSON.stringify({
        "id":id,
        "fname": f,
        "price": p,
        "IMG": I
      });
      alert("successfully!!!!")
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };
      
      fetch("http://localhost:3000/book/create", requestOptions)
        .then(response => response.JSON())
        .then(result => {
          alert(result['message'])
          if (result['status'] === 'ok'){
            window.location.href = '/'
          }
        }
      )
        }
  const [id, setId] = useState('');
  const [f, setFname] = useState('');
  const [p, setPrice] = useState('');
  const [I, setImg] = useState('');
  return (
    <Container maxWidth="sm" sx={{ p:2 }}>
    <Typography variant="h6" gutterBottom component="div">
      creat book
    </Typography>
<from onsubmit={handleSubmit}>
    <Grid container spacing={2}>
    <Grid item xs={10} sx={{ p:2 }}><TextField id="id" label="id" variant="outlined" fullWidth required onChange={(event) => setId(event.target.value)}></TextField></Grid>
      <Grid item xs={10} sx={{ p:2 }}><TextField id="f" label="book name" variant="outlined" fullWidth required onChange={(event) => setFname(event.target.value)}></TextField></Grid>
      <Grid item xs={10} sx={{ p:2 }}><TextField id="p" label="Price" variant="outlined" fullWidth required onChange={(event) => setPrice(event.target.value)}></TextField></Grid>
      <Grid item xs={10} sx={{ p:2 }}><TextField id="I" label="image" variant="outlined" fullWidth required onChange={(event) => setImg(event.target.value)}></TextField></Grid> 
    </Grid>
    <Grid item xs={10} ><Button onClick={handleSubmit}>submit</Button></Grid>
</from>
</Container>
  );
}