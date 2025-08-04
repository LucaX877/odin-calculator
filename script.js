function add(num1,num2) {
    let answer = num1 + num2;
    if (isNaN(answer)) return "ERROR";
    else return answer;
}

function subtract(num1,num2) {
    let answer = num1 - num2;
    if (isNaN(answer)) return "ERROR";
    else return answer;
}

function multiply(num1,num2) {
    let answer = num1 * num2;
    if (isNaN(answer)) return "ERROR";
    else return answer;
}

function divide(num1,num2) {
    let answer = num1 / num2;
    if (isNaN(answer) || num2 == 0) return "ERROR";
    else return answer;
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
        if (displayEquation.textContent == "ERROR" || displayEquation.textContent == "") displayEquation.textContent = 0;
        if (displayEquation.textContent == "0" || isAnswer) displayEquation.textContent = numberButton.textContent;
        else displayEquation.textContent += numberButton.textContent;
        isAnswer = false;
        }
    )
}

operatorButtons = document.querySelectorAll(".operator-button");
for (let operatorButton of operatorButtons) {
    operatorButton.addEventListener("click", () => {
        if (displayEquation.textContent == "ERROR" || displayEquation.textContent == "") displayEquation.textContent = 0;
        if (displayEquation.textContent.at(-1) == " ");
        else displayEquation.textContent += " " + operatorButton.textContent + " ";
        let items = displayEquation.textContent.split(" ");
        if (items.length == 5) {
            let number1 = parseFloat(items[0]);
            let operator = items[1];
            let number2 = parseFloat(items[2]);
            let otherOperator = items[3];
            displayEquation.textContent = operate(operator,number1,number2) + " " + otherOperator + " ";
            }
        isAnswer = false;
        }
    )
}

equalButton = document.querySelector(".equal-button");
equalButton.addEventListener("click", () => {
    let items = displayEquation.textContent.split(" ");
    let number1 = parseFloat(items[0]);
    let operator = items[1];
    let number2 = parseFloat(items[2]);
    displayEquation.textContent = operate(operator,number1,number2);
    isAnswer = true;
    }
)

clearButton = document.querySelector(".clear-button");
clearButton.addEventListener("click", () => {
    displayEquation.textContent = 0;
    isAnswer = false;
    }
)

deleteButton = document.querySelector(".delete-button");
deleteButton.addEventListener("click", () => {
        let oldEquation = displayEquation.textContent;
        if (oldEquation == "0");
        else if (oldEquation.includes("ERROR") || oldEquation.length == 1) displayEquation.textContent = "0";
        else if (oldEquation.at(-1) == " ") displayEquation.textContent = displayEquation.textContent.slice(0,-3);
        else displayEquation.textContent = displayEquation.textContent.slice(0,-1);
        isAnswer = false;
    }
)

decimalButton = document.querySelector(".decimal-button");
decimalButton.addEventListener("click", () => {
        let items = displayEquation.textContent.split(" ");
        if (items[items.length - 1] == "" || items[items.length - 1].includes("."));
        else {
            items[items.length - 1] = `${items[items.length -1]}.`
            let display = items.join(" ");
            displayEquation.textContent = display;
        }
        isAnswer = false;
    }
)

let isAnswer = false;