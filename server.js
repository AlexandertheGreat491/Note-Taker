//require statements
const express = require('express');
const path = require('path');
const api = require('./routes/index.js');
//variables that allow the server to run through command line
const app = express();
const PORT = process.env.PORT || 3001;

//Middleware that will parse the JSON & urlencoded form data.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

//Route for homepage
app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);

//Route for the notes page
app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);

//Wildcard route for the homepage
app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);

//listener for PORT. PORT connected successfully to the server.
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});