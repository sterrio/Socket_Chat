(function() {
  window.app = {}
  function initialize() {
    // user wants to send chat message
    $('.new_message input').on("keyup", function(e) {
      if (!$('.send_icon').is(':visible')) {
          window.app.showSend()
      }
      if (e.keyCode == 13) {
        window.app.send($('.new_message input').val())
      }
      if ($(this).val() == "") window.app.hideSend()
    });

    $('.send_icon').on("click", function() {
      window.app.send($('.new_message input').val())
      window.app.hideSend()
    })

  }

  window.addEventListener('load', initialize);
})()


  // A $( document ).ready() block.
  $(document).ready(function() {

  });
