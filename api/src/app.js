const express = require('express');
const app = express();

const entriesRoute = require('./routes/entries');
const entryRoute = require('./routes/entry');
const createRoute = require('./routes/create');
const updateRoute = require('./routes/update');
const deleteRoute = require('./routes/delete');

app.use('/api/entries', entriesRoute);
app.use('/api/entry', entryRoute);
app.use('/api/create', createRoute);
app.use('/api/update', updateRoute);
app.use('/api/delete', deleteRoute);

module.exports = app;
