const readline = require("readline-sync");
//Introduction Player choice
let playerName = ["Luigi", "Mario"]
let namePicked = readline.keyInSelect(playerName)

//Player starting status is small
let playerStatus = ["Small", "Big", "Powered Up", "Dead"]

// /Player class construction function
class Player {
    constructor(namePicked) {
        this.name = namePicked
        this.totalCoins = 0
        this.status = playerStatus[0]
    }
//setName function
setName(namePicked) {
    this.name = namePicked
}
 //gotHit function
 gotHit()  {
    // if hit status goes from Powered Up to Big to Small to Dead
    if (this.hasStar === true) {
        console.log("The star protected you!")
        this.hasStar = false
    }
    if (this.status === "Powered Up") {
        this.status = playerStatus[1]
    } else if (this.status === "Big") {
        this.status = playerStatus[0]
    } else if (this.status === "Small") {
        this.status = playerStatus[3]
    } 
}
//powerUp function    
gotPowerup() {
    //if powerup is received and sets the status from Small to Big to Powered Up... if Powered Up when gotPowerup() you get a star
    if (this.status === "Small") {
        this.status = playerStatus[1]
    } else if (this.status === "Big") {
        this.status = playerStatus[2]
    } else if (this.status === "Powered Up") {
        this.hasStar = true;
        console.log("You received a star!!")
    }
}
 //Add Coin Function
 addCoin(){
        this.totalCoins++
         } 

print() {
    console.log("Name: " + this.name)
    console.log("Status: " + this.status)
    console.log("Total Coins: " + this.totalCoins)
    if (this.hasStar === true) {
        console.log("You have a star!")
    }
}         
}

//create player
const gameOn = ( ) => {
    const player1= new Player();
    player1.setName(playerName[namePicked])

            const gameInterval = setInterval(() => {
                let gameActive = true;
                let numRandom = Math.floor(Math.random() * (2 - 0 + 1));
          
                if( numRandom === 0) {
                    player1.gotHit()

                } else if ( numRandom === 1) {
                    player1.gotPowerup()

                } else if ( numRandom === 2) {
                   player1.addCoin()

                } if (player1.status === "Dead") {
                    clearInterval(gameInterval)
                    console.log("Game Over... You are less than small... you are DEAD")
                    gameActive = false
                }

                console.log(numRandom)
                player1.print()

            }, 1000)
        }


//EXECUTE GAME MODE! 
gameOn() 
