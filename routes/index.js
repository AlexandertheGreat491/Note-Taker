//Express require statement
const express = require('express');

// Router variable
const notesRouter = require('./notes');

const app = express();

app.use('/notes', notesRouter);

//module.exports for app
module.exports = app;