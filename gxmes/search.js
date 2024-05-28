function searchmedaddy() {
    const keywords = prompt('What is blud searching for?');
    const keywordsArray = keywords.split(' '); 

    const elements = document.body.getElementsByTagName('*');

    for (let element of elements) {
        let hideElement = true; // Assume we'll hide the element by default
        for (let keyword of keywordsArray) { 
            if (element.textContent.includes(keyword)) {
                hideElement = false; // Don't hide if any keyword is found
                break; // No need to check further if keyword found
            }
        }
        if (hideElement) {
            const closestDiv = element.closest('div[style*="margin: 10px;"]');
            if (closestDiv !== null) {
                closestDiv.style.display = 'none';
            }
        }
    }
}
