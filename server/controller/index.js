const express = require('express');
const app = express();

app.use(require("./customer"));

module.exports = app;