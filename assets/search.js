document.addEventListener('keydown', function (event) {
  if (event.keyCode === 13) {
      let search = document.getElementsByClassName('searchTerm')[0].value;

      if (search === '') {
          alert('Please search for something');
      } else {
          displayResults(search); 
      }
  }
});


function displayResults(search) {
  document.getElementById('whatisearched').innerText = search; 
}
