document.addEventListener("DOMContentLoaded", function() {
    const htmlContent = `
        <header>
            <h1 style="cursor: pointer; padding-right:20px;" onclick="window.location.href = '/'">Vafor</h1>
            <nav>
                <a href="/search/">Search</a>
                <a href="/gxmes">Gxmes</a>
                <a href="/about">About</a>
                <a href="/a">Apps</a>
            </nav>
        </header>

        <main>
            <div class="content-container">
                <iframe id="gameFrame" title="Game" scrolling="no"></iframe>
                
                <div class="fullscreen-strip">
                    <button class="fullscreen-btn" onclick="toggleFullscreen()">
                        <i class="fas fa-expand"></i> 
                    </button>
                </div>
            </div>
        </main>

        <footer>
            <p>&copy; 2024 Vafor IT. All rights reserved. <a href="#">Privacy Policy</a></p>
        </footer>
    `;

    document.body.innerHTML += htmlContent;

    const headContent = `
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Vafor</title>
        <!-- Include Font Awesome -->
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" rel="stylesheet">
        <link href="../styles/style.css" rel="stylesheet"/>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5247035630897467" crossorigin="anonymous"></script>
    `;

    document.head.innerHTML += headContent;
});

async function fetchData(index) {
    try {
        const response = await fetch('/list.json');
        const data = await response.json();
        const item = data[index];
        const name1 = item.name;
        const src = item.linksrc;

        console.log("name", name1);
        console.log("src", src);

        // Set iframe src
        const iframe = document.getElementById('gameFrame');    
        iframe.src = src;

        // Set tab name and image
        var savedTabName = localStorage.getItem('tabName');
        var savedTabImage = localStorage.getItem('tabImage');

        if (savedTabName) {
            document.title = savedTabName;
        } else {
            document.title = name1 + " - play now on maxwellstevenson.com";
        }

        if (savedTabImage) {
            var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
            link.type = 'image/x-icon';
            link.rel = 'shortcut icon';
            link.href = savedTabImage;
            document.getElementsByTagName('head')[0].appendChild(link);
        }

        document.getElementById('gameFrame').focus();


    } catch (error) {
        console.error('Fetch error:', error);
    }
}

function toggleFullscreen() {
    var iframe = document.getElementById('gameFrame');
    
    if (!document.fullscreenElement) {
        if (iframe.requestFullscreen) {
            iframe.requestFullscreen();
        } else if (iframe.mozRequestFullScreen) { // Firefox
            iframe.mozRequestFullScreen();
        } else if (iframe.webkitRequestFullscreen) { // Chrome, Safari and Opera
            iframe.webkitRequestFullscreen();
        } else if (iframe.msRequestFullscreen) { // IE/Edge
            iframe.msRequestFullscreen();
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) { // Firefox
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) { // Chrome, Safari and Opera
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { // IE/Edge
            document.msExitFullscreen();
        }
    }
}


//const keywords = 'gxme, gxmes, ' + name1 + ' unblxcked, ' + name1 + ' maxwellstevenson.com, Vafor, Vafor IT, Vafor IT Work, EZ 66, ' + name1;