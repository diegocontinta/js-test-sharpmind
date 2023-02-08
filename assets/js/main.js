
const el = document.getElementById("dragSectionElement");

function drag_element(el) {
    //Define the initial position
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        el.onmousedown = drag_mouse_down;
}

function drag_mouse_down(e) {

    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup  = close_drag_element;
    // call a function whenever the cursor moves:
    document.onmousemove = element_drag;
  }


  function element_drag(e) {
    e = e || window.event;
    e.preventDefault();

    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;

    el.style.top = (el.offsetTop - pos2) + "px";
    el.style.left = (el.offsetLeft - pos1) + "px";
  }

   function close_drag_element() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }


drag_element(el);

