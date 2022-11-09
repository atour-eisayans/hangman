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

  async insertAWordToDB(word) {
    const ids = await gameWordsDBConnection
      .insert({
        word,
      })
      .returning('word_id');
    return ids;
  }
}

module.exports = new GameWordsDAL();
