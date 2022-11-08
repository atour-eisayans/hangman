const {
  readAWordFromDB
} = require('./gameWords.DAL');

class GameWordService {
  readAWord(id) {
    return readAWordFromDB(2);
  }
}

module.exports = new GameWordService();
