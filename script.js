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
    if (operator == "+") return add(num1,num2);
    else if (operator == "-") return subtract(num1,num2);
    else if (operator == "*") return multiply(num1,num2);
    else if (operator == "/") return divide(num1,num2);
}

displayEquation = document.querySelector(".display-equation")

numberButtons = document.querySelectorAll(".number-button")
for (let numberButton of numberButtons) {
    numberButton.addEventListener("click", () => {
        console.log(displayEquation.textContent.length);
        if (displayEquation.textContent == 0) displayEquation.textContent = numberButton.textContent;
        else displayEquation.textContent += numberButton.textContent;
    })
}

operatorButtons = document.querySelectorAll(".operator-button");
for (let operatorButton of operatorButtons) {
    operatorButton.addEventListener("click", () => {
        displayEquation.textContent += " " + operatorButton.textContent + " ";
    })
}

equalButton = document.querySelector(".equal-button");
equalButton.addEventListener("click", () => {
    let items = displayEquation.textContent.split(" ");
    let number1 = parseInt(items[0]);
    let operator = items[1];
    let number2 = parseInt(items[2]);
    displayEquation.textContent = operate(operator,number1,number2);
})

clearButton = document.querySelector(".clear-button");
clearButton.addEventListener("click", () => {
    displayEquation.textContent = 0;
})