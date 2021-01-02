const express = require('express');
const mysqlConnection = require('../database/database');
const {checkToken} = require('../middlewares/authentication');
const app = express();

app.get('/order', [checkToken], (req, res) => {
    mysqlConnection.query('SELECT * FROM `Order`', (err, orders) => {
        if(err) return res.status(400).json({err});
        if(Object.entries(orders).length == 0) return res.status(400).json({
            ok: false,
            message: "No existen ordenes registradas"
        });
        return res.json(orders);
    });
});

app.get('/order/:id', [checkToken], (req, res) => {
    let id = req.params.id;
    mysqlConnection.query('SELECT * FROM User JOIN Customer USING(idUser) WHERE idUser = ?', id, (err, userDB) => {
        if(err) return res.status(400).json({err});
        if(Object.entries(userDB).length == 0) return res.status(400).json({
            ok: false,
            message: "Cliente no encontrado"
        });
        let idCustomer = userDB.idCustomer;
        mysqlConnection.query('SELECT * FROM `Order` WHERE idCustomer = ?', {idCustomer}, (err, orderDB) => {
            if(err) return res.status(400).json({err});
            if(Object.entries(orderDB).length == 0) return res.status(400).json({
                ok: false,
                message: "Cliente no registra ordenes"
            });
            return res.json(orderDB);
        });
    });
});

app.get('/order/:idOrder', [checkToken], (req, res) => {
    let id = req.params.idOrder;
    mysqlConnection.query('SELECT * FROM CourseOrder WHERE idCourse = ?', {id}, (err, orderDB) => {
        if(err) return res.status(400).json({err});
            if(Object.entries(orderDB).length == 0) return res.status(400).json({
                ok: false,
                message: "Orden no encontrada"
        });
        return res.json(orderDB);
    });
});

app.post('/order/:id', [checkToken], (req, res) => {
    let id = req.params.id;
    let body = req.body;
});

module.exports = app;