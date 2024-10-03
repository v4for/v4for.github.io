  window.onload = function() {
    document.getElementById('searchTerm').focus();
};
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('searchTerm').addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            displayResults();
        }
    });
});

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

    if (window.self !== window.top) {
      } else {
        if (localStorage.getItem('blank2') === 'true') { 
            redirectToWebsite(); 
          }
      }

      document.getElementById('settings').addEventListener('click', function(event) {
        opensettings(); 
      });

  function opensettings() {
    event.preventDefault(); 
        var win = window.open('', 'Settings', 'height=300,width=650,screenX=400,screenY=350');
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
        iframe.src = "/s";
        win.document.body.appendChild(iframe);
  }