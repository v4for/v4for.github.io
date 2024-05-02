window.addEventListener('beforeunload', function(e) {
    if (!localStorage.getItem('leaveConf') || localStorage.getItem('leaveConf') !== 'true') {
        e.preventDefault();
        e.returnValue = '';
    }
});

function toggleBlank() {
    var load = localStorage.getItem('leaveConf');
    if (load === 'false' || load === null) {
        load = true; 
        document.getElementById('toggleButton').innerHTML = 'true';
        localStorage.setItem('leaveConf', true);
    } else {
        load = false; 
        document.getElementById('toggleButton').innerHTML = 'flase';
        localStorage.setItem('leaveConf', false);
    }
}
