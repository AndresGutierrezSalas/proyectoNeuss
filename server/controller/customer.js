const express = require('express');
const mysqlConnection = require('../database/database');
const app = express();

app.get('/customer', (req, res) => {
    mysqlConnection.query('SELECT * FROM User', (err, customers) => {
        if(err) return res.status(400).json({err});
        res.json(customers);
    });
});

app.get('/customer/:id', (req, res) => {
    const {id} = req.params;
    mysqlConnection.query('SELECT * FROM User JOIN Customer WHERE User.idUser = ?', [id], (err, customers) => {
        if(err) return res.status(400).json({err});
        res.json(customers);
    });
});

app.post('/customer', (req, res) => {
    let body = req.body;
    console.log(body);
    res.json({ok: true});
});

module.exports= app;