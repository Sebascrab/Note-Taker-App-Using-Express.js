const express = require('express');
const path = require('path');


const PORT = process.env.PORT || 3001;

const app = express();


// parsing data into json
app.use(express.json());
app.use(express.urlencoded({ extended: true}));





app.listen(PORT, () => {
    console.log(`App listening at PORT: ${PORT} `)
})

module.exports = app;