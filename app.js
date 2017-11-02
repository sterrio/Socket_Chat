  last_animate = null
  last_from = null
  function addMessageToChat(from, message) {
    if (from == null) html = "<div class='message_full'><div class='message_body'><span class='message right'>" + message + "</span></div></div>"
    else if (last_from == from) html = "<div class='message_full'><div class='message_body'><span class='message left'>" + message + "</span></div></div>"
    else html = "<div class='message_full'><span class='name'>" + from + "</span><div class='message_body'><span class='message left'>" + message + "</span></div></div>"
    last_from = from
    if (last_animate != null) last_animate.stop()
    $('.messages').append(html)
    last_animate = $(".messages").animate({
      scrollTop: $('.messages').prop("scrollHeight")}, 400, function(){
          last_animate = null
      });
  }

  // A $( document ).ready() block.
  $(document).ready(function() {
    $('.new_message input').on("keyup", function(e) {
      if (e.keyCode == 13) {
        send($('.new_message input').val())
        $('.new_message input').val("")
      }
    });
  });
  // code to reference (taken from socket.io)
  var socket = io('http://localhost:8080', { query: "user=jarret" }).connect();
  socket.on('message_update', function (data) {
    console.log('here')
    addMessageToChat(data['user'], data['msg'])
  });
  function send(data) {
    addMessageToChat(null, data)
    socket.emit('message', data)
  }
