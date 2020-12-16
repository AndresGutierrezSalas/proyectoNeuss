require('./config/config');

const express = require('express');
const bodyParser = require('body-parser');
const mysqlConnection = require('./database/database');

const app = express();
app.use(bodyParser.json());
app.use(require('./controller/index'));

mysqlConnection.connect((err, res) => {
    if(err) throw err;
    console.log("DB Online");
});

app.listen(process.env.PORT, () => {
    console.log(`Listen ${process.env.PORT} port`);
});
