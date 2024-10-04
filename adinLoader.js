let currentUrl = window.location.href;

let stringToRemove = "/adinGameLoader.js";

let newUrl = currentUrl.replace(stringToRemove, '');

const getAdinDomain = newUrl+ 'preroll/adinGameLoader.js';
