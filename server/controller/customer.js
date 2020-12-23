const express = require('express');
const bcrypt = require('bcrypt');
const mysqlConnection = require('../database/database');
const saltRounds = 10;
const app = express();

app.get('/customer', (req, res) => {
    mysqlConnection.query('SELECT Name, LastName, Email, Address, Phone FROM User JOIN Customer USING(idUser)', (err, customers) => {
        if(err) return res.status(400).json({err});
        res.json(customers);
    });
});

app.get('/customer/:id', (req, res) => {
    const {id} = req.params;
    mysqlConnection.query('SELECT Name, LastName, Email, Address, Phone FROM User JOIN Customer USING(idUser) WHERE idUser = ?', [id], (err, customers) => {
        if(err) return res.status(400).json({err});
        if(Object.entries(customers).length == 0) return res.status(400).json({
            ok: false,
            message: "No encontrado"
        });
        res.json(customers);
    });
});

app.post('/customer', (req, res) => {
    let {Name, LastName, Email, Password, Address, Phone} = req.body;
    Password = bcrypt.hashSync(Password, saltRounds);
    mysqlConnection.query('INSERT INTO User SET ?', {Name, LastName, Email, Password} , (err, users) => {
        if(err) return res.status(400).json({err});
        idUser = users.insertId;
        mysqlConnection.query('INSERT INTO Customer SET ?', {Address, Phone, idUser}, (err, customers) => {
            if(err) return res.status(400).json({err});
            res.json({
                ok: true,
                customer: {
                    Name,
                    LastName,
                    Email,
                    Address,
                    Phone
                }
            });
        });
    });
});

module.exports = app;