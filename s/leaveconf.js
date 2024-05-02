window.addEventListener('beforeunload', function(e) {
    if (!localStorage.getItem('leaveConf') || localStorage.getItem('leaveConf') !== 'true') {
        e.preventDefault();
        e.returnValue = '';
    }
});