var blank = localStorage.getItem('blank') === 'true';
var button = document.getElementById("toggleButton");

function toggleBlank() {
    blank = !blank;
    localStorage.setItem('blank', blank);

    if (blank) {
        button.innerHTML = "true";
    } else {
        button.innerHTML = "off";
    }
}

function loadBlank() {
    var isBlank = localStorage.getItem('blank') === 'true';

    if (isBlank) {
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
        iframe.src = window.location.href;
        win.document.body.appendChild(iframe);
    }
}
