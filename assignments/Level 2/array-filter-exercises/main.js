
//#1
const numArr = [3, 6, 8, 2]
numResult = numArr.filter(arr => arr >= 5)
console.log(numResult)

//#2
evensOnly = numArr.filter(arr => arr % 2 == 0)
console.log(evensOnly)

//#3
const things = ["dog", "wolf", "by", "family", "eaten", "camping"]
fiveCharactersOrFewerOnly = things.filter(arr => arr.length <= 5)
console.log(fiveCharactersOrFewerOnly)

//#4
const actors = [
    { name: "Angelina Jolie", member: true, age: 80},
    { name: "Eric Jones", member: false, age: 2 },
    { name: "Paris Hilton", member: true, age: 5 },
    { name: "Kayne West", member: false, age: 16 },
    { name: "Bob Ziroll", member: true, age: 100 }
]
peopleWhoBelongToTheIlluminati = actors.filter(arr => arr.member == true)
console.log(peopleWhoBelongToTheIlluminati)
ofAge = actors.filter(arr => arr.age >=18)
console.log(ofAge)