const parallaxBox = document.querySelector(".parallax-box")
const layer1Top = document.getElementById("layer-1").offsetTop
const layer1Left = document.getElementById("layer-1").offsetLeft
const layer2Top = document.getElementById("layer-2").offsetTop
const layer2Left = document.getElementById("layer-2").offsetLeft
const layer3Top = document.getElementById("layer-3").offsetTop
const layer3Left = document.getElementById("layer-3").offsetLeft

parallaxBox.onmousemove = function(evt) {
  // get mouse position related to the parallax box
  const x = evt.clientX - parallaxBox.offsetLeft
  const y = evt.clientY - parallaxBox.offsetTop

  mouseParallax("layer-1", layer1Left, layer1Top, x, y, 40)
  mouseParallax("layer-2", layer2Left, layer2Top, x, y, 80)
  mouseParallax("layer-3", layer3Left, layer3Top, x, y, 150)
}

function mouseParallax(
  layerId,
  layerOffsetLeft,
  layerOffsetTop,
  mousePosX,
  mousePosY,
  speed
) {
  const layer = document.getElementById(layerId)
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
