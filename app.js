process.appEnv = process.appEnv || process.env.HEROKU_ENV || 'development';
var express = require('express');
var app = express();
var port = 4567;
var Listener = require('./app/adapter/easy-amqp');

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.engine('jade', require('jade').__express);
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  response.render('index');
});

var io = require('socket.io').listen(app.listen(port));

var processMessage = function(message, headers, deliveryInfo, rawMessage, queue) {
  var parsedMessage = JSON.parse(message.data.toString());
  parsedMessage.destination = deliveryInfo.exchange;
  io.sockets.emit('log', parsedMessage);
};

var listener = new Listener({ callback: processMessage });
listener.listen();
