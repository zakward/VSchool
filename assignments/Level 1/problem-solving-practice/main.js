//#1
function largest(arr) {   //takes an array of numbers and logs the largest number
    let largestNumber = [0]
    for(var i = 0;  i < arr.length;  i++) {
        if(arr[i] > largestNumber) {
            largestNumber = arr[i]
        }
    } console.log(largestNumber)
    
}

largest([3, 5, 2, 8, 1])  //test run
largest([17, 3, 7, 19,21]) //test run
largest([51, 71,15, 0, 18]) //test run

//#2
function lettersWithStrings(arr) {   //takes an array of letters and characters and returns any string that contains "!"
    let newArr = [ ]
    for(var i = 0;  i < arr.length; i++) {
        if(arr[i].includes("!")) {      //includes() is new   .includes() takes any arr and checks if any element includes a character or string
            newArr.push(arr[i])
        }
    } console.log(newArr)
}

lettersWithStrings(["#3", "$$$", "C%4!", "Hey!"], "!") //test

//#3
function isDivisible(num1, num2) {
    if(num1 % num2 == 0) {
        console.log(true)
    } else {
        console.log(false)
    }
}

isDivisible(4, 2)
isDivisible(9, 3)
isDivisible(15, 4)