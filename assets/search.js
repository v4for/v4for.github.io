document.getElementById('inputField').addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
      displayResults();
  }
});

function displayResults() {
  const inputField = document.getElementsByClassName('inputField'); 
  console.log('Entered text:', inputField.value);

  if (inputField.value === '') { 
    alert("Say something!");
  } else {
    //also need modal code
    document.getElementById("whatisearched").innerHTML = inputField.value;

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