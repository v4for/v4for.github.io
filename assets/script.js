//lets do this one more time shall we? my name is i had to rewrite everything this better work


const fadeIns = document.querySelectorAll('.fade-in');

const fadeInOptions = {
  threshold: 0.5 
};

const fadeInObserver = new IntersectionObserver((entries, fadeInObserver) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
    } else {
      entry.target.style.opacity = 0;
    }
  });
}, fadeInOptions);

fadeIns.forEach(fadeIn => {
  fadeInObserver.observe(fadeIn);
});
