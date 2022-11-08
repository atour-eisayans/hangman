const express = require('express');

const app = express();

app.use(express.json());

const gameWordsRoutes = require('../gameWords/gameWords.httpRoutes');

app.use('/words', gameWordsRoutes);

module.exports = app;
