
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

let num1 = '';
let num2 = '';
let operator = null;

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
        if (operator === null){
          num1 = buttonText;
        display.textContent = num1
        }else {
        num2 += buttonText; 
        display.textContent = num2;
        }
    }  else if (event.target.classList.contains('operator')){
          if (num1 !== '') {
            operator = buttonText;
          display.textContent = operator;
    }}
     else if (event.target.classList.contains('clear')){
          num1 = '';
          num2 = '';
          operator = null;
          display.textContent = ''; 
    } else if (event.target.classList.contains('equals')){
        if (num1 !== '' &&  operator !== null && num2 !== ''){
          let result;
          const v1 =parseFloat(num1);
          const v2 = parseFloat(num2);

          switch (operator) {
              case '+':
                result = v1 + v2;
              break;
              case '-':
                result = v1 - v2;
              break;
              case '*':
                result = v1 * v2;
              break;
              case '/':
                result = v1 / v2;
              break;
          }
          display.textContent = result.toString();
          num1 = result.toString();
          num2 = '';
        }
        }
    })
  });

/*-------------------------------- Functions --------------------------------*/

// const init = () => {  
// console.log('it loaded');
// } 

// // // function calculate  = () =>{

// // // }


// // function updateDisplay() {
// //     display.value = num1;
// // }

// function appendNumber(number) {
//     if (number = true)
//     num1 += number;
//     updateDisplay();
// }

// const render = () => {
//     // resultTotal.textContent = `${result}`;
//     appendNumber();
//     console.log("it rendered");
// };
// init();
// render();
