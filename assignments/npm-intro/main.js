var readlineSync = require('readline-sync');
var name = readlineSync.question("What is your name? ")
console.log(name)
const readline = require("readline-sync")

const userName = readline.question("May I have your name? ");
console.log("Hi "+ userName + "!");