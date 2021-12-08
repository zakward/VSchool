var daughter = "addy grace"
var hogs = "arkansas razorbacks"
var Hello = "Hello"
var HelloWorld = "Hello World"
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