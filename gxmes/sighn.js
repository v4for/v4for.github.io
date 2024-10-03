const searched = new URL(window.location).searchParams.get('searched');
console.log(searched); // search wohoo

function hidesomediv(text) {
    const descriptions = document.querySelectorAll('.description');
    descriptions.forEach(description => {
      if (!description.textContent.includes(text)) {
        description.parentElement.style.display = 'none';
      }
    });
  }

 
  hidesomediv(searched);
