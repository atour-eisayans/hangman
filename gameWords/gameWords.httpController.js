const {
  readAWord
} = require('./gameWords.service');

class GameWordController {
  async getAWord(req, res, next) {
    try {
      const words = await readAWord(2);
      res.status(200).json({ words });
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = new GameWordController();
