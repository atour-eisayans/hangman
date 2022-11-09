To run db last migration:
  npm run dev-migrate-up
To create a new db migration:
  npm run dev-create-migration migration_name

To use debug while debugging (instead of console.log):
  const debugLogger = require('../helpers/debugLogger')();
  debugLogger.info('...')
  debugLogger.warn('...')
  debugLogger.error('...')

To use logger in files:
  const logger = require('../helpers/logger.js')('some-namespace');
  logger.info('...')
  logger.warn('...')
  logger.error('...')
