(function() {
  window.app = {}
  function initialize() {
    console.log('test')
    // user wants to send chat message
    $('.new_message input').on("keyup", function(e) {
      if (e.keyCode == 13) {
        window.app.send($('.new_message input').val())
        $('.new_message input').val("")
      }
    });
  }

  window.addEventListener('load', initialize);
})()


  // A $( document ).ready() block.
  $(document).ready(function() {

  });
