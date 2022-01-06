//#1

const name = "John"
const age = 101

function runForLoop(pets) {
    let petObjects = []
    for (var i = 0; i < pets.length; i++) {
        let pet = { type: pets[i] }
        let name;
        if (pets[i] === "cat") {
            name = "fluffy"
        } else {
            name = "spot"
        }
        console.log("pet name: ", name)
        pet.name = name
        petObjects.push(pet)
    }
    console.log("man name: ", name)
    return petObjects
}

runForLoop(["cat", "dog"])

//#2

const carrots = ["bright orange", "ripe", "rotten"]

// original syntax
// function mapVegetables(arr) {
//     return arr.map(function(carrot) {
//         return { type: "carrot", name: carrot }
//     })
// }

// console.log(mapVegetables(carrots))

//arrow function
 let mapVegetables = arr => arr.map(carrot =>  ({type: "carrot", name: carrot}))
     
 

 console.log(mapVegetables(carrots))
 
 //#3 
//  Re-write this .filter() using an arrow function:
 const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]
// original syntax
// function filterForFriendly(arr) {
//     return arr.filter(function(person) {
//         return person.friendly
//     })
// }
// console.log(filterForFriendly(people))

//arrow function
const filterForFriendly = arr => arr.filter(person => person.friendly)
        


console.log(filterForFriendly(people))

//#4
// Re-write the following functions to be arrow functions:
// function doMathSum(a, b) {
//     return a + b
// }

// var produceProduct = function(a, b) {
//     return a * b
// }

// console.log(doMathSum(1, 2))
// console.log(produceProduct(2, 3))

//arrow function
let doMathSum = (a, b) => a + b
let produceProduct = (a, b) => a * b
console.log(doMathSum(1, 2))
console.log(produceProduct(2, 3))

//#5
// Write a printString function that takes firstName, lastName, and age as parameters and returns a string like the following:
// Hi Kat Stark, how does it feel to be 40?

const person = 

{
    firstName: "Jane",
    lastName : "Doe",
    age: 100
}


let printString = ({firstName, lastName, age}) => {
    // return "Hi " + firstName+ " " + lastName + ", how does it feel to be "+ age
    return `Hi ${firstName} ${lastName}, how does it feel to be ${age}`
}

console.log(printString(person))

//#6
// Use the shorthand syntax to make the following filter take up one line. Copy and paste the array to test it.

const animals = [
    {
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    }
 ];

//  function filterForDogs(arr) {
//     return arr.filter(animal => {
//         if (animal.type === "dog") {
//             return true
//         } else {
//             return false
//         }
//     })
// }
//ES6 and arrow function
let filterForDogs = arr => arr.filter(animal => animal.type === "dog")

console.log(filterForDogs(animals))

//#7
const newClient = 
{
    name: "Janice",
    location: "Hawaii"
}

const welcomeLetter = ({name, location}) => {
    return  `Hi ${name}!
    
Welcome to ${location}.

I hope you enjoy your stay.  Please ask the president of ${location} if you need anything.`
}

console.log(welcomeLetter(newClient))