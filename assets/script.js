//lets do this one more time shall we? my name is i had to rewrite everything this better work
function redirectToWebsite() {
    var redirectURL = prompt("Enter website where the current URL will get redirected to (default is google.com):", "google.com");
    if (redirectURL) {
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

        window.location.href = "http://" + redirectURL;
    }
}
