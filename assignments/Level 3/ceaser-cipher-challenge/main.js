var readline = require(`readline-sync`);
var input = readline.question(`What phrase would you like to encrypt? `).toLowerCase();
var shift = parseInt(readline.question(`How many letters would you like to shift? `));


function ceasarCipher(string, shift) {
    let resultArray = []
    for ( i=0; i < string.length; i++) {
        let code = string.charCodeAt(i) + shift
        while (code < 122) {
            code = (code - 122) + 96
        }
        resultArray.push(string.fromCharCode(code))
    }
        return resultArray.join("")
}

console.log(ceasarCipher())
// const words= input.split(" ")


// const letters = words.map(word => {
//      const splitWord = word.split("")
//     splitWord.map(letter => {
//         return letter + shift
//     })
    
//     console.log(splitWord)
// } 
// )

