function blank2true() {
    if (localStorage.getItem('blank2') === null) {
        localStorage.setItem('blank2', 'true');
    } else {
        localStorage.setItem('blank2', 'true');
    }
}
function blank2false() {
    if (localStorage.getItem('blank2') === null) {
        localStorage.setItem('blank2', 'false');
    } else {
        localStorage.setItem('blank2', 'false');
    }
}
