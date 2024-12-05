function getParentFolder() {
    var path = window.location.pathname;
    path = path.endsWith('/') ? path.slice(0, -1) : path;
    var segments = path.split('/');
    return segments.length > 1 ? segments[segments.length - 2] : '/'; 
}

const x = getParentFolder();

const gxmes = list.map((name, index) => ({
    name,
    img: imgsrc[index],
    link: listlink[index],
}));

document.addEventListener('DOMContentLoaded', function () {
    const gxmeGrid = document.querySelector('.gxme-grid');
    gxmes.forEach((gxme, index) => {
        let gxmeLink = document.createElement('a');
        gxmeLink.href = gxme.link; 
        gxmeLink.target = '_self'; 
        gxmeLink.style.textDecoration = 'none'; 
        gxmeLink.style.color = 'inherit'; 

        let gxmeCard = document.createElement('div');
        gxmeCard.classList.add('gxme-card');
        gxmeCard.style.cursor = 'pointer';

        let img = document.createElement('img');
        img.src = x + gxme.img;
        img.alt = gxme.name;
        img.style.width = '100px';
        img.style.height = '100px';

        let h3 = document.createElement('h3');
        h3.textContent = gxme.name;

        gxmeCard.appendChild(img);
        gxmeCard.appendChild(h3);
        gxmeLink.appendChild(gxmeCard);
        gxmeGrid.appendChild(gxmeLink);
    });

    const searchInput = document.getElementById('search');

function searchgxmes() {
const query = searchInput.value.toLowerCase();

const gxmeGrid = document.querySelector('.gxme-grid');
gxmeGrid.innerHTML = ''; // Clear the grid

// Re-populate with only matching cards
gxmes.forEach((gxme) => {
if (gxme.name.toLowerCase().includes(query)) {
    let gxmeLink = document.createElement('a');
    gxmeLink.href = gxme.link; 
    gxmeLink.target = '_self'; 
    gxmeLink.style.textDecoration = 'none'; 
    gxmeLink.style.color = 'inherit'; 

    let gxmeCard = document.createElement('div');
    gxmeCard.classList.add('gxme-card');
    gxmeCard.style.cursor = 'pointer';

    let img = document.createElement('img');
    img.src = x + gxme.img;
    img.alt = gxme.name;
    img.style.width = '100px';
    img.style.height = '100px';

    let h3 = document.createElement('h3');
    h3.textContent = gxme.name;

    gxmeCard.appendChild(img);
    gxmeCard.appendChild(h3);
    gxmeLink.appendChild(gxmeCard);
    gxmeGrid.appendChild(gxmeLink);
}
});
}



document.getElementById("search").addEventListener("input", searchgxmes);

function getQueryParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

const searchedurl = getQueryParam('searched');  
document.getElementById('search').value = searchedurl;
searchgxmes();

});