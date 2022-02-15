//Revealing Module Pattern

let factor = 2
function multiply(num) {
    return num * factor
}

function setFactor(newFactor) {
    factor = newFactor
}

module.exports = {multiply, setFactor}
