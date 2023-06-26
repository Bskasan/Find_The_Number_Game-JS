/*
    For output text 'Enter the number' --> id : output-text
    For user input - class : user-input
    For User Button - id : enter-btn
*/

const enterBtn = document.getElementById("enter-btn");
const output = document.getElementById("output-text");

// The Math.floor() static method always rounds down and returns the largest integer less than or equal to a given number.

// Give us number between 1 - 100.
const number = [Math.floor(Math.random() * 100)];
console.log(number);

enterBtn.addEventListener("click", () => {
  // getElementsByClassName() returns an array so you have to access first element. Then try to access the value.
  let userInput = document.getElementsByClassName("user-input")[0].value;

  if (userInput == number) {
    output.innerHTML = `You guessed right!!!, Congrat -- Your number was ${number}`;
  } else if (userInput < number) {
    output.innerHTML = `You guessed too low!!!`;
  } else if (userInput > number) {
    output.innerHTML = `You guessed too high!!!`;
  }
});
