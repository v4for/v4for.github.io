const toggleButton = document.getElementById('toggleButton');

toggleButton.addEventListener('click', function() {
    toggleBlank();
});

function toggleBlank() {
    var load = localStorage.getItem('leaveConf');
    if (load === 'false' || load === null) {
        load = true; 
        document.getElementById('toggleButton').innerHTML = 'true';
        localStorage.setItem('leaveConf', true);
    } else {
        load = false; 
        document.getElementById('toggleButton').innerHTML = 'false'; 
        localStorage.setItem('leaveConf', false);
    }
}
