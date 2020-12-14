require('./config/config');

const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(require('./controller/index'));

const connection = mysql.createConnection({
    host: process.env.MYSQL_URL,
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
});

connection.connect((err, res) => {
    if(err) throw err;
    console.log("DB Online");
});

app.listen(process.env.PORT, () => {
    console.log(`Listen ${process.env.PORT} port`);
});
