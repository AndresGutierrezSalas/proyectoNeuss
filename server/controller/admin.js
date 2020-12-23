const express = require('express');
const bcrypt = require('bcrypt');
const mysqlConnection = require('../database/database');
const app = express();

app.get('/admin', (req, res) => {
    mysqlConnection.query('SELECT Name, LastName, Email FROM User JOIN Admin USING(idUser)', (err, admins) => {
        if(err) return res.status(400).json({err});
        res.json(admins);
    });
});

app.get('/admin/:id', (req, res) => {
    const {id} = req.params;
    mysqlConnection.query('SELECT Name, LastName, Email FROM User JOIN Admin USING(idUser) WHERE idUser = ?', [id], (err, admins) => {
        if(err) return res.status(400).json({err});
        if(Object.entries(admins).length == 0) return res.status(400).json({
            ok: false,
            message: "No encontrado"
        });
        res.json(admins);
    });
});

app.post('/admin', (req, res) => {
    let {Name, LastName, Email, Password} = req.body;
    Password = bcrypt.hashSync(Password, saltRounds);
    mysqlConnection.query('INSERT INTO User SET ?', {Name, LastName, Email, Password}, (err, users) => {
        if(err) return res.status(400).json({err});
        idUser = users.insertId;
        mysqlConnection.query('INSERT INTO Admin SET ?', {idUser}, (err, admins) => {
            if(err) return res.status(400).json({err});
            res.json({
                ok: true,
                admin: {
                    Name,
                    LastName,
                    Email
                }
            });
        });
    });
});

module.exports = app;