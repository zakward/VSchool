//1: declare xhr as a variable 
const xhr = new XMLHttpRequest()

//2: open and send request to the URL
xhr.open("GET", "https://api.vschool.io/pokemon/", true)
xhr.send()

//3: write the onreadystatechange function
xhr.onreadystatechange = function() {
    if(xhr.readyState === 4 && xhr.status === 200) {
        const JSONdata = xhr.responseText  // receive the xhr as responseText ("JSON")
        const data = JSON.parse(JSONdata) // parse the data and save it as a new variable ("JS")
        console.log(data.objects[0].pokemon.map(pokemon => pokemon.name)) // trying to console.log just the pokemon
        showData(data.objects[0].pokemon) // use bracket notation when accessing an array with a number notation
        
    }
}

//4: write function to show the data in an HTML doc
function showData(arr) {
    for(let i = 0; i < arr.length; i++) {  //use for loop to loop through the data
        const h1 = document.createElement("h1")
        h1.textContent = arr[i].name
        document.body.appendChild(h1)
    }
}