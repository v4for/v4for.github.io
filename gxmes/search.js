function searchmedaddy() {
    // Prompt user for a search keyword
    var keyword = prompt("What is blud searching for?");
    var regex = new RegExp(keyword, "i"); // Create a case-insensitive regex

    // Get all elements in the body
    const elements = document.body.getElementsByTagName('*');

    // First, restore visibility of all elements
    for (let element of elements) {
        element.style.display = '';
    }

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
                break;
            }
        }
    }

    // If the keyword is not found, alert the user
    if (!found) {
        alert("No results found for: " + keyword);
    }
}
