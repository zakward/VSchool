var newArray = [ ] //Array for final output
function forception(people, alphabet) {
    var people = ["Jon:", "Jacob:", "Jingle:", "Heimer:", "Schmidt:"]
    var reversePeople = people.reverse()
    for(var i = 0;  i < people.length; i++){
         // put the name of people into newPeople array one at a time
        newArray.unshift(reversePeople[i])
        

        for(var j = 0;  j < 1;  j++){
             // put the first letter of the alphabet into the newPeople array one at a time     
            var alphabet = "abcdefghijklmnopqrstuvwxyz" //beggining alphabet
            var newAlphabet = alphabet.toUpperCase().split("") //final alphabet with split letters
            // reverseAlphabet = newAlphabet.reverse()
            newArray.push(newAlphabet)
        } console.log(newArray)
} return newArray

}

forception()

