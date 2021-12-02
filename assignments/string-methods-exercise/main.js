//#1
var daughter = "addy grace"
var hogs = "arkansas razorbacks"
var Hello = "Hello"
var HelloWorld = "Hello World"
function capitalizeAndLowerCase(parameter) {
return parameter.toUpperCase() + " " + parameter.toLowerCase()
}
console.log(capitalizeAndLowerCase(daughter))

//#2
function findMiddleIndex(parameter) {
var totalIndex = parameter.replace(" ", "").length
return Math.floor(totalIndex / 2)
}
console.log(findMiddleIndex(hogs))

//#3
function returnFirstHalf(parameter) {
    var totalIndex = parameter.replace(" ", "").length
    var middleIndex =Math.floor(totalIndex / 2)
    return parameter.slice(0, middleIndex)
}
console.log(returnFirstHalf(hogs))
console.log(returnFirstHalf(daughter))
console.log(returnFirstHalf(Hello))

//#4
function newCapitalizeAndLowerCase(parameter) {
    var totalIndex = parameter.replace(" ", "").length
    var middleIndex =Math.floor(totalIndex / 2)
    var firstHalfParameter = parameter.slice(0, middleIndex)
    var secondHalfParameter = parameter.slice(middleIndex)
    return firstHalfParameter.toUpperCase() + secondHalfParameter.toLowerCase()
}
console.log(newCapitalizeAndLowerCase(hogs))
console.log(newCapitalizeAndLowerCase(daughter))
console.log(newCapitalizeAndLowerCase(Hello))
console.log(newCapitalizeAndLowerCase(HelloWorld))

//BONUS
function capitalize(parameter) {
    var splitParameter = parameter.split(" ")
    for(i = 0; i< splitParameter.length; i ++){
        splitParameter[i] = splitParameter[i][0].toUpperCase() + splitParameter[i].substr(1)
    }
    newParameter = splitParameter.join(" ")
    return newParameter
}
console.log(capitalize(hogs))
console.log(capitalize(daughter))
console.log(capitalize(Hello))
console.log(capitalize(HelloWorld))