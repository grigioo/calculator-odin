let numbers = {
    numberOne: 0,
    numberTwo: 0,
    numberResult: 0,
}

const containerButtons = document.querySelector('.container-buttons');

createButtons();

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

function operate(numberOne, operator, numberTwo) {
    switch (operator) {
        case '+':
            return add(numberOne, numberTwo);
        case '-':
            return subtract(numberOne, numberTwo);
        case '*':
            return multiply(numberOne, numberTwo);
        case '/':
            return divide(numberOne, numberTwo);
    }
}

function storeFirstNumber(number) {
    numbers.numberOne = Number(number);
}

function storeSecondNumber(number) {
    numbers.numberTwo = Number(number);
}

function storeResultNumber(number) {
    numbers.numberResult = Number(number);
}

function userInput() {
    let input = prompt('Operation: ');
    let inputArr = input.split(' ');
    let operator = inputArr[1];
    storeFirstNumber(inputArr[0]);
    storeSecondNumber(inputArr[2]);
    storeResultNumber(operate(numbers.numberOne, operator, numbers.numberTwo));
    display(`Operation is: ${numbers.numberOne} ${operator} ${numbers.numberTwo} = ${numbers.numberResult}`);
}

function display(output) {
    console.log(output);
}

function createButtons() {
    let operations = ['%', '÷', '×', '-', '+', '=', '<', ','];
    let optionFunctions = ['AC', '()'];

    for (let i = 0; i < 10; i++) {
        const buttonNumber = document.createElement('button');
        buttonNumber.textContent = i;
        containerButtons.appendChild(buttonNumber);    
    }

    for (const element of operations) {
        const buttonOperator = document.createElement('button');
        buttonOperator.textContent = element;
        containerButtons.appendChild(buttonOperator);    
    }

    for (const element of optionFunctions) {
        const buttonOptional = document.createElement('button');
        buttonOptional.textContent = element;
        containerButtons.appendChild(buttonOptional);
    }
}