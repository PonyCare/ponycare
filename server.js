'use strict';

const Hapi = require('hapi');
const Config = require('getconfig');

const server = new Hapi.Server();
server.connection({
  host: Config.server.host,
  port: Config.server.port
});

server.register(require('./lib/plugins').plugins);
server.route(require('./lib/routes').routes);

server.start((err) => {
  if (err) {
    throw err;
  }
  server.log('info', 'Server running at: ' + server.info.uri);
});