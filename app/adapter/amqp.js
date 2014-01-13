var Config = require('../config');

var QueueReader = function(opts) {
  var amqp = require('amqp');
  this.init = function(opts) {
    console.log('amqp attempting to initialize');
  };

  this.init(opts || {});
};

module.exports = QueueReader;

