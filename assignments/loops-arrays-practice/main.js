// // #1

// var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]
// count = 0;

// for(var i = 0; i< officeItems.length; i++) {
//     if(officeItems[i] === "computer") {
//         count++
//     }
// }
// console.log(count)

// #2

var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ]


// Optional Bonus #1 

// already completed in previous #2 

// Optional Bonus #2 

// for(var i = 0;  i  <  peopleWhoWantToSeeMadMaxFuryRoad.length;  i++) {
//     if(peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male") {
//         peopleWhoWantToSeeMadMaxFuryRoad[i].gender = "him"
//     } else if(peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female") {
//         peopleWhoWantToSeeMadMaxFuryRoad[i].gender = "her"
//         }        
    
//      if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18) {
//          console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough, don't let " + peopleWhoWantToSeeMadMaxFuryRoad[i].gender + " in!!")
//      } else if(peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18) {
//          console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough, don't let "+ peopleWhoWantToSeeMadMaxFuryRoad[i].gender + " in!!") 
//      }
//     }

    // Optional Bonus Challenge

    // [2, 5, 435, 4, 3] // "The light is on"
    // [1, 1, 1, 1, 3]   // "The light is on"
    // [9, 3, 4, 2]      // "The light is off"

  var randomNumbers = [2, 5, 435, 4, 3]
 
     function sumTotal(randomNumbers) {
      var sum = 0;
      for(var i = 0;  i < randomNumbers.length; i++) {
      sum += randomNumbers[i]
     } if (sum % 2 == 0) {
       console.log("Light is off!")
     } else {
       console.log("Light is on!")
     }
     return sum;
    }

    console.log(sumTotal(randomNumbers))
    
      



  


