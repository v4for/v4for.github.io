let matchFound = false;

document.addEventListener('DOMContentLoaded', () => {
    const searched = new URL(window.location).searchParams.get('searched');
    console.log('Searched term:', searched); //search wohoo

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
                alert("No matches found for " + searched + ". redirecting you away")
                window.location = "/"
            }
        } else if (window.location.search.includes("?random")) {
            const div = document.getElementById('for');
            const links = div.getElementsByTagName('a');
            const randomIndex = Math.floor(Math.random() * links.length);
            const randomLink = links[randomIndex].href;
            console.log(randomLink)

        }

});
