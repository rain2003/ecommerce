"use client";
import React from "react";
import { Button, Header , Appbar , Landing , Signin , Signup } from "ui";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function Page() {
  return <div>
    <Router>
      <Appbar/>
        <Routes>
        <Route path="/login" element={<Signin />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/" element={<Landing />} />
        </Routes>
    </Router>
  </div>
}
