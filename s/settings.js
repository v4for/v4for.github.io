document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById('toggleButton');

    var load = localStorage.getItem('leaveConf');
    if (load === null) {
        load = false;
        localStorage.setItem('leaveConf', load);
    } else {
        load = load === 'true';
    }
    
    toggleButton.innerHTML = load.toString(); 

    toggleButton.addEventListener('click', function() {
        toggleBlank();
        console.log(localStorage.getItem('leaveConf'));
    });

    function toggleBlank() {
        if (load) {
            load = false;
            toggleButton.innerHTML = 'false';
        } else {
            load = true;
            toggleButton.innerHTML = 'true';
        }
        localStorage.setItem('leaveConf', load); 
    }
});

function blank2true() {
    if (localStorage.getItem('blank2') === null) {
        localStorage.setItem('blank2', 'true');
    } else {
        localStorage.setItem('blank2', 'newValue');
    }
}

function blank2false() {
    if (localStorage.getItem('blank2') === null) {
        localStorage.setItem('blank2', 'false');
    } else {
        localStorage.setItem('blank2', 'false');
    }
}
