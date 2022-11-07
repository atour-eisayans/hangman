const {
  startHttpServer,
  closeHttpServer,
} = require('./servers');

startHttpServer(3000, () => {
  console.log('http server is running');
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
