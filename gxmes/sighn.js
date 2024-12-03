let matchFound = false;

document.addEventListener('DOMContentLoaded', () => {
    const searched = new URL(window.location).searchParams.get('searched');
    console.log('Searched term:', searched); // search term

    const container = document.getElementById('for');
    // Function to handle the main logic
    function handleLogic() {
        console.log('DOM is fully loaded and #for contains 74 elements.');

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
            const links = container.getElementsByTagName('a');
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

    // Monitor #for for changes
    const observer = new MutationObserver(() => {
        if (container.children.length === 74) {
            observer.disconnect(); // Stop observing once the condition is met
            handleLogic(); // Execute the main logic
        }
    });

    // Start observing the #for div for child list changes
    observer.observe(container, { childList: true });
});
