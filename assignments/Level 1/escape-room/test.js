const readline = require("readline-sync");

/* Introduction Question */
const name = readline.question("What is your name? ");
        console.log("Hi " + name +"!");

let gamePlay= ["yes", "no"]

let choice = readline.keyInSelect(gamePlay, "Do you want to play a game!!?");

if (gamePlay[choice] == "yes") {
    console.log("GREAT!! Here's the situation... you are locked in a room.  In order to escape the room, you need to find they key and open the door.  There is also a hole in the wall in the room.  If you put your hand in the hole... you DIE!!!")

}       else if (gamePlay[choice] == "no") {
                console.log("Too Bad!!  GOODBYE!")
                process.exit()

}

/* First Move */

var doNothingCount = 0;
var isAlive= true;        

let response = ["Do nothing!", "Put your hand in the hole", "Open the Door", "Find the key!",]
let keyResponse = ["Look behind the picture", "Look on the table", "Look under the rug", "Give Up"]
let hasKey= false;
function toggle() {
    hasKey = !hasKey;
}



function openDoor() {
        console.log("YOU WIN!")
        process.exit()
    }
  
    while (isAlive) {

        let firstMove =readline.keyInSelect(response, "What is your move!? ");

                  if (response[firstMove] == "Do nothing!") {
                                                console.log("You must make a move!!");
                                                doNothingCount += 1;
                    }                           if (doNothingCount >=3) {
                                                console.log('GAME OVER YOU DIED!!!')
                                                process.exit()
                   }                                                   
                    else if (response[firstMove] == "Put your hand in the hole") {
                                                console.log("I said NO!!!  GAME OVER YOU DIED!!")
                                                process.exit()
                                        }    
                    else if (firstMove == -1) {
                                              console.log("exit")
                                              process.exit()
                    }
                    else if (response[firstMove] == "Open the Door") {
                                                console.log("You have chosen to open the door!!")                                                   
                                                if(hasKey==true) {
                                                    console.log("CONGRATULATIONS!! You have opend the door and escaped the room!!")
                                                    openDoor()
                                                }  else {
                                                        console.log("The door is locked!! You must find the key!!")
                                                }   

                    } else if(response[firstMove]=="Find the key!"){
                                            let keyQuestion= readline.keyInSelect(keyResponse, "Where do you want to look!!?");
                                                                    if(keyResponse[keyQuestion]== "Look under the rug") {
                                                                        console.log("You found the key!!")
                                                                        toggle()
                                                                    }      
                                                                                 
                                                                    if(keyResponse[keyQuestion]== "Look behind the picture")  {
                                                                                    console.log("You did not find the key.. KEEP LOOKING!!")
                                                                    }  

                                                                    if(keyResponse[keyQuestion]== "Look on the table")  {
                                                                        console.log("You did not find the key.. KEEP LOOKING!!")
                                                                    }                                               

                                                                     if(keyResponse[keyQuestion] == "Give Up") {
                                                                         console.log("You have decided to be a quitter...GAME OVER")
                                                                         process.exit()
                                                                     }              

                                                                }
                   
            }