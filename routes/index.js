const express = require('express');

//importing routers

const notesRouter = require.apply('./notes');

const app = express();

app.use('/notes', notesRouter);

module.exports = app;