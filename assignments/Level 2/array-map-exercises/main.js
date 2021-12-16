//#1
const numArr = [2, 5, 100];
function doubleNumbers(arr) {
    return arr * 2
}
const numResult = numArr.map(doubleNumbers)
console.log(numResult)

//#2
function stringItUp(arr) {
    return arr.toString()
}
const stringResult = numArr.map(stringItUp)
console.log(stringResult)

//#3
const nameArr = ["john", "JACOB", "jinGleHeimer", "schmidt"]
function capitalizeNames(arr) {
    let lowName = arr.toLowerCase()
    return lowName.charAt(0).toUpperCase() + lowName.slice(1)
}
nameResult = nameArr.map(capitalizeNames)
console.log(nameResult)

// #4
const actors = [
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]
function namesOnly(arr) {
    if(arr.age >= 18) {
        return (arr.name + " can go to the Matrix")
    } else if (arr.age < 18) {
        return (arr.name + " is under age!!!")
    }
}
const actorsResult = actors.map(namesOnly)
console.log(actorsResult)

//#5
function readyToPutInTheDom(arr) {
    return "<h1>" + arr.name + "</h1>" +"<h2>" + arr.age + "</h2>"
}
const domResult = actors.map(readyToPutInTheDom)
console.log(domResult)