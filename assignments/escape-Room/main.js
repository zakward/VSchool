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



let findKey= false;
let dead = false;
var doNothingCount = 0;
function openDoor() {
    console.log("YOU WIN!")
    process.exit()
}
// let keyResponse = ["Look under the rug", "Look behind the picture", "Look on the table", "Give Up"]

while (!dead && !findKey) {
    let response = ["Do nothing!", "Put your hand in the hole", "Open the Door", "Find the key!", ]
    const firstMove =readline.keyInSelect(response, "What is your move!? ");

                    if (response[firstMove] == "Do nothing!") {
                            console.log("You must make a move!!");
                            doNothingCount += 1;

                                    if (doNothingCount >=3) {
                                        dead = true;
                                        console.log('GAME OVER YOU DIED!!!')      
                                        process.exit()   
                                    }
                                    
                }   else if (response[firstMove] == "Put your hand in the hole") {
                            dead = true;
                            console.log("I said NO!!!  GAME OVER YOU DIED!!")
                            process.exit()
           
                       
                }   if (firstMove == -1) {
                            console.log("exit")
                            process.exit()
                             
                        
                 }     else if (response[firstMove] == "Find the key!") {
                            findKey = !findKey
                            console.log("CONGRATULATIONS!! You have opend the door and escaped the room!!")
                            openDoor()
                        }

                    else if (response[firstMove] == "Open the Door") {
                            console.log("The door is locked.. You must find the key!")
                    }
                }
    
