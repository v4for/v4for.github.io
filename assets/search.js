function displayResults() {
  const inputField = document.getElementById('searchTerm'); 

  if (!inputField.value) { 
    alert("Say something!");
    return; // Exit the function if the input is empty
  } 

  const filter = inputField.value.toLowerCase(); // Use inputField.value directly
  console.log(filter);
  
  document.getElementById("whatisearchedfor").innerHTML = filter;

  const collection = document.getElementById('collection');
  const divs = collection.getElementsByTagName('div');

  for (let i = 0; i < divs.length; i++) {
    const description = divs[i].getElementsByClassName('description')[0];
    if (description) {
      const textValue = description.textContent || description.innerText;
      divs[i].style.display = textValue.toLowerCase().includes(filter) ? 'block' : 'none'; // Simplified
    }
  }
  
  const modal = document.getElementById('modal');
  modal.style.display = 'block';
  const modalContent = modal.querySelector('.modal-content');
  modalContent.style.animation = 'none';
  modalContent.offsetHeight; // Trigger reflow
  modalContent.style.animation = ''; // Reset animation
}

function closeModal() {
  const modal = document.getElementById('modal');
  modal.style.display = 'none';
}
