let display = document.getElementById("display");
let currentInput = "";
let operatorSet = false;

// Function to clear the display
function clearDisplay() {
    currentInput = "";
    display.innerText = "0";
    operatorSet = false;
}

// Function to delete the last character
function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    display.innerText = currentInput || "0";
}

// Function to append a number
function appendNumber(number) {
    if (operatorSet && /[\+\-\*\/]$/.test(currentInput)) {
        currentInput += " ";
    }
    currentInput += number;
    display.innerText = currentInput;
    operatorSet = false;
}

// Function to append an operator
function appendOperator(operator) {
    if (!operatorSet && currentInput) {
        currentInput += ` ${operator} `;
        display.innerText = currentInput;
        operatorSet = true;
    }
}

// Function to calculate the result
function calculate() {
    try {
        let result = eval(currentInput.replace("×", "*").replace("÷", "/"));
        display.innerText = result;
        currentInput = result;
        operatorSet = false;
    } catch (error) {
        display.innerText = "Error";
        currentInput = "";
    }
}
