
function attack() {
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
        
        } if (activePlayer.health <= 0) {
            console.log("You were killed in battle!!")
            isAlive = !isAlive
            process.exit()
        }
}


