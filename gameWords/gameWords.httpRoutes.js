const express = require('express');
const {
  getAWord,
  insertWord,
} = require('./gameWords.httpController');

const router = express.Router();

router.get('/', getAWord);
router.post('/', insertWord);

module.exports = router;
