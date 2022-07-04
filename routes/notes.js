const notes = require("express").Router();


//GET for retrieving the notes

notes.get("/", (req, res) => {
    readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)));
});

//Delete route for a particular note