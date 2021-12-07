const readline = require("readline-sync");
console.log("You have met a fellow traveler on the road!")
console.log("The traveler wants to play a game a chance with you!  The rules are simple...")
console.log("You will both roll a die...whoever rolls the higher number wins")
console.log("If you win.. a special item will be added to your inventory...If you lose..you will lose 10 health points!!!" )

function diceGame() {
    let isPlaying = true;
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
    const specialItems = ["The sword of Gandolf the Great", "The ring of MORDOR", "Free Beer Ticket at the Ale House"]
    let randomSpecialItem = specialItems[Math.floor(Math.random() * specialItems.length)]

           //START GAME
           while (isPlaying){
               console.log("Let's ROLL!")
               rollDice = ["ROLL", "Quit Playing"]
               let playerRoll = getRandomInt(6)
               let travelerRoll = getRandomInt(6)
               const readyToRoll = readline.keyInSelect(rollDice, "Select 'Roll' when you are ready!!")
               if(rollDice[readyToRoll] === "ROLL") {
                   console.log("You have rolled a " + playerRoll)
                   console.log("The traveler rolled a " + travelerRoll)
                   
                                    if(playerRoll > travelerRoll) {
                                    console.log("YOU WIN!!!")
                                    console.log("You received the " + randomSpecialItem)
                                        // activePlayer.inventory.push(randomSpecialItem)
                                        
                                    } else if(travelerRoll > playerRoll) {
                                        console.log("YOU LOST")
                                        console.log("10 health points were removed from your total")
                                        // activePlayer.health -= 10;
                                        //     if(activePlayer.health <= 0) {
                                        //         console.log("The results from gambling can be catastrophic!!  You have no more health points!  GAME OVER")
                                        //         process.exit()
                                        //     }
                                            
                                    } else if (playerRoll === travelerRoll) {
                                        console.log("YOU TIED and must re roll!")
                                    }       

                }  else if(rollDice[readyToRoll] === "Quit Playing") {
                     isPlaying = false
                }
       
    }
}

diceGame()