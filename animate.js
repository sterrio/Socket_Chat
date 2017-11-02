(function() {
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

})()
