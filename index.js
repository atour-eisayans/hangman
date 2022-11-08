const { httpConfigs } = require('./configs');
const {
  startHttpServer,
  closeHttpServer,
} = require('./servers');

startHttpServer(httpConfigs.port, () => {
  console.log(`http server is running on ${httpConfigs.port}`);
});

process.on('exit', async () => {
  closeHttpServer();
});

process.on('uncaughtException', async () => {
  closeHttpServer();
});

process.on('unhandledRejection', async () => {
  closeHttpServer();
});

process.on('SIGINT', async () => {
  closeHttpServer();
});

process.on('SIGTERM', async () => {
  closeHttpServer();
});
