let matchFound = false;

document.addEventListener('DOMContentLoaded', () => {
    const searched = new URL(window.location).searchParams.get('searched');
    console.log('Searched term:', searched); // search term

    const container = document.getElementById('for');
    const images = container ? container.querySelectorAll('img') : [];
    const imagesLoaded = Array.from(images).map(img => 
        new Promise(resolve => {
            if (img.complete) {
                resolve(); 
            } else {
                img.onload = resolve;
                img.onerror = resolve; 
            }
        })
    );

    Promise.all(imagesLoaded).then(() => {
        console.log('DOM is fully loaded and all images in #for are loaded.');

        function hidesomediv(text) {
            if (!text) {
                return;
            }

            document.getElementById("hidethis").style.display = "none";
            document.getElementById("searchtitle").innerHTML = "Results for: " + searched;

            const descriptions = document.querySelectorAll('.description');

            descriptions.forEach(description => {
                if (description.textContent.toLowerCase().includes(text.toLowerCase())) {
                    matchFound = true;
                } else {
                    description.parentElement.style.display = 'none';
                }
            });
        }

        hidesomediv(searched);

        if (window.location.search.includes("?searched")) {
            if (!matchFound) {
                console.log("No matches found");
                alert("No matches found for " + searched + ". Redirecting you away.");
                window.location = "/";
            }
        }

        if (window.location.search.includes("?random")) {
            const div = document.getElementById('for');
            if (div) {
                const links = div.getElementsByTagName('a');
                if (links.length > 0) {
                    const randomIndex = Math.floor(Math.random() * links.length);
                    const randomLink = links[randomIndex].href;
                    console.log(randomLink);
                    window.location = randomLink;
                } else {
                    console.log("No links found in the #for div.");
                }
            }
        }
    });
});
