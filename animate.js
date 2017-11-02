(function() {

  function statusUpdate(on) {

    if (on) color = "#53DA4C"
    else color = "#da4c4c"

    $(".status").fadeOut(500)
    $(".status").css("background-color", color)
    $(".status").fadeIn(500)
  }

  function showSend() {
    $('.send_icon').fadeIn(200)
    $('.send_icon').rotate({
      angle: -180,
      animateTo:0,
      easing: $.easing.easeInOutElastic
    })
  }
  function hideSend() {
    $('.send_icon').fadeOut(200)
    $('.send_icon').rotate({
      angle: 0,
      animateTo:-180,
      easing: $.easing.easeInOutElastic
    })
  }

  window.app.showSend = showSend
  window.app.hideSend = hideSend
  window.app.statusUpdate = statusUpdate

})()
