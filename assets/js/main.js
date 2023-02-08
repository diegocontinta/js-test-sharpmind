

const parent            = document.getElementById("dragSection");
const parentRect        = parent.getBoundingClientRect();
const draggable         = document.getElementById("dragSectionElement");
const draggableRect     = draggable.getBoundingClientRect()

let   dragging          = false;

function dragElement(el) {
    //Define the initial position
    dragging = true;
    el.onmousedown = dragMouseDown;
}

function dragMouseDown(e) {

    e = e || window.event;
    e.preventDefault();
    draggable.classList.add('active');

    document.onmouseup  = closeDragElement;
    document.onmousemove = ElementDrag;
  }


  function ElementDrag(e) {

    e = e || window.event;

    if(dragging) {

    e.preventDefault();
            if( (e.clientX >= parentRect.left && (e.clientX+draggableRect.width <= parentRect.right)) &&
                (e.clientY >= parentRect.top && (e.clientY+draggableRect.height <= parentRect.bottom))
              ){
        //add draggableRect.width draggableRect.height accoints for
                draggable.style.left = `${e.clientX}px`;
                draggable.style.top = `${e.clientY}px`;
            }
      else{
        //if mouse went out of bounds in Horizontal dir.
        if(e.clientX+draggableRect.width >= parentRect.right){
           draggable.style.left = `${parentRect.right-draggableRect.width}px`;
        }
        //if mouse went out of bounds in Vertical dir.
        if(e.clientY+draggableRect.height >= parentRect.bottom){
           draggable.style.top = `${parentRect.bottom-draggableRect.height}px`;
        }
      }
  }
}

   function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
    draggable.classList.remove('active');

  }


dragElement(draggable);

