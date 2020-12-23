const express = require('express');
const mysqlConnection = require('../database/database');
const app = express();

app.get('/course', (req, res) => {
    mysqlConnection.query('SELECT * FROM Course', (err, customers) => {
        if(err) return res.status(400).json({err});
        res.json(customers);
    });
})

app.get('/course/:id', (req, res) => {
    const {id} = req.params;
    mysqlConnection.query('SELECT * FROM Course WHERE idCourse = ?', [id], (err, customers) => {
        if(err) return res.status(400).json({err});
        if(Object.entries(customers).length == 0) return res.status(400).json({
            ok: false,
            message: "No encontrado"
        });
        res.json(customers);
    });
});

app.post('/course', (req, res) => {
    let {Name, Stock, Price, Description} = req.body;
    Stock = Stock || 0;
    mysqlConnection.query('INSERT INTO Course SET ?', {Name, Stock, Price, Description}, (err, courses) => {
        if(err) return res.status(400).json({err});
        res.json({
            ok: true,
            course: {
                Name,
                Stock,
                Price,
                Description
            }
        });
    });
});

module.exports = app;