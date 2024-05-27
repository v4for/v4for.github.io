// Function to store initial display styles
const initialDisplayStyles = {};

function storeInitialStyles() {
    const elements = document.body.getElementsByTagName('*');
    for (let element of elements) {
        initialDisplayStyles[element] = element.style.display;
    }
}

function restoreInitialStyles() {
    for (let element in initialDisplayStyles) {
        if (initialDisplayStyles.hasOwnProperty(element)) {
            element.style.display = initialDisplayStyles[element];
        }
    }
}

function searchmedaddy() {
    // Prompt user for a search keyword
    var keyword = prompt("What is blud searching for?");
    if (!keyword) {
        alert("No keyword entered.");
        return;
    }
    var regex = new RegExp(keyword, "i"); // Create a case-insensitive regex

    // Get all elements in the body
    const elements = document.body.getElementsByTagName('*');

    // First, restore visibility of all elements
    restoreInitialStyles();

    let found = false;

    // Loop through all elements to find the one containing the keyword
    for (let element of elements) {
        if (regex.test(element.textContent)) {
            let targetDiv = element.closest('div[style*="margin: 10px;"]');
            if (targetDiv) {
                found = true;
                // Hide all other elements except the targetDiv
                for (let el of elements) {
                    if (el !== targetDiv && !el.contains(targetDiv)) {
                        el.style.display = 'none';
                    }
                }
            }
        }
    }

    // If the keyword is not found, alert the user
    if (!found) {
        alert("No results found for: " + keyword);
    }
}

// Store initial styles when the page loads
window.onload = storeInitialStyles;