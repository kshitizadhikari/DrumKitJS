var drums = document.querySelectorAll(".drum");

var numberOfDrums = drums.length;

for (var i = 0; i < numberOfDrums; i++) {
  drums[i].addEventListener("click", function () {
    var buttonClicked = this.textContent;

    switch (buttonClicked) {
      case "a":
        var audio = new Audio("sound/tom-1.mp3");
        audio.play();
        break;

      case "s":
        var audio = new Audio("sound/tom-2.mp3");
        audio.play();
        break;

      case "d":
        var audio = new Audio("sound/tom-3.mp3");
        audio.play();
        break;

      case "f":
        var audio = new Audio("sound/tom-4.mp3");
        audio.play();
        break;

      case "j":
        var audio = new Audio("sound/snare.mp3");
        audio.play();
        break;

      case "k":
        var audio = new Audio("sound/crash.mp3");
        audio.play();
        break;

      case "l":
        var audio = new Audio("sound/kick-bass.mp3");
        audio.play();
        break;
    }
  });
}

// var audio = new Audio("sound/tom-1.mp3");
// audio.play();
