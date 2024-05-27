function search() {
    var keyword = prompt("What is blud searching for?");

    const elements = document.body.getElementsByTagName('*');

    for (let element of elements) {
        if (element.textContent.includes(keyword)) {
            let targetDiv = element.closest('div[style*="margin: 10px;"]');
            if (targetDiv) {
                for (let el of elements) {
                    if (el !== targetDiv && !el.contains(targetDiv)) {
                        el.style.display = 'none';
                    }
                }
            }
        }
    }
}

