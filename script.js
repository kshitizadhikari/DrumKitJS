var drums = document.querySelectorAll(".drum");
var numberOfDrums = drums.length;

// DETECT MOUSE CLICK
for (var i = 0; i < numberOfDrums; i++) {
  drums[i].addEventListener("click", function () {
    var buttonClicked = this.textContent;
    identifyClickOrKeyPress(buttonClicked);
  });
}

// DETECT KEY PRESS
document.addEventListener("keydown", function (event) {
  identifyClickOrKeyPress(event.key);
});

function identifyClickOrKeyPress(action) {
  switch (action) {
    case "a":
      playSound("tom-1");
      break;

    case "s":
      playSound("tom-2");
      break;

    case "d":
      playSound("tom-3");
      break;

    case "f":
      playSound("tom-4");
      break;

    case "j":
      playSound("snare");
      break;

    case "k":
      playSound("crash");
      break;

    case "l":
      playSound("kick-bass");
      break;

    default:
      break;
  }
}

function playSound(soundName) {
  var audio = new Audio("sound/" + soundName + ".mp3");
  audio.play();
}
