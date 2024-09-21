//ik people are going to use vercel anyway

document.addEventListener('DOMContentLoaded', () => {
    const keywords = ['ovo', 'Basketball', 'vex 6' , 'Slope'];

    if (window.location.href.includes('vercel.app')) {
        const elements = document.body.getElementsByTagName('*');

        for (let element of elements) {
            for (let keyword of keywords) {
                if (element.textContent.includes(keyword)) {
                    let targetDiv = element.closest('div[style*="margin: 10px;"]');
                    if (targetDiv) {
                        targetDiv.style.display = 'none';
                    }
                }
            }
        }
    }
});
