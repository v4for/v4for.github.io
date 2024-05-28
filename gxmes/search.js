function searchmedaddy() {
    const keywords = prompt('What is blud searching for?');
    const keywordsArray = keywords.split(' '); 

    const elements = document.body.getElementsByTagName('*');

    for (let element of elements) {
        let keywordFound = false;
        for (let keyword of keywordsArray) { 
            if (element.textContent.includes(keyword)) {
                keywordFound = true;
                break;
            }
        }
        if (!keywordFound) {
            let targetDiv = element.closest('div[style*="margin: 10px;"]');
            if (targetDiv) {
                targetDiv.style.display = 'none';
            }
        }
    }
}
