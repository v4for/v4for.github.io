//hash so people dont modify the ad watched state to true
//hacks still need to be added
function generateHash() {
    return Math.random().toString(36).substr(2, 9) + Date.now().toString(36);
}

/*when the add is watched run store value
function storeValue() {
    const hashKey = generateHash();
    const value = "Watched";
    localStorage.setItem(hashKey, value);
}
*/

function retrieveValue(hashKey) {
    const value = localStorage.getItem(hashKey);
    if (hashKey != Watched) {
        return;
    }
    
}


//game overlay
function createOverlay() {
  // Inject CSS styles
  const style = document.createElement('style');
  style.innerHTML = `
    #mydiv {
      position: absolute;
      z-index: 9;
      background-color: #f1f1f1;
      text-align: center;
      border: 1px solid #d3d3d3;
    }
    #mydivheader {
      padding: 10px;
      cursor: move;
      z-index: 10;
      background-color: #2196F3;
      color: #fff;
    }
    .hidden {
      display: none;
    }
  `;
  document.head.appendChild(style);

  // Create the overlay div
  const overlay = document.createElement('div');
  overlay.id = 'mydiv';
  overlay.innerHTML = `
    <div id="mydivheader">Click here to move</div>
    <p><span onclick="alert('Move clicked!')">Move</span></p>
    <p><span onclick="alert('this clicked!')">this</span></p>
    <p><span onclick="alert('DIV clicked!')">DIV</span></p>
  `;
  document.body.appendChild(overlay);

  // Make the DIV element draggable
  dragElement(document.getElementById("mydiv"));

  function dragElement(elmnt) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
      document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
      elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }

  // Function to toggle visibility of the DIV
  function toggleVisibility() {
    const myDiv = document.getElementById("mydiv");
    if (myDiv.classList.contains("hidden")) {
      myDiv.classList.remove("hidden");
    } else {
      myDiv.classList.add("hidden");
    }
  }

  // Event listener for Shift+Y to hide/unhide the DIV
  document.addEventListener('keydown', function(event) {
    if (event.shiftKey && event.key === 'Y') {
      toggleVisibility();
    }
  });
}
