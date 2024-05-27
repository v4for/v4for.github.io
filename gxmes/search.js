function search() {
    var keyword = prompt("What is blud searching for?");

    const elements = document.body.getElementsByTagName('*');

    for (let element of elements) {
            if (element.textContent.includes(keyword)) {
                let targetDiv = element.closest('div[style*="margin: 10px;"]');
                if (targetDiv) {
                    targetDiv.style.display = 'none';
                }
            }
    }
}
