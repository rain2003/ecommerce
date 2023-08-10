"use client";
import React from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import { useNavigate } from "react-router-dom";
export const  Landing =()=> {
    const navigate = useNavigate();
    return <center>
    <h1 style={{ marginTop: "150px"}} >Welcome to E-commerce website!</h1>
    <Card variant="outlined" style={{
        width : '40%',
        display : 'flex',
        flexDirection: 'column-reverse',

    }}>
        <Button variant="contained" style={{
            marginTop : '30px',
        }}
        onClick={()=>{
            navigate("/login")
        }}
        >Sign In</Button>
        <Button variant="contained" style={{
            marginTop : '30px',
        }}
        onClick={()=>{
            navigate("/register")
        }}
        >Sign Up</Button>
    </Card>
    </center>
    
}