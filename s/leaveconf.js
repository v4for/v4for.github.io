window.addEventListener('beforeunload', function(e) {
    if (e.target.tagName.toLowerCase() === 'a') {
        return;
    }
    
    if (!localStorage.getItem('leaveConf') || localStorage.getItem('leaveConf') !== 'true') {
        e.preventDefault();
        e.returnValue = 'Are you leaving? Or is your extention making you?';
    }
});
