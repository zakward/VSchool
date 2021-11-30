
// // PRELIMINARIES
// // #1
for(var i = 0;  i <= 9;  i++) {
    console.log(i)
}

// //#2
for(var i = 9; i > 0;  i--) {
    console.log(i)
}

// // #3
const fruit = ["banana", "orange", "apple", "kiwi"]
for( var i = 0;  i < fruit.length;  i+= 2) {
    console.log(fruit[i])
}

// // BRONZE
// //#1
var numbers =  [ ]
for(var i = 0; i <= 9; i++) {
    numbers.push(i)
}
console.log(numbers)

// //#2
for(var i = 0;  i <=100; i+= 2) {
    console.log(i)
}

// //#3
fruit.push("pear", "peach")
for(var i = 0;  i < fruit.length; i += 2) {
    console.log(fruit[i])
}

// //SILVER 
const peopleArray = [
  {
    name: "Harrison Ford",
    occupation: "Actor"
  },
  {
    name: "Justin Bieber",
    occupation: "Singer"
  },
  {
    name: "Vladimir Putin",
    occupation: "Politician"
  },
  {
    name: "Oprah",
    occupation: "Entertainer"
  }
]
// //#1
for(var i = 0;  i < peopleArray.length;  i++) {
    console.log(peopleArray[i].name)
}

// //#2
function addNames(peopleArray) {
    var names = [ ]

    for(var i = 0;  i  < peopleArray.length;  i++) {
        names.push(peopleArray[i].name)
}
    return names;
}
console.log(addNames(peopleArray))

function addOccupations(peopleArray) {
    var occupations = [ ]

    for(var i = 0;  i < peopleArray.length;  i++) {
    occupations.push(peopleArray[i].occupation)
    }
    return occupations;
}
console.log(addOccupations(peopleArray))


//#3
function newNames(peopleArray){
    var newNames = [ ]
    
    for(var i = 0;  i < peopleArray.length;  i += 2) {
        newNames.push(peopleArray[i].name)
    }
    return newNames;
}

function newOccupations(peopleArray){
    var newOccupations = [ ]
    for(var i = 1;  i < peopleArray.length;  i += 2) {
        newOccupations.push(peopleArray[i].occupation)
    }
    return newOccupations;
}
console.log(newNames(peopleArray))
console.log(newOccupations(peopleArray))

//Gold Medal
//#1  [0, 0, 0]   [0, 0, 0]   [0, 0, 0]
var firstArr = [];
// var secondArr = [];
for(var i = 0;   i < 3; i++){
    var secondArr = [];
    for (var j = 0;  j < 3;  j ++){
        secondArr.push(0);
    }
    firstArr.push(secondArr);
}
console.log(firstArr)


// //#2   [0, 0, 0]   [1, 1, 1]   [2, 2, 2]
var firstArr = [ ];
// var secondArr = [ ];
for(var i = 0;  i  < 3;  i++)  {
    var secondArr = [ ];
    for(var j = 0;  j < 3; j++) {
        secondArr.push(i)
    }
    firstArr.push(secondArr)
}
console.log(firstArr)


// //#3  [0, 1, 2]   [0, 1, 2]    [0, 1, 2] 
var firstArr = [ ];
// var secondArr = [ ];
for(var i = 0;  i  < 3;  i++)  {
    var secondArr = [ ];
    for(var j = 0;  j < 3; j++) {
        secondArr.push(j)
    }
    firstArr.push(secondArr)
}
console.log(firstArr)

//GRID "X"
var grid = [ ]
// var secondArr = [ ];
for(var i = 0;  i  < 3;  i++)  {
    var secondArr = [ ];
    for(var j = 0;  j < 3; j++) {
        secondArr.push("x")
    }
    grid.push(secondArr)
}
console.log(grid)
