localStorage.setItem("name", "steve")
localStorage.setItem("age", 10)
localStorage.setItem("isAlive", true)
localStorage.setItem("friends", JSON.stringify(["mark", "tina", "jay"]))
localStorage.setItem("address", JSON.stringify({street: "123 Street", city: "SLC"}))

// const name = localStorage.getItem("name")
// console.log(name)
const friends = JSON.parse(localStorage.getItem("friends"))
console.log(typeof friends)
console.log(friends)

const address = JSON.parse(localStorage.getItem("address"))
console.log(address)


var display = document.getElementById('time-display');

function getTime(){
    var now = new Date();
    var hour = now.getHours();
    var min = now.getMinutes();
    var sec = now.getSeconds();
    if(hour < 10){
        hour = `0${hour}`;
    }
    if(min < 10){
        min = `0${min}`;
    }
    if(sec < 10){
        sec = `0${sec}`;
    }
    display.textContent = `${hour}:${min}:${sec}`}

setInterval(getTime, 1000)
