const express = require('express');
const app = express();

// const entryRoute = require('./api/routes/entry');

app.use((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('It works!\n');
});

// app.use('/entry', entryRoute);

module.exports = app;
