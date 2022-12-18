const displayElement = document.querySelector('.displayNumber');
const numberButtons = document.querySelectorAll('.numbers');
const operatorButtons = document.querySelectorAll('.operator');
const clearButton = document.querySelector("#clear");

let displayValue = "";
let firstOperand = "";
let storedOperation = "";
let secondOperand = "";
let result = 0;


clearButton.addEventListener('click', clearAllContent);

operatorButtons.forEach((operator) => {
    operator.addEventListener('click', storingValueAndOperation);
})

numberButtons.forEach((button) => {
    button.addEventListener('click', displayValueToScreen);
})

// equalButton.addEventListener('click', EqualButtonClicked);

function displayValueToScreen(event) {
    displayValue += event.currentTarget.textContent;
    displayElement.textContent = displayValue;
}

function clearAllContent(event){
    console.log("You're pressing me!");
    displayValue = "";
    firstOperand = "";
    secondOperand = "";
    result = 0;
    storedOperation = "";
    displayElement.textContent = ""
    currentOperation = "";
}

function storingValueAndOperation(event) {
    const currentOperation = event.currentTarget.textContent;
    if (storedOperation === "" && currentOperation != "=") {
        firstOperand = displayValue;
        storedOperation = currentOperation;
        firstOperand = displayValue;
        displayValue = "";
        console.log(firstOperand);
        console.log(storedOperation);
    } else if (currentOperation === "=" && firstOperand != "" && storedOperation != "") {
        console.log('Calculate Now!');
        secondOperand = displayValue;
        result = operate(+firstOperand, storedOperation, +secondOperand);
        displayElement.textContent = result.toFixed(2);
    } else if (currentOperation != "=") {
        console.log("WE ARE HERE!");
        secondOperand = displayValue;
        result = operate(+firstOperand, storedOperation, +secondOperand);
        firstOperand = result.toFixed(2);
        displayElement.textContent = firstOperand;
        storedOperation = currentOperation;
        displayValue = "";
    }
}


function addNumbers(Num1, Num2) {
    let result = Num1 + Num2;
    return result;
}

function subtractNumbers(Num1, Num2) {
    let result = Num1 - Num2;
    return result;
}

function multiplyNumbers(Num1, Num2) {
    let result = Num1 * Num2;
    return result;
}

function divideNumbers(Num1, Num2) {
    let result = Num1 / Num2;
    return result;
}


function operate(Num1, operator, Num2) {
    switch (operator) {
        case '+':
            return addNumbers(Num1, Num2);
            break;
        case '-':
            return subtractNumbers(Num1, Num2);
            break;
        case '*':
            return multiplyNumbers(Num1, Num2);
            break;
        case '/':
            return divideNumbers(Num1, Num2);
            break;
        default:
            alert("No Valid Input");
    }
}