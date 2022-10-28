
const notes = require('express').Router();



// get routes for notes:
notes.get('/', (req, res) => {
    readFromFile('./db/notes.json').then((data) => res.json(JSON.parse(data)));
});

// POST Route for new note
note.post('/', (req, res) => {
    console.log(req.body);

    const { noteTitle, noteText } = req.body;

    if (req.body) {
        const newNote = {
            noteTitle, 
            noteText,
        },

        readAndAppend(newNote, './db/notes.json');
        res.json( `New note added: Success!`) 
    } else {
        res.error('Error in adding new note');
    }
});

module.exports = notes;