var Config = require('../config');

var QueueReader = function(opts) {
  var amqp = require('easy-amqp');
  var rabbitmqUrl = Config.rabbitmqUrl;
  var queueName = Config.queueName;
  var queueOptions = Config.queueOptions;

  this.init = function(opts) {
    this.callback = opts.callback || defaultCallback;
  };

  this.listen = function() {
    amqp.createConnection({ url: rabbitmqUrl }, { defaultExchangeName: 'amq.topic' })
      .queue(queueName, queueOptions)
      .bind('#')
      .subscribe(this.callback);
  };

  // private

  var defaultCallback = function(message, headers, deliveryInfo, rawMessage, queue) {
    console.log('Received message: ' + message.data.toString());
  };

  this.init(opts || {});
}

module.exports = QueueReader;
