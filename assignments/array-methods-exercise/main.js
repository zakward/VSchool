var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

//#1
var newVegetables = vegetables.pop()
console.log(vegetables)

//#2
var newFruit = fruit.shift()
console.log(fruit)

//#3
var orangeIndex = fruit.indexOf("orange")
console.log(orangeIndex)

//#4
var newFruit = fruit.push("1")
console.log(fruit)

//#5
console.log(vegetables.length)

//#6
var newVegetables = vegetables.push("3")
console.log(vegetables)

//#7
var food = fruit.concat(vegetables)
console.log(food)

//#8
var newFood = food.splice(4, 2)
console.log(food)

//#9
var reverseFood = food.reverse()
console.log(reverseFood)

//#10
var joinedFood = reverseFood.join(",")
console.log(joinedFood)