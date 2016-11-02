'use strict';

exports.methods = [];

const classes = [
  'Applejack',
  'Cloud Chaser',
  'Discord',
  'Thunderlane'
];

exports.methods.push({
    name: 'pony.family',
    method: function (callback) {
      return callback(null, classes[0]);
    },
});
