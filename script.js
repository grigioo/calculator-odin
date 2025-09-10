const containerButtons = document.querySelector('.container-buttons');
const output = document.querySelector('.output');

const numbers = {
    numberOne: 0,
    numberTwo: 0,
}

function add(numberOne, numberTwo) {
    return numberOne + numberTwo;
}

function divide(numberOne, numberTwo) {
    console.log(numberOne);
    console.log(numberTwo);
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
        case '×':
            return multiply(numberOne, numberTwo);
        case '÷':
            return divide(numberOne, numberTwo);
        case '=':
            return numberOne;
    }
}

let buttons = document.querySelectorAll('button');
let numbersArray = [];
let operationsArray = [];
let number = '';
let operator = '';
let outputText = '';
let resultOperation = 0;

buttons = [...buttons];

buttons.forEach(button => {
    button.addEventListener('click', event => {
        if(Number(event.target.textContent))
            number += event.target.textContent;
        else if(!Number(event.target.textContent)) {
            numbersArray.push(Number(number));
            operator = event.target.textContent;
            operationsArray.push(operator);
            number = '';           
        }
        if(numbersArray.length === 2) {
            numbersArray[0] = operate(numbersArray[0], operationsArray[0], numbersArray[1]);
            operationsArray.shift();
            resultOperation = numbersArray[0];
            outputText = resultOperation;
            numbersArray.pop();
        }
        if(event.target.textContent !== '=')
            outputText += event.target.textContent;
        output.textContent = outputText;
    });
});