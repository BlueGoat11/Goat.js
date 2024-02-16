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

function popup(txt) {
    window.alert(txt);
    console.log(txt);
}

function getscreenwidth() {
    screenwidth = screen.availWidth
}

function getscreenheight() {
    screenheight = screen.availHeight
}

function setcookie(name, info) {
  document.cookie = `${name}=${info}`;
}

function getCookie(cookieName) {
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith(cookieName + '=')) {
      const cookieValue = cookie.substring(cookieName.length + 1);
      alert(cookieValue);
      document.getElementById('cookie').innerHTML = cookieValue;
      break;
    }
  }
}

function deleteCookie(cookieName) {
  document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}
