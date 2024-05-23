document.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
        event.preventDefault(); // Prevent default spacebar behavior (scrolling)
        const gameContainer = document.getElementById('gameContainer');
        if (gameContainer) {
            gameContainer.click();
        }
    }
});

document.getElementById('gameContainer').addEventListener('click', function() {
    console.log('Space bar was pressed.');
});