function toggleLinkBehavior() {
    var useIframe = document.getElementById('useIframe').classList.contains('active');

    var links = document.querySelectorAll('a');

    if (useIframe) {
        links.forEach(function(link) {
            link.onclick = function(event) {
                event.preventDefault(); 
                const html = '<html><title>Link</title><iframe src="' + link.href + '" style="position:fixed; top:0; left:0; bottom:0; right:0; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:999999;"></iframe></html>';
                const blob = new Blob([html], { type: 'text/html' });
                window.open(URL.createObjectURL(blob));
            };
        });
    } else {
        links.forEach(function(link) {
            link.onclick = null;
        });
    }
}

function toggleButton() {
    var button = document.getElementById('useIframe');
    button.classList.toggle('active');
    toggleLinkBehavior();
}

function toggle2() {
    var button = document.getElementById('no');
    button.classList.toggle('active');
    if (button.classList.contains('active')) {
        openblob();
    } else {
        closeblob();
    }
}

function openblob() {
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

function closeblob() {
    var links = document.querySelectorAll('a');
    links.forEach(function(link) {
        link.onclick = null;
    });
}

function normal(){
    var button = document.getElementById('normal');
    button.classList.toggle('active');
    var links = document.querySelectorAll('a');
    if (button.classList.contains('active')) {
        links.forEach(function(link) {
            link.onclick = null;
        });
    } else {
        toggleLinkBehavior();
    }
}

function togglePopupButton() {
    var button = document.getElementById('popup');
    button.classList.toggle('active');
    if (button.classList.contains('active')) {
        enablePopupBehavior();
    } else {
        disablePopupBehavior();
    }
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
