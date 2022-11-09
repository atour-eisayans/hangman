const {
  readAWord,
  addWord,
} = require('./gameWords.service');
const {
  addWordValidator
} = require('./gameWords.validator');
const debugLogger = require('../helpers/debugLogger');

class GameWordController {
  async getAWord(req, res, next) {
    try {
      const words = await readAWord(2);
      res.status(200).json({ words });
    } catch (error) {
      debugLogger.error(error);
    }
  }

  async insertWord(req, res, next) {
    try {
      const bodyIsValid = addWordValidator(req.body);
      if (!bodyIsValid) {
        throw new Error('bad request!');
      }

      const { word } = req.body;
      const ids = await addWord(word);
      return res.status(201).json({
        ids,
      });
    } catch (error) {
      debugLogger.error(error);
    }
  }
}

module.exports = new GameWordController();
