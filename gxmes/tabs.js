function makeActive(link) {
    var links = document.querySelectorAll('.nav-link');
    links.forEach(function(link) {
      link.classList.remove('active');
    });
    link.classList.add('active');
  }


//functions for links

function openBlob() {
    setTimeout(function() {
        var links = document.querySelectorAll('div.for a');
        links.forEach(function(link) {
            link.onclick = function(event) {
                event.preventDefault(); 
                
                const html = '<html><title>IT work</title><iframe src="' + link.href + '" style="position:fixed; top:0; left:0; bottom:0; right:0; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:999999;"></iframe></html>';
                const blob = new Blob([html], { type: 'text/html' });
                const blobUrl = URL.createObjectURL(blob);
                window.open(blobUrl, '_blank');

            };
        }); 
    }, 50); 
}

function openAboutBlank() {
    setTimeout(function() {
        var links = document.querySelectorAll('div.for a');
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
    }, 50); 
} 

function openDefault() {
    setTimeout(function() {
        var links = document.querySelectorAll('div.for a');
        links.forEach(function(link) {
            link.onclick = null;
        });
    }, 50);
}

function openPopup() {
    setTimeout(function() {
        var links = document.querySelectorAll('div.for a');
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
    }, 50);
} 

//search
function searchmedaddy() {
    var keyword = prompt("What is blud searching for?");

    const elements = document.body.getElementsByTagName('*');

    for (let element of elements) {
        if (element.textContent.includes(keyword)) {
            let targetDiv = element.closest('div[style*="margin: 10px;"]');
            if (targetDiv) {
                for (let el of elements) {
                    if (el !== targetDiv && !el.contains(targetDiv)) {
                        el.style.display = 'none';
                    }
                }
            }
        }
    }
}