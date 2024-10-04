let sillyurl = "maxwellstevenson.com";

if (window.location.href.includes('github.io')) {
    sillyurl = "ph4xus.github.io";
} else if (window.location.href.includes('netlify.app')) {
    sillyurl = "vafor.netlify.app";
} 

const getAdinDomain = 'https://' + sillyurl +'/preroll/adinGameLoader.js';

console.log(getAdinDomain);