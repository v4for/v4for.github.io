let matchFound = false;

document.addEventListener('DOMContentLoaded', () => {
    const searched = new URL(window.location).searchParams.get('searched');
    console.log('Searched term:', searched); //search wohoo

    function hidesomediv(text) {
        if (!text) {
            return;
        }


        document.getElementById("hidethis").style.display = "none";
        document.getElementById("searchtitle").innerHTML = "Results for: " + searched;

        const descriptions = document.querySelectorAll('.description');

        descriptions.forEach(description => {
            if (description.textContent.toLowerCase().includes(text.toLowerCase())) {
                matchFound = true;
            } else {
                description.parentElement.style.display = 'none';
            }
        });
    }

    hidesomediv(searched);

    if (window.location.search.includes("?searched")) {
        if (!matchFound) {
            console.log("No matches found");
            alert("No matches found for " + searched + ". redirecting you away")
            window.location = "/"
        }
    } else if (window.location.search.includes("?random")) {
        const div = document.getElementById('for');
        const links = div.getElementsByTagName('a');
        const randomIndex = Math.floor(Math.random() * links.length);
        const randomLink = links[randomIndex].href;
        console.log(randomLink)
        alert("Your gxme was: " + randomLink)
        createIframePopup(randomLink);

    }

});


function createIframePopup(url) {
    const popup = document.createElement('div');
    const popupContent = document.createElement('div');
    const iframe = document.createElement('iframe');
    const closeButton = document.createElement('button');

    popup.style.display = 'flex';
    popup.style.position = 'fixed';
    popup.style.top = '0';
    popup.style.left = '0';
    popup.style.width = '100%';
    popup.style.height = '100%';
    popup.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    popup.style.justifyContent = 'center';
    popup.style.alignItems = 'center';
    popup.style.animation = 'fadeIn 0.5s';

    popupContent.style.position = 'relative';
    popupContent.style.width = '100%'; 
    popupContent.style.height = '100%'; 
    popupContent.style.overflow = 'hidden';
    popupContent.style.transform = 'scale(0)';
    popupContent.style.animation = 'scaleIn 0.5s forwards';

    iframe.src = url; 
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.frameBorder = '0';

    closeButton.innerText = 'Close';
    closeButton.style.position = 'absolute';
    closeButton.style.top = '10px';
    closeButton.style.right = '10px';
    closeButton.style.padding = '10px';
    closeButton.style.cursor = 'pointer';
    closeButton.style.background = 'transparent'; 
    closeButton.style.border = 'none';
    closeButton.style.color = 'white';

    popupContent.appendChild(closeButton);
    popupContent.appendChild(iframe);
    popup.appendChild(popupContent);
    document.body.appendChild(popup);

    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        @keyframes scaleIn {
            from { transform: scale(0); }
            to { transform: scale(1); }
        }
    `;
    document.head.appendChild(style);

    function closePopup() {
        popup.style.display = 'none';
    }

    closeButton.addEventListener('click', closePopup);

    popup.style.display = 'flex';
}

    

