'use strict';

exports.routes = [];

exports.routes.push({
  method: 'GET',
  path: '/',
  handler: function (request, reply) {
    reply('Hello Pony Care!')
  }
});
