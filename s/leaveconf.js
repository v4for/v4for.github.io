window.addEventListener('beforeunload', function(e) {

    
    if (!localStorage.getItem('leaveConf') || localStorage.getItem('leaveConf') !== 'true') {
        if (e.target.tagName.toLowerCase() === 'a') {
            return;
        } else {
            e.preventDefault();
            e.returnValue = 'Are you leaving? Or is your extention making you?';
        }
    }
});
