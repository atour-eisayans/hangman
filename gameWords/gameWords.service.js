const {
  readAWordFromDB,
  insertAWordToDB,
} = require('./gameWords.DAL');

class GameWordService {
  readAWord(id) {
    return readAWordFromDB(2);
  }

  addWord(word) {
    return insertAWordToDB(word);
  }
}

module.exports = new GameWordService();
