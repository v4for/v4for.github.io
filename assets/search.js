function displayResults() {
  const inputField = document.getElementById('searchTerm'); 

  if (!inputField.value) { 
    alert("Say something!");
  } else {
      console.log(inputField.value)

      if(inputField.value == "random"){
        window.location.href = "/gxmes?random"
      } else {
        window.location.href = "/gxmes?searched=" + inputField.value;
      }
      
  }
}