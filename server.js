const express = require('express');
const path = require('path');


const PORT = process.env.PORT || 3001;

const app = express();


// middleware parsing json data
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use('/api', api);


app.use(express.static('public'));


// Get route for main index.html:
app.get('/', (req, res) => 
res.sendFile(path.join(__dirname, '/public/index.html'))
);

// Get route for notes.html:
app.get('/notes', (req, res) => 
res.sendFile(path.join(__dirname, '/public/notes.html'))
);





app.listen(PORT, () => {
    console.log(`App listening at PORT: ${PORT} `)
})

module.exports = app;