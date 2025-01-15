async function fetchData(index) {
    try {
        const response = await fetch('/list.json');
        const data = await response.json();
        const item = data[index];
        const name1 = item.name;
        const imgsrc = item.imgsrc;
        const src = item.linksrc;

        console.log("name", name1);
        console.log("src", src);

        const iframe = document.getElementById('game-iframe');    
        iframe.src = src;
        const image = document.getElementById('bottomimage');
        image.src = imgsrc; 
        document.getElementById('gameTitle').textContent = name1 + ' play on maxwellstevenson.com';
        document.title = name1 + ' - play on maxwellstevenson.com';
        const imgSrc = 'favicon.ico'; document.head.appendChild(Object.assign(document.createElement('link'), { rel: 'icon', href: imgSrc, id: 'faviconLink' }));
        const keywords = 'gxme, gxmes, ' + name1 + ' unblxcked, ' + name1 + ' maxwellstevenson.com, Vafor, Vafor IT, Vafor IT Work, ' + name1;
    
        const keywordsArray = keywords.split(', ');

        const keywordsDiv = document.querySelector('.keywords');

        keywordsDiv.innerHTML = '<h3>Keywords:</h3>';

        keywordsArray.forEach(keyword => {
            const span = document.createElement('span');
            span.textContent = keyword;
            keywordsDiv.appendChild(span);
        });

        document.getElementById('game-iframe').focus();
    } catch (error) {
        console.error('Fetch error:', error);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const link1 = document.createElement('link');
    link1.rel = 'stylesheet';
    link1.href = '../styles/style.css';
    
    const link2 = document.createElement('link');
    link2.rel = 'stylesheet';
    link2.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css';
    
    document.head.appendChild(link1);
    document.head.appendChild(link2);
    
    const html3 = `
    <header>
        <a class="title" href="/gxmes">Vafor</a>
        <nav>
            <!--
            <a href="#home">Home</a>
            <a href="#games">Games</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            -->
        </nav>
    </header>
    <div class="content">
        <div class="game-info">
            <h2 id="gameTitle">Loading...</h2>
        </div>
        <iframe id="game-iframe" class="game-iframe" src=""></iframe>
        <div class="fullscreen-strip">
            <button class="fullscreen-btn" onclick="toggleFullscreen()">
                <i class="fas fa-expand"></i>
            </button>
        </div>
        <div class="keywords-section">
            <div class="keywords">
                <h3>Keywords:</h3>
                <span>loading..</span>
            </div>
            <div class="game-image">
                <img id="bottomimage">
            </div>
        </div>
    </div>
    <footer>
        <p>© 2025 Game Hub. All Rights Reserved.</p>
    </footer>
    `;

    const bodyTag = document.body;

    bodyTag.innerHTML += html3;
});
function toggleFullscreen() {
            const iframe = document.getElementById('game-iframe');
            if (iframe.requestFullscreen) {
                iframe.requestFullscreen();
            } else if (iframe.mozRequestFullScreen) {
                iframe.mozRequestFullScreen();
            } else if (iframe.webkitRequestFullscreen) {
                iframe.webkitRequestFullscreen();
            } else if (iframe.msRequestFullscreen) { 
                iframe.msRequestFullscreen();
            }
        }