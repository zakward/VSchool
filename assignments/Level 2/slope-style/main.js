//#1

function collectAnimals( ... animals /*your code here*/){
    /*and here*/ return animals
}

console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"))

//#2
// Write a function that returns a food object with the array names as properties. You'll use an ES6 shorthand syntax that becomes useful when a variable name is mentioned twice in both the name and value of properties in your object:
let combineFruit = (fruit, sweets, vegetables) => {
    return {
        fruit,
        sweets,
        vegetables,
     }
} 
console.log(combineFruit(["apple", "pear"], ["cake", "pie"], ["carrot"]))

//#3
// Use destructuring to use the property names as variables. Desructure the object in the parameter:

function parseSentence(location, duration){
    return `We're going to have a good time in ${location} for ${duration}`
  }
  
  parseSentence({
    location: "Burly Idaho",
    duration: "2 weeks"
  });

  console.log(parseSentence("Burly Idaho", "2 weeks"))

  //#4
//   Use destructuring to make this code ES6:


// function returnFirst(items){
//     const firstItem = items[0]; /*change this line to be es6*/
//     return firstItem
// }


const returnFirst = (items) => {
    const [firstItem, secondItem, thirdItem] =  items;
    return firstItem
}

console.log(returnFirst(["John", "Jacob", "Jingle"]))

//#5
// Write destructuring code to assign variables that will help us return the expected string. Also, change the string to be using Template literals:
const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

function returnFavorites(arr){
    /*your code here*/ const [firstFav, secondFav, thirdFav] = arr
    return `My top three favorite activities are  ${firstFav},  ${secondFav} , and   ${thirdFav}` 
}

console.log(returnFavorites(favoriteActivities))

//#6
// Use the Rest and Spread Operator to help take any number of arrays, and return one array. You will need to change how the arrays are passed in. You may write it assuming you will always recieve three arrays if you would like to.

function combineAnimals(array1, array2, array3) {
return array1.concat(...array2, ...array3)
}

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals))

//#7
// Try to make the following function more ES6xy:
//NOT COMPLETE NOT SURE

function product(...numbers) {
  return numbers.reduce((acc, number)=> acc * number ,1)
}  

const product = (...numbers) => {
  return numbers.reduce(function(acc, number) {
    return acc * number;
  }, 1)
}

//#8
// Make the following function more ES6xy. Use at least both the rest and spread operators:
function unshift(array, ...secondArr) {
  return secondArr.concat(array);
}

const unshift = (...array, ...second) => [...second, ...array]

