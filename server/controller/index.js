const express = require('express');
const app = express();

app.use(require("./customer"));
app.use(require("./admin"));
app.use(require("./course"));
app.use(require("./login"));

module.exports = app;