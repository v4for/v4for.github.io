function displayResults() {
  const inputField = document.getElementById('searchTerm'); 

  if (!inputField.value) { 
    alert("Say something!");
  } else {
    console.log(inputField.value)
      document.getElementById("whatisearchedfor").innerHTML = inputField.value;

      const filter = this.value.toLowerCase();
      const collection = document.getElementById('collection');
      const divs = collection.getElementsByTagName('div');

      for (let i = 0; i < divs.length; i++) {
          const description = divs[i].getElementsByClassName('description')[0];
          if (description) {
              const textValue = description.textContent || description.innerText;
              if (textValue.toLowerCase().includes(filter)) {
                  divs[i].style.display = 'block'; // Show the div
              } else {
                  divs[i].style.display = 'none'; // Hide the div
              }
          }
      }
      
      const modal = document.getElementById('modal');
      modal.style.display = 'block';
      const modalContent = modal.querySelector('.modal-content');
      modalContent.style.animation = 'none';
      modalContent.offsetHeight; 
      modalContent.style.animation = '';
      
  }
}

function closeModal() {
  const modal = document.getElementById('modal');
  modal.style.display = 'none';
}