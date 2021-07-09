export default function makeDragable(domElem) {
  var contextmenu = document.getElementById(`${domElem}`);
  var initX, initY, mousePressX, mousePressY;

  contextmenu.addEventListener(
    "mousedown",
    function (event) {
      initX = this.offsetLeft;
      initY = this.offsetTop;
      mousePressX = event.clientX;
      mousePressY = event.clientY;

      this.addEventListener("mousemove", repositionElement, false);

      window.addEventListener(
        "mouseup",
        function () {
          contextmenu.removeEventListener(
            "mousemove",
            repositionElement,
            false
          );
        },
        false
      );
    },
    false
  );

  function repositionElement(event) {
    this.style.left = initX + event.clientX - mousePressX + "px";
    this.style.top = initY + event.clientY - mousePressY + "px";
  }
}
