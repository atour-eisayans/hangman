const http = require('http');
const app = require('./http.app');

const httpServer = http.createServer(app);

module.exports = {
  startHttpServer: httpServer.listen.bind(httpServer),
  closeHttpServer: httpServer.close.bind(httpServer),
};
