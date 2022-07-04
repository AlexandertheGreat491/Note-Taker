const express = require('express');
const path = require('path');
const api = require('./routes/index.js');
const app = express();
const PORT = process.env.PORT || 3001;

//Middleware that will parse the JSON & urlencoded form data.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));


