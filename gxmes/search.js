function searchmedaddy() {
    // Prompt user for a search keyword
    var keyword = prompt("What is blud searching for?").toLowerCase();

    // Get the target divs
    const forDiv = document.getElementById('for');
    const notforDiv = document.getElementById('notfor');

    if (!forDiv || !notforDiv) {
        alert("Target divs not found on the page.");
        return;
    }

    // Combine the elements of both divs
    const elements = [...forDiv.getElementsByTagName('*'), ...notforDiv.getElementsByTagName('*')];

    // First, restore visibility of all elements within the target divs
    for (let element of elements) {
        element.style.display = '';
    }

    let found = false;

    // Loop through the elements to find one containing the keyword
    for (let element of elements) {
        if (element.textContent.toLowerCase().includes(keyword)) {
            let targetDiv = element.closest('div[style*="margin: 10px;"]');
            if (targetDiv) {
                found = true;
                // Hide all other elements except the targetDiv and its children
                for (let el of elements) {
                    if (el !== targetDiv && !targetDiv.contains(el)) {
                        el.style.display = 'none';
                    }
                }
                break;
            }
        }
    }

    if (!found) {
        alert("No results found for: " + keyword);
    }
}
