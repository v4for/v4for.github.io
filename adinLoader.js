let currentUrl = window.location.href;

let stringToRemove = "vafor_main-it/adinGameLoader.js";

let newUrl = currentUrl.replace(stringToRemove, '');

const getAdinDomain = newUrl+ '/preroll/adinGameLoader.js';
