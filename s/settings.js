// Retrieve the 'blank' value from localStorage
var blank = localStorage.getItem('blank') === 'true';
// Get the toggle button element
var button = document.getElementById("toggleButton");

// Function to toggle the 'blank' value and update localStorage and button text accordingly
function toggleBlank() {
    blank = !blank;
    localStorage.setItem('blank', blank);
    updateButton();
}

// Function to update button text based on the 'blank' value
function updateButton() {
    button.innerHTML = blank ? "true" : "off";
}

// Function to load the iframe if 'blank' is true
function loadBlank() {
    // Check if 'blank' is true
    if (blank) {
        // Open a new window
        var win = window.open();
        // Create an iframe element
        var iframe = document.createElement('iframe');
        // Set iframe styles
        iframe.style.cssText = "position: fixed; top: 0; left: 0; bottom: 0; right: 0; width: 100%; height: 100%; border: none; margin: 0; padding: 0; overflow: hidden; z-index: 999999;";
        // Set iframe source to current page URL
        iframe.src = window.location.href;
        // Append iframe to the new window body
        win.document.body.appendChild(iframe);
        // Close the original window
        window.close();
    }
}

// Initialize the button text
updateButton();
