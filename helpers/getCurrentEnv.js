const { environments } = require('../configs/enums');

function getCurrentENV() {
  const currentEnvironment = process.env.NODE_ENV || environments.development;
  const currentENV = environments[currentEnvironment];

  return currentENV;
}

module.exports = getCurrentENV;
