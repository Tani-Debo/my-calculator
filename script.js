const display = document.getElementById("display");
// This grabs the calculator's screen so JS can show numbers on it

let currentInput = "";
// Keeps track of everything the user has typed so far

const numberButtons = document.querySelectorAll("[data-num]");
// Find all number buttons

/*const oneButton = document.querySelector("[data-num='1']");

oneButton.addEventListener("click", function () {
  console.log("You clicked 1!");
});*/

numberButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    currentInput = currentInput + button.getAttribute("data-num");
    // Add the clicked number to what we've typed so far
    display.value = currentInput;
    // Show it on the display
  });
});

const operatorButtons = document.querySelectorAll("[data-op]");
//find all operators button

operatorButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    currentInput = currentInput + button.getAttribute("data-op");
    // Add the clicked operators to what we've typed so far
    display.value = currentInput;
    // Show it on the display
  });
});

// Find the equals button
const equalsButton = document.getElementById("equals");

equalsButton.addEventListener("click", function () {
  // Calculate the result of whatever is in currentInput (e.g. "5+3")
  currentInput = eval(currentInput).toString();

  // Show the result on the display
  display.value = currentInput;
});

// Find the clear button
const clearButton = document.getElementById("clear");

clearButton.addEventListener("click", function () {
  // Reset currentInput back to empty
  currentInput = "";

  // Clear the display too
  display.value = "";
});

// Find the delete button
const deleteButton = document.getElementById("delete");

deleteButton.addEventListener("click", function () {
  // Remove the last character from currentInput
  currentInput = currentInput.slice(0, -1);

  // Update the display
  display.value = currentInput;
});
