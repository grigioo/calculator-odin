const output = document.querySelector('.output');
const buttonsNumbers = [...document.querySelectorAll('.btn-number')];
const buttonOperations = [...document.querySelectorAll('.btn-operation')];
const buttonErase = document.querySelector('.btn-erase');
const buttonBrackets = document.querySelector('.btn-brackets');
const buttonFloat = document.querySelector('.btn-float');
const buttonBack = document.querySelector('btn-back');
const buttonEquals = document.querySelector('btn-equals');
const symbols = ['AC','()','%','÷','7','8','9','×','4','5','6','-','1','2','3','+','0','.','<','='];

const numbers = {
    numberOne: 0,
    numberTwo: 0,
    numberResult: 0,
    operator: '',
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

function isNumber(item) {
    if (item == 0) {
        return true;
    }
    return Boolean(Number(item));
}