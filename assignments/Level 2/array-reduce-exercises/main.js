const numArr = [1,2,3]
function total(arr) {
    testNumArr = arr.reduce(function(final, num){
        final += num
        return final
    })
    return testNumArr // had to set the reduce() to a variable so return value isn't stuck in the callback which makes undefined
}

//    function total(arr) {
//    return arr.reduce((final, num)=> {
//      final+=num 
//      return final
//     }
//    }
//    console.log(total(numArr))
   
console.log(total(numArr))  

const result = numArr.reduce(function(final, num) {
    final += num
    return final
})
console.log(result)  //returns 6

//#2
function stringConcat(arr) {
    newNumArry = arr.reduce(function(final, num) {
        final += num.toString()
        return final
    })
    return newNumArry  // had to set the reduce() to a variable so return value isn't stuck in the callback which makes undefined
}
console.log(stringConcat(numArr))

//#3
var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
]
function totalVote(arr) {
    const voteCount = voters.reduce(function(final, voter) {
        if(voter.voted) {
            final++
        }
        return final  
    }, 0)
    return voteCount // had to set the reduce() to a variable so return value isn't stuck in the callback which makes undefined
} 
console.log(totalVote(voters))

//#4
var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
]
function shoppingSpree(arr){
    const totalCost = arr.reduce(function(final, item) {
        final += item.price
        return final
    }, 0)
    return totalCost
}
console.log(shoppingSpree(wishlist))

//#5
var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
]

function flatten(arr) {
    const newArr = arr.reduce(function(final, current) {
        return final.concat(current)
    }, [ ] )
    return newArr
}
console.log(flatten(arrays))

//#6

var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
]
function voterResults(arr) {
    const results = arr.reduce(function(final, voter) {
        if(voter.age <= 25){
            final.numYoungPeople++
            if(voter.voted){
                final.numYoungVotes++
            }
        } else if(voter.age <= 35){
            final.numMidsPeople++
                if(voter.voted) {
                    final.numMidVotesPeople++
                }
        } else if(voter.age <=55) {
            final.numOldsPeople++
            if(voter.voted){
                final.numOldVotesPeople++
            }
        }
        return final
    }, { numYoungVotes: 0, numYoungPeople: 0, numMidVotesPeople: 0, numMidsPeople: 0, numOldVotesPeople: 0, numOldsPeople: 0 } )
    return results
}
console.log(voterResults(voters))

// reduce() gives you the ability to set what is returned  ex.. obj or arr
// map and filter will always return an array