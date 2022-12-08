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


function operate(operator, Num1, Num2) {
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