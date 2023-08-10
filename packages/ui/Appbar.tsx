"use client";
import React, { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import Link from 'next/link';
import { useNavigate } from "react-router-dom";
export const Appbar=()=>{
    const navigate = useNavigate();
return <div style={{
    display : 'flex',
    justifyContent : 'space-between'
}}>
    <h2>E-Commerce</h2>
    <div style={{
        display : 'flex'
    }}>
        <div style={{
            marginRight : '20px'
        }}>
        
            <Button variant="contained"
            onClick={()=>{
                navigate("/register");
            }}
            >Sign Up</Button>
        
        </div>
        <div>
        <Button variant="contained"
        onClick={()=>{
            navigate('/login');
        }}
        >Sign In</Button>
        </div>
    </div>
</div>

}