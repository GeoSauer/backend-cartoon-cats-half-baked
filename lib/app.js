const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use('/cats', require('./controllers/cats'));

// app.use('/', (req, res) => {
//   res.send('hell world!');
// });

module.exports = app;
