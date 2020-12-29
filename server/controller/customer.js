const express = require('express');
const bcrypt = require('bcrypt');
const mysqlConnection = require('../database/database');
const app = express();

app.get('/customer', (req, res) => {
    mysqlConnection.query('SELECT Name, LastName, Email, Address, Phone FROM User JOIN Customer USING(idUser)', (err, customers) => {
        if(err) return res.status(400).json({err});
        if(Object.entries(customers).length == 0) return res.status(400).json({
            ok: false,
            message: "No existen clientes registrados"
        });
        res.json(customers);
    });
});

app.get('/customer/:id', (req, res) => {
    const id = req.params.id;
    mysqlConnection.query('SELECT Name, LastName, Email, Address, Phone FROM User JOIN Customer USING(idUser) WHERE idUser = ?', id, (err, customers) => {
        if(err) return res.status(400).json({err});
        if(Object.entries(customers).length == 0) return res.status(400).json({
            ok: false,
            message: "Usuario no encontrado"
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
                customer: {Name, LastName, Email, Address, Phone}
            });
        });
    });
});

app.put('/customer/:id', (req, res) => {
    let id = req.params.id;
    let body = req.body;
    mysqlConnection.query('SELECT * FROM User JOIN Customer USING(idUser) WHERE idUser = ?', id, (err, findUser) => {
        if(err) return res.status(400).json({err});
        if(Object.entries(findUser).length == 0) return res.status(400).json({
            ok: false,
            message: "Usuario no encontrado"
        });
        ['Password', 'idUser', 'idCustomer'].forEach((k) => {delete body[k]});
        mysqlConnection.query('UPDATE User JOIN Customer USING(idUser) SET ? WHERE idUser = ?', [body, id], (err, users) => {
            if(err) return res.status(400).json({err});
            res.json({
                ok: true,
                body
            });
        });
    });
});

app.delete('/customer/:id', (req, res) => {
    let id = req.params.id;
    mysqlConnection.query('SELECT * FROM User JOIN Customer USING(idUser) WHERE idUser = ?', id, (err, findUser) => {
        if(err) return res.status(400).json({err});
        if(Object.entries(findUser).length == 0) return res.status(400).json({
            ok: false,
            message: "Usuario no encontrado"
        });
        mysqlConnection.query('DELETE FROM Customer WHERE idUser = ?', [id], (err, customerDel) => {
            if(err) return res.status(400).json({err});
            mysqlConnection.query('DELETE FROM User WHERE idUser = ?', [id], (err, userDel) => {
                if(err) return res.status(400).json({err});
                res.json({ok: true});
            });
        });
    });
});

module.exports = app;