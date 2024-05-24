document.addEventListener('DOMContentLoaded', () => {
    const keywords = ['ovo', 'basketball', 'vex 6'];
    
    if (window.location.href.includes('vercel.app')) {
        const elements = document.body.getElementsByTagName('*');
        
        for (let element of elements) {
            for (let keyword of keywords) {
                if (element.textContent.includes(keyword)) {
                    let parentDiv = element.closest('div');
                    if (parentDiv) {
                        parentDiv.classList.add('hidden');
                    }
                }
            }
        }
    }
});
