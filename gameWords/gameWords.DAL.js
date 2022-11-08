const dbConnection = require('../db/psqlDBConnection');
const gameWordsDBConnection = dbConnection('words');

class GameWordsDAL {
  async readAWordFromDB(id) {
    const words = await gameWordsDBConnection
      .select()
      .where({
        word_id: id,
      });
    return words;
  }
}

module.exports = new GameWordsDAL();
