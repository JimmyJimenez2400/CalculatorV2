const displayElement = document.querySelector('.displayNumber');
const numberButtons = document.querySelectorAll('.numbers');
const operatorButtons = document.querySelectorAll('.operator');

let displayValue = "";
let firstOperand = "";
let operation = "";
let secondOperand = "";




operatorButtons.forEach((operator) => {
    operator.addEventListener('click', storingValueAndOperation);
})

numberButtons.forEach((button) => {
    button.addEventListener('click', displayValueToScreen);
})

function displayValueToScreen(event) {
    displayValue += event.currentTarget.textContent;
    displayElement.textContent = displayValue;
}

function storingValueAndOperation(event) {

    if (operation === "") {
        firstOperand = displayValue;

        operation = event.currentTarget.textContent;
        firstOperand = displayValue;
        displayValue = "";
    } else {
        secondOperand = displayValue;
        operation = event.currentTarget.textContent;
        console.log(secondOperand);
    }    
}

/*

Problem: How can I chain more numbers to the calculator? 

Breakdown: We need to grab firstOperand, then operation, then secondOperand, then call Operation again but this time we want to actually call the function
to operate firstOperand and secondOperand to give us our result

Plan:
    Yes, there is an interface. Looks like a display of what a calculator has
    Functionality the interface would have is that it will use the operators to
    calculate the result

    Inputs program will have is button pressing

    Desired output is that to get result of first and second Operands
    depending on operator

    The steps is what I am trying to find out:
    1. When given input for operands and operation, we want to
       to save a second operator after that
    2.  which gets the result of the 
        (firstOperand (operator) secondOperand)
    3.  stores secondOperand in this case, since firstOperand will be
        result of previous operation(step 1)

Example: 
    "1 + 2" -> 3, 
    What happens if I want to do another operator and secondOperand?
    First, let's tackle by operating the two numbers we have, 1 + 2 turns into 3. Okay, how? Well we need to call function operate 
    Options:
        * we could repeat the process, by doing an else if then else. Where else, would keep grabbing the operator and secondOperand


Pseudocode:
1.Continuing
2.
3.
4.
5.
6.
7.
8.
9.





*/

function addNumbers(Num1, Num2) {
    let result = Num1 + Num2;
    return result;
}

addNumbers(1, 5);


function subtractNumbers(Num1, Num2) {
    let result = Num1 - Num2;
    return result;
}

subtractNumbers(8, 5);


function multiplyNumbers(Num1, Num2) {
    let result = Num1 * Num2;
    return result;
}

multiplyNumbers(4, 2);

function divideNumbers(Num1, Num2) {
    let result = Num1 / Num2;
    return result;
}

divideNumbers(10, 5);


function operate(Num1, operator, Num2) {

    switch (operator) {
        case '+':
            addNumbers(Num1, Num2);
            break;
        case '-':
            subtractNumbers(Num1, Num2);
            break;
        case '*':
            multiplyNumbers(Num1, Num2);
            break;
        case '/':
            divideNumbers(Num1, Num2);
            break;
        default:
            alert("No Valid Input");
    }
}







// function operate(operator, Num1, Num2){
//     while(operator!=`Esc`){
//         switch(operator){
//             case '+':
//                 addNumbers(Num1, Num2);
//                 break;
//             case '-':
//                 subtractNumbers(Num1, Num2);
//                 break;
//             case '*':
//                 multiplyNumbers(Num1, Num2);
//                 break;
//             case '/':
//                 divideNumbers(Num1, Num2);
//                 break;
//             default:
//                 alert("No Valid Input");
//         }
//     }
// }