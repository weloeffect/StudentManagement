import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { ClassNames } from '@emotion/react';
import { Button, makeStyles, Paper } from '@mui/material';
import { Container } from '@mui/system';
import { useState } from 'react';
import { useEffect } from 'react';

// const useStyles = makeStyles((theme) => ({
//     root: {
//         '& > *': {
//             margin: theme.spacing(1),
//         },
//     },
// }));

export default function Student() {
    const [name, setName] = useState();
    const [address, setAddress] = useState();
    const [students, setStudents] = useState();
    // const classes = useStyles();
    const handleClick = (e) =>{
        e.preventDefault()
        const student = {name, address}
        console.log(student)
        fetch("http://localhost:8080/student/add",{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body:JSON.stringify(student)
        }).then(() => {
            console.log("new student added")
        })
    }
    useEffect(() => {
        fetch("http://localhost:8080/student/getAll")
        .then(res=>res.json())
        .then((result) => {
            setStudents(result);
        })
    }, [])
    const paperStyle = {padding:'50px 20px', width:600, margin:"20px auto"}
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
        <Container style={{margin: "auto"}}>
            <Paper elevation={3} style={paperStyle}>
                <h1 style={{color:"blue"}}><u>Add Student</u></h1>
                <form action=""  noValidate autoComplete='off'>
                    <TextField id="outlined-basic" label="name" variant="outlined" fullWidth
                    value={name}
                    onChange={(e) => setName(e.target.value)}/>
                    <TextField style={{marginTop: "10px"}} id="outlined-basic" label="address" variant="outlined" fullWidth 
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    />
                     <Button  style={{margin: "20px"}} variant="contained" onClick={handleClick}>SUBMIT</Button>
                </form>
            </Paper>
            <h1>Students</h1>
            <Paper elevation={3} style={paperStyle} >
                {students.map(student=> (
                    <Paper elevation={6} style={{margin:"10px", padding:"15px", textAlign:"left"}} key={student.id}>
                        Id: {student.id}<br/>
                        Name: {student.name}<br/>
                        Address: {student.address}
                    </Paper>
                ))
                }
            </Paper>
        </Container>
        
      
      
    </Box>
  );
}
