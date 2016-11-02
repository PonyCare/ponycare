'use strict';

exports.routes = [];

exports.routes.push({
  method: 'GET',
  path: '/',
  handler: function (request, reply) {
    reply('Hello Pony Care!');
  }
});

exports.routes.push({
  method: 'GET',
  path: '/family',
  config: {
    pre: [[
      { method: 'pony.family()', assign: 'family' }
    ]],
    handler: function (request, reply) {
      reply(request.pre.family);
    }
  }
});
