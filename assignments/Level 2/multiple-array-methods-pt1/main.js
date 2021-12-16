var peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]


// //1. Returns a list of everyone older than 18, which is
// 2. sorted alphabetically by last name, and where
// 3. each name and age is embedded in a string that looks like an HTML `<li>` element.


function sortedOfAge(arr) {
    let sortPeople = arr.sort((a,b) => {
        if (a.lastName < b.lastName) {
            return -1;
        } if (a.lastName > b.lastName) {
            return 1;
        } 
        return 0;
    })
    const newArr = sortPeople.reduce(function(final, people) {
        if(people.age >= 18) 
            final.push("<li>" + people.firstName +" " + people.lastName + " is " + people.age +"</li>" ) 
            return final
        //how to sort by lastname
     
    }, [ ]) 
    return newArr
}
console.log(sortedOfAge(peopleArray))

//EXTRA CREDIT
let newPeopleArray = [
    {
      firstName: "Bill",
      lastName: "Clinton",
      age: 75
    },
    {
      firstName: "Jon",
      lastName: "Malcovich",
      age: 45
    },
    {
      firstName: "Alex",
      lastName: "Connely",
      age: 25
    }      
  ]

const finalPeopleArray = newPeopleArray.concat(peopleArray)
console.log(finalPeopleArray)

function reSortAndReUse(arr) {
    let theYorAPeople = arr.reduce(function(final, people) {
        if(people.lastName.endsWith("y")) {
            final.push(people)
        } else if(people.lastName.endsWith("a")) {
            final.push(people)
        }   
        return final
    }, [ ]) 
    theYorAPeople.splice(1,1)
    return theYorAPeople.reverse()
}

console.log(reSortAndReUse(finalPeopleArray))