console.log("This code uses Goat.js V1 by Luke Evanson. The official page is at projects.lukeevanson.com/goat.js The purpose of this library is to make coding in JS fun and easier.");

function konami(message) {
  const konamiCode = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a','Enter'];

  let progress = 0;

  document.addEventListener('keydown', function(event) {
    if (event.key === konamiCode[progress]) {
      progress++;
      if (progress === konamiCode.length) {
        alert(message);
        progress = 0;
      }
    } else {
      progress = 0;
    }
  });
}
