if (!localStorage.getItem('leaveConf') || localStorage.getItem('leaveConf') !== 'true') {
    window.addEventListener('beforeunload', function(e) {
        e.preventDefault();
        e.returnValue = ''; 
    });
}
