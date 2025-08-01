function add(num1,num2) {
    console.log(num1 + num2);
    return num1 + num2;
}

function subtract(num1,num2) {
    console.log(num1 - num2);
    return num1 - num2;
}

function multiply(num1,num2) {
    console.log(num1 * num2);
    return num1 * num2;
}

function divide(num1,num2) {
    console.log(num1 / num2);
    return num1 / num2;
}

function operate(operator,num1,num2) {
    if (operator == "+") add(num1,num2);
    else if (operator == "-") subtract(num1,num2);
    else if (operator == "*") multiply(num1,num2);
    else if (operator == "/") divide(num1,num2);
}

let number1 = parseInt(prompt("Enter first number: "));
let number2 = parseInt(prompt("Enter second number: "));
let operator = prompt("Enter operator: ");
operate(operator,number1,number2);