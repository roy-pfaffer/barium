var Config = {
  queueName: 'logs',
  queueOptions: { durable: true, autoDelete: false },
  rabbitmqUrl: process.env.RABBITMQ_URL || 'amqp://localhost'
};

module.exports = Config;
