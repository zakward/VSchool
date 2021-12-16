//#1
const numArr = [1, 3, 5, 2, 90, 20]
function leastToGreatest(arr) {
    return arr.sort((a,b) => a - b)
}
console.log(leastToGreatest(numArr))

//#2
function greatestToLeast(arr) {
    return arr.sort((a, b) => b -a)
}
console.log(greatestToLeast(numArr))

//#3
const string = ["dog", "wolf", "by", "family", "eaten"]
function lengthSort(arr) {
    return arr.sort((a, b) => a.length - b.length)
}
console.log(lengthSort(string))

//#4
function alphabetical(arr) {
    return arr.sort()  //weird no parameters
}
console.log(alphabetical(string))

//#5
const users = [
    { name: "Quiet Samurai", age: 22 },
    { name: "Arrogant Ambassador", age: 100 },
    { name: "Misunderstood Observer", age: 2 },
    { name: "Unlucky Swami", age: 77 }
]
function byAge(arr) {
  return  arr.sort((a, b) => a.age - b.age)
}
console.log(byAge(users))