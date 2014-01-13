$(document).ready(function() {
  console.log('this is a test');
  var socket = io.connect(window.location.protocol + '//' + window.location.host);
  socket.on('log', function(data) {
    console.log('Received some data: ');
    console.log(data);


    var origin = data.origin;
    var destination = data.destination;
    var event = data.event;
    var message = data.arguments;
    $('body').append("<p><b>" + origin + "</b> sent a message to <b>" + destination + "</b> regarding " + event + ": " + message + "</p>");
  });
});
