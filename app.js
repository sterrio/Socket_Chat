
  function setup() {
    console.log('test')
  }
  // code to reference (taken from socket.io)
  var socket = io('http://192.168.2.22:8080');
  socket.on('news', function (data) {
    console.log(data);
    socket.emit('my other event','jarret says hi back - message for server');
  });
  function send(data) {
    socket.emit('message', data)
  }
