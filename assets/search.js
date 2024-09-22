document.addEventListener('keydown', function (event) {
    if (event.keyCode === 13) {
      
      search = document.getElementsByClassName('userInput').value;
  
      const commonOutput = `<p> guest@terminal.maxwell.com$~ ${command}</p>`;
      
      if (command.startsWith('echo ')) {
        const echoedText = command.substring(5); // Extract text after 'echo '
        outputArea.innerHTML += `<p> guest@terminal.maxwell.com$~ ${command}</p> ` + `<p>${echoedText}</p>`;
      } else if (command === 'date') {
        const d = new Date();
        outputArea.innerHTML += `${commonOutput} 
          <p>${d}</p>`;
      } else if (command === 'help') {
        outputArea.innerHTML += `<p> guest@terminal.maxwell.com$~ ${command}</p>` + help;
      } else if (command === 'clear') {
        outputArea.innerHTML = ''; 
        var commandLine = document.getElementById("Command_Line");
        commandLine.insertAdjacentElement('beforebegin', userInputContainer);
      } else if (command === 'echo') {
        outputArea.innerHTML += `<p> guest@terminal.maxwell.com$~ ${command}</p>` + echo;
      } else if (command === 'whoami') {
        outputArea.innerHTML += `<p> guest@terminal.maxwell.com$~ ${command}</p> <br>` + whoami1;
      } else {
        outputArea.innerHTML += `<p> guest@terminal.maxwell.com$~ ${command}</p> ` + `<p>Command ${command} is not recognized... for now.</p>`;
      }    
      
      outputArea.innerHTML += '<hr class="invisible-hr">';
      document.getElementById('userInput').value = '';
      
     
    }
  });
