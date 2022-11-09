const path = require('path');
const { transports, createLogger, format, config } = require('winston');

function loggerGenerator(namespace) {
  const logConfiguration = {
    levels: config.syslog.levels,
    format: format.combine(
      format.timestamp({ format: new Date().toISOString() }),
      format.json(),
    ),
    transports: [
      new transports.File({
        level: 'error',
        dirname: path.join(__dirname, '..', 'logs'),
        filename: `${namespace}.log`,
      }),
      new transports.Console({
        level: 'warn',
      }),
      new transports.Console({
        level: 'info',
      }),
    ],
    exceptionHandlers: [
      new transports.File({ filename: 'exceptions.log' })
    ],
    rejectionHandlers: [
      new transports.File({ filename: 'rejections.log' })
    ]
  };
  
  const logger = createLogger(logConfiguration);
  
  return logger;
}

module.exports = loggerGenerator;
