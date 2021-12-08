



var newArray = [ ] //Array for final output
var people = ["Jon:", "Jacob:", "Jingle:", "Heimer:", "Schmidt:"]
var alphabet = "abcdefghijklmnopqrstuvwxyz" //beggining alphabet
function forception() {
    //people for loop
    for(var i = 0;  i < people.length; i++){
         // put the name of people into newPeople array one at a time
        newArray.push(people[i])
        // alphabet for loop 
        for(var j = 0;  j < alphabet.length;  j++){
             // put the first letter of the alphabet into the newPeople array one at a time     
            newArray.push(alphabet[j].toUpperCase())
        } 
    } return newArray
}

console.log(forception()) 