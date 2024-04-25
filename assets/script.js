    var phrases = [
      'Do your IT "work" here. Dev work in progress',
      "To actaully learn IT go to w3",
      "Minecraft ahh vibes",
      "The answer is 42",
      "Linux on top (that's right Martin)",
      'Wow such difficult "education',
      "Bro dont clown my dev build"
    ];
  
    var randomIndex = Math.floor(Math.random() * phrases.length);
    var randomPhrase = phrases[randomIndex];
  
    var bannerSubtitle = document.querySelector('.banner-subtitle');
    if (bannerSubtitle) {
      bannerSubtitle.textContent = randomPhrase;
    }
