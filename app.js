  last_animate = null
  last_from = null
  function addMessageToChat(message, from) {
    if (from == null) html = "<div class='message_full'><div class='message_body'><span class='message right'>" + message + "</span></div></div>"
    else if (last_from == from) html = "<div class='message_full'><div class='message_body'><span class='message left'>" + message + "</span></div></div>"
    else html = "<div class='message_full'><span class='name'>" + from + "</span><div class='message_body'><span class='message left'>" + message + "</span></div></div>"
    last_from = from
    if (last_animate != null) last_animate.stop()
    $('.messages').append(html)
    last_animate = $(".messages").animate({
      scrollTop: $('.messages').prop("scrollHeight")}, 1000, function(){
          last_animate = null
      });
  }
  // code to reference (taken from socket.io)
  var socket = io('http://localhost:8080');
  socket.on('message_update', function (data) {
    console.log(data)
    socket.emit('my other event','jarret says hi back - message for server');
  });
  socket.on('servermessage', function(data) {
    console.log(data)
  })
  function send(data) {
    socket.emit('message', data)
  }
