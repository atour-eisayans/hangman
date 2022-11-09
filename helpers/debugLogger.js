const debug = require('debug');

function generateDebugLogger(namespace) {
  const logger = {};
  logger.info = debug(`${namespace}:info`);
  logger.warn = debug(`${namespace}:warn`);
  logger.error = debug(`${namespace}:error`);

  return logger;
}

module.exports = generateDebugLogger;
