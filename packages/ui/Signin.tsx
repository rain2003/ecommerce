"use client";
import  React from "react"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
export const Signin=()=>{
    return <div>
        <div style={{
            textAlign : 'center',
            marginTop : '100px'
        }}>
            <h2>Welcome To E-Commerce Website</h2>
        </div>
        <div style={{
        display : 'flex',
        justifyContent : 'center',
        padding : 20,
        height : "240px",
    }}>
    <Card variant="outlined" style={{
        width : '30%',
        padding: 20,
        display : 'flex',
        flexDirection : 'column'
        }}>
            <TextField id="outlined-basic" label="Email" variant="outlined"/>
            <br />
            <TextField id="outlined-basic" label="Password" variant="outlined" />
        
        <Button variant="contained" style={{
            marginTop : '30px',
            width : 'fit-content'
        }}
        >Sign in</Button>
    </Card>
    </div>
    </div>
}