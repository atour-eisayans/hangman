const path = require('path');
const getCurrentENV = require('../helpers/getCurrentEnv');

const currentENV = getCurrentENV();

const envFilePath = path.join(__dirname, `${currentENV}.env`);
require('dotenv').config({ path: envFilePath });
const configs = require('./config.js');

module.exports = configs;
