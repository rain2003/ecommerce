import React, { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import Link from 'next/link';
export const Appbar=()=>{

return <div style={{
    display : 'flex',
    justifyContent : 'space-between'
}}>
    <h2>Coursera</h2>
    <div style={{
        display : 'flex'
    }}>
        <div style={{
            marginRight : '20px'
        }}>
        <Link href={"/Signup"}>
            <Button variant="contained"
            >Sign Up</Button>
        </Link>
        </div>
        <div>
        <Button variant="contained"
        >Sign In</Button>
        </div>
    </div>
</div>

}