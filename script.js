const output = document.querySelector('.output');
const cursor = document.querySelector('.cursor');
const buttonsNumbers = [...document.querySelectorAll('.btn-number')];
const buttonsOperations = [...document.querySelectorAll('.btn-operation')];
const buttonErase = document.querySelector('.btn-erase');
const buttonBrackets = document.querySelector('.btn-brackets');
const buttonFloat = document.querySelector('.btn-float');
const buttonBack = document.querySelector('.btn-back');
const buttonEquals = document.querySelector('.btn-equals');

let outputSymbols = [];
let numbersArray = [];
let numberResult = '';
let symbol = '';
let operator = '';

buttonsNumbers.forEach(button => {
    button.addEventListener('click', event => {
        if (operator === '=') {
            updateOutput('AC');
            operator = '';
        }
        symbol = event.target.textContent;
        updateOutput(symbol);
        displayOutput(outputSymbols);
    });
});

buttonsOperations.forEach(button => {
    button.addEventListener('click', event => {
        symbol = event.target.textContent;
        if (operator !== '') {
            numbersArray = outputSymbols.join('').split(operator);
            numberResult = operate(numbersArray[0], operator, numbersArray[1]);
            numbersArray[0] = numberResult;

            operator = symbol;
            if (operator === '=') {
                symbol = String(numberResult).split('');
            }
            else {
                symbol = (String(numberResult) + operator).split('');
                console.log(typeof(symbol));
            }
            updateOutput('AC');
        }
        else {
            operator = symbol;
        }
        updateOutput(symbol);
        displayOutput(outputSymbols);
        console.log(numbersArray);
        console.log(operator);
    });
});

buttonFloat.addEventListener('click', event => {
    if (outputSymbols[outputSymbols.length - 1] !== '.') {
        symbol = event.target.textContent;
        updateOutput(symbol);
        displayOutput(outputSymbols);
    }
});

buttonErase.addEventListener('click', () => {
    numbersArray = [];
    numberResult = '';
    symbol = '';
    operator = '';
    updateOutput('AC');
    displayOutput(outputSymbols);
});

buttonBack.addEventListener('click', () => {
    updateOutput('B');
    displayOutput(outputSymbols);
});

// buttonBrackets.addEventListener('click', event => {
//     updateOutput(symbol);
//     displayOutput(outputSymbols);
// });

function updateOutput(symbol) {
    if (typeof(symbol) === 'object') {
        outputSymbols = symbol;
    }
    else {
        if (symbol === 'AC') {
            outputSymbols = [];
        }
        else if (symbol !== 'B') {
            outputSymbols.push(symbol);
        }
        else {
            outputSymbols.pop(symbol);
        }
    }
}

function displayOutput() {
    output.textContent = outputSymbols.join('');
    if (outputSymbols.length === 0) {
        output.appendChild(cursor);
    }
}

function name(params) {
    
}

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