let matchFound = false;

document.addEventListener("DOMContentLoaded", () => {
    const searched = new URL(window.location).searchParams.get("searched");
    console.log("Searched term:", searched); // Log search term

    const container = document.getElementById("list");
    if (!container) {
        console.error('Div with id="list" not found.');
        return;
    }

    // Function to handle the main logic
    function handleLogic() {
        console.log("Logic triggered: #list contains 74 elements.");

        function hidesomediv(text) {
            if (!text) {
                console.log("No search text provided.");
                return;
            }

            const hidethisDiv = document.getElementById("hidethis");
            if (hidethisDiv) {
                hidethisDiv.style.display = "none";
            }

            const searchTitle = document.getElementById("searchtitle");
            if (searchTitle) {
                searchTitle.innerHTML = "Results for: " + searched;
            }

            const descriptions = document.querySelectorAll(".description");

            descriptions.forEach((description) => {
                if (
                    description.textContent.toLowerCase().includes(text.toLowerCase())
                ) {
                    matchFound = true;
                } else {
                    description.parentElement.style.display = "none";
                }
            });
        }

        hidesomediv(searched);

        if (window.location.search.includes("?searched")) {
            if (!matchFound) {
                console.log("No matches found");
                alert(
                    "No matches found for " + searched + ". Redirecting you away."
                );
                window.location = "/";
            }
        }

        if (window.location.search.includes("?random")) {
            const links = container.getElementsByTagName("a");
            if (links.length > 0) {
                const randomIndex = Math.floor(Math.random() * links.length);
                const randomLink = links[randomIndex].href;
                console.log("Random link selected:", randomLink);
                window.location = randomLink;
            } else {
                console.log("No links found in the #list div.");
            }
        }
    }

    // Monitor #list for changes
    const observer = new MutationObserver(() => {
        console.log("Current child count in #list:", container.children.length);
        if (container.children.length === 74) {
            observer.disconnect(); // Stop observing once the condition is met
            handleLogic(); // Execute the main logic
        }
    });

    // Start observing the #list div for child list changes
    observer.observe(container, { childList: true });

    // Fallback: Check periodically if elements aren't added through observed changes
    const fallbackCheck = setInterval(() => {
        console.log("Fallback check: Current child count in #list:", container.children.length);
        if (container.children.length === 74) {
            clearInterval(fallbackCheck); // Stop fallback check
            observer.disconnect(); // Stop observer as well
            handleLogic(); // Execute the main logic
        }
    }, 1000); // Check every 1 second
});
