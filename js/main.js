(function() {
  window.app = {}
  function initialize() {
    $(document).on("keypress", function(e) {
      $('.new_message input').focus()
    })
    // user wants to send chat message
    $('.new_message input').on("keyup", function(e) {
      if (!$('.send_icon').is(':visible')) {
          window.app.showSend()
      }
      if ($(this).val() == "") window.app.hideSend()
      else if (e.keyCode == 13) {
        window.app.send($('.new_message input').val())
        window.app.forwardSend()
      }
    });

    $('.send_icon').on("click", function() {
      window.app.send($('.new_message input').val())
      window.app.forwardSend()
    })

  }

  window.addEventListener('load', initialize);
})()
