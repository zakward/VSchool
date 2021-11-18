const readline = require("readline-sync");

const name = readline.question("Hey! What's your name? ");
    console.log("Hi " + name + "! Let's do some math!!!!");

const firstNumber = readline.questionFloat("Enter your first number: ");

const secondNumber = readline.questionFloat("Please enter your second number: ");

let operations = ['add', 'subtract', 'divide', 'multiply']

let choice = readline.keyInSelect(operations, "Please enter the operation to perform?");

if (operations[choice] == 'add') {
    console.log('The result is ' + add(firstNumber, secondNumber));

}       else if (operations[choice] == 'subtract') {
                    console.log('The result is ' + subtract(firstNumber,secondNumber));

}                    else if (operations[choice] == 'divide') {
                                console.log('The result is ' + divide(firstNumber, secondNumber));

}                                           else if (operations[choice] == 'multiply') {
                                                        console.log('The result is ' + multiply(firstNumber, secondNumber));
}


function add (num1, num2) {
    return (num1 + num2);
}

function subtract (num1, num2) {
    return (num1 - num2);
}

function divide (num1, num2) {
    return (num1 / num2);
}

function multiply (num1, num2) {
    return (num1 * num2);
}

