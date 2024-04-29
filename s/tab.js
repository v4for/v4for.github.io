function applyUrl(url, tabName) {
  // Change tab name
  document.title = tabName;

  // Change tab image (favicon)
  var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
  link.type = 'image/x-icon';
  link.rel = 'shortcut icon';
  link.href = url;
  document.getElementsByTagName('head')[0].appendChild(link);

  // Save info to local storage
  localStorage.setItem('tabName', tabName);
  localStorage.setItem('tabImage', url);
}

// Load saved info from local storage when page loads
window.onload = function() {
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
