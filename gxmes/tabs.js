function toggleButton(button) {
    document.querySelectorAll('.nav-link').forEach(link => {
        if (link !== button) {
            link.classList.remove('active');
            disableButtonBehavior(link);
        }
    });

    button.classList.toggle('active');
    
    if (button.classList.contains('active')) {
        enableButtonBehavior(button);
    } else {
        disableButtonBehavior(button);
    }
}

function enableButtonBehavior(button) {
    // Enable behavior associated with the button
    if (button === useIframeButton) {        
        if (useIframeButton.classList.contains('active')) {
            var links = document.querySelectorAll('a');
            links.forEach(function(link) {
                link.onclick = function(event) {
                    event.preventDefault(); 
                    
                    const html = '<html><title>IT work</title><iframe src="' + link.href + '" style="position:fixed; top:0; left:0; bottom:0; right:0; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:999999;"></iframe></html>';
                    const blob = new Blob([html], { type: 'text/html' });
                    const blobUrl = URL.createObjectURL(blob);
                    window.open(blobUrl, '_blank');
    
                };
            });
        }
    } else if (button === noButton) {
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
    } else if (button === popupButton) {
        var links = document.querySelectorAll('a');
        links.forEach(function(link) {
            link.onclick = function(event) {
                event.preventDefault(); 
                var win = window.open('', 'IT_work', 'height=300,width=650,screenX=400,screenY=350');
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
    } else if (button === normalButton) {
        var links = document.querySelectorAll('a');
        links.forEach(function(link) {
            link.onclick = null;
        });
    }
}

function disableButtonBehavior(button) {
    // Disable behavior associated with the button
    if (button === useIframeButton) {
    } else if (button === noButton) {
    } else if (button === popupButton) {
    } else if (button === normalButton) {
    }
}

window.onload = function() {
    popupButton = document.getElementById('popup');
    useIframeButton = document.getElementById('useIframe');
    noButton = document.getElementById('no');
    normalButton = document.getElementById('normal');

    popupButton.addEventListener('click', function() { toggleButton(popupButton); });
    useIframeButton.addEventListener('click', function() { toggleButton(useIframeButton); });
    noButton.addEventListener('click', function() { toggleButton(noButton); });
    normalButton.addEventListener('click', function() { toggleButton(normalButton); });

    document.getElementById("no").click();

    restoreTabSettings();
};