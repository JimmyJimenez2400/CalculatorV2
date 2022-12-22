const displayElement = document.querySelector('.displayNumber');
const numberButtons = document.querySelectorAll('.numbers');
const operatorButtons = document.querySelectorAll('.operator');
const clearButton = document.querySelector("#clear");
const decimalButton = document.querySelector("#decimal");
const backSpaceButton = document.querySelector("#backspace");



let displayValue = "";
let firstOperand = "";
let storedOperation = "";
let secondOperand = "";
let result = 0;

backSpaceButton.addEventListener('click', deleteOneCharacter);

decimalButton.addEventListener('click', addDecimal);


clearButton.addEventListener('click', clearAllContent);

operatorButtons.forEach((operator) => {
    operator.addEventListener('click', storingValueAndOperation);
})

numberButtons.forEach((button) => {
    button.addEventListener('click', displayValueToScreen);
})

// equalButton.addEventListener('click', EqualButtonClicked);

document.addEventListener('keydown', function (e) {

    if (e.key === '1' || e.key === '2' || e.key === '3' || e.key === '4' || e.key === '5' || e.key === '6' || e.key === '7' || e.key === '8' || e.key === '9' || e.key === '0') {
        displayValueToScreen(e)
    }else if(e.key === '*' || e.key === '-' || e.key === '/' || e.key === "+" || e.key === "="){
        storingValueAndOperation(e);
    }else if(e.key === 'Backspace'){
        deleteOneCharacter(e);
    }else if(e.key === "c"){
        clearAllContent(e);
    }else if(e.key === '.'){
        addDecimal(e);
        return;
    }
})

// function displayValueToScreen(event) {
//     displayValue += event.key;
//     displayElement.textContent = displayValue;
// }

function displayValueToScreen(event){
    let number;
    if(event.key){
        number = event.key;
        displayValue += number;
        displayElement.textContent = displayValue;
        
    }else if(event.currentTarget){
        number = event.currentTarget.textContent;
        displayValue += number;
        displayElement.textContent = displayValue;
    }
}

function addDecimal(event) {
    result = displayElement.textContent;
    let decimal = event.currentTarget.textContent;

    if (result.indexOf(decimal) === -1) {
        displayValueToScreen(event);
        return;
    } else {
        return;
    }

}

function deleteOneCharacter(event) {
    result = displayElement.textContent;
    console.log(typeof result);
    let deleteOneCharacter = event.currentTarget;
    console.log(typeof displayElement.textContent);

    if (deleteOneCharacter) {
        console.log("YOU PRESSED ME!");
        result = result.slice(0, result.length - 1);
        displayElement.textContent = result;
        displayValue = result;

    } else {
        return;
    }
}

/* 

When user clicks upon backspace, it should delete one character from string, if we're
targeting the displayELement.textContent

*/

function clearAllContent() {
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
    const currentOperation = event.key || event.currentTarget.textContent;
    if(storedOperation === "" && currentOperation != "=") {
        firstOperand = displayValue;
        storedOperation = currentOperation;
        firstOperand = displayValue;
        displayValue = "";
        console.log(firstOperand);
        console.log(storedOperation);
    } else if (currentOperation === "=" && firstOperand != "" && storedOperation != "") {
        console.log('Calculate Now!');
        secondOperand = displayValue;
        if (secondOperand === "0" && storedOperation === "/") {
            alert("You Cannot divide by 0");
            clearAllContent();
            return;
        }
        result = parseFloat(operate(+firstOperand, storedOperation, +secondOperand).toFixed(2));
        displayValue = result;
        displayElement.textContent = displayValue;
        firstOperand = "";
        secondOperand = "";
        storedOperation = "";

    } else if (currentOperation != "=") {
        console.log("WE ARE HERE!");
        secondOperand = displayValue;
        result = parseFloat(operate(+firstOperand, storedOperation, +secondOperand).toFixed(2));
        firstOperand = result;
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