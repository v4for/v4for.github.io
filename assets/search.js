function displayResults() {
  const inputField = document.getElementById('searchTerm'); 

  if (!inputField.value) { 
    alert("Say something!");
  } else {
    console.log(inputField.value)
      document.getElementById("whatisearchedfor").innerHTML = inputField.value;

      localStorage.setItem('searched', inputField.value);

      
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