(function() {
  // socket.io ""implementation


 tName =  window.prompt("Please enter your Nickname..", "")

  if (tName == null || tName == "") {
      window.alert("Your name has been set to default")
      tName = "User"
  }

  var socket = io('http://dalschedulebuilder.com:8081', {
    query: "user=" + tName
  })

  socket.connect() // establish a connection
  socket._Timeout = 2000

  setTimeout(function(){
    if(socket.connected == false){
      window.app.statusUpdate(false)
    }
  }, 1000)

  socket.on("connect", function(){
      window.app.statusUpdate(true)
  })

  socket.on("disconnect", function(){
    window.app.statusUpdate(false)
  })

  // listen for message_update
  socket.on('message_update', function(data) {
    addMessageToChat(data['user'], data['msg'])
  })

  socket.on('server_message', function(data) {
    addMessageToChat(null, null, data)
  })

  // send message to server

  function send(data) {
    if (data != ""){
      addMessageToChat(null, data)
      socket.emit('message', data)
      $('.new_message input').val("")
    }
  }

  // function specific global variables
  var last_animate = null
  var last_from = null
  function addMessageToChat(from, message, servermessage) {
    if (servermessage != null) html = "<div class='message_full'><div class='message_body server'><span class='server_message'>" + servermessage + "</span></div></div>"
    else if (from == null) html = "<div class='message_full'><div class='message_body'><span class='message right'>" + message + "</span></div></div>"
    else if (last_from == from) html = "<div class='message_full'><div class='message_body'><span class='message left'>" + message + "</span></div></div>"
    else html = "<div class='message_full'><span class='name'>" + from + "</span><div class='message_body'><span class='message left'>" + message + "</span></div></div>"
    last_from = from
    if (last_animate != null) last_animate.stop()
    $('.messages').append(html)
    last_animate = $(".messages").animate({
      scrollTop: $('.messages').prop("scrollHeight")}, 400, function(){
          last_animate = null
      })
  }

  window.app.send = send;

})()
