
const notes = require('express').Router();
const fs = require('fs');
const {writeFile, readFile} = fs.promises
const { v4: uuidv4 } = require('uuid');


// get routes for notes:
notes.get('/', (req, res) => {
    readFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// POST Route for new note
notes.post('/', (req, res) => {
    console.log(req.body);

readFile('./db/db.json').then((data) => {
    const parseData = JSON.parse(data);
    const { title, text } = req.body;

    if (req.body) {
        const newNote = {
            title, 
            text,
            id: uuidv4(),
        }
        parseData.push(newNote)
        writeFile('./db/db.json', JSON.stringify(parseData));
        res.json( `New note added: Success!`) 
    } else {
        res.error('Error in adding new note');
    }
})

   
});

module.exports = notes;