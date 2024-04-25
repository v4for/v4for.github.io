var phrases = [
    'Do your IT "work" here. Dev work in progress',
    "To actually learn IT, go to W3",
    "Minecraft ahh vibes",
    "The answer is 42",
    "Linux on top (that's right Martin)",
    'Wow, such difficult "education"',
    "Bro, don't clown my dev build"
  ];
  
  var randomIndex = Math.floor(Math.random() * phrases.length);
  var randomPhrase = phrases[randomIndex];
  
  var bannerSubtitle = document.getElementsById("changetext");
  bannerSubtitle.innerHTML = randomPhrase;
  