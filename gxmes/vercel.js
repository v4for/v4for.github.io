document.addEventListener('DOMContentLoaded', () => {
    const keywords = ['ovo', 'basketball', 'vex 6' , 'slope'];

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
