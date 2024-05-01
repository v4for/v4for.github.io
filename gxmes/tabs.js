var popupButton, useIframeButton, noButton, normalButton;

window.onload = function() {
    popupButton = document.getElementById('popup');
    useIframeButton = document.getElementById('useIframe');
    noButton = document.getElementById('no');
    normalButton = document.getElementById('normal');

    popupButton.addEventListener('click', togglePopupButton);
    useIframeButton.addEventListener('click', toggleButton);
    noButton.addEventListener('click', toggle2);
    normalButton.addEventListener('click', normal);

    document.getElementById("no").click();

    restoreTabSettings();
};

function togglePopupButton() {
    popupButton.classList.toggle('active');
    if (popupButton.classList.contains('active')) {
        enablePopupBehavior();
    } else {
        disablePopupBehavior();
    }
}

function toggleButton() {
    useIframeButton.classList.toggle('active');
    var links = document.querySelectorAll('a');

    links.forEach(function(link) {
        link.onclick = function(event) {
            event.preventDefault(); 
            const html = '<html><title>IT work</title><iframe src="' + link.href + '" style="position:fixed; top:0; left:0; bottom:0; right:0; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:999999;"></iframe></html>';
            const blob = new Blob([html], {type: 'text/html'});
            var win = window.open();
            win.document.write(html);
        };
    });
}



function toggle2() {
    noButton.classList.toggle('active');
    if (noButton.classList.contains('active')) {
        openBlob();
    } else {
        closeBlob();
    }
}

function normal(){
    normalButton.classList.toggle('active');
    var links = document.querySelectorAll('a');
    if (normalButton.classList.contains('active')) {
        links.forEach(function(link) {
            link.onclick = null;
        });
    } else {
        //nothing ig
    }
}

function openBlob() {
    var links = document.querySelectorAll('a');
    links.forEach(function(link) {
        link.onclick = function(event) {
            event.preventDefault(); 
            var win = window.open();
            var iframe = win.document.createElement('iframe');
            iframe.style.position = "fixed";
            iframe.style.top = "0";
            iframe.style.left = "0";
            iframe.style.bottom = "0";
            iframe.style.right = "0";
            iframe.style.width = "100%";
            iframe.style.height = "100%";
            iframe.style.border = "none";
            iframe.style.margin = "0";
            iframe.style.padding = "0";
            iframe.style.overflow = "hidden";
            iframe.style.zIndex = "999999";
            iframe.src = link.href;
            win.document.body.appendChild(iframe);
        };
    });
}

function closeBlob() {
    var links = document.querySelectorAll('a');
    links.forEach(function(link) {
        link.onclick = null;
    });
}

function enablePopupBehavior() {
    var links = document.querySelectorAll('a');
    links.forEach(function(link) {
        link.onclick = function(event) {
            event.preventDefault(); 
            var win = window.open('', 'vafor', 'height=300,width=650,screenX=400,screenY=350');
            win.document.write('<html><title>vafor it </title><iframe src="' + link.href + '" style="position:fixed; top:0; left:0; bottom:0; right:0; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:999999;"></iframe></html>');
        };
    });
}

function disablePopupBehavior() {
    var links = document.querySelectorAll('a');
    links.forEach(function(link) {
        link.onclick = null;
    });
}

function restoreTabSettings() {
    var savedTabName = localStorage.getItem('tabName');
    var savedTabImage = localStorage.getItem('tabImage');
    if (savedTabName) {
        document.title = savedTabName;
    }
    if (savedTabImage) {
        var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
        link.type = 'image/x-icon';
        link.rel = 'shortcut icon';
        link.href = savedTabImage;
        document.getElementsByTagName('head')[0].appendChild(link);
    }
}
