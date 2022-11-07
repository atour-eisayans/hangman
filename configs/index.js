const path = require('path');
const { environments } = require('./enums');

const currentEnvironment = process.env.ENV || environments.development;
const currentENV = environments[currentEnvironment];

const envFilePath = path.join(__dirname, `${currentENV}.env`);
const configFilePath = path.join(__dirname, `${currentENV}.config.js`);

require('dotenv').config({ path: envFilePath });
const configs = require(configFilePath);

module.exports = configs;
