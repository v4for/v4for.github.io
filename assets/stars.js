const starsContainer = document.querySelector('.stars-container');
const numStars = 100; // Adjust for more or fewer stars

for (let i = 0; i < numStars; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.setProperty('--i', Math.random());
    star.style.setProperty('--x', Math.random());
    star.style.setProperty('--y', Math.random());
    starsContainer.appendChild(star);
}
