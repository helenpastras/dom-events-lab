
// UserStories/psuedocode
// Select numbers from ".button number" to use in functions and operations; append the number to the current input and update the display.
// Add the 2 values from "button number"
// Subtracts value 2 from value 1 from "button number"
// multiply value1 with value 2 from "button number"
// Divide value 1 with value 2 from "button number"
// Display (print) result of operation 
// clear operation to start from begining (0?)
//
/*-------------------------------- Constants --------------------------------*/
const buttons = document.querySelectorAll('.button');
const calculator = document.querySelector('#calculator');
const display = document.querySelector('.display');


/*-------------------------------- Variables --------------------------------*/
let resultTotal;
let currentInput = '';
let previousInput = '';
let operation = null;

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/
buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    // This log is for testing purposes to verify we're getting the correct value
    console.log("this logs the button clicked" , event.target.innerText);
    // Future logic to capture the button's value would go here...
  });
});


calculator.addEventListener('click', (event) => {
  // This log is for testing purposes to verify we're getting the correct value
  // You have to click a button to see this log
  console.log(event.target.innerText);

  // Example
  if (event.target.classList.contains('number')) {
    // appendNumber(what are we appending?)
  }

  // Example
  if (event.target.innerText === '*') {
    // Do something with this operator
  }
});

/*-------------------------------- Functions --------------------------------*/

const init = () => {  
console.log('it loaded');
} 



function updateDisplay() {
    display.value = currentInput;
}

function appendNumber(number) {
    if (number = true)// Prevent multiple decimals
    currentInput += number;
    updateDisplay();
}

const render = () => {
    // resultTotal.textContent = `${result}`;
    updateDisplay();
    appendNumber();
    console.log("it rendered");
};
init();
render();
