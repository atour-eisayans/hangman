const knex = require('knex');
const { psqlDBConfig } = require('../configs');

const dbConnection = knex(psqlDBConfig);
module.exports = dbConnection;
