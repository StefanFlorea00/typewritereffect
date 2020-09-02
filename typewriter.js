"use strict";

let globalSpeed = 300; //Use between 300-800

//SOUNDS
let soundKeystroke1 = new Audio("./sounds/keystroke-1.mp3");
let soundKeystroke2 = new Audio("./sounds/keystroke-2.mp3");
let soundKeystroke3 = new Audio("./sounds/keystroke-3.mp3");
let soundKeystroke4 = new Audio("./sounds/keystroke-4.mp3");
let soundLineBreak = new Audio("./sounds/line-break.mp3");

initTypewriter();

//Get all .typewriter paragraphs
function initTypewriter() {
  textElements = document.querySelectorAll(".typewriter");
  loopThroughTexts();
}

//Fixme: timeout not working properly
//Go through each paragraph and run the typewriter
function loopThroughTexts() {
  for (let i = 0; i < textElements.length; i++) {
    setTimeout(() => {
      console.log("Ran typewriter");
      runTypewriter(textElements[i]);
    }, textElements[i].textContent.length * i * globalSpeed);
  }
}

//Get text of element and play the effect
function runTypewriter(element) {
  text = element.textContent;
  runTypewriterEffect(element, text);
  element.style.visibility = "initial";
}

//Take 1 letter at a time and display it
function runTypewriterEffect(element, elementText) {
  element.textContent = elementText.substring(0, 0);
  for (let i = 0; i <= elementText.length; i++) {
    setTimeout(() => {
      element.textContent = elementText.substring(0, i);

      playSound();
      if (elementText.charAt(i) == "\n" || i == elementText.length) {
        soundLineBreak.currentTime = 0;
        soundLineBreak.play();
      }
    }, i * globalSpeed * randomNumber(0.8, 1));
  }
}

//Play random keystroke
function playSound() {
  switch (Math.floor(Math.random() * 3)) {
    case 0:
      soundKeystroke1.currentTime = 0;
      soundKeystroke1.play();
      break;
    case 1:
      soundKeystroke2.currentTime = 0;
      soundKeystroke2.play();
      break;
    case 2:
      soundKeystroke3.currentTime = 0;
      soundKeystroke3.play();
      break;
    case 3:
      soundKeystroke4.currentTime = 0;
      soundKeystroke4.play();
      break;
  }
}

//Random modifier for keystrokes
//Use between 0.8 and 1
function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}
