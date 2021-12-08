function fizzBuzz() {
    var subArray = [ ]
    var fizzCount = 0;
    var buzzCount = 0;
    var fizzBuzzCount = 0;
    for(var i = 1;  i <= 100;  i++ ) {
        if (i % 3 == 0 && i % 5 == 0) {   
            subArray.push("Fizz Buzz")
            fizzCount += 1
        }   else if (i % 3 == 0) {
            subArray.push("Fizz")
            buzzCount += 1
        }   else if (i % 5 == 0) {
            subArray.push("Buzz")
            fizzBuzzCount += 1
        }   else {
            subArray.push(i)
        }
        subArray.push(i)
    }
        console.log(subArray)
        var totalCount = {fizz: fizzCount, buzz: buzzCount, fizzbuzz: fizzBuzzCount }
        console.log(totalCount)
        // console.log("fizz: " + fizzCount)
        // console.log("buzz: " + buzzCount)
        // console.log("fizzBuzzCount: " + fizzBuzzCount)
    } 

    fizzBuzz()
  





