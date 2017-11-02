(function() {

  function statusUpdate(on) {
    if (on) { color = "#53DA4C"; border = "#4fd548"}
    else { color = "#da4c4c"; border = "#d04949" }
    $(".status").fadeOut(500, function(){
      $(".status").css({
        "background-color": color,
        "border-color": border
      })
      $(".status").fadeIn(500)
    })
  }

  function showSend() {
    $('.send_icon').fadeIn(200)
    $('.send_icon').rotate({
      angle: -180,
      animateTo:0
    })
  }

  function hideSend() {
    $('.send_icon').fadeOut(200)
    $('.send_icon').rotate({
      angle: 0,
      animateTo:-180
    })
  }

  function forwardSend() {
    console.log('here')
    $('.send_icon').animate({
      right: '-95%',
      opacity: 0
    }, 200, function() {
      $(this).css({
        display: "none",
        opacity: 1,
        right: "-88%"
    })


    })
  }

  window.app.showSend = showSend
  window.app.hideSend = hideSend
  window.app.forwardSend = forwardSend
  window.app.statusUpdate = statusUpdate

})()
