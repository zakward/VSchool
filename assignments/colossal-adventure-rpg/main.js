const readline = require("readline-sync");
let isAlive = true;
//START GAME FUNCTION
let startGame = () => {
    console.log(`What's up ${name}!!`)
    console.log(`Welcome to Atropia!!  A fictional landscape that stretches between the real-world borders of Russia and Iran.`)
    console.log(`Feel free to explore along the way..BUT BE AWARE... it can be dangerous!!`)
    console.log("You currently have 50 health points.  Enemies have at least 10 health points.")
    console.log(`There is a cabin and an Ale House not too far from here.. You should go get settled!`)
};
const allEnemies = ["Giant Ogre", "Gruffalo", "Atropian Special Agent"]
const treasure = ["gold necklace", "flux capacitor", "taco bell gift card", "certificate of achievement"]
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

const name = readline.question("Hey! Welcome to the COLOSSAL ADVENTURE RPG!!! What's your name? ");
function Enemy(enemyName, enemyHealth, treasure) {
    this.enemyName = enemyName
    this.enemyHealth = enemyHealth
    this.treasure = treasure
}
function Player() {    
    this.playerName = name
    this.health = 50
    this.inventory = [ ] // multiple items could be added to object
}

let activePlayer = new Player();
let drinkCount = 0;
//BATTLE FUNCTION
function battleFunction() {
    const randomEnemyName = allEnemies[Math.floor(Math.random() * allEnemies.length)]
    const randomTreasure = treasure[Math.floor(Math.random() * treasure.length)]
    let activeEnemy = new Enemy(randomEnemyName, 10, randomTreasure)
    console.log("The " + activeEnemy.enemyName+ " has attacked!!")
    let isFighting = true
    attackRun = ["attack", "run"]

        while(isFighting) {
            let fightOrFlight = readline.keyInSelect(attackRun, 'Do you want to attack back or run for safety!')
            if (attackRun[fightOrFlight] === "attack") {
                activeEnemy.enemyHealth -= getRandomInt(10)

                     if (activeEnemy.enemyHealth <= 0) {
                    console.log("Congratulations! You have killed the " + activeEnemy.enemyName + "!")
                    activePlayer.health += 2;
                    activePlayer.inventory.push(activeEnemy.treasure)
                    console.log("You have been awarded a " + activeEnemy.treasure + " for your efforts!!")
                    isFighting = !isFighting

                     } if (activeEnemy.enemyHealth > 0) {
                        console.log(activeEnemy.enemyName + " now has " + activeEnemy.enemyHealth + " health") 
                    

                    } if (activePlayer.health > 0) {
                        activePlayer.health -= getRandomInt(10)
                        console.log("You have decided to fight back however, you were also injured in battle.  Your health is now at " + activePlayer.health)

                    }if (activePlayer.health <= 0) {
                         console.log("You were killed in battle!!")
                         isAlive = !isAlive
                         process.exit()
                     }
                     
        } else if (attackRun[fightOrFlight] === "run"){
            console.log("You have decided to run for safety!!!")
            //50% chance of escaping
            const escapeChance = Math.random()
                if (escapeChance <= .5) {
                    console.log("WOW!!! " +  name +", consider yourself lucky.  Not many can outrun the creatures of Atropia!! YOU ARE SAFE...for now")
                    return

                }   else if (escapeChance <=1) {
                    console.log(activePlayer.playerName+ " was a brave soul.. unfortunately could not run fast enough and was eaten.   Memorial services will be held soon.")
                    console.log("GAME OVER")
                    process.exit()
                }
        }
 }
}
//DICE GAME FUNCTION
function diceGame() {
    let isPlaying = true;
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
           //START GAME
           while (isPlaying){
            const specialItems = ["The sword of Gandolf the Great", "The ring of MORDOR", "Free Beer Ticket to the Ale House"]
            let randomSpecialItem = specialItems[Math.floor(Math.random() * specialItems.length)]
            console.log("Let's ROLL!")
            rollDice = ["ROLL", "Quit Playing"]
            let playerRoll = getRandomInt(6)
            let travelerRoll = getRandomInt(6)
            const readyToRoll = readline.keyInSelect(rollDice, "Select 'Roll' when you are ready!!")
            if (rollDice[readyToRoll] === "ROLL") {
                console.log("You have rolled a " + playerRoll)
                console.log("The traveler rolled a " + travelerRoll)
                
                                 if (playerRoll > travelerRoll) {
                                 console.log("YOU WIN!!!")
                                 console.log("You received the " + randomSpecialItem)
                                     activePlayer.inventory.push(randomSpecialItem)
                                     
                                 } else if(travelerRoll > playerRoll) {
                                     console.log("YOU LOST")
                                     console.log("10 health points were removed from your total")
                                     activePlayer.health -= 10;
                                         if (activePlayer.health <= 0) {
                                             console.log("The results from gambling can be catastrophic!!  You have no more health points!  GAME OVER")
                                             process.exit()
                                         }
                                         
                                 } else if (playerRoll === travelerRoll) {
                                     console.log("YOU TIED and must re roll!")
                                 }       

             }  else if (rollDice[readyToRoll] === "Quit Playing") {
                  isPlaying = false
             }
    
 }
}

startGame()
while(isAlive) {
    var keyInOption = readline.keyIn('What would you like to do!?  "w" =  walk, "p" = profile, "h" = help, "q" = quit',
    {hideEchoBack: true, mask: '', limit: 'whqp '});
    
    if (keyInOption === 'p'){
    console.log(activePlayer)

    }    if (keyInOption == 'h'){
        console.log("HELP HELP HELP")
        console.log("You must press 'w' to walk around!!")
        console.log("You can press 'p' to view your player profile.  Remember you start with 50 health points but that can go up or down depending on what you choose to do! Enemies start with 10 health points, but there are MANY!!!")
        console.log("Pressing 'q' will end the current game")
        console.log("CHOOSE WISELY")

    }   else if (keyInOption == 'q'){
        console.log(`You have ended the game!`)
        process.exit()

    }   else if (keyInOption == 'w'){
            console.log("Great you have decided to walk around Atropia!!!")
                    const attackChance = Math.random() 
        
                //AN ENEMY APPEARS
                    if (attackChance <= .3333) {
                            battleFunction()

                    }    else if (attackChance <= .50) {
                                console.log("You have met a fellow traveler on the road!")
                                console.log("The traveler wants to play a game a chance with you!  The rules are simple...")
                                console.log("You will both roll a die...whoever rolls the higher number wins")
                                console.log("If you win.. a special item will be added to your inventory...If you lose..you will lose 10 health points!!!" )

                                 if(readline.keyInYN("Would you like to play?")) {
                                        diceGame()
                        }
                        
                    }   else if (attackChance <= 1) {
                        console.log("You have stumbled across the Ale House!!  Lucky You!!!")
                            if(readline.keyInYN("Would you like to stop for a drink?")) {
                                console.log("Alcohol....because no great story ever started with eating a salad!!")
                                drinkCount += 1
                                if (drinkCount > 2) {
                                    console.log("IT IS SO SAD!!  You have died from alcohol poisoning!!!")
                                    process.exit()
                            }
                        }                             
                    }
            }
}

