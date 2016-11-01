'use strict';

exports.plugins = [];

// logging to console
exports.plugins.push({
  register: require('good'),
  options: {
    ops: {
      interval: 60 * 1000
    },
    reporters: {
      console: [{
          module: 'good-console',
          args: [ { log: '*', response: '*', request: '*' } ]
        },
        'stdout'
      ]
    }
  }
});
