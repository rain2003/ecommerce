import { Router } from "react-router-dom";
import express from "express";
const router = express.Router();
let ADMINS = [];

router.post('/signup', (req, res) => {
    const admin = req.body;
    const existingAdmin = ADMINS.find(a => a.username === admin.username);
    if (existingAdmin) {
      res.status(403).json({ message: 'Admin already exists' });
    } else {
      ADMINS.push(admin);
      res.json({ message: 'Admin created successfully'});
    }
  });
  
  router.post('/login', (req, res) => {
    const { username, password } = req.headers;
    const admin = ADMINS.find(a => a.username === username && a.password === password);
    if (admin) {
      res.json({ message: 'Logged in successfully' });
    } else {
      res.status(403).json({ message: 'Admin authentication failed' });
    }
  });

  

export default router;