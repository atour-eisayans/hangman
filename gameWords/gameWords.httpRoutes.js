const express = require('express');
const {
  getAWord
} = require('./gameWords.httpController');

const router = express.Router();

router.get('/', getAWord);

module.exports = router;
