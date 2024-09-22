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
    document.getElementById("whatisearched").innerHTML = inputField.value;
  }
}
