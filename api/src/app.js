const express = require('express');
const app = express();

const indexRoute = require('./routes/index');
const entryRoute = require('./routes/entry');
const createRoute = require('./routes/create');
const updateRoute = require('./routes/update');
const deleteRoute = require('./routes/delete');

app.use('/', indexRoute);
app.use('/entry', entryRoute);
app.use('/create', createRoute);
app.use('/update', updateRoute);
app.use('/delete', deleteRoute);

module.exports = app;
