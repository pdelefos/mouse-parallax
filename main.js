// Mouse parallax lib
var Paralalax = (function() {
  let parallaxBox = null
  let layers = []
  let speed = 0

  var doParallax = function(
    layerElem,
    layerOffsetLeft,
    layerOffsetTop,
    mousePosX,
    mousePosY,
    speed
  ) {
    const layer = layerElem
    const layerParent = layer.parentNode
    parallaxBoxWidth = layerParent.offsetWidth
    parallaxBoxHeight = layerParent.offsetHeight
    const newPosLeft =
      layerOffsetLeft -
      (mousePosX - parseInt(layer.offsetWidth) / 2 + layerOffsetLeft) /
        parallaxBoxWidth *
        speed
    const newPosTop =
      layerOffsetTop -
      (mousePosY - parseInt(layer.offsetHeight) / 2 + layerOffsetTop) /
        parallaxBoxHeight *
        speed
    layer.style.transform =
      "translate3d(" + newPosLeft + "px," + newPosTop + "px, 0)"
  }
  var parallaxEvent = function(evt) {
    // get mouse position related to the parallax box
    const x = evt.clientX - parallaxBox.offsetLeft
    const y = evt.clientY - parallaxBox.offsetTop

    layers.forEach(layer =>
      doParallax(
        layer.elem,
        layer.offsetLeft,
        layer.offsetTop,
        x,
        y,
        layer.speed
      )
    )
  }
  var init = function(options) {
    parallaxBox = document.querySelector(".parallax-box")
    speed = options.speed
    const layersArray = parallaxBox.querySelectorAll(".layer")

    layersArray.forEach(layer => {
      layers.push({
        elem: layer,
        offsetTop: layer.offsetTop,
        offsetLeft: layer.offsetLeft,
        speed: speed
      })
      speed *= 2
    })
    parallaxBox.onmousemove = parallaxEvent
  }
  return { init }
})()

Paralalax.init({ speed: 10 })
