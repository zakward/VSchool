function fizzBuzz() {
    var subArray = [ ] // array to put all numbers and strings into
    var fizzCount = 0; // starting point for counter
    var buzzCount = 0; // starting point for counter
    var fizzBuzzCount = 0; // starting point for counter
    for(var i = 1;  i <= 100;  i++ ) {                   //for loop startin at 1 going to 100 by 1's
        if (i % 3 == 0 && i % 5 == 0) {             //if i is divided by 3 and divided by 5 with a remainder of 0 
            subArray.push("Fizz Buzz")              // push Fizz Buzz to the subArray every loop
            fizzBuzzCount += 1                         // add 1 to the total fizzBuzz count every loop

        }   else if (i % 3 == 0) {
            subArray.push("Fizz")               // push Fizz to the subArray every loop
            fizzCount += 1                          // add 1 to the total fizzBuzz count every loop

        }   else if (i % 5 == 0) {
            subArray.push("Buzz")               // push Fizz to the subArray every loop
            buzzCount += 1                      // add 1 to the total fizzBuzz count every loop

        }   else {
            subArray.push(i)                    // any number that does not meet the requirements of the above  conditions will push the number only to the subArray
        }
    }
        console.log(subArray)
        //total count of how many times Fizz, Buzz, and FizzBuzz occur
        var totalCount = {fizz: fizzCount, buzz: buzzCount, fizzbuzz: fizzBuzzCount }
        console.log(totalCount)
    } 

    fizzBuzz()