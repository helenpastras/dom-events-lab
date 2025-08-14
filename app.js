
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

/*-------------------------------- Variables --------------------------------*/
let resultTotal;
let num1 = '';
let num2 = '';
let operation = null;

/*------------------------ Cached Element References ------------------------*/
const buttons = document.querySelectorAll('.button');
const calculator = document.querySelector('#calculator');
const display = document.querySelector('.display');

/*----------------------------- Event Listeners -----------------------------*/
buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
   const buttonText = button.textContent;
   console.dir(buttonText);

      if (event.target.classList.contains('number')) {
        num1 = buttonText;
        display.textContent = num1
    } else if (event.target.classList.contains('operator')){
          if (num1 !== '') {
            operator = buttonText;
          display.textContent = operator;
          }
    } else if (event.target.classList.contains('clear')){
          num1 = '';
          operator = null;
          display.textContent = ''; 
    }console.dir(buttonText)
  })
});


//   if (event.target.innerText === '*') {
//     // Do something with this operator
//     console.log("this logs the button clicked" , event.target.innerText);
//     // Future logic to capture the button's value would go here...
//   });
// });


// calculator.addEventListener('click', (event) => {
//   // This log is for testing purposes to verify we're getting the correct value
//   // You have to click a button to see this log
//   console.log(event.target.innerText);

  // Example

// });

/*-------------------------------- Functions --------------------------------*/

const init = () => {  
console.log('it loaded');
} 

// const calculate = () =>{

// }


function updateDisplay() {
    display.value = num1;
}

function appendNumber(number) {
    if (number = true)
    num1 += number;
    updateDisplay();
}

const render = () => {
    // resultTotal.textContent = `${result}`;
    appendNumber();
    console.log("it rendered");
};
init();
render();
