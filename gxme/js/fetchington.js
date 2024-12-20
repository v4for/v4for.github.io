async function fetchData(index) {
    try {
        const response = await fetch('/list.json');

        const data = await response.json();
        const item = data[index];
        const name1 = item.name;
        const src = item.linksrc;

        console.log("name", name1);
        console.log("src", src);

    } catch (error) {
        console.error('Fetch error:', error);
    }
}

const iframe = document.getElementById('gameFrame');    

iframe.src = src;  

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


function addKeywords(keywords) {
    const meta = document.createElement('meta');
    meta.name = 'keywords';
    meta.content = keywords;
    document.head.appendChild(meta);
}

const keywords = 'gxme, gxmes, ' + name1 + ' unblxcked, ' + name1 + ' maxwellstevenson.com, Vafor, Vafor IT, Vafor IT Work, EZ 66, ' + name1;
addKeywords(keywords);