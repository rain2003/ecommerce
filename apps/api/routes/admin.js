"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = express_1.default.Router();
var ADMINS = [];
router.post('/admin/signup', function (req, res) {
    var admin = req.body;
    var existingAdmin = ADMINS.find(function (a) { return a.username === admin.username; });
    if (existingAdmin) {
        res.status(403).json({ message: 'Admin already exists' });
    }
    else {
        ADMINS.push(admin);
        res.json({ message: 'Admin created successfully' });
    }
});
router.post('/admin/login', function (req, res) {
    var _a = req.headers, username = _a.username, password = _a.password;
    var admin = ADMINS.find(function (a) { return a.username === username && a.password === password; });
    if (admin) {
        res.json({ message: 'Logged in successfully' });
    }
    else {
        res.status(403).json({ message: 'Admin authentication failed' });
    }
});
exports.default = router;
