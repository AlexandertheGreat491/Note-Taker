const notes = require("express").Router();


//GET for retrieving the notes

notes.get("/", (req, res) => {
    readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)));
});

//Delete route for a particular note
notes.delete("/:id", (req, res) => {
    readFromFile("./db/db.json")
        .then((data) => JSON.parse(data))
        .then((json) => {
            //Createsnew array of notes except for the one with the ID in the URL.
            const result = json.filter((note) => note.id !== noteId);

            //Saves the array to the filesystem
            writeToFile("./db/db.json", result);

            //Respond to the delete request.
            res.json(`Item ${noteId} has been deleted`);
        });
});

//POST Route for a new note
notes.post("/", (req, res) => {
    console.log(req.body);

    const { title, text } = req.body;

    if (req.body) {
        const newnote = {
            title,
            text,
            id: 2,
        };

        readAndAppend(newnote, "./db/db.json");
        res.json(`Note added successfully!`);
    } else {
        res.error("Note could not be added.");
    }
});

module.exports = notes;