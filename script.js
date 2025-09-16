const output = document.querySelector('.output');
const cursor = document.querySelector('.cursor');
const buttonsNumbers = [...document.querySelectorAll('.btn-number')];
const buttonsOperations = [...document.querySelectorAll('.btn-operation')];
const buttonErase = document.querySelector('.btn-erase');
const buttonBrackets = document.querySelector('.btn-brackets');
const buttonFloat = document.querySelector('.btn-float');
const buttonBack = document.querySelector('.btn-back');
const buttonEquals = document.querySelector('.btn-equals');

let operationInformation = {
    operator: '',
    numberResult: '',
    symbol: '',
    outputSymbols: [],
    numbersArray: [],
}

// Handle every number click to write data about pressed one in 'symbol'
buttonsNumbers.forEach(button => {
    button.addEventListener('click', event => {
        // Check is operator - '=' to change writing for this situation
        if (operationInformation.operator === '=') {
            updateOutput('AC');
            operationInformation.operator = '';
        }
        // Updating output
        operationInformation.symbol = event.target.textContent;
        updateOutput(operationInformation.symbol);
        displayOutput(operationInformation.outputSymbols);
    });
});

// Handle every operation click
buttonsOperations.forEach(button => {
    button.addEventListener('click', event => {
        // Situation without any numbers in output
        if (operationInformation.outputSymbols.length === 0)
            updateOutput(0);
        operationInformation.symbol = event.target.textContent;
        if (operationInformation.operator !== '') {
            // Store numbers from output to operate
            operationInformation.numbersArray = operationInformation.outputSymbols.join('').split(operationInformation.operator);
            operationInformation.numberResult = operate(operationInformation.numbersArray[0], operationInformation.operator, operationInformation.numbersArray[1]);

            operationInformation.operator = operationInformation.symbol;
            
            // Display result with fixed length and storing it as array for checking in 'updateOutput'
            if (operationInformation.operator === '=') {
                operationInformation.symbol = String(checkLength(operationInformation.numberResult)).split('');
            }
            else {
                operationInformation.symbol = String(checkLength(operationInformation.numberResult) + operationInformation.operator).split('');
            }
            
            updateOutput('AC');
        }
        else {
            // Defining operator for the first iteration
            operationInformation.operator = operationInformation.symbol;
        }
        updateOutput(operationInformation.symbol);
        displayOutput(operationInformation.outputSymbols);
    });
});

// Handler for dot operation. Checks if dot alone in array
buttonFloat.addEventListener('click', event => {
    if (operationInformation.outputSymbols[operationInformation.outputSymbols.length - 1] !== '.') {
        operationInformation.symbol = event.target.textContent;
        updateOutput(operationInformation.symbol);
        displayOutput(operationInformation.outputSymbols);
    }
});

// Handler for erasing. Reset all variables and output information
buttonErase.addEventListener('click', () => {
    operationInformation.numbersArray = [];
    operationInformation.numberResult = '';
    operationInformation.symbol = '';
    operationInformation.operator = '';
    updateOutput('AC');
    displayOutput(operationInformation.outputSymbols);
});

// Handler for erasing last symbol
buttonBack.addEventListener('click', () => {
    updateOutput('B');
    displayOutput(operationInformation.outputSymbols);
});

// Check symbol value to option for every key
function updateOutput(symbol) {
    if (typeof(symbol) === 'object') {
        operationInformation.outputSymbols = symbol;
    }
    else {
        if (symbol === 'AC') {
            operationInformation.outputSymbols = [];
        }
        else if (symbol !== 'B') {
            operationInformation.outputSymbols.push(symbol);
        }
        else {
            operationInformation.outputSymbols.pop(symbol);
        }
    }
}

// Add new information in output with cursor
function displayOutput() {
    output.textContent = operationInformation.outputSymbols.join('');
    if (operationInformation.outputSymbols.length === 0) {
        output.appendChild(cursor);
    }
}

// Formate result for correct output with big numbers
function checkLength(number) {
    let length = String(number).split('').length;
    if (length > 10) {
        return (number / Math.pow(10, length)).toFixed(2) + 'E' + length;
    }
    return number;
}

// Math functions
function add(numberOne, numberTwo) {
    return numberOne + numberTwo;
}

function divide(numberOne, numberTwo) {
    return numberOne / numberTwo;
}

function multiply(numberOne, numberTwo) {
    return numberOne * numberTwo;
}

function subtract(numberOne, numberTwo) {
    return numberOne - numberTwo;
}

function remained(numberOne, numberTwo) {
    return numberOne % numberTwo;
}

// Function to call math functions
function operate(numberOne, operator, numberTwo) {
    numberOne = Number(numberOne);
    numberTwo = Number(numberTwo);

    switch (operator) {
        case '+':
            return add(numberOne, numberTwo);
        case '-':
            return subtract(numberOne, numberTwo);
        case '×':
            return multiply(numberOne, numberTwo);
        case '÷':
            return divide(numberOne, numberTwo);
        case '%':
            return remained(numberOne, numberTwo);
        case '=':
            return numberOne;
    }
}